// LIBRARIES
import _ from 'lodash';
import {Button, Card, Grid, Icon, TextField, Typography} from '@material-ui/core';
import history from "../../history";
import LoginModal from '../modal/LoginModal';
import queryString from 'query-string';
import SuccessModal from '../modal/SuccessModal';
import NumberFormat from 'react-number-format';
import React, {useContext, useState, useEffect} from 'react';
import UserProvider from "../../contexts/UserProvider";

// IMAGES

import bitcoinLogo from '../../res/bitcoinLogo.svg'

//FETCH HOOK

import {useGetHttpRequest} from '../../contexts/hooks/getHttpRequest';
import {PostHttpRequest} from '../../contexts/hooks/postHttpRequest';


const style = {
  button: {
    marginTop: 20,
    background: '#FFFFFF',
    color: '#312D5C',
    borderRadius: 0
  },
  input: {textAlign: "right"},
  moduloCompraTitle: {
    fontSize: '25px',
    color: '#FFFFFF',
    fontWeight: 600,
    lineHeight: '17px',
    textAlign: 'center',
    paddingBottom: '15px'
  },
  moduloCompraSubtitle: {
    color: '#FFFFFF',
    fontSize: '15px',
    fontWeight: 300,
    lineHeight: '15px',
    textAlign: 'center',
    paddingBottom: '30px',
    paddingTop: '0'
  },
  currencyBox: {
    paddingLeft: '10px'
  },
  currencyTitle: {
    color: '#FFFFFF',
    fontSize: '30px',
    fontWeight: 400,
    letterSpacing: '0.71px',
    lineHeight: '24px',
    textAlign: 'left',
    paddingTop:'0',
    paddingBottom: '10px'
  },
  currencySubtitle: {
    color: '#FFFFFF',
    fontSize: '15px',
    fontWeight: 300,
    letterSpacing: '0.29px',
    lineHeight: '15px',
    textAlign: 'left',
    paddingTop:'0',
    paddingBottom: '0'
  },
  currencyChevron: {
    fontSize: '0.8rem',
    paddingBottom: '3px',
    color: '#FFFFFF',
  }
}

const ModuloCompra = props => {

  const [isGetLoading, getData] = useGetHttpRequest('/btcvalue', []);
  const [loginModal, setLoginModal] = useState(false);
  const [successModal, setSuccessModal] = useState(false);
  const [arsQty, setArsQty] = useState('');
  const user = useContext(UserProvider.context);  

  let btcValue = []



  if (getData) {
    let bittexValue = getData.body.attributes.ask;
    btcValue = (bittexValue*0.0225) + bittexValue;
  }


  const arsValueFormat = btcValue.toLocaleString(undefined, {maximumFractionDigits:2});
  const btcQty = parseFloat(arsQty/btcValue).toFixed(8);

  const parseUrl = queryString.parse(props.location.search);

  useEffect(() => {
    if(localStorage.getItem('arsQty')) {
      setArsQty(localStorage.getItem('arsQty'));
      localStorage.removeItem('arsQty');
    }
  }, [])


  useEffect(() => {
    if(parseUrl.success) {
      setSuccessModal( s => !s)
    }
  }, [parseUrl.success])

  // const NumberFormatCustom = props => {
  //   const {inputRef, onChange, ...other} = props;
  //   return (
  //     <NumberFormat
  //       {...other}
  //       getInputRef={inputRef}
  //       onValueChange={values => {
  //         onChange({
  //           target: {
  //             value: values.value,
  //           }
  //         });
  //       }}
  //       thousandSeparator
  //       isNumericString
  //     />
  //   );
  // }

  const handleClose = () => {
    setSuccessModal(!successModal)
    return history.push('/');
  }

  const handleSubmit = e => {
    e.preventDefault();
    if(_.isEmpty(user)) {
      setLoginModal(!loginModal)
    } else {
      PostHttpRequest('POST', '/operation', {
        operationType: 'buy',
        btcValue: btcValue,
        btcQty: btcQty,
        arsQty: arsQty,
        userId: user.userId
      }, '?success=true');
    };
  }

  return (
    <div>
      <Card className="card-container">
        <div style={{ background: '#312D5C', paddingTop: '20px'}}>
        <Typography style={style.moduloCompraTitle}>Comprá tus Bitcoins</Typography>
        <Typography style={style.moduloCompraSubtitle}>Ingresa la cantidad de pesos que queres cambiar.</Typography>
        </div>
        <form onSubmit={handleSubmit}>
          <div style={{ background: '#312D5C', paddingBottom: '20px', paddingRight:'15px'}}>
          <Grid container>

            <Grid item xs={5} container>
              <Grid item xs={8} style={style.currencyBox}>
                <Typography className="money" style={style.currencyTitle}>ARS<Icon className="money-icon fas fa-chevron-down" style={style.currencyChevron}/></Typography>
                <Typography className="money-subtitle" style={style.currencySubtitle}>Pesos Argentinos</Typography>
              </Grid>
            </Grid>

            <Grid item xs={7} className="money-input">
              <TextField
                id="formatted-numberformat-input"
                placeholder={arsValueFormat.toString(2)}
                label="Cuánto tenes que pagar"
                InputLabelProps={{
                  shrink: true
                }}
                value={arsQty}
                onChange={(e)=>{setArsQty(e.target.value)}}
                // InputProps={{
                //   inputComponent: NumberFormatCustom
                // }}
              />
            </Grid>

          </Grid>

          <div className="line-2"/>

          <Grid container>
            <Grid item xs={5} container>
              <Grid item xs={8} style={style.currencyBox}>
                <Typography className="money" style={style.currencyTitle}>BTC<Icon className="money-icon fas fa-chevron-down" style={style.currencyChevron}/></Typography>
                <Typography className="money-subtitle" style={style.currencySubtitle}>Bitcoin</Typography>
              </Grid>
            </Grid>
            <Grid item xs={7} className="money-input">
              <TextField
                disabled={true}
                id="money-input-bitcoin"
                label="Cuánto vas a comprar"
                type="currency"
                placeholder={(arsQty) ?  btcQty.toString(2) : '1'}
                fullWidth
                InputLabelProps={{
                    shrink: true
                }}
                inputProps={{
                  style: style.input
                }}
              />
            </Grid>
          </Grid>
          </div>
          <Grid container direction="row" justify="center" alignItems="center">
            <Grid item xs={9}>
              <Button
                type="submit"
                disabled={(!arsQty)}
                fullWidth
                variant="contained"
                color="primary"
                style={style.button}
              >
                <img src={bitcoinLogo} alt="bitcoinLogo" style={{marginRight: '20px'}}/>
                Comprar Bitcoins
              </Button>
            </Grid>
          </Grid>
        </form>
      </Card>
      <LoginModal open={loginModal} close={handleSubmit} arsQty={arsQty}/>
      <SuccessModal open={successModal} close={handleClose} arsQty={arsQty}/>
    </div>
  );
};

export default ModuloCompra;

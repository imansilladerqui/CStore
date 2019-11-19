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

import arsLogo from "../../res/ars.png";
import bitcoinLogo from "../../res/bitcoin.png";
import padlock from "../../res/padlock.png";
import ssl from "../../res/ssl.png";

//FETCH HOOK

import {useGetHttpRequest} from '../../contexts/hooks/getHttpRequest';
import {PostHttpRequest} from '../../contexts/hooks/postHttpRequest';

const style = {
  button: {marginTop: 20},
  input: {textAlign: "right"},
  moduloCompraTitle: {
    fontSize: '25px',
    color: '#212B36',
    fontWeight: 600,
    lineHeight: '17px',
    textAlign: 'center',
    marginBottom: '15px'
  },
  moduloCompraSubtitle: {
    color: '#637381',
    fontSize: '15px',
    fontWeight: 300,
    lineHeight: '11px',
    textAlign: 'center',
    marginBottom: '50px',
    marginTop: '0'
  },
  currencyBox: {
    paddingLeft: '20px'
  },
  currencyTitle: {
    color: '#343537',
    fontSize: '30px',
    fontWeight: 400,
    letterSpacing: '0.71px',
    lineHeight: '24px',
    textAlign: 'left',
    marginTop:'0',
    marginBottom: '10px'
  },
  currencySubtitle: {
    color: '#343537',
    fontSize: '15px',
    fontWeight: 300,
    letterSpacing: '0.29px',
    lineHeight: '10px',
    textAlign: 'left',
    marginTop:'0',
    marginBottom: '0'
  },
  currencyChevron: {
    fontSize: '0.8rem',
    marginLeft: '10px',
    marginBottom: '3px',
    color: '#343537',
  },
  paddlock: {
    color: '#637381',
    fontSize: '13px',
    fontWeight: 600,
    lineHeight: '11px',
    textAlign: 'right',
    marginRight: '10px'
  },
  ssl: {
    marginLeft: '20px'
  }
}

const ModuloCompra = props => {

  const [isGetLoading, getData] = useGetHttpRequest('https://ripio.com/api/v1/rates/', []);
  const [loginModal, setLoginModal] = useState(false);
  const [successModal, setSuccessModal] = useState(false);
  const [arsQty, setArsQty] = useState('');
  const user = useContext(UserProvider.context);

  const btcValue = getData ? getData.rates.ARS_BUY : []

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
    <Grid item xs={12} md={6} style={{
      position: 'relative'
    }}>
      <div className="square" style={{
        background: '#9DACB9'
      }}/>
      <Card className="card-container" style={{
        position: 'relative',
        zIndex: 1
      }}>
        <Typography className="modulo-compra-title" style={style.moduloCompraTitle}>Comprá tus Bitcoins</Typography>
        <Typography className="modulo-compra-subtitle" style={style.moduloCompraSubtitle}>Ingresa la cantidad de pesos que queres cambiar.</Typography>
        <form onSubmit={handleSubmit}>
          <Grid container>
            <Grid item xs={6} container>
              <Grid item xs={4}>
                <img src={arsLogo} alt="argentina"/>
              </Grid>
              <Grid item xs={8} style={style.currencyBox}>
                <Typography className="money" style={style.currencyTitle}>ARS<Icon className="money-icon fas fa-chevron-down" style={style.currencyChevron}/></Typography>
                <Typography className="money-subtitle" style={style.currencySubtitle}>Pesos Argentinos</Typography>
              </Grid>
            </Grid>
            <Grid item xs={6} className="money-input">
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
            <Grid item xs={6} container>
              <Grid item xs={4}>
                <img src={bitcoinLogo} alt="argentina"/>
              </Grid>
              <Grid item xs={8} style={style.currencyBox}>
                <Typography className="money" style={style.currencyTitle}>BTC<Icon className="money-icon fas fa-chevron-down" style={style.currencyChevron}/></Typography>
                <Typography className="money-subtitle" style={style.currencySubtitle}>Bitcoin</Typography>
              </Grid>
            </Grid>
            <Grid item xs={6} className="money-input">
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
          <Grid container direction="row" justify="center" alignItems="center">
            <Grid item xs={6}>
              <Button
                type="submit"
                disabled={(!arsQty)}
                fullWidth
                variant="contained"
                color="primary"
                style={style.button}
              >
                Comprar
              </Button>
            </Grid>
          </Grid>
        </form>
        <Grid container className="security-section">
          <Grid item xs={6}>
            <Typography className="paddlock" style={style.paddlock}>
              <img src={padlock} alt="padlock"/>
              Módulo Seguro
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography className="ssl" style={style.ssl}>
              <img src={ssl} alt="ssl"/>
            </Typography>
          </Grid>
        </Grid>
      </Card>
      <LoginModal open={loginModal} close={handleSubmit} arsQty={arsQty}/>
      <SuccessModal open={successModal} close={handleClose} arsQty={arsQty}/>
     </Grid>
  );
};

export default ModuloCompra;

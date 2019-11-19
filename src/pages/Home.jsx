import React, {useContext} from 'react';
import {Grid, Typography} from '@material-ui/core';
import ModuloCompra from '../components/moduloCompra';
import UserProvider from '../contexts/UserProvider';

const style = {
    title: {
      fontSize: '45px',
      color: '#FFFFFF',
      fontWeight: 600,
      lineHeight: '45px',
      textAlign: 'left',
      marginBottom: '50px'
    },
    subTitle: {
      color: '#FFFFFF',
      fontSize: '20px',
      fontWeight: 300,
      lineHeight: '23px',
      textAlign: 'left',
      marginBottom: '50px',
      marginTop: '0'
    }
  }

const Home = (props) => {
    const userData = useContext(UserProvider.context);
    return (
        <div>
            <Grid container className="homepage background-2">
                <Grid item xs={12} lg={4} container justify="center" direction="column" alignItems="center" style={{paddingLeft: '5%'}}>
                    <Typography style={style.title}>
                        Compra tus bitcoins de forma segura
                    </Typography>
                    <Typography style={style.subTitle}>
                        Cambia tus pesos por bitcoins de una manera rapida, facil y retiralos por nuestro local. <br/> Podemos depositarlos en tu billetera virtual o te daremos un dispositivo que contendra los Bitcoins que compraste.
                    </Typography>
                </Grid>
                <Grid item xs={12} lg={8} container justify="center" direction="row" alignItems="center">
                    <ModuloCompra user={userData} {...props} />
                </Grid>
            </Grid>
        </div>
        
    );
};

export default Home;
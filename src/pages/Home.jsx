import React, {useContext} from 'react';
import {Grid, Hidden, Typography} from '@material-ui/core';
import ModuloCompra from '../components/moduloCompra';
import UserProvider from '../contexts/UserProvider';
import homeImg from '../res/home.png';

const style = {
    title: {
      fontSize: '35px',
      color: '#FFFFFF',
      fontWeight: 600,
      lineHeight: '45px',
      textAlign: 'left',
      marginBottom: '30px'
    },
    subTitle: {
      color: '#FFFFFF',
      fontSize: '15px',
      fontWeight: 300,
      lineHeight: '23px',
      textAlign: 'left',
      marginBottom: '30px',
      marginTop: '0'
    }
  }

const Home = (props) => {
    const userData = useContext(UserProvider.context);
    return (
        <div>
            <Grid container className="homepage backgroundHome">
                <Grid item xs={12} lg={6} container justify="center" direction="column" alignItems="center" style={{paddingLeft: '5%', paddingRight: '5%', marginTop: '4%'}}>
                    <Typography style={style.title}>
                        Compra tus bitcoins de forma segura
                    </Typography>
                    <Typography style={style.subTitle}>
                        Cambia tus pesos por bitcoins de una manera rapida, facil y retiralos por nuestro local. <br/> Podemos depositarlos en tu billetera virtual o te daremos un dispositivo que contendra los Bitcoins que compraste.
                    </Typography>
                    <ModuloCompra user={userData} {...props} />
                </Grid>
                <Hidden only={['xs', 'sm', 'md']}>
                    <Grid item lg={6} container justify="flex-end" direction="row" alignItems="center">
                        <img
                            src={homeImg}
                            alt='buybtc'
                            style={{maxWidth: 'auto', maxHeight: '90%', top: '107px',
                            position: 'absolute'}}
                        />
                    </Grid>
                </Hidden>
            </Grid>
        </div>
        
    );
};

export default Home;
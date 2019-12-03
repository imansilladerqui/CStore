import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import CardList from '../cards/CardList';

import {Typography, Paper} from '@material-ui/core';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    width: 600,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    padding: '50px'
  },
  modalTitle: {
    textAlign: 'center',
    fontSize: '26px',
    fontWeight: 700
  },
  divisor: {
    marginTop: '50px',
  },
  modalText: {
    marginTop: '30px',
    fontSize: '20px',
    fontWeight: 500,
    textAlign: 'center'
  }
}));

  const LoginModal = ({ open, close, arsQty}) => {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);  

  return (
    <div>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={close}
      >
        <Paper style={modalStyle} className={classes.paper}>
          <Typography className={classes.modalTitle}>¡Estas a un solo paso!</Typography>
          <hr className={classes.divisor}/>
          <Typography className={classes.modalText}>Por seguridad, para poder realizar la transaccion debes estar registrado</Typography>
          <Typography className={classes.modalText}>Registrate con Google.</Typography>
          <CardList arsQty={arsQty}/>
        </Paper>
      </Modal>
    </div>
  );
}

export default LoginModal;
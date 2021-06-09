import logo from '../img/logo.png';
import '../Header/Header.css';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import useBack from '../../util/useback';



export default function DenseAppBar() {

  return (
    <div >
      <AppBar position="static">
        <Toolbar className="barra" variant="dense" >
          <Typography variant="h6">
          <img className="logo" src={logo} onClick={useBack('/')} />
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

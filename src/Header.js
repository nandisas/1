import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { ThemeProvider } from '@material-ui/core/styles';


export default function ButtonAppBar() {
    return (
    <div>
        <AppBar 
        position="static" 
        style={{background: 'linear-gradient(to right, rgba(255,0,0,0), blue, rgba(255,0,0,0))'}}>
        <Toolbar variant="dense">
        <Typography
          component="h2"
          variant="h5"
          align="center"
          justify = "center"
          flexGrow = {1}
          noWrap
        >
          Flood Inundation Mapping @HDM
        </Typography>
        </Toolbar>
        </AppBar>
    </div>
    );
}
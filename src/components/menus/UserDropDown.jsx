import _ from 'lodash';
import {data} from '../../loginData';
import React, {useState} from "react";
import {withStyles} from "@material-ui/core/styles";
import {IconButton, ListItemText, Menu, MenuItem, Typography} from '@material-ui/core';

import history from "../../history";

const StyledMenu = withStyles({
    paper: {
        border: "1px solid #d3d4d5"
    }
})(props => (
    <Menu
      elevation={0}
      getContentAnchorEl={null}
      anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
      }}
      transformOrigin={{
          vertical: "top",
          horizontal: "center",
      }}
      {...props}
    />
));

const StyledMenuItem = withStyles(theme => ({
    root: {
        "&:focus": {
            backgroundColor: "#312D5C",
            "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
                color: theme.palette.common.white,
            }
        }
    }
}))(MenuItem);

const UserDropDown = (props) => {
    const {loggedUser} = props
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = event => setAnchorEl(event.currentTarget);
    const handleClose = () => setAnchorEl(null);

    const loginType = _.isEmpty(loggedUser) ? _.find(data, d => d.name === 'google') : {};

    return (
        <div style={{ float: "right", height: '100%' }}>
            <IconButton
                href=""
                style={{ color: "white", padding: "13px 12px", height: '100%' }}
                onClick={handleClick}
            >
                <Typography>{ !_.isEmpty(loggedUser) ? loggedUser.name : 'Registro'}</Typography>
            </IconButton>

            <StyledMenu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                {
                    _.isEmpty(loggedUser) &&
                    <StyledMenuItem onClick={() => history.push("/")}>
                        <ListItemText primary={loginType.txt} onClick={()=>window.location.href=loginType.href}/>
                    </StyledMenuItem>                    
                }
                {
                    !_.isEmpty(loggedUser) &&
                    <StyledMenuItem onClick={() => history.push("/ultimosmovimientos")}>
                        <ListItemText primary="Ultimos Movimientos" />
                    </StyledMenuItem>
                }
                {
                    !_.isEmpty(loggedUser) &&
                    <StyledMenuItem onClick={() => window.location.href="/auth/logout"}>
                        <ListItemText primary="Cerrar Sesión" />
                    </StyledMenuItem>
                }
            </StyledMenu>
        </div>
    );
};

export default UserDropDown;
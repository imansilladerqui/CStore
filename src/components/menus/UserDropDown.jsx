import _ from 'lodash';
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
            backgroundColor: "var(--primary-red)",
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

    return (
        <div style={{ float: "right" }}>
            <IconButton
                href=""
                style={{ color: "white", padding: "13px 12px" }}
                onClick={handleClick}
            >
                <Typography>{ !_.isEmpty(loggedUser) ? loggedUser.displayName : 'Registrate'}</Typography>
            </IconButton>

            <StyledMenu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                {
                    _.isEmpty(loggedUser) &&
                    <StyledMenuItem onClick={() => history.push("/")}>
                        <ListItemText primary="Registrate con Google" onClick={()=>window.location.href="/auth/google"}/>
                    </StyledMenuItem>                    
                }
                {
                    !_.isEmpty(loggedUser) &&
                    <StyledMenuItem onClick={() => history.push("/profile")}>
                        <ListItemText primary="Perfil" />
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
import React, {useEffect, useState} from 'react';
import {AppBar, IconButton, Toolbar, Button, InputBase, Menu, MenuItem, Badge} from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import {useStyles} from "./styles";
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import MoreIcon from '@material-ui/icons/MoreVert';
import {Link} from "react-router-dom"
import {connect} from "react-redux";
import {ShopCartContent} from "./shopCartContent";

const _header = ({badgeCount, cartList}) => {
    const classes = useStyles();
    const [dialogOpen, setDialogOpen] = useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
    const [dropMenu, setDropMenu] = useState(null);
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
    useEffect(() => {
        console.log(cartList)
        console.log("changed")
    }, [cartList]);
    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };
    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };
    const handleOpenMenu = (event) => {
        setDropMenu(event.currentTarget);
    };
    const handleCloseMenu = () => {
        setDropMenu(null);
    };
    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };
    const menuId = 'primary-search-account-menu';
    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{vertical: 'top', horizontal: 'right'}}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{vertical: 'top', horizontal: 'right'}}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <Button aria-controls={"catalog-menu"} aria-haspopup={"true"} onClick={handleOpenMenu}>
                    Store
                </Button>
            </MenuItem>
            <MenuItem>
                <Button>
                    About
                </Button>
            </MenuItem>
            <MenuItem>
                <Button>
                    Contacts
                </Button>
            </MenuItem>
            <MenuItem>
                <IconButton
                    aria-haspopup="dialog"
                    color="inherit"
                >
                    <Badge badgeContent={badgeCount} color={"secondary"}>
                        <AddShoppingCartIcon aria/>
                    </Badge>
                </IconButton>
                <p>Shopping Cart</p>
            </MenuItem>
        </Menu>
    );
    return (
        <div className={classes.grow}>
            <AppBar position={"fixed"} className={classes.appBar}>
                <Toolbar>
                    <IconButton component={Link} to={"/"}>
                        <img src={process.env.PUBLIC_URL + "/assets/Images/logo.png"} alt="logo.png"/>
                    </IconButton>
                    <div className={classes.growing}/>
                    <div className={classes.sectionDesktop}>
                        <Button variant={"text"} className={classes.colorWhite}>About</Button>
                        <Button variant={"text"} className={classes.colorWhite} aria-controls={"catalog-menu"}
                                aria-haspopup={"true"}
                                onClick={handleOpenMenu}>Store</Button>
                        <Button variant={"text"} className={classes.colorWhite}>Contacts</Button>
                    </div>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon/>
                        </div>
                        <InputBase placeholder={"Search..."}
                                   classes={{root: classes.inputRoot, input: classes.inputInput}}/>
                    </div>
                    <div className={classes.sectionDesktop}>
                        <IconButton>
                            <Badge badgeContent={badgeCount} color={"secondary"}>
                                <AddShoppingCartIcon className={classes.colorWhite}
                                                     onClick={() => setDialogOpen(true)}/>
                                <ShopCartContent dialogClose={() => setDialogOpen(false)} dialogOpen={dialogOpen}/>
                            </Badge>
                        </IconButton>
                    </div>
                    <div className={classes.sectionMobile}>
                        <IconButton
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon/>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
            <Menu id="catalog-menu" anchorEl={dropMenu} open={Boolean(dropMenu)} onClose={handleCloseMenu}>
                <MenuItem onClick={() => {
                    handleCloseMenu();
                    handleMenuClose();
                }} component={Link} to={"/catalog"}>
                    Tobacco
                </MenuItem>
                <MenuItem onClick={() => {
                    handleMenuClose();
                    handleCloseMenu();
                }} component={Link} to={"/catalog"}>
                    Coal
                </MenuItem>
            </Menu>
        </div>
    );
};
const mapStoreToProps = state => ({
    badgeCount: state.fetchReducer.badgeCount,
    cartList: state.cartReducer.cartList,
});
export const Header = connect(mapStoreToProps)(_header);

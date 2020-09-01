import React, {useEffect} from "react";
import {
    List,
    Avatar,
    ListItem,
    ListItemAvatar,
    ListItemText,
    DialogTitle,
    Dialog
} from "@material-ui/core";
import PersonIcon from '@material-ui/icons/Person';
import AddIcon from '@material-ui/icons/Add';
import {connect} from "react-redux";

const _shopCartContent = ({dialogClose, dialogOpen, productsList}) => {
    return (
        <Dialog onClose={dialogClose} aria-labelledby="simple-dialog-title" open={dialogOpen}>
            <DialogTitle id="simple-dialog-title">Your shop cart</DialogTitle>
            <List>
                {productsList?.map((product)=>{
                    return (
                     <ListItem  key={product.flavor}>
                         <ListItemAvatar>
                             <Avatar src={process.env.PUBLIC_URL+`/${product.imgUrl}`}/>
                         </ListItemAvatar>
                         <ListItemText primary={product.name}/>
                     </ListItem>
                    )
                })}
            </List>
        </Dialog>
    );
};
const mapStateToProps = store => ({
    productsList: store.cartReducer.cartList
});
export const ShopCartContent = connect(mapStateToProps)(_shopCartContent);
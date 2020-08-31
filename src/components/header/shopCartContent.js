import React from "react";
import {
    List,
    Button,
    Avatar,
    ListItem,
    ListItemAvatar,
    ListItemText,
    DialogTitle,
    Dialog,
    Typography
} from "@material-ui/core"

export const ShopCartContent = ({handleDialogClose,dialogOpen,productsList}) => {
    return (
        <Dialog onClose={handleDialogClose} aria-labelledby="simple-dialog-title" open={dialogOpen}>
            <DialogTitle id="simple-dialog-title">Set backup account</DialogTitle>
            <List>
                {productsList.map((product) => (
                    <ListItem button onClick={() => handleListItemClick(email)} key={product.name}>
                        <ListItemAvatar>
                            <Avatar className={classes.avatar}>
                                <PersonIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={product.name} />
                    </ListItem>
                ))}

                <ListItem autoFocus button onClick={() => handleListItemClick('addAccount')}>
                    <ListItemAvatar>
                        <Avatar>
                            <AddIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Add account" />
                </ListItem>
            </List>
        </Dialog>
    );
};
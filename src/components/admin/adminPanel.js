import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {useStyles} from "./styles";
import {AppBar, Tab, Tabs, Typography, Box, Button} from "@material-ui/core";
import {connect} from "react-redux";
import {Link} from "react-router-dom"

const TabPanel = (props) => {
    const {children, value, index, ...other} = props;
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={5}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
};

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}


const _adminPanel = () => {
    const classes = useStyles();
    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                    <Tab label="Adding" {...a11yProps(0)} />
                    <Tab label="Update" {...a11yProps(1)} />
                    <Tab label="Delete" {...a11yProps(2)} />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                <Button variant={"contained"} color={"secondary"} component={Link} to={"/admin-panel/addingCompany"}>
                    Adding company
                </Button> <Button variant={"contained"} color={"secondary"} component={Link} to={"/admin-panel/addingProduct"}>
                Adding product
            </Button>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Button variant={"contained"} color={"secondary"}>
                    Update company
                </Button> <Button variant={"contained"} color={"secondary"}>
                Update product
            </Button>
            </TabPanel>
            <TabPanel value={value} index={2}>
                <Button variant={"contained"} color={"secondary"}>
                    Delete company
                </Button> <Button variant={"contained"} color={"secondary"}>
                Delete product
            </Button>
            </TabPanel>
        </div>
    );
};

export const adminPanel = connect()(_adminPanel);

import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import AddIcon from '@material-ui/icons/Add';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import SearchIcon from '@material-ui/icons/Search';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#005424',
        // color: '#19ae59',

    },
    menuButton: {
        // marginRight: theme.spacing(2),
    },
    title: {
        color: "#FFFFFF",
        flexGrow: 1,
        // display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
        textAlign: "center",
    },
    backIcon: {
        color: '#FFFFFF',
    },
    inputRoot: {
        // color: 'rgba(226,248,235,1)'
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));


export default function Appbar(props) {
    const classes = useStyles();

    let history = useHistory();

    let appbarType = props;
    return (
        <>
            {(props.type === "coordinator")
                ?
                <AppBar position="static" >
                    <Toolbar variant="dense" className={classes.root}>
                        <IconButton edge="start" className={classes.menuButton} aria-label="menu">
                            <ArrowBackIosIcon className={classes.backIcon} />
                        </IconButton >
                        <Typography className={classes.title} variant="h6" noWrap>
                            Coordinator
                        </Typography>
                        <Typography variant="h6" color="inherit">
                            {props.eventName ? props.eventName : null} 
                     </Typography>
                     <AddIcon/>

                    </Toolbar>
                </AppBar>
                :
                <AppBar position="static">
                    <Toolbar className={classes.root}>
                        <IconButton
                            edge="start"
                            className={classes.menuButton}
                            color="inherit"
                            aria-label="open drawer"
                        >
                            <ArrowBackIosIcon onClick={() => history.goBack()} />
                        </IconButton>
                        <Typography className={classes.title} variant="h6" noWrap>
                            {props.title}
                        </Typography>
                        <AddIcon/>

                    </Toolbar>
                </AppBar>
            }

        </>
    );
}

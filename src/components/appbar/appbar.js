import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#005424',
        // color: '#19ae59',

    },
    menuButton: {
        // marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    searchIcon: {
        // padding: theme.spacing(0, 2),
        // height: '100%',
        // position: 'absolute',
        // pointerEvents: 'none',
        // display: 'flex',
        // alignItems: 'center',
        // justifyContent: 'center',
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


    let appbarType = props;
    return (
        <>
            {(props.type === "coordinator")
                ?
                <AppBar position="static" >
                    <Toolbar variant="dense" className={classes.root}>
                        <IconButton edge="start" className={classes.menuButton} aria-label="menu">
                            <MenuIcon />
                        </IconButton>

                        <Typography variant="h6" color="inherit">
                            {props.eventName ? props.eventName : null}

                    </Typography>
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
                            <MenuIcon />
                        </IconButton>
                        <Typography className={classes.title} variant="h6" noWrap>
                            Event Name
                        </Typography>
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <AddIcon />
                            </div>
                        </div>
                    </Toolbar>
                </AppBar>
            }

        </>
    );
}

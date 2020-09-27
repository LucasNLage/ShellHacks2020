import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 960,
            tablet: 1024,
            tabletIpadOld: 1150,
            lg: 1280,
            xl: 1920,
        }
    },
    palette: {
        background: {
            main: '#1B1534',
            gradient: 'radial-gradient(circle, rgba(77,33,122,1) 0%, rgba(77,33,122,1) 41%, rgba(27,21,52,1) 100%)',
        },
        action: {
            hover: '#585568',
            selected: '#6F6B84'
            //selected: '#8A00E5'
        },
        primary: {
            //light: "#8CE2E2",
            //main: "#4BB9B9",
            main: 'rgba(226,248,235,1)',
            //dark: "#43A6A6"
        },
        secondary: {
            main: 'rgb(255, 255, 255)',
        },
    },
});
export default theme;
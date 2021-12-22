import { createTheme, PaletteType } from '@material-ui/core';

export const globalTheme = (paletteType: PaletteType) =>
    createTheme({
        direction: 'rtl',
        palette: {
            type: paletteType,
        },
        overrides: {
            MuiDialog: {
                root: {
                    direction: 'rtl',
                },
            },
            MuiAppBar: {
                colorPrimary: {
                    backgroundColor: 'transparent',
                    boxShadow: '0 0 0 0',
                },
            },
            MuiCssBaseline: {
                '@global': {
                    body: {
                        direction: 'rtl',
                        background: 'transparent linear-gradient(180deg, #FFF7F2 0%, #FFC9AE 100%) 0% 0%',
                        backgroundRepeat: 'no-repeat',
                        backgroundOrigin: 'padding-box',
                        backgroundAttachment: 'fixed',
                        opacity: 1,
                    },
                },
            },
            MuiInputBase: {
                input: {
                    fontSize: '25px',
                    fontWeight: 'lighter',
                },
            },
            MuiInputLabel: {
                root: {
                    paddingLeft: '2%',
                    color: '#BDBDBD',
                    fontSize: '20px',
                },
            },
        },
    });

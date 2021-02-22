import { createMuiTheme } from '@material-ui/core/styles';

export const DRAWER_WIDTH = 265;

const MuiTheme = createMuiTheme({
    palette: {
        primary: {
            light: '#4566cf',
            main: '#2f55d4',
            dark: '#2744b0',
        },
        secondary: {
            light: '#253245',
            main: '#18212c',
            dark: '#0B1015',
        },
    },
    typography: {
        h5: {
            fontWeight: 500,
            fontSize: 26,
            letterSpacing: 0.5,
        },
    },
    shape: {
        borderRadius: 3,
    },
    props: {
        MuiTab: {
            disableRipple: true,
        },
    },
    mixins: {
        toolbar: {
            minHeight: 48,
        },
    },
});

export const theme = {
    ...MuiTheme,
    overrides: {
        MuiDialog: {
            paper: {
                borderRadius: 4,
            },
        },
        MuiDrawer: {
            paper: {
                color: 'white',
                backgroundColor: '#253245',
            },
        },
        MuiButton: {
            label: {
                textTransform: 'none',
            },
            contained: {
                '&:active': {
                    boxShadow: 'none',
                },
            },
        },
        MuiTabs: {
            root: {
                marginLeft: MuiTheme.spacing(0),
            },
            indicator: {
                height: 2,
                left: 0,
                backgroundColor: MuiTheme.palette.primary,
            },
        },
        MuiTab: {
            root: {
                fontSize: '1rem',
                textTransform: 'none',
                marginRight: MuiTheme.spacing(4),
                minWidth: 0,
                padding: 2,
                [MuiTheme.breakpoints.up('md')]: {
                    padding: 8,
                    minWidth: 0,
                },
            },
        },
        MuiIconButton: {
            root: {
                padding: MuiTheme.spacing(1),
            },
        },
        MuiTooltip: {
            tooltip: {
                borderRadius: 4,
            },
        },
        MuiDivider: {
            root: {
                backgroundColor: '#404854',
            },
        },
        MuiListItemText: {
            primary: {
                fontWeight: MuiTheme.typography.fontWeightMedium,
            },
        },
        MuiListItemIcon: {
            root: {
                color: 'inherit',
                marginRight: 0,
                '& svg': {
                    fontSize: 20,
                },
            },
        },
        MuiAvatar: {
            root: {
                width: 32,
                height: 32,
            },
        },
    },
};

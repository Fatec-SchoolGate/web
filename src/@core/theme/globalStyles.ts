// ** MUI Imports
import { Theme } from '@mui/material/styles'

const GlobalStyles = (theme: Theme) => {
  return {
    ".MuiPagination-ul li:nth-of-type(2) > .MuiPaginationItem-root": {
      borderTopLeftRadius: "50% !important",
      borderBottomLeftRadius: "50% !important"
    },
    ".MuiPagination-ul li:nth-last-of-type(2) > .MuiPaginationItem-root": {
      borderTopRightRadius: "50% !important",
      borderBottomRightRadius: "50% !important"
    },
    '.demo-space-x > *': {
      marginTop: '1rem !important',
      marginRight: '1rem !important',
      'body[dir="rtl"] &': {
        marginRight: '0 !important',
        marginLeft: '1rem !important'
      }
    },
    '.demo-space-y > *:not(:last-of-type)': {
      marginBottom: '1rem'
    },
    '.MuiGrid-container.match-height .MuiCard-root': {
      height: '100%'
    },
    '.ps__rail-y': {
      zIndex: 1,
      right: '0 !important',
      left: 'auto !important',
      '&:hover, &:focus, &.ps--clicking': {
        backgroundColor: theme.palette.mode === 'light' ? '#F1F0F5 !important' : '#393D55 !important'
      },
      '& .ps__thumb-y': {
        right: '3px !important',
        left: 'auto !important',
        backgroundColor:
          theme.palette.mode === 'light' ? 'rgba(93, 89, 108, 0.2) !important' : 'rgba(207, 211, 236, 0.3) !important'
      },
      '.layout-vertical-nav &': {
        '& .ps__thumb-y': {
          width: 4
        },
        '&:hover, &:focus, &.ps--clicking': {
          backgroundColor: 'transparent !important',
          '& .ps__thumb-y': {
            width: 6
          }
        }
      }
    },

    '#nprogress': {
      pointerEvents: 'none',
      '& .bar': {
        left: 0,
        top: 0,
        height: 3,
        width: '100%',
        zIndex: 2000,
        position: 'fixed',
        backgroundColor: theme.palette.primary.main
      }
    }
  }
}

export default GlobalStyles

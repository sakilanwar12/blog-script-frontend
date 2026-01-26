'use client';

import { createTheme } from '@mantine/core';

export const theme = createTheme({
  primaryColor: 'blue',

  colors: {
    gray: [
      '#f8f9fa', // 0 - page background
      '#f1f3f5', // 1 - app shell bg
      '#e9ecef', // 2 - borders
      '#dee2e6',
      '#ced4da',
      '#adb5bd',
      '#868e96',
      '#495057',
      '#343a40',
      '#212529',
    ],
  },

  /** Global styles */
  fontFamily: 'Inter, system-ui, sans-serif',
  defaultRadius: 'md',

  /** Components customization */
  components: {
    Title:{
      styles: {
        root: {
          color: '#212529',
          fontWeight: 'bold',
          fontSize:"18px",
        },
      },
    },
    AppShell: {
      styles: {
        main: {
          backgroundColor: '#f8f9fa', // main content bg
          border: '1px solid #e9ecef',
          shadow: 'none',
        },
        header: {
          backgroundColor: '#fff', // header bg
          borderBottom: '1px solid #e9ecef',
        },
      },
    },

    Navbar: {
      styles: {
        root: {
          backgroundColor: '#f1f3f5', // sidebar
          borderRight: '1px solid #e9ecef',
        },
      },
    },

    Card: {
      styles: {
        root: {
          backgroundColor: '#ffffff',
          border: '1px solid #e9ecef',
        },
      },
    },

    Button: {
      defaultProps: {
        radius: 'md',
      },
    },

    Input: {
      styles: {
        input: {
          backgroundColor: '#ffffff',
          border: '1px solid #e9ecef',
        },
      },
    },
    Table: {
      styles: {
        root: {
          borderCollapse: 'separate',
          borderSpacing: 0,
          borderRadius: 10,
          overflow: 'hidden',
          backgroundColor: '#ffffff', // card-like table bg
          border: '1px solid #e9ecef',
        },
        th: {
          backgroundColor: '#f1f3f5', // header soft gray
          color: '#495057',
          fontWeight: 600,
          padding: '12px 16px',
          textAlign: 'left',
        },
        td: {
          padding: '12px 16px',
          borderBottom: '1px solid #e9ecef', // soft row separation
          color: '#495057',
        },
        tr: {
          '&:hover': {
            backgroundColor: '#f8f9fa', // subtle hover effect
          },
        },
      },
    },
  },
});

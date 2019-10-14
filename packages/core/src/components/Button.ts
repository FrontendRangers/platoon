const ButtonStyles: any = {
    display: 'inline-flex',
    flexWrap: 'nowrap',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    position: 'relative',
    padding: '0',
    backgroundColor: 'transparent',
    border: 'none',
    userSelect: 'none',
    textDecoration: 'none',
    '&:hover': {
        cursor: 'pointer',
    },
    '&:disabled': {
        pointerEvents: 'none',
    },
};

export { ButtonStyles };

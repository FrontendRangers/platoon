const root = {
    borderRadius: 'rounded',
    borderStyle: 'solid',
    '&:focus': {
        outline: 'none',
    },
};

const sizes = {
    sm: {
        fontSize: 'sm',
        height: '28px',
        minWidth: '28px',
        px: '4px',
    },
    md: {
        fontSize: 'md',
        height: '36px',
        minWidth: '36px',
        px: '6px',
    },
    lg: {
        fontSize: 'lg',
        height: '48px',
        minWidth: '48px',
        px: '8px',
    },
};

const intents = {
    primary: {
        shape: 'rounded',
        color: 'neutral.0',
        borderColor: 'primary.500',
        modes: {
            light: {
                backgroundColor: 'danger.500',
                '&:hover': { backgroundColor: 'danger.900' },
            },
            dark: {
                backgroundColor: 'primary.500',
                '&:hover': { backgroundColor: 'primary.900' },
            },
        },
    },
    secondary: {
        color: 'neutral.700',
        backgroundColor: 'primary.300',
        borderColor: 'primary.300',
        '&:hover': { backgroundColor: 'primary.600' },
    },
    danger: {
        color: 'neutral.0',
        backgroundColor: 'danger.500',
        borderColor: 'danger.500',
        '&:hover': { backgroundColor: 'danger.900' },
    },
    success: {
        color: 'neutral.0',
        backgroundColor: 'success.500',
        borderColor: 'success.500',
        '&:hover': { backgroundColor: 'success.900' },
    },
};

const variants = {
    solid: {
        borderColor: 'transparent',
    },
    ghost: {
        borderColor: 'transparent',
        backgroundColor: 'transparent',
    },
    outline: {
        color: 'inherit',
        borderWidth: '2px',
        backgroundColor: 'transparent',
    },
    link: {
        p: 0,
        color: 'inherit',
        borderColor: 'transparent',
        backgroundColor: 'transparent',
        height: 'auto',
    },
};

const Button = {
    root: root,
    size: sizes,
    intent: intents,
    variant: variants,
    isFull: {
        display: 'flex',
        width: '100%',
    },
    isDisabled: {
        color: 'neutral.500',
        backgroundColor: 'neutral.300',
    },
    isFocus: {
        boxShadow: `0 0 0 3px neutral.500`,
    },
    Label: {
        size: {
            sm: {
                px: '4px',
            },
            md: {
                px: '6px',
            },
            lg: {
                px: '8px',
            },
        },
    },
    Icon: {
        size: {
            md: {
                width: '1em',
            },
        },
    },
};

export { Button };

export const container = (delayChildren = 0.9) => ({
    initial: {},
    animate: {
        transition: {
            staggerChildren: 0.08,
            delayChildren,
        },
    },
    exit: {
        transition: {
            staggerChildren: 0.08,
            delayChildren: delayChildren,
            staggerDirection: -1,
        },
    },
});

export const childVariants = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
    },
    exit: {
        opacity: 0,
    },
};

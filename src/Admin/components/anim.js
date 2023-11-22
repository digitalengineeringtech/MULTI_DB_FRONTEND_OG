const transition = { duration: 0.8, ease: [0.76, 0, 0.24, 1] };

export const opacity = {
    initial: {
        opacity: 0
    },
    open: {
        opacity: 1,
        transition: { duration: 0.35 }
    },
    closed: {
        opacity: 0,
        transition: { duration: 0.35 }
    }
};

export const opacityR = {
    initial: {
        opacity: 0
    },
    open: {
        opacity: 1,
        transition: { duration: 0.35 }
    },
    closed: {
        opacity: 0,
        transition: { duration: 0.35 }
    }
};

export const height = {
    initial: {
        height: 0
    },
    enter: {
        height: "auto",
        transition,
    },
    exit: {
        height: 0,
        transition,
    
    }
};

export const translate = {
    initial: {
        y: '100%',
        opacity: 0
    },
    open: (i) => ({
        y: 0,
        opacity: 1,
        transition: { ...transition, delay: i[0] }
    }),
    closed: (i) => ({
        y: '50%',
        opacity: 0,
        transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: i[1] }
    })
};

export const blur = {
    initial: {
        filter: "blur(0px)",
        opacity: 1
    },
    open: {
        filter: "blur(4px)",
        opacity: 0.6,
        transition: { duration: 0.3 }
    },
    closed: {
        filter: "blur(0px)",
        opacity: 1,
        transition: { duration: 0.3 }
    }
};

export const background = {
    initial: {
        height: 0
    },
    open: {
        height: '100svh',
        transition
    },
    closed: {
        height: 0,
        transition
    }
};

export const scaleAnimation = {
    initial: { scale: 0, x: '-55%', y: '550%' },
    open: { scale: 1, x: '-55%', y: '550%', transition: { duration: 0.2, ease: [0.76, 0, 0.24, 1] } },
    closed: { scale: 0, x: '-55%', y: '550%', transition: { duration: 0.2, ease: [0.32, 0, 0.67, 0] } }
};

export const scaleAnimationTwo = {
    initial: { scale: 0, x: '-55%', y: '0%' },
    open: { scale: 1, x: '-55%', y: '0%', transition: { duration: 0.2, ease: [0.76, 0, 0.24, 1] } },
    closed: { scale: 0, x: '-55%', y: '0%', transition: { duration: 0.2, ease: [0.32, 0, 0.67, 0] } }
};
'use client'


export const layout = {
    hidden : {
        opacity : 0,
        y : 75,
    },
    show : {
        opacity: 1,
        y: 0,
    }

}

export const featureSec = {
    show :{
        transistion : {
            staggerChildren : 1,
        }
    }
}

export const featureItems = {
    hidden : {
        opacity : 0,
        translateX : -50,
        translateY : -50,
        y: 200
    },
    show :{
        opacity : 1,
        y: 0,
        transistion :{
            ease : [0.6, 0.01, -0.05, 0.95],
            duration : 1.6,
        }
    },

    exit :{
        opacity : 0,
        y : -200,
        transistion : {
            ease: "easeInOut",
            duration: 0.8,
        }

    }
}
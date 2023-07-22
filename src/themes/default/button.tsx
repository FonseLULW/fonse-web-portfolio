import { defineStyleConfig } from "@chakra-ui/react";

export const Button = defineStyleConfig({
    baseStyle: {
        // fontFamily: `'Work Sans', sans-serif`,
        fontFamily: 'button',
        fontWeight: '400',
        textTransform: "uppercase",
        borderRadius: "base",
    },
    sizes: {
        md: {
            fontSize: 'md'
        },
        lg: {
            fontSize: '1.5em',
            px: 10,
            py: 6
        }
    },
    variants: {
        // outline: {
        //     border: "2px solid",
        //     borderColor: "brand.100",
        //     color: "brand.100",
        // },
        solid: {
            bg: "primary",
            color: "white",
        },
    },
    defaultProps: {
        size: "md",
        variant: "solid",
    },
});

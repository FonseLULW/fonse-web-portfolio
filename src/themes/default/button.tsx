import { defineStyleConfig } from "@chakra-ui/react";

export const Button = defineStyleConfig({
    baseStyle: {
        fontFamily: 'button',
        fontWeight: '400',
        textTransform: "uppercase",
        borderRadius: "base",
        fontSize: ['sm', 'md', 'lg', 'xl', '2xl']
    },
    sizes: {
        md: {
            fontSize: 'md'
        },
        lg: {
            fontSize: 'lg',
        },
        fit: {
            fontSize: 'md',
            px: 10,
            py: 6,
            width: 'fit-content'
        }
    },
    variants: {
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

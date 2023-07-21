import { defineStyleConfig } from "@chakra-ui/react";
import "@fontsource/work-sans/200-italic.css";

export const Button = defineStyleConfig({
    baseStyle: {
        fontFamily: `'Work Sans', sans-serif`,
        fontWeight: '400',
        textTransform: "uppercase",
        borderRadius: "base"
    },
    sizes: {
        md: {
            fontSize: 'md'
        },
        lg: {
            fontSize: '1.5em'
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

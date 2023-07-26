import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const section = defineStyle({
    color: "white",
    backgroundColor: 'primary',
    fontWeight: '400',
    letterSpacing: '2px',
    py: '0.5em',
    px: '1em',
});

export const Heading = defineStyleConfig({
    variants: {
        'cover': {
            ...section
        },
        'fit': {
            ...section,
            width: 'fit-content'
        }
    }
});
import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const section = defineStyle({
    color: "white",
    backgroundColor: 'primary',
    fontWeight: '200',
    letterSpacing: '2px',
    py: '0.25em',
    px: '1em',
    // my: '0.25em'
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
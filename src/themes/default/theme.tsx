import { extendTheme } from "@chakra-ui/react";
import { Button } from "./button";

export default extendTheme({
    components: {
        Button,
    },
    colors: {
        primary: "#6096B4",
        primary_variant: "#93BFCF",
        secondary: "#EEE9DA",
        white: "#FFFFFF",
        black: "#000000"
    },
    fonts: {
        // heading: 'serif',
        // body: 'serif',
        button: `'Work Sans', sans-serif`,
        name: `'Cabin', monospace`,
        body: `'Inder', sans-serif`,
        heading: `'Josefin Sans', serif`
    }
});

import { extendTheme } from "@chakra-ui/react";
import { Button } from "./button";
import { Heading } from "./heading";

export default extendTheme({
    components: {
        Button, Heading
    },
    colors: {
        primary: "#6096B4",
        primary_variant: "#93BFCF",
        secondary: "#EEE9DA",
        white: "#FFFFFF",
        black: "#1A1A1A",
        grey: '#666666'
    },
    fonts: {
        button: `'Work Sans', sans-serif`,
        name: `'Cabin', monospace`,
        body: `sans-serif`, // change this because Inder does not support font weights
        heading: `monospace` // change this because josefin sans is misaligned
    }
});

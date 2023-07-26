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
        black: "#000000"
    },
    fonts: {
        button: `'Work Sans', sans-serif`,
        name: `'Cabin', monospace`,
        body: `'Inder', sans-serif`,
        heading: `monospace` // change this because josefin sans is misaligned
    }
});

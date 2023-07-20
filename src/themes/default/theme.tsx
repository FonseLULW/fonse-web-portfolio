import { extendTheme } from "@chakra-ui/react";
import { Button } from "./button";

export default extendTheme({
    components: {
        Button,
    },
    colors: {
        brand: {
            100: "#b0ebc9",
            // ...
            900: "#1a202c",
        },
    },
});

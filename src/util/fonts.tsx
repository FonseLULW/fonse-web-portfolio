import { Global } from "@emotion/react";

const Fonts = () => (
  <Global
    styles={`
      /* latin */
      @font-face {
        font-family: 'Work Sans';
        font-style: normal;
        font-display: swap;
        src: url('./fonts/WorkSans/WorkSans-VariableFont_wght.ttf') format('truetype');
      }

      @font-face {
        font-family: 'Cabin';
        font-style: normal;
        font-display: swap;
        src: url('./fonts/Cabin/Cabin-VariableFont_wdth,wght.ttf') format('truetype');
      }

      @font-face {
        font-family: 'Unbounded';
        font-style: normal;
        font-display: swap;
        src: url('./fonts/Unbounded/Unbounded-VariableFont_wght.ttf') format('truetype');
      }

      @font-face {
        font-family: 'Comfortaa';
        font-style: normal;
        font-display: swap;
        src: url('./fonts/Comfortaa/Comfortaa-VariableFont_wght.ttf') format('truetype');
      }
      `}
  />
);

export default Fonts;

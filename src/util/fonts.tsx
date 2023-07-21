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
        font-family: 'Josefin Sans';
        font-style: normal;
        font-display: swap;
        src: url('./fonts/JosefinSans/JosefinSans-VariableFont_wght.ttf') format('truetype');
      }

      @font-face {
        font-family: 'Inder';
        font-style: normal;
        font-display: swap;
        src: url('./fonts/Inder/Inder-Regular.ttf') format('truetype');
      }

      @font-face {
        font-family: 'Cabin';
        font-style: normal;
        font-display: swap;
        src: url('./fonts/Cabin/Cabin-VariableFont_wdth,wght.ttf') format('truetype');
      }
      `}
  />
);

export default Fonts;

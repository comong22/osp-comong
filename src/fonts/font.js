import { createGlobalStyle } from "styled-components";

import SpoqaHanSansNeoRegular from "./SpoqaHanSansNeo-Regular.woff";
import SpoqaHanSansNeoBold from "./SpoqaHanSansNeo-Bold.woff";

export const GlobalFonts = createGlobalStyle`
    @font-face {
        font-family: 'Spoqa Han Sans Neo Regular';
        src: url(${SpoqaHanSansNeoRegular}) format('woff');
    }

    @font-face {
        font-family: 'Spoqa Han Sans Neo Bold';
        src: url(${SpoqaHanSansNeoBold}) format('woff');
    }
`
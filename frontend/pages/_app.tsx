import "../styles/globals.css";
import "../styles/globalss.css";
import type { AppProps } from "next/app";
import wrapper from "../store";
import "antd/dist/antd.css";
import "../styles/feedcss/core.scss";
import "../styles/maindetailcss/index.scss";
import "../styles/mainfeedcss/index.scss";
import "../styles/wineMainCSS/style.css";
import "../styles/wineListCSS/style.css";
import CssBaseline from "@mui/material/CssBaseline";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <CssBaseline />
      <Component {...pageProps} />;
    </>
  );
}

export default wrapper.withRedux(MyApp);

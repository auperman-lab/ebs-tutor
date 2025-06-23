import { StrictMode } from "react";
import * as ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./router/router";
import { theme } from "./styles";
import { StyleProvider, ThemeProvider } from "antd-style";
import { QueryClientContext } from "@context";
import "@ant-design/v5-patch-for-react-19";
import "./styles.scss";
import { GlobalStyle } from "./GlobalStyles";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <StrictMode>
    <BrowserRouter>
      <QueryClientContext>
        <StyleProvider>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Router />
          </ThemeProvider>
        </StyleProvider>
      </QueryClientContext>
    </BrowserRouter>
  </StrictMode>
);

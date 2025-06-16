import { StrictMode } from "react";
import * as ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./router/router";
import themeConfig from "./styles/theme.json";
import { StyleProvider, ThemeProvider } from "antd-style";
import { QueryClientContext } from "@context";
import "@ant-design/v5-patch-for-react-19";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

root.render(
  <StrictMode>
    <BrowserRouter>
      <QueryClientContext>
        <StyleProvider>
          <ThemeProvider theme={themeConfig}>
            <Router />
          </ThemeProvider>
        </StyleProvider>
      </QueryClientContext>
    </BrowserRouter>
  </StrictMode>,
);

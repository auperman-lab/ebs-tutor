import { StrictMode } from "react";
import * as ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./router/router";
import { theme } from "./styles";
import { StyleProvider, ThemeProvider } from "antd-style";
import { QueryClientContext, AuthProvider } from "@context";
import "@ant-design/v5-patch-for-react-19";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

root.render(
  <StrictMode>
    <BrowserRouter>
      <QueryClientContext>
        <AuthProvider>

          <StyleProvider>
            <ThemeProvider theme={theme}>
              <Router />
            </ThemeProvider>
          </StyleProvider>

        </AuthProvider>
      </QueryClientContext>
    </BrowserRouter>
  </StrictMode>,
);

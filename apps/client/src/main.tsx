import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import * as ReactDOM from 'react-dom/client';
import { StyleProvider, ThemeProvider } from "antd-style";
import { AuthProvider, QueryClientContext } from "@clientContext";
import { customThemePalette, GlobalStyle, themeComponents } from "./styles";
import { Router } from "./router/router";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StrictMode>
    <BrowserRouter>
      <QueryClientContext>
        <AuthProvider>
          <StyleProvider>
            <ThemeProvider theme={{
              token: customThemePalette,
              components: themeComponents
            }}>
              <GlobalStyle />
              <Router />
            </ThemeProvider>
          </StyleProvider>
        </AuthProvider>
      </QueryClientContext>
    </BrowserRouter>
  </StrictMode>
);

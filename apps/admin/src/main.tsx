import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './router/router';
import { StyleProvider, ThemeProvider } from 'antd-style';
import { AuthProvider, QueryClientContext } from '@context';
import '@ant-design/v5-patch-for-react-19';
import './styles.scss';
import { GlobalStyle } from './GlobalStyles';
import { themeComponents } from './styles';
import { customThemePalette } from './styles';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StrictMode>
    <BrowserRouter>
      <QueryClientContext>
        <AuthProvider>
          <StyleProvider>
            <ThemeProvider
              theme={{
                token: customThemePalette,
                components: themeComponents,
              }}
            >
              <GlobalStyle />
              <Router />
            </ThemeProvider>
          </StyleProvider>
        </AuthProvider>
      </QueryClientContext>
    </BrowserRouter>
  </StrictMode>
);

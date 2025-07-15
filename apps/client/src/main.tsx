import { StrictMode, ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import * as ReactDOM from 'react-dom/client';
import { StyleProvider, ThemeProvider } from 'antd-style';
import { AuthProvider, QueryClientContext } from '@clientContext';
import { customThemePalette, GlobalStyle, themeComponents } from './styles';
import { Router } from './router/router';
import '@ant-design/v5-patch-for-react-19';
import { useAutoRefreshToken } from './hooks/useAutoRefreshToken';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const AppWithHooks = ({ children }: { children: ReactNode }) => {
  useAutoRefreshToken();

  return <>{children}</>;
};

root.render(
  <StrictMode>
    <BrowserRouter>
      <QueryClientContext>
        <AuthProvider>
          <AppWithHooks>
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
          </AppWithHooks>
        </AuthProvider>
      </QueryClientContext>
    </BrowserRouter>
  </StrictMode>
);

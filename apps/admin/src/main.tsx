import { ReactNode, StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './router/router';
import { StyleProvider, ThemeProvider } from 'antd-style';
import { AuthProvider, QueryClientContext, CourseProvider } from '@context';
import '@ant-design/v5-patch-for-react-19';
import { GlobalStyle } from './GlobalStyles';
import { customThemePalette, themeComponents } from './styles';
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
            <CourseProvider>
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
            </CourseProvider>
          </AppWithHooks>
        </AuthProvider>
      </QueryClientContext>
    </BrowserRouter>
  </StrictMode>
);

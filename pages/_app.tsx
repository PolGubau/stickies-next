import { LoadingPage, Toast } from "components";
import { useTheme } from "hooks";
import { SessionProvider } from "next-auth/react";
import { AppProps } from "next/app";
import { Suspense } from "react";
import { useRecoilValue, RecoilRoot } from "recoil";
import ToastStateAtom from "states/toastState";
import { GlobalStyles } from "style";
import { ThemeProvider } from "styled-components";
import "style/global.css";
const RecoiledApp = ({ children }) => {
  return <RecoilRoot>{children}</RecoilRoot>;
};

const ControlledApp = ({ children }) => {
  const toast = useRecoilValue(ToastStateAtom);
  const { getTheme } = useTheme();
  return (
    <ThemeProvider theme={getTheme}>
      <GlobalStyles />
      <Suspense fallback={<LoadingPage message="Loading your resource" />}>
        {toast.show && <Toast />}
        {children}
      </Suspense>
    </ThemeProvider>
  );
};

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <SessionProvider session={pageProps.session}>
      <RecoiledApp>
        <ControlledApp>
          <Component {...pageProps} />
        </ControlledApp>
      </RecoiledApp>
    </SessionProvider>
  );
};

export default App;

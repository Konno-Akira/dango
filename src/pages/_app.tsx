import { AppProps } from 'next/app.jsx';
import React, { ReactElement } from 'react';
import 'tailwindcss/tailwind.css';

const App = ({ Component, pageProps }: AppProps): ReactElement => {
  return (
    <>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
    </>
  );
};

// eslint-disable-next-line import/no-default-export
export default App;

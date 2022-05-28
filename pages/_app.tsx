import NavBar from "../component/NavBar";
import type { AppProps } from "next/app";

function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Component {...pageProps} />
      <span>Hello</span>
      <style jsx global>
        {`
          a {
            color: white;
          }
        `}
      </style>
    </div>
  );
}

export default App;

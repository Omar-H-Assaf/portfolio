import NavBar from './nav';
import MainPage from './main_page';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    if (!/localhost/.test(window.location.href)){
      const script = document.createElement('script');
      script.async = true;
      script.src = "https://www.googletagmanager.com/gtag/js?id=G-9ZMDB3JB76";
      document.body.appendChild(script);
      window.dataLayer = window.dataLayer || [];
      function gtag() { dataLayer.push(arguments); }
      gtag('js', new Date());
      gtag('config', 'G-9ZMDB3JB76');
    }

  }, [])
  return (
    <div>
     <NavBar />
     <MainPage />
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          scroll-behavior: smooth;
          background-color: #000;
          width: fit-content;
          overflow-x: clip;
          font-family:
            -apple-system,
            BlinkMacSystemFont,
            Segoe UI,
            Roboto,
            Oxygen,
            Ubuntu,
            Cantarell,
            Fira Sans,
            Droid Sans,
            Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}

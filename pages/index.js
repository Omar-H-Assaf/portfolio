import MainPage from './main_page';
import { useEffect } from 'react';
import Nav2 from './nav2';
import { Poppins } from 'next/font/google'

const inter = Poppins({
  subsets: ['devanagari'],
weight: '500'
})


export default function Home() {

  useEffect(() => {
    if (!/localhost/.test(window.location.href)) {
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
    < div style={{
      display: 'grid',
      gridTemplateColumns: '60px 1fr',
    }
    }
      className={inter.className}
    >
      <Nav2 />
      <main>
        <MainPage />
      </main>
      <style jsx global>{`
      @font-face {
  font-family: 'Poppins';
  src: url('../public/Poppins/Poppins-Regular.ttf') format('truetype');
}
        html,
        body {
          padding: 0;
          margin: 0;
          width: 100%;
          scroll-behavior: smooth;
          background-color: #111;
          display: flex;
          font-family: __Poppins_d4b8fc,__Poppins_Fallback_d4b8fc;
          font-style: normal;
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
    .timeline {
      margin: 20px auto;
      padding: 20px;
      font-size: 15px;
}
#__next {
    width: 100%
}
/* cards container */
.cards {
    position: relative;
    max-width: 800px;
}

/* setting padding based on even or odd */
.cards:nth-child(odd) {
    padding: 30px 0 30px 30px;
}

.cards:nth-child(even) {
    padding: 30px 30px 30px 0;
}

/* Global ::before */
.cards::before {
    content: "";
    position: absolute;
    width: 50%;
    border: solid #65d2a3;
}

/* Setting the border of top, bottom, left */
.cards:nth-child(odd)::before {
    left: 0px;
    top: -4.5px;
    bottom: -4.5px;
    border-width: 5px 0 5px 5px;
    border-radius: 50px 0 0 50px;
}

/* Setting the border of top, bottom, right */
.cards:nth-child(even)::before {
    right: 0;
    top: 0;
    bottom: 0;
    border-width: 5px 5px 5px 0;
    border-radius: 0 50px 50px 0;
}

/* Removing the border if it is the first cards */
.cards:first-child::before {
    border-top: 0;
    border-top-left-radius: 0;
}

/* Removing the border if it is the last cards  and it's odd */
.cards:last-child:nth-child(odd)::before {
    border-bottom: 0;
    border-bottom-left-radius: 0;
}

/* Removing the border if it is the last cards  and it's even */
.cards:last-child:nth-child(even)::before {
    border-bottom: 0;
    border-bottom-right-radius: 0;
}

/* Information about the timeline */
.info {
    display: flex;
    flex-direction: column;
    background: transparent;
    color: gray;
    border-radius: 10px;
    padding: 10px;
        color: rgba(242, 243, 244, 0.5);
            border: 1px solid rgba(242, 243, 244, 0.5);
            border-radius: 12px;
                box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
}

/* Title of the cards */
.title {
    color: #65d2a3;
    position: relative;
}

/* Timeline dot  */
.title::before {
    content: "";
    position: absolute;
    width: 10px;
    height: 10px;
    background: white;
    border-radius: 999px;
    border: 3px solid #65d2a3;
}

/* text right if the cards is even  */
.cards:nth-child(even)>.info>.title {
    text-align: right;
}
.cards:nth-child(even)>.info>.year {
    text-align: right;
}
.cards:nth-child(odd)>.info>.title {
    text-align: left;
}
.cards:nth-child(odd)>.info>.year {
    text-align: left;
}
/* setting dot to the left if the cards is odd */
.cards:nth-child(odd)>.info>.title::before {
    left: -45px;
}

/* setting dot to the right if the cards is odd */
.cards:nth-child(even)>.info>.title::before {
    right: -45px;
}



.wave {
  background: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/85486/wave.svg) repeat-x; 
  position: absolute;
  top: -198px;
  width: 6400px;
  height: 198px;
  animation: wave 7s cubic-bezier( 0.36, 0.45, 0.63, 0.53) infinite;
  transform: translate3d(0, 0, 0);
}
.lds-dual-ring {
  display: inline-block;
  width: 30px;
  height: 30px;
}
.lds-dual-ring:after {
  content: " ";
  display: block;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 6px solid #fff;
  border-color: #fff transparent #fff transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}
@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}


      `}</style>
    </div>
  );
}

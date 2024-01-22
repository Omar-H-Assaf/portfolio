import { useRouter } from "next/router";
import 'bootstrap/dist/css/bootstrap.css'

const App = ({ Component, pageProps }) => {
    const router = useRouter();
    return (
            <Component {...pageProps} /> )

}

export default App;
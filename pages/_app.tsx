import { AppProps } from 'next/app';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/style.scss';

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    return (
        <Component {...pageProps} />
    );
}
import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import config from '../config/config';
import Header from './Header';
import Footer from './Footer';

interface Props {
    title: string;
    description: string;
    url: string;
    image: string;
    type: string;
    children: any;
}

const Layout: NextPage<Props> = (props) => {
    const { title, description, url, image, type, children } = props;
    
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <title>{ title + " - Ether" }</title>
                <meta name="description" content={ description } />
                <link rel="canonical" href={ url } />
                <meta property="og:site_name" content="Ether" />
                <meta property="og:type" content={ type } />
                <meta property="og:title" content={ title + " - Ether" } />
                <meta property="og:url" content={ url } />
                <meta property="og:description" content={ description } />
                <meta property="og:image" content={ image } />
                <meta property="og:locale" content="en_US" />
                <meta property="twitter:card" content="summary" />
                <meta property="twitter:title" content={ title + " - Ether" } />
                <meta property="twitter:description" content={ description } />
                <meta property="twitter:site" content="@etherosys" />
                <meta property="twitter:image" content={ image } />
                <link rel="apple-touch-icon" sizes="57x57" href={ config.base + "/images/apple-icon-57x57.png" } />
                <link rel="apple-touch-icon" sizes="60x60" href={ config.base + "/images/apple-icon-60x60.png" } />
                <link rel="apple-touch-icon" sizes="72x72" href={ config.base + "/images/apple-icon-72x72.png" } />
                <link rel="apple-touch-icon" sizes="76x76" href={ config.base + "/images/apple-icon-76x76.png" } />
                <link rel="apple-touch-icon" sizes="114x114" href={ config.base + "/images/apple-icon-114x114.png" } />
                <link rel="apple-touch-icon" sizes="152x152" href={ config.base + "/images/apple-icon-152x152.png" } />
                <link rel="apple-touch-icon" sizes="180x180" href={ config.base + "/images/apple-icon-180x180.png" } />
                <link rel="icon" type="image/png" sizes="192x192" href={ config.base + "/images/android-icon-192x192.png" } />
                <link rel="icon" type="image/png" sizes="32x32" href={ config.base + "/images/favicon-32x32.png" } />
                <link rel="icon" type="image/png" sizes="96x96" href={ config.base + "/images/favicon-96x96.png" } />
                <link rel="icon" type="image/png" sizes="16x16" href={ config.base + "/images/favicon-16x16.png" } />
                <link rel="manifest" href={ config.base + "/manifest.json" } />
                <meta name="msapplication-TileColor" content="#ffffff" />
                <meta name="msapplication-TileImage" content={ config.base + "/images/ms-icon-144x144.png" } />
                <meta name="theme-color" content="#ffffff" />
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossOrigin="anonymous" />
            </Head>
            
            <Header />
            
            {children}
            
            <Footer />
        </>
    );
};

export default Layout;
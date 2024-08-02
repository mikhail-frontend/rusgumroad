import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import '../styles/globals.scss'
import dynamic from 'next/dynamic';
import type {AppProps} from 'next/app';
import store from '../store';
import {setTheme} from '../store/slices/themeSlice';
import {fetchExchangeRates} from '../store/slices/currencySlice';
import Layout from "../layout";

const DynamicFontLoader = dynamic(() => import('../components/FontLoader'), {ssr: false});

const RusGumroad = ({Component, pageProps}: AppProps) => {
    useEffect(() => {
        const theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        store.dispatch(setTheme(theme));
        store.dispatch(fetchExchangeRates() as any);
    }, []);

    return (
        <Provider store={store}>
            <Layout>
                <DynamicFontLoader/>
                <Component {...pageProps} />
            </Layout>
        </Provider>
    );
}

export default RusGumroad;

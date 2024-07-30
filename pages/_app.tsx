import React, {useEffect} from 'react';
import {AppProps} from 'next/app';
import {Provider} from 'react-redux';
import store from '../store';
import {setTheme} from '../store/slices/themeSlice';
import {fetchExchangeRates} from '../store/slices/currencySlice';
import Layout from "../layout";

const RusGumroad = ({Component, pageProps}: AppProps) => {

    useEffect(() => {
        const theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        //@ts-ignore
        store.dispatch(setTheme(theme));
        //@ts-ignore
        store.dispatch(fetchExchangeRates());
    }, []);

    return (
        <Provider store={store}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </Provider>
    );
}

export default RusGumroad;

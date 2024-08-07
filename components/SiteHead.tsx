import React from 'react';
import Head from 'next/head';
import Script from 'next/script';
import {Dataset, Graph, Organization} from 'schema-dts';
import { JsonLd } from 'react-schemaorg';
import { useRouter } from 'next/router';

const SiteHead: React.FC = () => {
    const { pathname } = useRouter();
    const organization = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        url: 'https://rusgumroad.web.app/',
        logo: 'https://rusgumroad.web.app/logo-dark.jpeg',
        brand: 'RusGumroad',
        founder: 'Михаил Харитонов',
        foundingDate: '2023-01-05T01:00:00+03:00',
        additionalType: 'https://rusgumroad.web.app/',
        description: 'RusGumroad description',
        image: 'https://rusgumroad.web.app/logo-dark.jpeg',
    }
    const dataset = {
        '@context': 'https://schema.org',
        '@type': 'Dataset',
        name: 'RusGumroad Title',
        description:
            'RusGumroad description dataset',
        url: 'https://rusgumroad.web.app/',
        keywords: [
    'RusGumroad keywords'
        ],
        isAccessibleForFree: true,
        creator: {
            '@type': 'Person',
            name: 'Михаил Харитонов',
            url: '#tg',
            contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'customer service',
                telephone: '+7-925-516-1592',
                image: ['https://rusgumroad.web.app/me.jpeg'],
                url: '#',
            },
        },
    }
    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <title>RusGumroad title</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="robots" content="index, follow" />
                <link rel="shortcut icon" type="image/png" href="/icons/apple-touch-icon-144x144.png" />
                <link rel="icon" type="image/png" href="/icons/apple-touch-icon-144x144.png" />

                <meta data-rh="true" property="og:locale" content="ru_RU" />
                <meta name="theme-color" content="#000212" />
                <meta property="og:type" content="website" />
                <meta
                    name="description"
                    content="RusGumroad - описание"
                />
                <meta
                    name="og:description"
                    content="RusGumroad - описание"
                />
                <meta
                    name="apple-mobile-web-app-title"
                    content="RusGumroad - apple title"
                />
                <meta
                    name="og:site_name"
                    property="og:site_name"
                    content="RusGumroad - site_name"
                />
                <meta
                    name="og:title"
                    property="og:title"
                    content="RusGumroad title"
                />
                <meta property="og:image" content="/logo-dark.jpeg" />

                <link rel="canonical" href={`https://rusgumroad.web.app${pathname}`} />
                <link rel="manifest" href="/manifest.json" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="theme-color" content="#000212" />
                <link rel="apple-touch-icon" href="/icons/apple-touch-icon-180x180.png" />
                <link rel="apple-touch-icon" href="/icons/apple-touch-icon-57x57.png" sizes="57x57" />
                <link rel="apple-touch-icon" href="/icons/apple-touch-icon-72x72.png" sizes="72x72" />
                <link rel="apple-touch-icon" href="/icons/apple-touch-icon-114x114.png" sizes="114x114" />
                <link rel="apple-touch-icon" href="/icons/apple-touch-icon-144x144.png" sizes="144x144" />
                <link rel="apple-touch-icon" href="/icons/apple-touch-icon-152x152.png" sizes="152x152" />
                <link rel="apple-touch-icon" href="/icons/apple-touch-icon-180x180.png" sizes="180x180" />
                <JsonLd<Organization>
                    item={organization as any}
                />
                <JsonLd<Dataset>
                    item={dataset as any}
                />
            </Head>
            <Script type="text/javascript" strategy="lazyOnload" id="yandex" async defer>
                {`
     
        `}
            </Script>

            <Script id="google-analytics" strategy="lazyOnload" async defer>
                {`
       
        `}
            </Script>
        </>
    );
};

export default SiteHead;

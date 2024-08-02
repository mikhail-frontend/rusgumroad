import React from "react";
import { useEffect } from 'react';
import WebFont from 'webfontloader';

const FontLoader: React.FC = () => {
    useEffect(() => {
        WebFont.load({
            custom: {
                families: ['Mabry Pro'],
                urls: ['/styles/fonts/font.css'],
            },
        });
    }, []);

    return null;
};

export default FontLoader;

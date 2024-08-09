import React from 'react';
import SiteHead from "../components/SiteHead";
import MainHeader from "../components/MainHeader/MainHeader";
import MainFooter from "../components/MainFooter";
import {useSelector} from "react-redux";
import {RootState} from "../store";

type LayoutType = {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutType> = ({children}) => {
    const theme = useSelector((state: RootState) => state.theme.mode);

    return (
        <div className={`wrapper ${theme === 'light' ? 'light' : 'dark'}`}>
            <SiteHead/>
            <MainHeader/>
            {children}
            <MainFooter/>
        </div>

    );
};

export default Layout;

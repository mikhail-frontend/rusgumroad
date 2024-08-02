import React from 'react';
import SiteHead from "../components/SiteHead";
import MainHeader from "../components/MainHeader";
import MainFooter from "../components/MainFooter";

type LayoutType = {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutType> = ({children}) => {
    // const {usd, eur, status, error} = useSelector((state: RootState) => state.currency);
    return (
        <>
            <SiteHead/>
            <MainHeader/>
            {children}
            <MainFooter/>
        </>

    );
};

export default Layout;

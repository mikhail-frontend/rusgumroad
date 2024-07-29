import React from 'react';

type LayoutType = {
    children: React.ReactNode,
}
const Layout = ({children}) => {
    return (
        <>
            <div>
                {children}
            </div>
        </>
    );
};

export default Layout;
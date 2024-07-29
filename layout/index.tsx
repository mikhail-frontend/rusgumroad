import React from 'react';

type LayoutType = {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutType> = ({ children }) => {
    return (
        <div className={'layout'}>
            {children}
        </div>
    );
};

export default Layout;

import React from 'react';

type LayoutType = {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutType> = ({ children }) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default Layout;

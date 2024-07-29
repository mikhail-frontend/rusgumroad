import React from 'react';

type LayoutType = {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutType> = ({ children }) => {
    return (
        <div className={'layout'}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias amet architecto distinctio doloribus eius et laborum placeat quia sit voluptates. Alias aliquid animi deleniti dolore ex explicabo incidunt omnis temporibus.
            {children}
        </div>
    );
};

export default Layout;

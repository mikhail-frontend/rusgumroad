import React, {useEffect} from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
type LayoutType = {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutType> = ({ children }) => {
    const theme = useSelector((state: RootState) => state.theme.mode);
    const { usd, eur, status, error } = useSelector((state: RootState) => state.currency);
    useEffect(() => {
        console.log({
            theme, usd, eur
        })
    }, []);

    return (
        <div className={'layout'}>
              <pre>
      {`Theme: ${theme}\n`}
                  {`USD: ${usd}\n`}
                  {`EUR: ${eur}\n`}
                  {`Status: ${status}\n`}
                  {`Error: ${error}\n`}
    </pre>
            {children}
        </div>
    );
};

export default Layout;

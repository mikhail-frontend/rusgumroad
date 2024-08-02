import React from 'react';
import Image from 'next/image';

interface LogoProps {
    className?: string;
    onClick?: (event: React.MouseEvent<HTMLImageElement, MouseEvent>) => void;
}

const Logo: React.FC<LogoProps> = ({ className, onClick = () => {} }) => {
    return (
        <Image
            src='/mainLogo.svg'
            alt='RusGumroad. Gumroad Россия. Оплатить Gumroad. Gumroad оплата'
            title='RusGumroad. Gumroad Россия. Оплатить Gumroad. Gumroad оплата'
            width={226}
            height={30}
            priority={true}
            className={className}
            onClick={onClick}
        />
    );
};

export default Logo;

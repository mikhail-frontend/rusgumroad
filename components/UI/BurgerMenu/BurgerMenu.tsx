import React, {useState} from 'react';
import {LinksList} from "../../MainHeader/MainHeader";
import {Link} from "../../MainHeader/MainHeader";
type BurgerMenuType = {
    onClick: (link: string, blockPath: string, event: React.MouseEvent<HTMLDivElement>) => void
}
const BurgerMenu:React.FC<BurgerMenuType> = ({onClick}) => {
    const [links] = useState<Link[]>(LinksList);
    const [isActive, setIsActive] = useState(false);
    const toggleMenu  = (event) => {
        event.preventDefault();
        setIsActive(prev => !prev);
        if(!isActive) {
            document.documentElement.style.overflow = 'hidden';
            document.body.style.overflow = 'hidden';
        } else {
            document.documentElement.removeAttribute('style');
            document.body.removeAttribute('style')
        }
    }
    const changePrevent = (event) => {
        event.preventDefault();
        event.stopPropagation();
        return false
    }
    return (
        <>
            <div className={`menu-bg ${isActive ? 'fs' : ''}`}>
                <div className={`menu-items ${isActive ? 'fs' : ''}`} onClick={toggleMenu}>
                    {links.map(link => {
                        return <div
                            onClick={(event) => onClick(link.link, link.blockPath, event)}
                            key={link.id}>{link.text}</div>
                    })}
                </div>
            </div>
            <div className={`menu-burger ${isActive ? 'fs' : ''}`} onClick={toggleMenu}>
                <label htmlFor="check" className='burgerLabel' >
                    <input type="checkbox" id="check" onChange={changePrevent} checked={isActive}/>
                    <span/>
                    <span/>
                    <span/>
                </label>
            </div>
        </>
    );
};

export default BurgerMenu;
import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {RootState} from "../../store";
import Logo from "../Logo";
import RippleButton from "../UI/RippledButton";
import styles from './Header.module.scss';
import BurgerMenu from "../UI/BurgerMenu/BurgerMenu";
import GumroadButton from "../UI/GumroadButton/GumroadButton";
import {useRouter} from 'next/router';
import useMobile from "../../hooks/useMobile";
import { setTheme } from '../../store/slices/themeSlice';

export type Link = {
    id: number | string
    text: string
    blockPath: string
    isButton?: boolean
    link: string
}

export const LinksList:Link[] = [
    { id: '1', text: 'Как купить ?', blockPath: 'howBuy', link: '/' },
    { id: '2', text: 'Калькулятор', blockPath: 'calculator', link: '/' },
    { id: '3', text: 'FAQ', blockPath: 'faq', link: '/' },
    { id: '5', text: 'Отзывы', blockPath: 'reviews', link: '/' },
    { id: '6', text: 'Контакты', blockPath: 'contacts', link: '/contacts' },
];

const MainHeader = () => {
    const router = useRouter();
    const [links] = useState<Link[]>(LinksList);
    const isMobile = useMobile();
    const theme = useSelector((state: RootState) => state.theme.mode);
    const dispatch = useDispatch();
    const moonIcon = '/moon.svg';
    const sunIcon = '/sun.svg'
    const scrollToElement = (blockPath:string) => {
        if(isMobile) {
            const element: HTMLElement | null = document.getElementById(blockPath);
            const offset = 90;
            const bodyRect = document.body.getBoundingClientRect().top;
            if (!element) return;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;
            window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        } else {
            const element: HTMLElement | null = document.getElementById(blockPath);
            if (!element) return;
            element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
        }
    }

    const buttonClickHandler = (link: string, blockPath: string, event: React.MouseEvent<HTMLElement>) => {
        if (!blockPath) return;
        if(event) {
            event.preventDefault();
        }
        const {pathname} = router;
        if (pathname !== link) {
            router.push(link).then(() => {
                scrollToElement(blockPath);
            })
        }
        scrollToElement(blockPath);
    }

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        dispatch(setTheme(newTheme));
    }

    return (
        <header className={styles.header}>
            <div className={`${styles.headerContainer} container`}>
                <Logo className={styles.headerLogo} onClick={(event: React.MouseEvent<HTMLImageElement>) => buttonClickHandler('/', 'about', event)}/>
                <div className={styles['header-links']}>
                    {links.map(link => (
                        <RippleButton
                            key={link.id}
                            to={link.link}
                            onClick={(event) => buttonClickHandler(link.link, link.blockPath, event)}
                            className={`${styles.headerButton} ${link.isButton && styles.headerMainBtn || ''}`}
                        >
                            {link.text}
                        </RippleButton>
                    ))}
                </div>
                <div className={`${styles.headerSwitch} ${theme === 'light' ? styles.light : ''}`}
                     onClick={toggleTheme}>
                    <div className={`${styles.moon}`}>
                        <img src={theme === 'light' ? sunIcon : moonIcon} alt={theme === 'light' ? 'sun' : 'moon'} />
                    </div>
                </div>
                <BurgerMenu onClick={buttonClickHandler}/>
                <GumroadButton>
                    Задать вопрос
                </GumroadButton>
            </div>
        </header>
    );
}

export default MainHeader;

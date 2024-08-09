import React, {useState} from 'react';
import styles from './HowBuy.module.scss'
import RippleButton from "../UI/RippledButton";
import Image from "next/image";
import useAnimation from "../../hooks/useAnimation";
import {HowTo} from "schema-dts";
import {JsonLd} from "react-schemaorg";
import schema from "./schema";
import {useSelector} from "react-redux";
import {RootState} from "../../store";
import useMobile from "../../hooks/useMobile";

type howBuyStep = {
    id: number,
    image: string;
    imageDark: string;
    title: string;
    easy?: boolean;
    text?: string
    hasButton?: boolean
    animated?: boolean
}
const howBuySteps: howBuyStep[] = [
    {
        id: 4,
        image: '/1.svg',
        imageDark: '/1-d.svg',
        title: 'Выберите цифровой товар на&nbsp;сайте GUMROAD',
        text: 'Скопируйте ссылку на&nbsp;цифровой товар, который хотите купить'
    },
    {
        id: 5,
        image: '/2.svg',
        imageDark: '/2-d.svg',
        title: ' Отправьте заявку в&nbsp;telegram',
        hasButton: true,
        easy: true,
        text: 'Пришлите ссылку на курс, а дальше будем действовать мы⚡️'
    },
    {
        id: 6,
        image: '/3.svg',
        imageDark: '/3-d.svg',
        title: 'Приобретаем Вам цифровой&nbsp;товар ',
        text: `Мы купим товар за Вас, вышлем подтверждение покупки и номер электронного кошелька для оплаты наших услуг.
         После перевода средств вы получите доступ к&nbsp;товару.`
    },
]
const HowBuy = () => {

    const [steps, setSteps] = useState<howBuyStep[]>(howBuySteps);
    const wrapRef = useAnimation<howBuyStep>(steps, setSteps);
    const theme = useSelector((state: RootState) => state.theme.mode);
    const isLight = theme === 'light';
    const isMobile = useMobile(479);

    return (
        <div className={styles.howBuyWrap}>
            <section className={`${styles.howBuy} container`} id='howBuy'>
                <JsonLd<HowTo>
                    item={schema as any}
                />
                <h2 className={`heading ${styles.heading}`}>
                    Как оплатить GUMROAD?
                </h2>
                <ul className={styles.steps} ref={wrapRef}>
                    {
                        steps.map(step => {
                            return (
                                <li key={step.id}
                                    className={`${styles.step} ${step.animated ? styles.active : ''}
                                     ${isLight ? styles.step_light : styles.step_dark}`}>
                                    {step.easy && !isMobile &&        <Image src='/easy.svg'
                                                                 width={195.543457}
                                                                 height={195.543579}
                                                                 loading='lazy'
                                                                 className={styles.easy}
                                                                 alt='RusGumroad. Gumroad как купить. Gumroad как оплатить российской картой.'/>
                                    }
                                    <div className={styles.stepContent}>
                                        <Image src={isLight ? step.image : step.imageDark}
                                               title="RusGumroad. Gumroad как купить. Gumroad как оплатить российской картой."
                                               alt='RusGumroad. Gumroad как купить. Gumroad как оплатить российской картой.'
                                               width={55} height={55} loading={'lazy'}/>

                                        <h3 className={`${styles.stepTitle} ${isLight ? styles.stepTitle_light : styles.stepTitle_dark}`}
                                            dangerouslySetInnerHTML={{__html: step.title}}/>
                                        {!!step.hasButton &&
                                            <RippleButton to="https://t.me/rus_udemy"
                                                          className={`${styles.telegramLink} ${isLight ? styles.telegramLink_light : styles.telegramLink_dark}`}
                                                          target='_blank'>
                                                <Image src='/telegram.svg'
                                                       width={12}
                                                       height={12}
                                                       loading='lazy'
                                                       alt='RusGumroad. Gumroad как купить. Gumroad как оплатить российской картой.'/>
                                                @rus_udemy
                                            </RippleButton>}
                                        {!!step.text &&
                                            <p className={styles.stepText} dangerouslySetInnerHTML={{__html: step.text}}/>}
                                    </div>

                                </li>
                            )
                        })
                    }
                </ul>
            </section>
        </div>
    );
};

export default HowBuy;
import React, {useRef, useState} from "react";
import styles from './Accordion.module.scss'
import RippleButton from "../RippledButton";

export type AccordionType = {
    id: number
    content: string
    title: string
    className?: string
    animated?: boolean
    isHeading?: boolean
    children?: React.ReactNode
}
const Accordion:React.FC<AccordionType> = ({id, className = '', content, title, isHeading}) => {

    const [heightState, setHeightState] = useState<string>("0px");

    const [activeTab, setActiveTab] = useState<number>(-1);

    const isActive = activeTab === id;

    const ref = useRef<HTMLDivElement>(null);

    const toggleAccordion = () => {
        setActiveTab(() => activeTab === id ? -1 : id);
        setHeightState(() => isActive ? "0px" : `${ref.current!.scrollHeight}px`);
    }

    return (
        <div className={`${styles.accordionSection} ${isActive ? styles.isActive : ''} ${className}`}>
            <RippleButton className={`${styles.accordion} ${isActive ? styles.active : ""}`} onClick={toggleAccordion}>
                {!isHeading &&  <span className={styles.accordion_title} dangerouslySetInnerHTML={{__html: title}}/>}
                {isHeading &&  <h2 className={styles.accordion_title} dangerouslySetInnerHTML={{__html: title}}/>}
            </RippleButton>
            <div
                ref={ref}
                style={{maxHeight: `${heightState}`}}
                className={styles.accordion_content}>
                <div
                    className={styles.accordion_text}
                    dangerouslySetInnerHTML={{__html: content}}
                />
            </div>
        </div>
    );
};

export default Accordion;
import React from 'react';
import styles from './DescriptionLine.module.scss'
type DescriptionLineType = {
    children?: React.ReactNode,
    color?: string,
    text: string
}
const DescriptionLine:React.FC<DescriptionLineType> = ({color, text}) => {
    return (
        <div style={{color: color || '#40C8E0'}} className={`${styles.descriptionLine} container`}>
            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.1441 2.24899L10.1624 7.499L12.6653 7.49998C13.3375 7.49998 13.733 8.17956 13.3503 8.67697L8.35106 15.175C7.88603 15.7795 6.83285 15.4832 6.83285 14.748L6.83174 9.504L4.33465 9.50439C3.66343 9.50439 3.26771 8.82653 3.64846 8.32896L8.62469 1.82594C9.08786 1.22067 10.1415 1.51403 10.1441 2.24899Z" fill={color || '#40C8E0'}/>
            </svg>
            {text}
        </div>
    );
};

export default DescriptionLine;
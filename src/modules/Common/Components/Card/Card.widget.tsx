import { Children, type FunctionComponent } from "react";
import styles from './Card.module.scss';
import { style } from "motion/react-client";
import no_photo from './images/photo-svgrepo-com.svg'

export interface CardProperties {
    componentsRatio: {
        img: string,
        content: string,
        footer: string
    },
    onClick: () => void;
    title: string, 
    subtitle: string
    children: React.ReactNode
}

const initialCardProps: CardProperties = {
    componentsRatio: {
        img: '30%',
        content: '50%',
        footer: '20%'
    },
    onClick: () => {},
    title:'default',
    subtitle: 'default',
    children: 'hello'
}

const Card : FunctionComponent<CardProperties> = (props) => {

    const footer = () => {
        return (
            <>
                <button>Share</button>
            </>
        )
    }

    return (
        <div className={styles.cardContainer}
            onClick={() => props.onClick()}
        >
            <div 
                style={{
                    height: props.componentsRatio.img
            }}>
                <img src="./images/photo-svgrepo-com.svg"></img>
            </div>
            <div
                style={{
                    height: props.componentsRatio.content,
                    display: 'flex',
                    flexDirection: 'column',
                    overflow: 'hidden' 
                }}>
                <p className={`${styles.textLine} ${styles.title}`}>{props.title}</p>
                <p className={`${styles.textLine} ${styles.subtitle}`}>{props.subtitle}</p>
                <p className={styles.textContent}>
                    {props.children}
                </p>
            </div>
            <div
             style={{
                height: props.componentsRatio.footer
             }}
             >{footer()}</div>
        </div>
    )
}

export default Card;
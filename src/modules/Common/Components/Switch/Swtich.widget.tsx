import { useState, type FunctionComponent } from 'react'
import styles from './Swtich.module.scss'
import * as motion from 'motion/react-client';

export interface SwitchProperties {
    functionality: () => void
    customStyle?: {
        boxHeight?: string
    }
}



const Switch: FunctionComponent<SwitchProperties> = (props) => {
    const [active, setActive] = useState<boolean>(false);

const onSwitchClick = () => {
    setActive(!active);
}


    return (
    <div className={styles.box}
        onClick={() => {
            onSwitchClick();
            props.functionality();
        }}
        style={{
            justifyContent: active ? 'flex-end' : 'flex-start'
        }}
    >
        <motion.div 
            className={`${styles.switch} ${active ? styles.on : styles.off}`}
            layout
            transition={
                {
                    type: 'spring',
                    visualDuration: 0.4,
                    bounce: 0.2
                }
            }
        >
        </motion.div>
    </div>);
}



export default Switch;
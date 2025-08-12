
import type { FunctionComponent } from "react";
import styles from './Footer.module.scss';

const Footer: FunctionComponent = () => {
    return (
        <div className={styles.footer}>
            <p>Prezes zarządu : Adrian Holubecki</p>
        </div>
    )
}

export default Footer;
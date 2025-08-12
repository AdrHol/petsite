import type { FunctionComponent } from "react";
import type { MenuItem } from "primereact/menuitem";
import styles from './Header.module.scss';

const navlinks: MenuItem[] =[
    {
        label: "Hello"
    }
] 
const Header: FunctionComponent = () => {
    return (
        <div className={styles.header}>
            <div>
                Here Will be logo
            </div>
            <div>Kocie zycie </div>
            <div>links</div>
        </div>
    )
}

export default Header;
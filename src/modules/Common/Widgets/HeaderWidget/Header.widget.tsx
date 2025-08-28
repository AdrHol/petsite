import type { FunctionComponent } from "react";
import type { MenuItem } from "primereact/menuitem";
import styles from './Header.module.scss';
import Switch from "@common/Components/Switch/Swtich.widget";
import { Link } from "react-router";
import useWindowSize from "@common/Hooks/useWindowSize.hook";

const navlinks: MenuItem[] =[
    {
        label: "Hello"
    }
] 
const Header: FunctionComponent = () => {
    const { isMobile } = useWindowSize();

    const onSwitchChange = () => {
        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    console.log(position.coords);
                },
                (error) => {
                    console.log("dispatching state of error");
                }
            );
        } else {
            console.log('not working');
        }
    }
    return (
        <div className={styles.header}>
            <div>
                Here Will be logo
            </div>
            { isMobile() ? '' : <div>Kocie zycie </div>}
            <ul style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '10px',
                listStyle: 'none'
            }}>
                <li className={styles.headerButtonHolder}>
                    <Link to={'/missings'}>Szukaj</Link>
                </li>
                <li className={styles.headerButtonHolder}>
                    {isMobile() ? '' : <label>Dodaj zgłoszenie</label>}
                    <Link to={'/report'}
                        style={{
                            padding: '5px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            border: '1px solid grey',
                            borderRadius: '3px',
                            backgroundColor: 'aliceblue',
                            color: 'black'
                        }}
                    >+</Link>
                </li>
                <li className={styles.headerButtonHolder}>
                    {isMobile() ? '' :  <label>Tryb lokalizacji: </label>}
                    
                    <Switch functionality={() => onSwitchChange()}></Switch>
                </li>
            </ul>
        </div>
    )
}

export default Header;
import type { FunctionComponent } from "react";
import type { MenuItem } from "primereact/menuitem";
import styles from './Header.module.scss';
import Switch from "@common/Components/Switch/Swtich.widget";
import { Link } from "react-router";

const navlinks: MenuItem[] =[
    {
        label: "Hello"
    }
] 
const Header: FunctionComponent = () => {


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
            <div>Kocie zycie </div>
            <ul style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '10px',
                listStyle: 'none'
            }}>
                <li className={styles.headerButtonHolder}>
                    <label>Dodaj zgłoszenie</label>
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
                    <label>Tryb lokalizacji: </label>
                    <Switch functionality={() => onSwitchChange()}></Switch>
                </li>
            </ul>
        </div>
    )
}

export default Header;
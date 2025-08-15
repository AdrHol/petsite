import type { FunctionComponent } from "react";
import type { MenuItem } from "primereact/menuitem";
import styles from './Header.module.scss';
import Switch from "@common/Components/Switch/Swtich.widget";

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
                listStyle: 'none'
            }}>
                <li style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <label>Tryb lokalizacji: </label>
                    <Switch functionality={() => onSwitchChange()}></Switch>
                </li>
            </ul>
        </div>
    )
}

export default Header;
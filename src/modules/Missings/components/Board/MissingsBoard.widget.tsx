import { useState, type FunctionComponent } from "react";
import styles from './MissingsBoard.module.scss'
import {SelectButton} from 'primereact/selectbutton';

const connectionButtonLabels = [
  { label: 'On', value: 'On' },
  { label: 'Off', value: 'Off' }
];

const MissingsBoard: FunctionComponent = () => {

    const [local, setLocal] = useState(connectionButtonLabels[0]);

    const onChange = (e: any) => {
        setLocal(e);
    }

    return (
    <div className={styles.missingsBoard}>
        <div className={styles.controls}>
            <ul>
                <li>
                    <span>Tryb lokalny: </span> 
                </li>
            </ul>
        </div>
        <div className={styles.display}></div>
    </div>)
}

export default MissingsBoard;
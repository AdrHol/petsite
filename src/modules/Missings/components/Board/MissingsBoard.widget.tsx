import { type FunctionComponent } from "react";
import styles from './MissingsBoard.module.scss'
import ControlPanel from "../ControlPanel/ControlPanel.widget";
import MissingsDisplay from "../MissingsDisplay/MissingsDisplay.widget";


const data = [1,2,3,4];
const MissingsBoard: FunctionComponent = () => {
    return (
    <div className={styles.missingsBoard}>
        <div className={styles.controls}>
            <ControlPanel></ControlPanel>
        </div>
        <div className={styles.display}>
            <MissingsDisplay records={data}></MissingsDisplay>
        </div>
    </div>)
}

export default MissingsBoard;
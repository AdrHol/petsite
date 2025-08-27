import { type FunctionComponent } from "react";
import styles from './MissingsBoard.module.scss'
import MissingsDisplay from "../MissingsDisplay/MissingsDisplay.widget";
import ControlPanel from "../ControlPanelComponent/ControlPanel.widget";
import type { NarrowMissing } from "@common/data/NarrowMissing";


const data: NarrowMissing[] = [
    {
        id: '32314d',
        title: 'Super kotek',
        subtitle: 'maly rudy',
        shortDescription: 'znaleziony na budowie'
    }
];




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
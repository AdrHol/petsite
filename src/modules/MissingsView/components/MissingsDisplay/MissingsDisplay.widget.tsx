import type { FunctionComponent } from "react";
import styles from './MissingsDisplay.module.scss';
import Missing from "../MissingComponent/Missing.widget";
import type { NarrowMissing } from "@common/data/NarrowMissing";

export interface MissingsDashboardProps {
    records : NarrowMissing[]
}

const MissingsDisplay: FunctionComponent<MissingsDashboardProps> = (props) => {
    return (
        <>
            <input 
                className={styles.searchInput}
                placeholder="Szukaj"></input>
            <div className={styles.missingsDisplay}>
                {props.records.map(record=> <Missing key={record.id} data={record}></Missing>)}
            </div>
        </>
    )
}

export default MissingsDisplay;
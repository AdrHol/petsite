import type { FunctionComponent } from "react";
import styles from './MissingsDisplay.module.scss';
import Missing from "../Missing/Missing.widget";

export interface MissingsDashboardProps {
    records : any[]
}

const MissingsDisplay: FunctionComponent<MissingsDashboardProps> = (props) => {
    return (
        <>
            <input 
                className={styles.searchInput}
                placeholder="Szukaj"></input>
            <div>
                {props.records.map(record => <Missing></Missing>)}
            </div>
        </>
    )
}

export default MissingsDisplay;
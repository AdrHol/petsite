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
            <div className={styles.missingsDisplay}>
                {props.records.map((record, index)=> <Missing key={index}></Missing>)}
            </div>
        </>
    )
}

export default MissingsDisplay;
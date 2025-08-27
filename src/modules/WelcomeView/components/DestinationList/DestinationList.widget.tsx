import type { FunctionComponent } from "react";
import styles from './DestinationList.module.scss'
import { useNavigate } from "react-router";
import { ApplicationPaths } from "../../../../routes/ApplicationPaths";


const buttonsData = [
    {text: 'Zgłoszenia', path: ApplicationPaths.MISSINGS},
    {text: 'Zgłoś', path: ApplicationPaths.REPORT_PATH},

]

const DestinationList: FunctionComponent = () => {
    const navigate = useNavigate();
    return (
        <div style={{display: 'flex', justifyContent: 'space-around'}}>
            {buttonsData.map((item, index) =><button key={index} className={styles.destinationButton} onClick={() => navigate(item.path)}>
                {item.text}
            </button>)}
        </div>
    )
}

export default DestinationList;
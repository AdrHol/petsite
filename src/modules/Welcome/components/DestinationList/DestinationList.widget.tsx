import type { FunctionComponent } from "react";
import styles from './DestinationList.module.scss'
import { useNavigate } from "react-router";
import { ApplicationPaths, composeUrl } from "../../../../routes/ApplicationPaths";


const DestinationList: FunctionComponent = () => {
    const navigate = useNavigate();
    return (
        <>
        <button onClick={() => navigate(ApplicationPaths.MISSINGS)}>
            Zgłoszenia
        </button>
        <button onClick={() => navigate(composeUrl(ApplicationPaths.MISSINGS, ApplicationPaths.REPORT))}>
            Zgłoś
        </button>
        </>
    )
}

export default DestinationList;
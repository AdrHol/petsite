import type { FunctionComponent } from "react";
import styles from './DetailedMissingView.module.scss';
import type { DetailedMissing } from "@common/data/DetailedMissing";

export interface DetailedMissingComponentProps {
    data: DetailedMissing;
}

const DetailedMissingComponent: FunctionComponent<DetailedMissingComponentProps> = ( props ) => {


    const renderContact = (contact: {email?: string, phone?: number}) => {
        return (<>
            {contact.email ? <p className={styles.contactHolder}>Email: {contact.email}</p> : ''}
            {contact.phone ? <p className={styles.contactHolder}>Telefon: {contact.phone}</p> : ''}
        </>
        )
    }

    return (
        <div className={styles.box}>
            <div className={styles.dataContainer}>
                <div className={styles.titleSpace}>
                    {props.data.title}
                </div>
                <div className={styles.subTitleSpace}>
                    {props.data.subtitle}
                </div>
                <div className={styles.localizationSpace}>
                    <div>
                        <p>Lokalizacja: </p>
                        <p className={styles.locationHolder}>{props.data.location ? props.data.location.city : 'Brak lokalizacji'}</p>
                    </div>
                    <div>
                        <p>Kontakt: </p>
                        {props.data.contact ? renderContact(props.data.contact) : <p className={styles.contactHolder}>Pusto tu...</p>}
                    </div>
                </div>
                <div className={styles.descriptionSpace}>
                    {props.data.descirption}
                </div>
                <div className={styles.actionsSpace}>
                    <button>Zgłos</button>
                    <button>Wiadomość</button>
                    <button>Udostepnij</button>
                </div>
            </div>
            <div className={styles.mapSection}>
                <div>obraz</div>
                <div>mapa</div>
            </div>
        </div>
    )
}

export default DetailedMissingComponent;
import { useEffect, useRef, useState, type FunctionComponent, type RefObject } from "react";
import styles from './Report.module.scss';
import { em } from "motion/react-client";
import useWindowSize from "@common/Hooks/useWindowSize.hook";

const ReportFormComponent: FunctionComponent = () => {
    const { isMobile } = useWindowSize();
    const [editable, setEditable] = useState<boolean>(true);
    const [photo, setPhoto] = useState<string | null>(null);
    const [mobileMapActive, setMobileMapActive] = useState<boolean>(false);
    const title = useRef<string>('');
    const subtitle = useRef<string>('');
    const description = useRef<string>('');
    const city = useRef<string>('');
    const email = useRef<string>('');
    const phone = useRef<string>('');

    useEffect(() => {
    }, [editable])


    const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement> ) => {
        const file = e.target.files?.[0];
        if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
            setPhoto(reader.result as string); // base64 string
        };
        reader.readAsDataURL(file);
        }
    }
    const prepareInput = (placeholder: string, ref: RefObject<any>) => {
        return (
            <input placeholder="Tytuł" 
                onFocus={(e) => e.target.value = ref.current}
                onBlur={(e) => ref.current = e.target.value}>
            </input>
        )
    }

    const validateForm : () => boolean = () => {
        return !!(title.current 
            && subtitle.current 
            && (phone.current || email.current) 
            && description.current
            && city.current);
    }

    const renderMobileMedia = () => {
        return mobileMapActive ? renderMapSection() : renderPhotoSection();
    }
    const renderPhotoSection = () => {
        return (<div className={styles.photoSpace}>
                    {editable ? (
                            <input type="file" accept="image/*" onChange={handlePhotoUpload} />
                        ) : photo ? (
                            <img
                            src={photo}
                            alt="Uploaded"
                            className={styles.previewImage}
                            />
                        ) : (
                            <p>Brak zdjęcia</p>
                        )}
                </div>)
    }
    const renderMapSection = () => {
        return <div className={styles.mapSpace}>mapa</div>
    }
    return (
    <div className={styles.box}>
            <div className={styles.dataContainer}>
                {isMobile() ? renderMobileMedia() : ''}
                <div className={styles.titleSpace}>
                    {editable ? 
                    <input placeholder={title.current ? title.current : 'Tytuł'}
                        onFocus={(e) => e.target.value = title.current}
                        onBlur={(e) => title.current = e.target.value}>
                    </input> : title.current}
                </div>
                <div className={styles.subTitleSpace}>
                    {editable ? 
                    <input placeholder={subtitle.current ? subtitle.current : 'Podtytuł'} 
                        onFocus={(e) => e.target.value = subtitle.current}
                        onBlur={(e) => subtitle.current = e.target.value}>
                    </input> : subtitle.current}
                </div>
                <div className={styles.localizationSpace}>
                    <div>
                        <p>Lokalizacja: </p>
                        <p className={styles.locationHolder}>
                            {editable ? 
                                <input placeholder={city.current ? city.current : 'Miasto'}
                                    onFocus={(e) => e.target.value = city.current}
                                    onBlur={(e) => city.current = e.target.value}>
                                </input> : city.current}
                        </p>
                        {isMobile() ? <p><button onClick={() => setMobileMapActive(!mobileMapActive)}>Mapa</button></p> : ''}
                    </div>
                    <div>
                        <p>Kontakt: </p>
                        <p className={styles.contactHolder}>
                            {editable ? 
                                <input placeholder={email.current ? email.current : 'Email'}
                                    onFocus={(e) => e.target.value = email.current}
                                    onBlur={(e) => email.current = e.target.value}>
                                </input> : `Email: ${email.current}`}
                        </p>
                        <p className={styles.contactHolder}>
                            {editable ? 
                                <input placeholder={phone.current ? phone.current : 'Telefon'}
                                    onFocus={(e) => e.target.value = phone.current}
                                    onBlur={(e) => phone.current = e.target.value}>
                                </input> : `Telefon: ${phone.current}`}
                        </p>
                    </div>
                </div>
                <div className={styles.descriptionSpace}>
                        {editable ? 
                            <textarea placeholder={description.current ? description.current : 'Opis'}
                                onFocus={(e) => e.target.value = description.current}
                                onBlur={(e) => description.current = e.target.value}>
                            </textarea> : description.current}
                </div>
                <div className={styles.actionsSpace}>
                    <button
                        onMouseEnter={() => console.log(validateForm())}
                    >Wyślij</button>
                    <button onClick={()=> setEditable(!editable)}>{editable ? 'Podgląd' : 'Edycja'}</button>
                </div>
            </div>
            { !isMobile() ? 
            <div className={styles.mapSection}>
                {renderPhotoSection()}
                {renderMapSection()}
            </div> : ''}
        </div>
        )
}

export default ReportFormComponent;
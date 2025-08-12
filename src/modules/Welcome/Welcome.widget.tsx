import DestinationList from './components/DestinationList/DestinationList.widget';
import Board from './components/WelcomeBoard/Board.widget';
import styles from './Welcome.module.scss';

const Welcome: React.FunctionComponent = () => {
    return (
    <div className={styles.wrapper}>
        <div className={styles.wallpaper}>
            <div>
                <Board/>
                <DestinationList></DestinationList>
            </div>
        </div>
    </div>)
}

export default Welcome;


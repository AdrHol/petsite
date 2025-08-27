import Wrapper from '@common/Components/Wrapper/Wrapper.widget';
import DestinationList from './components/DestinationList/DestinationList.widget';
import Board from './components/WelcomeBoard/Board.widget';
import styles from './Welcome.module.scss';

const Welcome: React.FunctionComponent = () => {
    return (
    <Wrapper>
        <div className={styles.wallpaper}>
            <div>
                <Board/>
                <DestinationList></DestinationList>
            </div>
        </div>
    </Wrapper>
    )
}

export default Welcome;


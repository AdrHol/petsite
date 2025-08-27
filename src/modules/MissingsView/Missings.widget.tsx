import type { FunctionComponent } from 'react';
import styles from './Missings.module.scss';
import Wrapper from '@common/Components/Wrapper/Wrapper.widget';
import MissingsBoard from './components/BoardComponent/MissingsBoard.widget';


const Missings: FunctionComponent = () => {
    return (
        <Wrapper style={{justifyContent: 'center', padding: '30px'}}>
            <MissingsBoard></MissingsBoard>
        </Wrapper>
    );
}




export default Missings;
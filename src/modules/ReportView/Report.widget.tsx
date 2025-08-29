import type { FunctionComponent } from 'react';
import styles from './Report.module.scss';
import Wrapper from '@common/Components/Wrapper/Wrapper.widget';
import ReportFormComponent from './ReportFormComponent.widget';
import useWindowSize from '@common/Hooks/useWindowSize.hook';


const Report : FunctionComponent = () => {
    const { isMobile } = useWindowSize();
    return (
        <Wrapper style={{
            display: 'flex',
            justifyContent: 'center',
            padding: '30px',
            paddingLeft: isMobile() ? '0' : '30px',
            paddingRight: isMobile() ? '0' : '30px'
        }}>
            <div style={{
                border: '1px solid black',
                width: '80%'
            }}>
                <ReportFormComponent></ReportFormComponent>
            </div>
        </Wrapper>
    )
}


export default Report;
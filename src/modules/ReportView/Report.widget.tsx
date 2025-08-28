import type { FunctionComponent } from 'react';
import styles from './Report.module.scss';
import Wrapper from '@common/Components/Wrapper/Wrapper.widget';
import ReportFormComponent from './ReportFormComponent.widget';


const Report : FunctionComponent = () => {
    return (
        <Wrapper style={{
            display: 'flex',
            justifyContent: 'center',
            padding: '30px'
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
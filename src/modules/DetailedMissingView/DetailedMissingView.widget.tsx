import Wrapper from "@common/Components/Wrapper/Wrapper.widget";
import { useEffect, useState, type FunctionComponent } from "react";
import { useParams } from "react-router";
import styles from './DetailedMissingView.module.scss';
import DetailedMissingComponent from "./DetailedMissingComponent.widget";
import type { DetailedMissing } from "@common/data/DetailedMissing";


const database: DetailedMissing[] = [
    {
        id: '32314d',
        title: 'super kotek',
        subtitle: 'maly rudy',
        descirption: 'znaleziony na budowie obok mojego domu, prosze o pilny kontakt',
        animalType: 'CAT',
        reportType: 'FOUND',
        contact: {
            email: 'buziaczek@wp.pl',
            phone: 765453332
        }
    }
]

const DetailedMissingView: FunctionComponent = () => {
    const param = useParams();
    const [data, setData] = useState<DetailedMissing | undefined>(undefined);
    useEffect(() => {
        console.log("fetching data for: ");
        console.log(param.id);
        let temp = database.filter(e => e.id === param.id)[0];
        setData(temp);
    }, []);

    return <Wrapper style={{
                justifyContent: 'center',
                padding: '30px'}}>
                    {data ? <DetailedMissingComponent data={data}></DetailedMissingComponent> : <div>... fetching data</div>}
            </Wrapper>
}


export default DetailedMissingView;
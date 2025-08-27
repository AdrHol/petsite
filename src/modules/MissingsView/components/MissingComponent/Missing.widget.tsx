import Card from "@common/Components/Card/Card.widget";
import type { NarrowMissing } from "@common/data/NarrowMissing";
import type { FunctionComponent } from "react";
import { useLocation, useNavigate } from "react-router";

export interface MissingProps {
    data: NarrowMissing
}

const Missing: FunctionComponent<MissingProps> = (props) => {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <>
            <Card 
                onClick={() => {
                    navigate(location.pathname + `/${props.data.id}`);
                }}
                componentsRatio={{
                        img: '30%',
                        content: '50%',
                        footer: '20%'
                    }}
                title={props.data.title}
                subtitle={props.data.subtitle}
                >
                {props.data.shortDescription}
            </Card>
        </>
    )
}

export default Missing;
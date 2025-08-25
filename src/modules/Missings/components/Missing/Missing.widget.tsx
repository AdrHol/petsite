import Card from "@common/Components/Card/Card.widget";
import type { FunctionComponent } from "react";

const Missing: FunctionComponent = () => {
    
    return (
        <>
            <Card 
                componentsRatio={{
                        img: '30%',
                        content: '50%',
                        footer: '20%'
                    }}
                title="Hello Title but some very large "
                subtitle="Hello Subtitle"
                >
                {'Very Very long text to check if it will work fine if i have alot of content but it seems ok , bue'}
            </Card>
        </>
    )
}

export default Missing;
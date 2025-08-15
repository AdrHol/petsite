import { useState, type FunctionComponent } from "react";
import {InputText} from 'primereact/inputtext';
import { Slider } from 'primereact/slider';
import { MultiSelect } from 'primereact/multiselect';

const speciesTypes = [
    {name: 'Kot', code: 'CAT'},
    {name: 'Pies', code: 'DOG'},
]


const reportType = [
    {name: 'Znalezione', code: 'FOUND'},
    {name: 'Szukam', code: 'MISSING'},
]

const ControlPanel : FunctionComponent = () => {

    const [inputValue, setInputValue] = useState();
    const [sliderValue, setSliderValue] = useState();
    const [selectedSpecies, setSelectedSpecies] = useState();
    const [selectedReports, setSelectedReports] = useState();

    return(
        <ul 
            style={{
                listStyle: 'none'
            }}>
                <li>
                    <InputText id="city" placeholder="Miasto" value={inputValue} onChange={(e: any) => setInputValue(e.target.value)}/>
                </li>
                <li>
                    <span>Kilometry</span>
                    <InputText value={sliderValue} onChange={(e: any) => setSliderValue(e.target.value)} />
                    <Slider value={sliderValue} onChange={(e: any) => setSliderValue(e.value)} />
                </li>
                <li>
                    <MultiSelect value={selectedSpecies} onChange={(e: any) => setSelectedSpecies(e.value)} options={speciesTypes} optionLabel="name" 
                        placeholder="Gatunek" maxSelectedLabels={3} className="w-full md:w-20rem" />
                </li>
                <li>
                    <MultiSelect value={selectedReports} onChange={(e: any) => setSelectedReports(e.value)} options={reportType} optionLabel="name" 
                        placeholder="Zgłoszenie" maxSelectedLabels={3} className="w-full md:w-20rem" />
                </li>
            </ul>
    )
}


export default ControlPanel;
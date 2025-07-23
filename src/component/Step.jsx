import { useRef,useState } from 'react';
import data from '../data.json';
import SelectPopup from './SelectPopup';

const stepTypes = [
    {label:"Quand",value:"WHEN"},
    {label:"Et que",value:"WHEN"},
    {label:"Alors",value:"THEN"},
    {label:"Et",value:"THEN"},
    {label:"Etant donné que",value:"GIVEN"}
]


function format(stepData)
{
    const regexp = new RegExp(/^(.*)"(.*)"(.*)$/)
    const matchedData = Object.keys(stepData)[0].match(regexp)
    return {type:<div>{matchedData[1]}</div>}
}

function Step(){
    const [step,setStep] = useState(null)
    const [stepTypeLabel,setStepTypeLabel] = useState(null)
    const [showPopup,setShowPopup] = useState(false)
    
    let stepRender;
    let popup;

    if(showPopup)
    {
        popup = <SelectPopup placeholder={stepTypeLabel ? stepTypeLabel: "Choisir une étape"} optionList={stepTypes.map((item) => item.label)} cancelCallback={() => setShowPopup(false)} applyCallback={(value) => {setStep(<div>{value}</div>);setShowPopup(false)}}/>
    }

    if(!step)
    {
        stepRender = 
            <div onClick={() => {setShowPopup(true)}} className="text-gray-700 size-18 hover:text-blue-500">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
            </div>;
    } else {
        stepRender = step
    }

    return (
        <div className="flex">
            {stepRender}
            {popup}
        </div>
    )
}

export default Step
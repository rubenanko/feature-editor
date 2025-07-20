import { useRef,useState } from 'react';
import data from '../data.json';

function format(stepData)
{
    const regexp = new RegExp(/^(.*)"(.*)"(.*)$/)
    const matchedData = Object.keys(stepData)[0].match(regexp)
    return [{label:<div>{matchedData[1]} <Select style={{"z-index":"5"}} /> {matchedData[3]}</div>}]
}

function Step(){
    const stepTypes = [{label:"Quand",value:"WHEN"},{label:"Et que",value:"WHEN"},{label:"Alors",value:"THEN"},{label:"Et",value:"THEN"},{label:"Etant donné que",value:"GIVEN"},]
    const [stepOptions,setStepOptions] = useState([])
    
    return (
        <div style={{"display": "flex"}}>
            {/* <Select onChange={(value) => {setStepOptions(format(data[value.value]))}} placeholder="Type" options={stepTypes}/> */}
            {/* <Select onChange={(value) => {setStepOptions(Object.keys(data[value.value]).map(value => {return {"label" : value}}))}} placeholder="Type" options={stepTypes}/> */}
            {/* <Select options={stepOptions} /> */}
        </div>
    )
}

export default Step
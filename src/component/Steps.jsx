import { useState } from "react"
import Step from "./Step"


function Steps() {
    const [steps,setSteps] = useState([]);
    const removeStep = (index) => {
        let tmpStep = [...steps]
        tmpStep.splice(index,1)
        setSteps(tmpStep)
    }

    const addStep = () => {setSteps([...steps,
    <div style={{"display":"flex"}}>
        <Step/>
        <button onClick={()=>removeStep(steps.length)}>Supprimer</button>
    </div>
])}

    return (
        <div>
            {steps}
            <button onClick={addStep}>Ajouter une nouvelle étape</button>
        </div>
    )
}

export default Steps
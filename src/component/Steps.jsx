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
        <button className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900" onClick={()=>removeStep(steps.length)}>Supprimer</button>
    </div>
])}

    return (
        <div>
            {steps}
            <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={addStep}>Ajouter une nouvelle étape</button>
        </div>
    )
}

export default Steps
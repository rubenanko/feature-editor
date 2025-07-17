import Select from 'react-select';

function Step(){
    const stepTypes = [{label:"Quand",value:"WHEN"},{label:"Et que",value:"WHEN"},{label:"Alors",value:"THEN"},{label:"Et",value:"THEN"},{label:"Etant donné que",value:"GIVEN"},]

    return (
        <div style={{"display": "flex"}}>
            <Select placeholder="Type" options={stepTypes}/>
            <Select />
        </div>
    )
}

export default Step
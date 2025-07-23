import { useState } from "react"

function SelectPopup({header,placeholder,beforePlaceholder,afterPlaceholder,optionList,applyCallback,cancelCallback})
{
    const [value,setValue] = useState(placeholder);
    const options = [];

    let applyButton;

    if(value != placeholder)
    {
        applyButton = <button onClick={() => applyCallback(value)} className="glass-button !outline-none cursor-pointer px-4 rounded-lg py-2 text-2xl text-gray-700">Appliquer</button>;
    } else {
        applyButton = <button disabled="true" className="glass-button !outline-none px-4 rounded-lg py-2 text-2xl text-gray-700">Appliquer</button>;
    }

    for(let option of optionList)
    {
        options.push(
        <li className="mb-2">
            <button onClick={() => setValue(option)} className="glass-button !outline-none cursor-pointer px-4 py-2 text-2xl text-gray-700 hover:bg-gray-100 border border-gray-700">
                <div class="inline-flex items-center">
                    {option}
                </div>
            </button>
        </li>
        )
    }


    return(
        <div className="glass w-1/2 h-1/2 z-9 flex flex-col flex-wrap transform -translate-x-1/2 -translate-y-1/2 borde fixed backdrop-blur-[1px]">
                <div className="glass w-2/3 h-fit justify-center place-self-center flex mt-10 gap-2 text-gray-700 border border-gray-700 font-medium text-2xl px-5 py-2.5 text-center me-2 mb-10">
                    <p>{beforePlaceholder}</p><p className="text-gray-800">{value}</p><p>{afterPlaceholder}</p>   
                </div>
                <div className="place-self-center">
                    <ul className="mb-10 flex flex-wrap gap-4">
                        {options}
                    </ul>
                </div>
                <div className="flex place-self-center gap-64">
                    <button onClick={cancelCallback} className="glass-button !outline-none cursor-pointer px-4 py-2 text-2xl text-gray-700">Annuler</button>
                    {applyButton}
                </div>
        </div>
    )
}

export default SelectPopup
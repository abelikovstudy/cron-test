import Select from 'react-select'

export function SelectCustom({
    isMulti,
    options
}){
    return(
        <Select
        isMulti={isMulti} 
        options={options} 
        closeMenuOnSelect={false} 
        classNamePrefix="react-select" 
        className="react-select--inline" 
        components={{IndicatorsContainer: () => null}}
        />
    )
}
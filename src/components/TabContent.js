import React from 'react';
import { SelectCustom } from './SelectCustom';
export function TabContent({
    name,
    id,
    selectValues,
    tabIndex,
    corn
  }){
    const [choices, setChoices] = React.useState([true, true])
    const [span, setSpan] = React.useState("Every")
    const [dates, setDates] = React.useState({
      span : span
    })
  
    const onOptionChange = e => {
      setSpan(e.target.value)
      switch(e.target.value){
        case "Between":
          setChoices([false,true])  
        break;
        case "Specific":
          setChoices([true,false])
        break;
      }
    }
    React.useEffect(() => {corn(dates,tabIndex)},[dates])
    const onDateChange = (selectValues,name) => {
      setDates({
        ...dates,
        [name] : selectValues,
        span : span 
      })
    }
    return (
      <div className="SpanSelect">
        <div className="SpanSelect-Option">
            <input type="radio" name={name} value="Every" id={id} onChange={onOptionChange} defaultChecked />
            <label class="SpanSelect-Element" htmlFor="every">Every {name}.</label> <br />
        </div>
        
        <div className="SpanSelect-Option">
            <input type="radio" name={name} value="Between" id={id} onChange={onOptionChange}/>
            <label class="SpanSelect-Element" htmlFor="everystart">Between <SelectCustom name="between_start" isMulti={false} options={selectValues} onDateChange={onDateChange} isDisabled={choices[0]}/> {name} and <SelectCustom name="between_end" isMulti={false} options={selectValues} onDateChange={onDateChange} isDisabled={choices[0]}/> {name}.</label> <br />
        </div>
        
        <div className="SpanSelect-Option">
            <input type="radio" name={name} value="Specific" id={id} onChange={onOptionChange}/>
            <label class="SpanSelect-Element" htmlFor="specific">Specific {name}(s): <SelectCustom name="specific" isMulti={true} options={selectValues} onDateChange={onDateChange} isDisabled={choices[1]}/></label><br />    
        </div>
      </div>
    )
  }
import React from 'react';
import { SelectCustom } from './SelectCustom';
export function TabContent(props){
    const {name, id, selectValues, tabIndex, cron} = props
    const [enabledOption, setEnabledOption] = React.useState({
      every : true,
      between : false,
      specific : false
    })
    const [span, setSpan] = React.useState("Every")
    const [dates, setDates] = React.useState({
      span : span
    })
    React.useEffect(() => {cron(dates,tabIndex)},[dates])
    const onOptionChange = e => { 
      setSpan(e.target.value)
      setDates({
        ...dates,
        span : e.target.value,
      })
      switch(e.target.value){
        case "Between":
          setEnabledOption({
            every : false,
            between : true,
            specific : false
          })  
        break;
        case "Specific":
          setEnabledOption({
            every : false,
            between : false,
            specific : true
          })
        break;
      }
    }

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
            <label class="SpanSelect-Element" htmlFor="every">Every {name}.</label> 
            <br />
        </div>
        
        <div className="SpanSelect-Option">
            <input type="radio" name={name} value="Between" id={id} onChange={onOptionChange}/>
            <label class="SpanSelect-Element" htmlFor="everystart">Between 
            <SelectCustom 
            name="between_start" 
            isMulti={false} 
            options={selectValues} 
            onDateChange={onDateChange} 
            isEnabled={enabledOption.between}/> {name} and 
            <SelectCustom 
            name="between_end" 
            isMulti={false} 
            options={selectValues} 
            onDateChange={onDateChange} 
            isEnabled={enabledOption.between}/> {name}.
            </label>
            <br />
        </div>
        
        
        <div className="SpanSelect-Option">
            <input type="radio" name={name} value="Specific" id={id} onChange={onOptionChange}/>
            <label class="SpanSelect-Element" htmlFor="specific">Specific {name}(s): 
            <SelectCustom 
            name="specific" 
            isMulti={true} 
            options={selectValues} 
            onDateChange={onDateChange} 
            isEnabled={enabledOption.specific}/>
            </label>
            <br />    
        </div>
      </div>
    )
  }
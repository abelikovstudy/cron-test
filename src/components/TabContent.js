import { verifyValue } from '../utils';
import React from 'react';
import { SelectCustom } from './SelectCustom';
export function TabContent({
    name,
    id,
    selectValues,
    tabIndex,
    corn
  }){
    
    const [span, setSpan] = React.useState("Every")

  
    const onOptionChange = e => {
      setSpan(e.target.value)
    }
  
    return (
      <div className="SpanSelect">
        <div className="SpanSelect-Option">
            <input type="radio" name={name} value="Every" id={id} checked={span === "Every"} onChange={onOptionChange}/>
            <label class="SpanSelect-Element" htmlFor="every">Every {name}.</label> <br />
        </div>
        
        <div className="SpanSelect-Option">
            <input type="radio" name={name} value="Between" id={id} checked={span === "Between"} onChange={onOptionChange}/>
            <label class="SpanSelect-Element" htmlFor="everystart">Between <SelectCustom isMulti={false} options={selectValues}/> {name} and <SelectCustom isMulti={false} options={selectValues}/> {name}.</label> <br />
        </div>
        
        <div className="SpanSelect-Option">
            <input type="radio" name={name} value="Specific" id={id} checked={span === "Specific"} onChange={onOptionChange}/>
            <label class="SpanSelect-Element" htmlFor="specific">Specific {name}(s): <SelectCustom isMulti={true} options={selectValues}/></label><br />    
        </div>
        
    </div>
    )
  }


  /*
      const [spanBetweenStart, setSpanBetweenStart] = React.useState("0")
    const [spanBetweenEnd, setSpanBetweenEnd] = React.useState("0")
    const [spanSpec, setSpanSpec] = React.useState("0")
  
    const changeCron = (input) =>{
      switch(input){
        case 'Every':
          corn[tabIndex] = '*'
          break;
        case 'EveryStartingAt':
          if(verifyValue(spanBetweenStart,tabIndex) && verifyValue(spanBetweenEnd,tabIndex)){
            corn[tabIndex] = spanBetweenStart +  "-" + spanBetweenEnd
          }
          else{
            alert('Ошибка')
          }
          break;
        case 'Specific':
          let mins = spanSpec.split(',')
          for (let i = 0; i < mins.length; i++) {
            if(!verifyValue(mins[i],tabIndex)){
              alert('Ошибка')
              break;
            }
          }
          corn[tabIndex] = spanSpec      
          break;
        default:
          corn[tabIndex] = '*'
          break;
      }
    }
  */
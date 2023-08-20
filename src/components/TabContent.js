import { checkValue } from '../utils';
import React from 'react';

export function TabContent({
    name,
    id,
    tabIndex,
    corn
  }){
    const [span, setSpan] = React.useState("Every")
    const [spanBetweenStart, setSpanBetweenStart] = React.useState("0")
    const [spanBetweenEnd, setSpanBetweenEnd] = React.useState("0")
    const [spanSpec, setSpanSpec] = React.useState("0")
  
    const changeCron = (input) =>{
      switch(input){
        case 'Every':
          corn[tabIndex] = '*'
          break;
        case 'EveryStartingAt':
          if(checkValue(spanBetweenStart,tabIndex) && checkValue(spanBetweenEnd,tabIndex)){
            corn[tabIndex] = spanBetweenStart +  "-" + spanBetweenEnd
          }
          else{
            alert('Ошибка')
          }
          break;
        case 'Specific':
          let mins = spanSpec.split(',')
          for (let i = 0; i < mins.length; i++) {
            if(!checkValue(mins[i],tabIndex)){
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
  
    const onOptionChange = e => {
      setSpan(e.target.value)
      changeCron(e.target.value)
    }
  
    const onFieldChange = e =>{
      setSpanSpec(e.target.value)
      changeCron(span)
    }
  
    return (
      <div className="SpanSelect">
      <input type="radio" name={name} value="Every" id={id} checked={span === "Every"} onChange={onOptionChange}/>
      <label class="SpanSelect-Element"   htmlFor="every">Every.</label> <br />
  
      <input type="radio" name={name} value="EveryStartingAt" id={id} checked={span === "EveryStartingAt"} onChange={onOptionChange}/>
      <label class="SpanSelect-Element"   htmlFor="everystart">Between <input value={spanBetweenStart} onInput={e => setSpanBetweenStart(e.target.value)} type="text"/> month and <input value={spanBetweenEnd} onInput={e => setSpanBetweenEnd(e.target.value) }type="text"/> year.</label> <br />
      
      <input type="radio" name={name} value="Specific" id={id} checked={span === "Specific"} onChange={onOptionChange}/>
      <label class="SpanSelect-Element"  htmlFor="specific">Specific month(s)<input value={spanSpec} onInput={onFieldChange} type="text"/> -- use separators as JUN,JUL,AUG... </label> <br />
      </div>
    )
  }
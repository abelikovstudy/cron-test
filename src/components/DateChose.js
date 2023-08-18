import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

var React = require('react');

/*
<input
        type="radio"
        name="DateForm"
        value="Daily"
        id="daily"
        checked={DateForm === "Daily"}
        onChange={onOptionChange}
      />
      <label htmlFor="daily">Daily</label>

      <input
        type="radio"
        name="DateForm"
        value="Weekly"
        id="weekly"
        checked={DateForm === "Weekly"}
        onChange={onOptionChange}
      />
      <label htmlFor="weekly">Weekly</label>

      <input
        type="radio"
        name="DateForm"
        value="Monthly"
        id="monthly"
        checked={DateForm === "Monthly"}
        onChange={onOptionChange}
      />
      <label htmlFor="monthly">Monthly</label>

      <input
        type="radio"
        name="DateForm"
        value="Custom"
        id="custom"
        checked={DateForm === "Custom"}
        onChange={onOptionChange}
      />
      <label htmlFor="custom">Custom</label>
*/

const days = [
    'SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI' , 'SAT'
  ];
const months = [
    'JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'
  ];


const checkMinute = (input) => {
  if(!isNaN(input)){
    let num = parseInt(input)
    if(num >= 0 && num <= 59){
      return true;
    }
    return false;
  }
  return false;
}

const checkHour = (input) => {
  if(!isNaN(input)){
    let num = parseInt(input)
    if(num >= 0 && num <= 23){
      return true;
    }
    return false;
  }
  return false;
}

const checkDay = (input) => {
  if(!isNaN(input)){
    let num = parseInt(input)
    if(num >= 1 && num <= 31){
      return true;
    }
    return false;
  }
  return false;
}

const checkDayOfWeek = (input) => {
  if(days.includes(input)){
    return true;
  }
  return false;
}

const checkMonths = (input) => {
  if(months.includes(input)){
    return true;
  }
  return false;
}

const checkValue = (input, type) =>{
  switch(type){
    case 0:
      return checkMinute(input)
      break;
    case 1:
      return checkHour(input)
      break;
    case 2:
      return checkDay(input)
      break;
    case 3:
      return checkDayOfWeek(input)
      break;
    case 4:
      return checkMonths(input)
      break;
  }

}

export function DateChose(){

  let corn = ['*' ,'*', '*', '*', '*']


  const [minute, setMinute] = React.useState("Every")
  const [specMinuteEvery, setSpecMinuteEvery] = React.useState("0")
  const [specMinuteEveryAt, setSpecMinuteEveryAt] = React.useState("0")
  const [specMinute, setSpecMinute] = React.useState("0")

  const [tabIndex, setTabIndex] = React.useState(0);

  const [result, setResult] = React.useState(corn.join(" "));


  const onOptionChange = e => {
    setMinute(e.target.value)
    
    switch(e.target.value){
      case 'Every':
        corn[tabIndex] = '*'
        break;
      case 'EveryStartingAt':
        if(checkValue(specMinuteEvery,tabIndex) && checkValue(specMinuteEveryAt,tabIndex)){
          corn[tabIndex] = specMinuteEveryAt +  "-" + specMinuteEvery
        }
        else{
          alert('Ошибка')
        }
        break;
      case 'Specific':
        let mins = specMinute.split(',')
        for (let i = 0; i < mins.length; i++) {
          if(!checkValue(mins[i],tabIndex)){
            alert('Ошибка')
            break;
          }
        }
        corn[tabIndex] = specMinute      
        break;
      
    }
    setResult(corn.join(" "));
  }
  return (
  <>
    <div className="DateChose">
    <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
      <TabList>
        <Tab>Minutes</Tab>
        <Tab>Hours</Tab>
        <Tab>Days</Tab>
        <Tab>Moths</Tab>
        <Tab>Year</Tab>
      </TabList>


      <TabPanel>    {/* Minute */}
        <div class="SpanSelect">
              <input type="radio" name="minute" value="Every" id="every" checked={minute === "Every"} onChange={onOptionChange}/>
              <label class="SpanSelect-Element"   htmlFor="every">Every.</label> <br />

              <input type="radio" name="minute" value="EveryStartingAt" id="everystart" checked={minute === "EveryStartingAt"} onChange={onOptionChange}/>
              <label class="SpanSelect-Element"   htmlFor="everystart">Every <input value={specMinuteEvery} onInput={e => setSpecMinuteEvery(e.target.value)} type="text"/> minute starting at <input value={specMinuteEveryAt} onInput={e => setSpecMinuteEveryAt(e.target.value) }type="text"/> minute.</label> <br />

              <input type="radio" name="minute" value="Specific" id="specific" checked={minute === "Specific"} onChange={onOptionChange}/>
              <label class="SpanSelect-Element"  htmlFor="specific">Specific minute(s)<input value={specMinute} onInput={e => setSpecMinute(e.target.value)} type="text"/> -- use separators as 1,2,3... </label> <br />
              
        </div>

      </TabPanel>

      <TabPanel> {/* Hour */}
        <div class="SpanSelect">
                <input type="radio" name="minute" value="Every" id="every" checked={minute === "Every"} onChange={onOptionChange}/>
                <label class="SpanSelect-Element"   htmlFor="every">Every.</label> <br />

                <input type="radio" name="minute" value="EveryStartingAt" id="everystart" checked={minute === "EveryStartingAt"} onChange={onOptionChange}/>
                <label class="SpanSelect-Element"   htmlFor="everystart">Every <input value={specMinuteEvery} onInput={e => setSpecMinuteEvery(e.target.value)} type="text"/> hour starting at <input value={specMinuteEveryAt} onInput={e => setSpecMinuteEveryAt(e.target.value) }type="text"/> hour.</label> <br />

                <input type="radio" name="minute" value="Specific" id="specific" checked={minute === "Specific"} onChange={onOptionChange}/>
                <label class="SpanSelect-Element"  htmlFor="specific">Specific hours(s)<input value={specMinute} onInput={e => setSpecMinute(e.target.value)} type="text"/> -- use separators as 1,2,3... </label> <br />
                
        </div>
      </TabPanel>

      <TabPanel> {/* Day */}
        <div class="SpanSelect">
                <input type="radio" name="minute" value="Every" id="every" checked={minute === "Every"} onChange={onOptionChange}/>
                <label class="SpanSelect-Element"   htmlFor="every">Every.</label> <br />

                <input type="radio" name="minute" value="EveryStartingAt" id="everystart" checked={minute === "EveryStartingAt"} onChange={onOptionChange}/>
                <label class="SpanSelect-Element"   htmlFor="everystart">Every <input value={specMinuteEvery} onInput={e => setSpecMinuteEvery(e.target.value)} type="text"/> day starting at <input value={specMinuteEveryAt} onInput={e => setSpecMinuteEveryAt(e.target.value) }type="text"/> day.</label> <br />

                <input type="radio" name="minute" value="Specific" id="specific" checked={minute === "Specific"} onChange={onOptionChange}/>
                <label class="SpanSelect-Element"  htmlFor="specific">Specific day(s)<input value={specMinute} onInput={e => setSpecMinute(e.target.value)} type="text"/> -- use separators as 1,2,3... </label> <br />
                
        </div>
      </TabPanel>

      <TabPanel> {/* Month */}
        <div class="SpanSelect">
                <input type="radio" name="minute" value="Every" id="every" checked={minute === "Every"} onChange={onOptionChange}/>
                <label class="SpanSelect-Element"   htmlFor="every">Every.</label> <br />

                <input type="radio" name="minute" value="EveryStartingAt" id="everystart" checked={minute === "EveryStartingAt"} onChange={onOptionChange}/>
                <label class="SpanSelect-Element"   htmlFor="everystart">Every <input value={specMinuteEvery} onInput={e => setSpecMinuteEvery(e.target.value)} type="text"/> month starting at <input value={specMinuteEveryAt} onInput={e => setSpecMinuteEveryAt(e.target.value) }type="text"/> month.</label> <br />

                <input type="radio" name="minute" value="Specific" id="specific" checked={minute === "Specific"} onChange={onOptionChange}/>
                <label class="SpanSelect-Element"  htmlFor="specific">Specific month(s)<input value={specMinute} onInput={e => setSpecMinute(e.target.value)} type="text"/> -- use separators as 1,2,3... </label> <br />
                
        </div>
      </TabPanel>

      <TabPanel> {/* Year */}
        <div class="SpanSelect">
                <input type="radio" name="minute" value="Every" id="every" checked={minute === "Every"} onChange={onOptionChange}/>
                <label class="SpanSelect-Element"   htmlFor="every">Every.</label> <br />

                <input type="radio" name="minute" value="EveryStartingAt" id="everystart" checked={minute === "EveryStartingAt"} onChange={onOptionChange}/>
                <label class="SpanSelect-Element"   htmlFor="everystart">Every <input value={specMinuteEvery} onInput={e => setSpecMinuteEvery(e.target.value)} type="text"/> year starting at <input value={specMinuteEveryAt} onInput={e => setSpecMinuteEveryAt(e.target.value) }type="text"/> year.</label> <br />

                <input type="radio" name="minute" value="Specific" id="specific" checked={minute === "Specific"} onChange={onOptionChange}/>
                <label class="SpanSelect-Element"  htmlFor="specific">Specific year(s)<input value={specMinute} onInput={e => setSpecMinute(e.target.value)} type="text"/> -- use separators as 1,2,3... </label> <br />
                
          </div>
      </TabPanel>
  </Tabs>
  <input value={result} type="text"/>
  </div>
  </>
  )
}

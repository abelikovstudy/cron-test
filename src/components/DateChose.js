import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { TabContent } from './TabContent';
import React from 'react';
import { minutes, hours, days, daysofweek, months} from '../constants';
import { isUndefined } from '../utils';
export function DateChose(){

  const [cron, setCron] = React.useState({
    0 : {
      span : "Every"
    },
    1 : {
      span : "Every"
    },
    2 : {
      span : "Every"
    },
    3 : {
      span : "Every"
    },
    4 : {
      span : "Every"
    },
  }); 
  const [tabIndex, setTabIndex] = React.useState(0);
  const [result, setResult] = React.useState("");

  const onCronChange = (timeElement, index) => {
    setCron({
      ...cron,
      [index] : timeElement
    })
  }

  const  parseCronElements = (data) =>{
    switch(data.span){
      case "Every":
        return '*';
      case "Between":
        if (isUndefined(data.between_start) || isUndefined(data.between_end)) return '*'
        else return data.between_start.value + '-' + data.between_end.value;
      case "Specific":
        if(isUndefined(data.specific)) return '*'
        else return data.specific.reduce(
          (accumulator, currentValue) => accumulator + currentValue.value + ',', ''
        ).slice(0, -1)
    }
  }

  const parseCron = (dateObject) => {
    let cronElements = []
    for(let index in dateObject) cronElements.push(parseCronElements(dateObject[index]))
    setResult(cronElements.join(' '))
  }

  return (
    <div className="DateChose">
    <Tabs defaultIndex={0} selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)} forceRenderTabPanel={true}>
      <TabList>
        <Tab>Minutes</Tab>
        <Tab>Hours</Tab>
        <Tab>Days</Tab>
        <Tab>Day of week</Tab>
        <Tab>Month</Tab>
      </TabList>

      <TabPanel> {/* Minute */}
        <TabContent name="minute" id="minute" tabIndex={tabIndex} corn={onCronChange} selectValues={minutes} />
      </TabPanel>

      <TabPanel> {/* Hour */}
        <TabContent name="hour" id="hour" tabIndex={tabIndex} corn={onCronChange} selectValues={hours}/>
      </TabPanel>

      <TabPanel> {/* Day */}
        <TabContent name="day" id="day" tabIndex={tabIndex} corn={onCronChange} selectValues={days}/>
      </TabPanel>

      <TabPanel> {/* Day of week */}
        <TabContent name="dayofweek" id="dayofweek" tabIndex={tabIndex} corn={onCronChange} selectValues={daysofweek}/>
      </TabPanel>

      <TabPanel> {/* Months */}
        <TabContent name="month" id="month" tabIndex={tabIndex} corn={onCronChange} selectValues={months}/>
      </TabPanel>
  </Tabs>
  <br />
  <br />
  <br />
  <br />
    <div className='Result'>
      <p>Итоговый результат: </p><input value={result} type="text"/>
      <button onClick={() => parseCron(cron)}>Button</button>
    </div>
  </div>
  )
}
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { TabContent } from './TabContent';
import React from 'react';

export function DateChose(){

  let corn = ['*' ,'*', '*', '*', '*']
  const [tabIndex, setTabIndex] = React.useState(0);
  const [result, setResult] = React.useState("");

  return (
    <div className="DateChose">
    <Tabs defaultIndex={0} selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
      <TabList>
        <Tab>Minutes</Tab>
        <Tab>Hours</Tab>
        <Tab>Days</Tab>
        <Tab>Day of week</Tab>
        <Tab>Month</Tab>
      </TabList>

      <TabPanel> {/* Minute */}
        <TabContent name="minute" id="minute" tabIndex={tabIndex} corn={corn}/>
      </TabPanel>

      <TabPanel> {/* Hour */}
        <TabContent name="hour" id="hour" tabIndex={tabIndex} corn={corn}/>
      </TabPanel>

      <TabPanel> {/* Day */}
        <TabContent name="day" id="day" tabIndex={tabIndex} corn={corn}/>
      </TabPanel>

      <TabPanel> {/* Day of week */}
        <TabContent name="dayofweek" id="dayofweek" tabIndex={tabIndex} corn={corn}/>
      </TabPanel>

      <TabPanel> {/* Months */}
        <TabContent name="month" id="month" tabIndex={tabIndex} corn={corn}/>
      </TabPanel>
  </Tabs>
  <br />
  <br />
  <br />
  <br />
    <div className='Result'>
      <p>Итоговый результат: </p><input value={result} type="text"/>
      <button onClick={() => setResult(corn.join(" "))}>Button</button>
    </div>
  </div>
  )
}
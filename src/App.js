import './App.css';
import Tab from './components/Tab';
import React, { useState } from  'react';

function App() {

  const [display, setDisplay] = useState(null);
  const [tabs, setTabs] = useState([
    {tab:"THE VERY FIRST TAB WITH SOME INFORMATION"},
    {tab:"THE VERY SECOND TAB WITH SOME INFORMATION"},
    {tab:"THE VERY LAST TAB WITH SOME INFORMATION"}
  ])

  const selectTab = (selectIdx) => {
    //get the tab that i want to display
    console.log('zxczxczxc', selectIdx);
    //need to filter out other tabs, (just want this tab)
    const tabToDisplay = tabs.filter((tab, i) => {
      if (selectIdx !== i) {
        return false;
      } else return true;
    })
    console.log("the tab to display: ", tabToDisplay)
    console.log("the information from the tab to display: ", tabToDisplay[0].tab)
    setDisplay(tabToDisplay[0].tab);
  }


  return (
    <div className="App">
        {
        tabs.map((tabs,i) => {
          return <Tab key={i} tabs={tabs} idx={i} selectTab={selectTab}/>
        })
      }
    <h1> {display} </h1>
    </div>
  );
}

export default App;
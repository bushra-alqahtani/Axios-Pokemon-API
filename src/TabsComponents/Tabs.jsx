import React, { useState } from 'react'
import FirstTab from './FirstTab';
import SecondTab from './SecondTab';
import ThirdTab from './ThirdTab';

function Tabs(props) {
    //Create a tabs component that accepts an array of varying length.
    const [tabList ,setTabList]=useState(["tab1","tab2","tab3"]);
   const [activeTab, setActiveTab] = useState("");
   
   
 //handel switching  
   const handleTab1 = () => {
    // update the state to tab1
    setActiveTab("tab1");
  };
  const handleTab2 = () => {
    // update the state to tab2
    setActiveTab("tab2");
    
  };
  const handleTab3 = () => {
    // update the state to tab3
    setActiveTab("tab3");
  };
  return (
    <div className="Tabs">
        <ul className="nav">
        <li className={activeTab === "tab1" ? "active" : ""}  onClick={handleTab1}> {tabList[0]}</li>
        <li className={activeTab === "tab2" ? "active" : ""} onClick={handleTab2}> {tabList[1]}</li>
        <li className={activeTab === "tab3" ? "active" : ""} onClick={handleTab3}> {tabList[2]}</li>
        </ul>
        <div className="outlet">
        {/* content will be shown here */}
        {activeTab === "tab1" ? <FirstTab /> : activeTab === "tab2"?<SecondTab/>:<ThirdTab/>}

        
      </div> 

    </div>
  )
}

export default Tabs
import React from 'react';

import './App.css';
import inbox from './images/inbox.PNG'
import notification from './images/notification.PNG'
import question from './images/question.PNG'
import search from './images/search.PNG'
import week from './images/week.PNG'
import invite from './images/invite_people.PNG'
import alphabet from './images/alphabet.PNG'
import main from './images/main.PNG'
import view from './images/view.PNG'
import hexagon from './images/hexagon.PNG'
import zoom from './images/zoom.PNG'
import group from './images/group.PNG'
import settings  from './images/settings.PNG'
import visible   from './images/icons.PNG'
import Table from './Components/table';
import Sidenav from './Components/Sidenav';



function App() {
  return (
    <div className="App">
      <div className="sidenav">
        <img className="surface-company-logo-image"  alt="company logo" src="https://cdn7.monday.com/images/logos/monday_logo_icon.png"/>
        <img className="surface-company-notification" src={notification}/>
        <img className="surface-company-inbox" src={inbox}/>
        <div className="upgrade">Upgrade</div>
        <br></br><br></br><br></br><br></br>

        <img className="surface-company-week" src={week}/>
        <img className="surface-company-invite" src={invite}/>
        <img className="surface-company-search" src={search}/>
        <img className="surface-company-question" src={question}/>
        <img className="surface-company-alphabet" src={alphabet}/>
      </div>
      <div className="main"  style={{paddingLeft:'180px',width:'70%'}}>
        <div className="leftside">
          <p className="website">website <img src="https://img.icons8.com/material-rounded/24/000000/star.png"/></p>
          <p className="description">Add board description</p>
          <div className="mainTable"> <img className="mainimg" src={main} /> <h4 className="maintab">Main Table</h4>  </div>
        </div>
        <div className="rightside">
          <div className="righttop">
            <img className="view" src={view}></img>
            <img className="hexa1" src={hexagon}/>
            <div className="call" ><img className="call-icon" src={zoom}></img><p className="text">Start Zoom call</p> </div>
            <div className="Activities"><img className="group" src={group}></img><p className="text1">Activities/0</p></div>
            <img className="settings" src={settings}/>
        </div>
        <div className="rightbottom">
          <div className="new">New Item</div>
          <div className="search">Search/Filter Board</div>
          <img className="icons" src={visible}></img>
         </div>
      </div>
      <hr className="hr-line"></hr>
      <Sidenav/>
      <hr className="hr-line"></hr>
      <Table/>
    </div>
  </div>
  );
}

export default App;







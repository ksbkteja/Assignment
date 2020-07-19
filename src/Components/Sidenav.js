import React from 'react';

import '../App.css';
import inbox from '../images/inbox.PNG'
import notification from '../images/notification.PNG'
import question from '../images/question.PNG'
import search from '../images/search.PNG'
import week from '../images/week.PNG'
import invite from '../images/invite_people.PNG'
import alphabet from '../images/alphabet.PNG'
import main from '../images/main.PNG'
import view from '../images/view.PNG'
import hexagon from '../images/hexagon.PNG'
import zoom from '../images/zoom.PNG'
import group from '../images/group.PNG'
import settings  from '../images/settings.PNG'
import visible   from '../images/icons.PNG'
import { InputGroup, Dropdown,DropdownButton } from 'react-bootstrap';



function Sidenav() {
  return (
    <div className="App">
      <div className="sidenav2">
          <p>Workspaces</p>
          <input type="search" placeholder="Filter boards"/>
    </div>
  </div>
  );
}

export default Sidenav;







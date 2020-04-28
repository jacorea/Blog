import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import { Header, Icon, List, Container } from 'semantic-ui-react';
import { IActivity } from '../models/activity';


//imported components
import NavBar from '../../features/nav/NavBar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';

const App =() => {

  const [activities, setActivities] = useState<IActivity[]>([]);

  useEffect(()=> {
    const url ="http://localhost:5000/api/activities";
    axios.get<IActivity[]>(`${url}`)
    .then((response)=> {
      setActivities(response.data)
    })
  }, [])

  return (
    <Fragment>  
      <NavBar />
        <Container style ={{marginTop: '6em'}}>
          <ActivityDashboard activities = {activities} />
        </Container>
    </Fragment>
  );
} 

export default App;

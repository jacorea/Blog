import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import { Header, Icon, List, Container } from 'semantic-ui-react';
import { IActivity } from '../models/activity';


//imported components
import NavBar from '../../features/nav/NavBar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';

const App =() => {

  const [activities, setActivities] = useState<IActivity[]>([]);
  const [selectedActivity, setSelectedActivity] = useState<IActivity | null>(null);

  const handleSelectedActivity = (id: string) => {
    setSelectedActivity(activities.filter(a => a.id === id)[0])
  }

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
          <ActivityDashboard 
            activities = {activities} 
            selectActivity={handleSelectedActivity} 
            selectedActivity={selectedActivity}
          />
        </Container>
    </Fragment>
  );
} 

export default App;

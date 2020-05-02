import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import { Container } from 'semantic-ui-react';
import { IActivity } from '../models/activity';


//imported components
import NavBar from '../../features/nav/NavBar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';

const App =() => {

  const [activities, setActivities] = useState<IActivity[]>([]);
  const [selectedActivity, setSelectedActivity] = useState<IActivity | null>(null);
  const [editMode, setEditMode] = useState(false); 

  const handleSelectedActivity = (id: string) => {
    setSelectedActivity(activities.filter(a => a.id === id)[0])
  }

  const handleOpenCreateForm = () => {
    setEditMode(true);
    setSelectedActivity(null);
  }

  const handleDeleteActivity = (id: string) => {
    setActivities([...activities.filter(a => a.id !== id)])
  }

  const handleCreateActivity = (activity: IActivity) => {
    setActivities([...activities, activity]);
    setSelectedActivity(activity);
    setEditMode(false);
  }

  const handleEditActivity = (activity: IActivity) => {
    setActivities([...activities.filter(a => (a.id !== activity.id)), activity]);
    setSelectedActivity(activity);
    setEditMode(false);
  }

  useEffect(()=> {
    const url ="http://localhost:5000/api/activities";
    axios.get<IActivity[]>(`${url}`)
    .then((response)=> {
      let activities: IActivity[] = [];
      response.data.forEach(activity => {
        activity.date = activity.date.split('.')[0];
        activities.push(activity);
      })
      setActivities(activities);
    })
  }, [])

  return (
    <Fragment>  
      <NavBar openCreateForm={handleOpenCreateForm} />
        <Container style ={{marginTop: '6em'}}>
          <ActivityDashboard activities = {activities} 
            selectActivity={handleSelectedActivity} 
            selectedActivity={selectedActivity}
            editMode={editMode}
            setEditMode={setEditMode}
            setSelectedActivity={setSelectedActivity}
            editActivity={handleEditActivity}
            addActivity={handleCreateActivity}
            deleteActivity={handleDeleteActivity}
          />
        </Container>
    </Fragment>
  );
} 

export default App;

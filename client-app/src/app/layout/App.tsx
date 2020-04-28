import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Header, Icon, List } from 'semantic-ui-react';
import { IActivity } from '../models/activity';


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
    <div>
      <Header as='h2'>
      <Icon name='users' />
        <Header.Content>Reactivities</Header.Content>
      </Header>
        <ul>
          <List>

          {activities.map((activity: any) => (
              <List.Item key={activity.id}>{activity.title}</List.Item>
              ))}
          </List>
        </ul>
    </div>
  );
} 

export default App;

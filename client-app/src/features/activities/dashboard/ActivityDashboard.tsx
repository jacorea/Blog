import React from 'react'
import { Grid } from 'semantic-ui-react'
import { IActivity } from '../../../app/models/activity';
import ActivityList from './ActivityList';
import ActivityDetails from '../details/ActivityDetails';
import ActivityForm from '../form/ActivityForm';

interface IProps {
    activities: IActivity[];
    selectActivity: (id: string) => void;
    selectedActivity: IActivity | null;
    editMode: boolean;
    setEditMode: (editMode: boolean) => void;
    setSelectedActivity: (activity: IActivity | null) => void;
    editActivity: (activity: IActivity) => void;
    addActivity: (activity: IActivity) => void;
    deleteActivity: (id: string) => void;
}

const ActivityDashboard: React.FC<IProps> = ({ 
  activities, selectActivity, selectedActivity, 
  editMode, setEditMode, setSelectedActivity, 
  editActivity, addActivity, deleteActivity 
}) => {
  return (
    <Grid>
        <Grid.Column width={10} >
            <ActivityList 
              activities={activities} 
              selectActivity={selectActivity}
              deleteActivity={deleteActivity}
            />
        </Grid.Column>
        <Grid.Column width={6}>
            {selectedActivity && !editMode &&  
            <ActivityDetails 
              cancelSelectedActivity={setSelectedActivity} 
              editMode={editMode} 
              selectedActivity={selectedActivity} 
              setEditForm={setEditMode} 
            />}
            {editMode && 
              <ActivityForm 
                key={selectedActivity && selectedActivity.id || 0} 
                editActivity={editActivity} 
                addActivity={addActivity} 
                setEditMode={setEditMode} 
                activity={selectedActivity!}
              />
            }
        </Grid.Column>
    </Grid>
  )
}

export default ActivityDashboard;

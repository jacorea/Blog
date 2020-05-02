import React, { useState, FormEvent } from 'react'
import { Segment, Form, Header,Button } from 'semantic-ui-react'
import { IActivity } from '../../../app/models/activity'
import { v4 as uuid } from 'uuid';

interface IProps {
  setEditMode: (editMode: boolean) => void;
  activity: IActivity | null;
  editActivity: (activity: IActivity) => void;
  addActivity: (activity: IActivity) => void;
}

const ActivityForm: React.FC<IProps> = ({setEditMode, activity: initialFormActivity, editActivity, addActivity }) => {

  const initializeForm = () => {
    if (initialFormActivity) {
      return initialFormActivity;
    } else {
      return {
        id: '',
        title: '',
        category: '',
        date: '',
        venue: '',
        city: '',
        description: ''
      }
    }
  }

  const [activity, setActivity] = useState(initializeForm);

  //submitting form 
  const handleSubmit = () => {
    if (activity.id.length === 0) {
      let newActivity = {
        ...activity,
        id: uuid()
      }
      addActivity(newActivity);
    } else {
      editActivity(activity);
    }
  }

  const handleInputChange = (event: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.currentTarget;
    setActivity({...activity, [name]: value })
  }

  return (
    <Segment clearing>
        <Form onSubmit={handleSubmit}>
            <Header as="h2" content={!activity.title ? "Activity Form" : "Edit Activity Form"} textAlign="center"/>
            <Form.Input 
              placeholder="Title" 
              value={activity.title}
              name="title"
              onChange={handleInputChange}
            />
            <Form.TextArea 
              rows={2} 
              placeholder="Description" 
              value={activity.description}
              name="description"
              onChange={handleInputChange}
            />
            <Form.Input 
              placeholder="Category" 
              value={activity.category}
              name="category"
              onChange={handleInputChange}
            />
            <Form.Input 
              type="date" 
              placeholder="Date" 
              value={activity.date.split('T')[0]}
              name="date"
              onChange={handleInputChange}
            />
            <Form.Input 
              placeholder="City" 
              value={activity.city}
              name="city"
              onChange={handleInputChange}
            />
            <Form.Input 
              placeholder="Venue" 
              name="venue"
              value={activity.venue}
              onChange={handleInputChange}
            />
            {console.log(activity.date.split('T')[0])}
            <Button floated="right" type="submit" color="facebook" content="Submit"/>
            <Button onClick={()=>setEditMode(false)} floated="right" type="button" color="red" content="Cancel" />
        </Form>
    </Segment>
  )
}

export default ActivityForm

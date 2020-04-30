import React from 'react'
import { Segment, Form, Header,Button } from 'semantic-ui-react'

interface IProps {
  setEditMode: (editMode: boolean) => void;
}

const ActivityForm: React.FC<IProps> = ({setEditMode}) => {
  return (
    <Segment clearing>
        <Form>
            <Header as="h2" content="Activity Form" textAlign="center"/>
            <Form.Input placeholder="Title"/>
            <Form.TextArea rows={2} placeholder="Description"/>
            <Form.Input placeholder="Category"/>
            <Form.Input type="date" placeholder="Date"/>
            <Form.Input placeholder="City"/>
            <Form.Input placeholder="Venue"/>
            <Button floated="right" type="submit" color="facebook" content="Submit"/>
            <Button onClick={()=>setEditMode(false)} floated="right" type="button" color="red" content="Cancel" />
        </Form>
    </Segment>
  )
}

export default ActivityForm

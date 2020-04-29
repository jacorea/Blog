import React from 'react'
import { Segment, Form, Header } from 'semantic-ui-react'

const ActivityForm = () => {
  return (
    <Segment>
        <Form>
            <Header as="h2" content="Activity Form" textAlign="center"/>
            <Form.Input placeholder="Title"/>
            <Form.TextArea rows={2} placeholder="Description"/>
            <Form.Input placeholder="Category"/>
            <Form.Input type="date" placeholder="Date"/>
            <Form.Input placeholder="City"/>
            <Form.Input placeholder="Venue"/>
            <Form.Button fluid color="facebook">Submit</Form.Button>
        </Form>
    </Segment>
  )
}

export default ActivityForm

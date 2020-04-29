import React from 'react'
import { Card, Image, Icon, Button } from 'semantic-ui-react'
import { IActivity } from '../../../app/models/activity'

interface IProps {
    selectedActivity: IActivity;
}

const ActivityDetails: React.FC<IProps>= ({selectedActivity}) => {
  return (
    <Card fluid>
        <Image src={`/assets/img/categoryImages/${selectedActivity.category}.jpg`} wrapped ui={false} />
        <Card.Content>
  <Card.Header>{selectedActivity.title}</Card.Header>
        <Card.Meta>
            <span>{new Date(selectedActivity.date).toDateString()}</span>
        </Card.Meta>
        <Card.Description>
            {selectedActivity.description}
        </Card.Description>
        </Card.Content>
        <Card.Content extra>
            <Button.Group widths={2}>
                <Button basic color='blue' content='Edit' />
                <Button basic color='grey' content='cancel'/>
            </Button.Group>
        </Card.Content>
  </Card>
  )
}

export default ActivityDetails

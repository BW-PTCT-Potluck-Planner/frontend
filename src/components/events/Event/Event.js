import './Event.scss';

import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';

export const Event = ({ event: { id, name, description, when, location } }) => {
  return (
    <Card>
      <CardBody>
        <CardTitle tag="h5">{name}</CardTitle>
        <CardSubtitle className="h6 mb-2 text-muted">{when}</CardSubtitle>
        <CardSubtitle className="h6 mb-2 text-muted">{location}</CardSubtitle>
        <CardText>{description}</CardText>
        <Link to={`/event/${id}`} className="card-link">
          <Button>Details</Button>
        </Link>
      </CardBody>
    </Card>
  );
};

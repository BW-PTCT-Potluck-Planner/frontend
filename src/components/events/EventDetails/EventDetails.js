import './EventDetails.scss';

import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Spinner, Button, Card, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';

import { useEventsFacade } from 'hooks';

export const EventDetails = () => {
  const { id } = useParams();
  const [{ active, loading }] = useEventsFacade(id);

  if (!active || loading) return <Spinner color="primary" />;

  return (
    <Card>
      <CardBody>
        <CardTitle tag="h3">{active.name}</CardTitle>
      </CardBody>
      <div>
        <Link to={`/event/${id}/edit`}>
          <Button className="mb-3">Edit</Button>
        </Link>
      </div>
      <CardSubtitle className="h6 mb-2 text-muted">{active.when}</CardSubtitle>
      <CardSubtitle className="h6 mb-2 text-muted">{active.location}</CardSubtitle>
      <CardText>{active.description}</CardText>
    </Card>
  );
};

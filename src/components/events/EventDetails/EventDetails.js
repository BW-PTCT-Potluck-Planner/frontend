import './EventDetails.scss';

import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Spinner, Button, Row, Col, Container } from 'reactstrap';

import { useEventsFacade } from 'hooks';

export const EventDetails = () => {
  const { id } = useParams();
  const [{ active, loading }] = useEventsFacade(id);

  if (!active || loading) return <Spinner color="primary" />;

  return (
    <Container fluid='sm'>
      <Row style={{ alignItems: 'center' }}>
        <Col>
          <h2 className='display-4'>{active.name}</h2>
        </Col>
        <Col>
          <Link to={`/event/${id}/edit`}>
            <Button>Edit</Button>
          </Link>
        </Col>
      </Row>
      <Row>
        <Link to={`/edit/${id}/menu`}>
          <Button>See what everyone’s bringing</Button>
        </Link>
      </Row>
      <Row>
        <div className="h6 mt-2 text-muted">When</div>
      </Row>
      <Row>
        <div className="h6 mb-4">{active.when}</div>
      </Row>
      <Row>
        <div className="h6 mb-2 text-muted">Where</div>
      </Row>
      <Row>
        <div className="h6 mb-4">{active.location}</div>
      </Row>
      <Row>
        <div className='h6 text-muted'>Description</div>
      </Row>
      <Row>{active.description}</Row>
    </Container>
  );
};

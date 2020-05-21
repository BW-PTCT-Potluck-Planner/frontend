import './EventDetails.scss';

import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Spinner, Button } from 'reactstrap';

import { useEventsFacade } from 'hooks';

export const EventDetails = () => {
  const { id } = useParams();
  const [{ active, loading }] = useEventsFacade(id);

  if (loading) return <Spinner color="primary" />;

  return (
    <>
      <h3>{active.title}</h3>
      <Link to={`/event/${id}/edit`}>
        <Button>Edit</Button>
      </Link>
    </>
  );
};

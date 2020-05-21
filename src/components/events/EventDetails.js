import React from 'react';
import { useParams } from 'react-router-dom';
import { Spinner } from 'reactstrap';

import { useEventsFacade } from '../../hooks';

export const EventDetails = () => {
  const { id } = useParams();
  const [{ active, loading }] = useEventsFacade(id);

  if (loading) return <Spinner color="primary" />;

  return <>{active.name}</>;
};

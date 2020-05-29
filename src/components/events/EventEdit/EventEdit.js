import './EventEdit.scss';

import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router';
import { useForm } from 'react-hook-form';
import { Form, FormFeedback, FormGroup, Label, Input, Button, Spinner, Alert } from 'reactstrap';

import { useEventsFacade } from 'hooks';
import { eventsService } from 'state';

export const EventEdit = () => {
  const history = useHistory();
  const { id } = useParams();
  const [{ active, error, loading }] = useEventsFacade(id);
  const [hasError, setHasError] = useState(false);

  const { register, handleSubmit, errors, reset } = useForm({
    mode: 'onBlur',
  });

  useEffect(() => {
    reset({ ...active });
  }, [active, reset]);

  useEffect(() => {
    if (error) setHasError(true);
  }, [error]);

  const onSubmit = (event) => {
    const update$ = active ? eventsService.updateActive(event) : eventsService.create(event);
    update$.subscribe(() => {
      history.push('/');
    });
  };

  const clearError = () => {
    setHasError(false);
    setTimeout(() => {
      eventsService.clearError();
    }, 300);
  };

  return (
    <main class="event-edit">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
          <Label for="name">Name</Label>
          <Input
            id="name"
            name="name"
            type="text"
            placeholder="Name"
            innerRef={register({
              required: 'The name is required',
            })}
            invalid={!!errors.name}
          />
          <FormFeedback>{errors.name?.message}</FormFeedback>
        </FormGroup>
        <FormGroup>
          <Label for="description">Description</Label>
          <Input
            id="description"
            name="description"
            type="textarea"
            placeholder="Description"
            innerRef={register({
              required: 'The description is required',
            })}
            invalid={!!errors.description}
          />
          <FormFeedback>{errors.description?.message}</FormFeedback>
        </FormGroup>
        <FormGroup>
          <Label for="when">When</Label>
          <Input
            id="when"
            name="when"
            type="datetime"
            placeholder="When"
            innerRef={register({
              required: 'The when is required',
            })}
            invalid={!!errors.when}
          />
          <FormFeedback>{errors.when?.message}</FormFeedback>
        </FormGroup>
        <FormGroup>
          <Label for="location">Location</Label>
          <Input
            id="location"
            name="location"
            type="text"
            placeholder="Location"
            innerRef={register({
              required: 'The location is required',
            })}
            invalid={!!errors.location}
          />
          <FormFeedback>{errors.location?.message}</FormFeedback>
        </FormGroup>
        <div class="loading-button">
          <Button disabled={loading}>{active ? 'Edit' : 'Create'}</Button>
          {loading && <Spinner color="white" />}
        </div>
      </Form>
      <Alert color="danger" isOpen={hasError} toggle={clearError}>
        {error}
      </Alert>
    </main>
  );
};

import './EventEdit.scss';

import React, { useEffect } from 'react';
import { useParams, useHistory } from 'react-router';
import { useForm } from 'react-hook-form';
import { Form, FormFeedback, FormGroup, Label, Input, Button } from 'reactstrap';

import { useEventsFacade } from 'hooks';
import { eventsService } from 'state';

export const EventEdit = () => {
  const history = useHistory();
  const { id } = useParams();
  const [{ active }] = useEventsFacade(id);

  const { register, handleSubmit, errors, reset } = useForm({
    mode: 'onBlur',
  });

  useEffect(() => {
    reset({ ...active });
  }, [active, reset]);

  const onSubmit = (event) => {
    const update$ = active ? eventsService.updateActive(event) : eventsService.create(event);
    update$.subscribe(() => {
      history.push('/');
    });
  };

  return (
    <>
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
          <Label for="description">Name</Label>
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
        <Button>{active ? 'Edit' : 'Create'}</Button>
      </Form>
    </>
  );
};

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
    const newEvent = active ? eventsService.updateActive(event) : eventsService.create(event);
    if (newEvent) history.push('/');
  };

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
          <Label for="title" hidden>
            Title
          </Label>
          <Input
            id="title"
            name="title"
            type="title"
            placeholder="Title"
            innerRef={register({
              required: 'The title is required',
            })}
            invalid={!!errors.title}
          />
          <FormFeedback>{errors.title?.message}</FormFeedback>
          <Label for= "date">
            Date
          </Label>
          <Input
           id = "date"
           name= "date"
           type = "date"
           placeholder = "Date"
           innerRef = {register({
             required: 'The date is required'
           })}
           invalid={!!errors.date}
          />
          <FormFeedback>{errors.date?.message}</FormFeedback>
          <Label for= "time">
            Time
          </Label>
          <Input
           id = "time"
           name= "time"
           type = "time"
           placeholder = "Time"
           innerRef = {register({
             required: 'The time is required'
           })}
           invalid={!!errors.time}
          />
         <Label for= "location">
            Location
          </Label>
          <Input
           id = "location"
           name= "location"
           type = "location"
           placeholder = "Locaction"
           innerRef = {register({
             required: 'The location is required'
           })}
           invalid={!!errors.location}
          />
        </FormGroup>
        <Button>{active ? 'Edit' : 'Create'}</Button>
      </Form>
    </>
  );
};

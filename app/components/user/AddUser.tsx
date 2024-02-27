'use client'

import { createUser } from '@/app/actions/action';
import { saveUser } from '@/service/userService';
import { userSchema } from '@/util/zod/userSchema';
import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap';
import { useFormState } from 'react-dom';
import { z } from 'zod';

const AddUser = () => {

    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const initialState = {
      message: ""
    }

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        try {
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData); // Convert FormData to plain object
        userSchema.parse(data);
        // service call to user
        saveUser(formData)
      } catch (error) {
        if (error instanceof z.ZodError) {
          // Handle validation errors
          const validationErrors: { [key: string]: string } = {};
          error.errors.forEach((err) => {
            validationErrors[err.path[0]] = err.message;
          });
          setErrors(validationErrors);
        }
      }
    }
  return (
    <>
    <Form onSubmit={handleSubmit}  >
            
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" name="name" placeholder="Name" isInvalid={!!errors.name}/>
        {errors.name && <Form.Text className="text-danger">{errors.name}</Form.Text>}

      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name="email"  placeholder="Enter email" isInvalid={!!errors.email} />
        
        {errors.email ? <Form.Text className="text-danger">{errors.name}</Form.Text> : 
            <Form.Text className="text-muted">
                We will never share your email with anyone else.
            </Form.Text>
        }

      </Form.Group>

      <Button variant="info" type="submit"  >
        Submit
      </Button>
    </Form>
    </>
  )
}

export default AddUser
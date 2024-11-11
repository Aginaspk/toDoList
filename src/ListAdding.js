import React, { useRef } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';


import { Form, Button, Stack } from 'react-bootstrap'



export default function ListAdding({ getItems }) {
    let text = useRef(null);
    let enteredText = () => {
        let val = text.current.value;
        getItems(val)
        text.current.value = '';
    }
    return (
        <>
            <h1 className='h1'>ToDoList</h1>
            <Stack direction="horizontal" gap={3} className='mb-2'>
                <Form.Control className="me-auto" placeholder="Add your item here..." ref={text} />
                <Button variant="secondary" onClick={enteredText}>Submit</Button>
            </Stack>
        </>
    )
}

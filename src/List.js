import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Stack } from 'react-bootstrap'
import './App.css'


export default function List({ items,itemDelete }) {
    let removeItem = (e) => {
        itemDelete(e.target.id)
    }
    return (
        <>
            <Stack gap={2}>
                {items.map((val, ind) => {
                    return (
                        <div className='p-2 bg-secondary border mt-1' key={ind}>
                            {val}
                            <Button variant='dark' className='float-end' id={val} onClick={removeItem}>Delete</Button>
                        </div>
                    )
                })}

            </Stack>
        </>
    )
}
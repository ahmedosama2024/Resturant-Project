
import axios from 'axios';
import React, { useState } from 'react';
import './book.css';




const Book = () => {
    const [time, setTime] = useState('');
    const [name, setName] = useState('');
    const [error,setError]=useState({});

    function handleTime(event) {
        setTime(event.target.value);
    }

    function handleName(event) {
        setName(event.target.value);
    }

    function valid(){
        let formError={};
        if(!time ){
            formError.time="This Field Is Required"
        }
        if(!name){
            formError.name="This Field Is Required"
        }
        return formError
    }

    async function handleSubmit(event) {
        event.preventDefault();
        const bookFormErrors=valid();
        if(Object.keys(bookFormErrors).length === 0){

            try {
    
                // await axios.get("http://127.0.0.1:8000/sanctum/csrf-cookie");
    
                 await axios.post(
                    "http://127.0.0.1:8000/api/appointments",
                    {
                        name: name,
                        date: time,
                    },
                    {
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        withCredentials: true
                    }
                );
            } catch (error) {
                console.error("Error:", error);
            }
            setError({})
            setName('')
            setTime('')
        }else{
            setError(bookFormErrors)
        }
        
        
    }
    
    return (
        <>
            <form method='post' onSubmit={handleSubmit} className='bookForm'>
                <input type='text' name='user_id' onChange={handleName} value={name} placeholder='Name' />
                <span>{error.name}</span>

                <input type='datetime-local' onChange={handleTime} name='date' value={time} />
                <span>{error.time}</span>

                <button className='btn' type='submit'>Book</button>
            </form>
        </>
    );
};

export default Book;

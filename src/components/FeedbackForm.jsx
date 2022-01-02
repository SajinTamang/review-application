import React from 'react'
import Card from './shared/Card'
import { useState } from 'react'
import Button from './shared/Button';
import RatingSelect from './RatingSelect';
function FeedbackForm() {

    const[text,setText]=useState('');
    const[rating,setrating]=useState(10);
    const[btnDisabled,setBtnDisabled] = useState(true);
 
    const[message, setMessage] =useState("Text must be at least 10 character");
    const handleTextChange= (e) =>{

        if(text === ""){
            setBtnDisabled(true);
            setMessage(null)
        }
        else if(text !== '' && text.trim().length <= 10){
            setBtnDisabled(true)
            setMessage('Text must be at least 10 character')
        }
        else{
            setMessage(null)
            setBtnDisabled(false)
        }
        setText(e.target.value)
    }
    return (
        <Card>
            <form>
            <h2>How would you rate your service with us ?</h2>
            <RatingSelect select={(rating)=> setrating(rating)}/>
            <div className="input-group">
                <input onChange={handleTextChange} type="text" placeholder="Write a review" 
                value={text}/>
                <Button type="submit" isDisabled={btnDisabled}>           Send</Button>
            </div>
            {message && <div className='message'>{message}</div>}
            </form>

        </Card>
    )
}

export default FeedbackForm
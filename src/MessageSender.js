import { InsertEmoticon, PhotoLibrary, Videocam } from '@mui/icons-material';
import { Avatar } from '@mui/material'
import React, {useState} from 'react'
import './MessageSender.css'
import { useStateValue } from './StateProvider';
import db from './firebase';
import firebase from 'firebase/compat/app';

function MessageSender() {

    const [{ user }, dispatch] = useStateValue();
    const [input, setInput] = useState('')
    const [imageURL, setImageURL] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();

        db.collection('post').add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            profilePic: user.photoURL,
            username: user.displayName,
            image: imageURL,
        })



        setInput('');
        setImageURL('');
    };


  return (
    <div className='messageSender'>
        <div className="messageSender__top">
            <Avatar src={user.photoURL} />
            <form>
                <input
                value={input}
                onChange={ (e) => setInput(e.target.value)}
                className='messageSender__input' 
                placeholder={`What's on your mind, ${user.displayName}?`}/>

                <input 
                value={imageURL}
                onChange={(e) => setImageURL(e.target.value)}
                placeholder='imageURL (Optional)' />

                <button 
                onClick={handleSubmit} 
                type='submit'>
                    Hidden submit
                </button> 
            </form>
        </div>
        <div className="messageSender__bottom">
            <div className="messageSender__option">
                <Videocam style={{ color:"red"}} />
                <h3>Live Video</h3>
            </div>
            <div className="messageSender__option">
                <PhotoLibrary style={{ color:"green"}} />
                <h3>Photo/Video</h3>
            </div>
            <div className="messageSender__option">
                <InsertEmoticon style={{ color:"orange"}} />
                <h3>Feeling/Activity</h3>
            </div>
        </div>

    </div>
  )
}

export default MessageSender
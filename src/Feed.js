import React, { useEffect, useState } from 'react'
import './Feed.css'
import CreateIcon from '@mui/icons-material/Create';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import InputOption from './InputOption';
import Post from './Post';
import { db } from "./firebase"
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import FlipMove from "react-flip-move";


function Feed() {
    const user = useSelector(selectUser);

    const [input, setInput] = useState('');

    const [posts, setPosts] = useState([]);

    // useEffect is a piece of code which allows us to fire the code when the feed component loads  and whenever the component rerenders  if we dont pass the second argument if we passed [] thwn it will execute it only once 
    useEffect(() => {
        // onSnapshot is says that give us the snapshot of the post  collection of the db
        db.collection("posts").orderBy('timestamp', 'desc').onSnapshot((snapshot) =>
            setPosts(snapshot.docs.map((doc) => (
                {
                    id: doc.id,
                    data: doc.data(),
                }
            ))
            )
        );
    }, []);


    const sendPost = (e) => {
        e.preventDefault();
        // setPosts([...])
        db.collection('posts').add({
            name: user.displayName,
            description: user.email,
            message: input,
            photoUrl: user.photoUrl || "",
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
        setInput("");


    }

    return (
        <div className='feed'>
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon />
                    <form action="">
                        <input value={input} onChange={e => setInput(e.target.value)} type="text" />
                        <button onClick={sendPost} type='submit'>Send</button>
                    </form>

                </div>

                <div className="feed__inputOptions">
                    <InputOption color="#70B5F9" Icon={ImageIcon} title='Photo' />
                    <InputOption title="Video" Icon={SubscriptionsIcon} color="#E7A33E" />
                    <InputOption title="Event" Icon={EventNoteIcon} color="#C0CBCD" />
                    <InputOption title="Write article"
                        Icon={CalendarViewDayIcon}
                        color="#7FC15E" />
                </div>
            </div>
            <FlipMove>
                {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
                    // key is important when we are rendering the list so that all the list isnt rerendered again and only the last unique which is added is rerendered 
                    <Post
                        key={id}
                        name={name}
                        description={description} message={message}
                        photoUrl={photoUrl}
                    />
                ))}

            </FlipMove>

        </div>
    )
}

export default Feed
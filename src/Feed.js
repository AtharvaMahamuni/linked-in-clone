import React, {useState} from 'react';
import './Feed.css';
import CreateIcon from '@mui/icons-material/Create';
import InputOptions from './InputOptions';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import Post from './Post';

function Feed() {
  const [posts, setPosts] = useState([]); 

  const sendPost = (e) => {
     e.preventDefault();
  }

  return (
    <div className='feed'> 
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input type='text' placeholder='Start a Post'/>
            <button onClick={sendPost} type='submit'>Send</button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOptions Icon={ImageIcon} title='Image' color='#07B5F9'/>
          <InputOptions Icon={SubscriptionsIcon} title='Video' color='#E7A33E'/>
          <InputOptions Icon={EventNoteIcon} title='Event' color='#C0CBCD'/>
          <InputOptions Icon={CalendarViewDayIcon} title='Write article' color='#7FC15E'/>
        </div>
      </div>


      {posts.map((post) => {
        <Post />
      })}
      <Post
        name="Atharva Mahamuni"
        description="This is test"
        message="Wow this worked"
      />

    </div>
  )
}

export default Feed
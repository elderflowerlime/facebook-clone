import React from 'react'
import './Feed.css'
import MessageSender from './MessageSender'
import Post from './Post'
import StoryReel from './StoryReel'

function Feed() {
  return (
    <div className='feed'>
        <StoryReel />
        {/* MessageSender */}
        <MessageSender />
        <Post
          profilePic="https://pub-static.fotor.com/assets/projects/pages/d5bdd0513a0740a8a38752dbc32586d0/fotor-03d1a91a0cec4542927f53c87e0599f6.jpg"
          message="Hi, hello!"
          timestamp="this is timestamp"
          username="lililililay"
          image="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg" />

        <Post
          profilePic="https://pub-static.fotor.com/assets/projects/pages/d5bdd0513a0740a8a38752dbc32586d0/fotor-03d1a91a0cec4542927f53c87e0599f6.jpg"
          message="Hi, hello!"
          timestamp="this is timestamp"
          username="lililililay" />
        {/* <Post
        profilePic={profilePic}
        message={message}
        timestamp={timestamp}
        username={username}
        image={image} /> */}
    </div>
  )
}

export default Feed
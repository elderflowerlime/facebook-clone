import React from 'react'
import Story from './Story'
import './StoryReel.css'

function StoryReel() {
  return (
    <div className='storyReel'>
        <Story
            image='https://images.unsplash.com/photo-1526512340740-9217d0159da9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmVydGljYWx8ZW58MHx8MHx8&w=1000&q=80'
            profileSrc='https://as1.ftcdn.net/v2/jpg/01/16/24/44/1000_F_116244459_pywR1e0T3H7FPk3LTMjG6jsL3UchDpht.jpg'
            title='Julia Antczak' />
        <Story
            image='https://images.unsplash.com/photo-1512850183-6d7990f42385?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dmVydGljYWx8ZW58MHx8MHx8&w=1000&q=80'
            profileSrc='https://static1.personality-database.com/profile_images/8c269a23bbc74c25bff83c2dfbe8dbe6.png'
            title='Rose' />
        <Story
            image='https://thumbs.dreamstime.com/b/vertical-shot-road-magnificent-mountains-under-blue-sky-captured-california-163571053.jpg'
            profileSrc='https://i.pinimg.com/280x280_RS/6f/fb/51/6ffb5145df7f4e48bb7abb8ffd8d0a88.jpg'
            title='Jack' />
        <Story
            image='https://thumbs.dreamstime.com/b/vertical-shot-canal-venice-italy-boats-old-houses-193711930.jpg'
            profileSrc='https://avatarfiles.alphacoders.com/258/thumb-258944.jpg'
            title='Shrek' />
        <Story
            image='https://upload.wikimedia.org/wikipedia/commons/0/0f/Eiffel_Tower_Vertical.JPG'
            profileSrc='https://purepng.com/public/uploads/large/purepng.com-shrek-fionashrekcomputer-animatedfantasy-filmfairy-talebook-1701528653973ku2li.png'
            title='Fiona' />
    </div>
  )
}

export default StoryReel
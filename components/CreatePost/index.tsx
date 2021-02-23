import React, { useState } from 'react'
import fire from '../../config/fire-config'
import { AddPost, Notification } from './styles'

const CreatePost = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [notification, setNotification] = useState('')

  const handleSubmit = (event: any) => {
    event.preventDefault()

    fire.firestore().collection('blog').add({
      title,
      content,
    })

    setNotification('Blogpost created')
    setTimeout(() => {
      setNotification('')
    }, 2000)

    setTitle('')
    setContent('')
  }
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        margin: '0 20%',
      }}
    >
      <Notification>{notification}</Notification>
      <AddPost>
        <form onSubmit={handleSubmit}>
          <div>
            Title
            <input
              type="text"
              value={title}
              onChange={({ target }) => setTitle(target.value)}
            />
          </div>
          <div>
            Content
            <textarea
              value={content}
              onChange={({ target }) => setContent(target.value)}
            />
          </div>
          <button type="submit">Save</button>
        </form>
      </AddPost>
    </div>
  )
}

export default CreatePost

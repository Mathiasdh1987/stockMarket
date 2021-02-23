import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import fire from '../../config/fire-config'
import { List, ListItem } from './styles'

const ReadPost = () => {
  const [blogs, setBlogs] = useState<any[]>([])
  const [loading, isLoading] = useState<boolean>(true)

  useEffect(() => {
    isLoading(true)
    fire
      .firestore()
      .collection('blog')
      .onSnapshot((snap) => {
        const tmp = snap.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
        setBlogs(tmp)
        isLoading(false)
      })
  }, [])

  if (loading) {
    return <div>Loading...</div>
  }
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        margin: '0 20%',
      }}
    >
      READ
      <List>
        {blogs.map((blog) => (
          <ListItem key={blog.id}>
            <Link href="/blog/[id]" as={`/blog/${blog.id}`}>
              <a>{blog.title}</a>
            </Link>
          </ListItem>
        ))}
      </List>
    </div>
  )
}

export default ReadPost

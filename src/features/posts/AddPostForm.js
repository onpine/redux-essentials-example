import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
// import { nanoid } from '@reduxjs/toolkit'

import { postAdded } from './postSlice'

export const AddPostForm = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const dispatch = useDispatch()

  const onTitleChange = (e) => setTitle(e.target.value)
  const onContentChange = (e) => setContent(e.target.value)

  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(postAdded(title, content))

      setTitle('')
      setContent('')
    }
  }

  return (
    <section>
      <h2>添加新帖子</h2>
      <form>
        <label htmlFor="postTitle">帖子标题：</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={onTitleChange}
        ></input>
        <label htmlFor="postContent">内容：</label>
        <textarea
          id="postContent"
          name="postContent"
          value={content}
          onChange={onContentChange}
        ></textarea>
        <button type="button" onClick={onSavePostClicked}>
          保存帖子
        </button>
      </form>
    </section>
  )
}

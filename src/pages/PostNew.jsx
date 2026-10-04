import { useState } from 'react';
import { useNavigate } from 'react-router';
import { createPost } from '../api/posts';
import PostForm from '../components/PostForm';

export default function PostNew() {
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  async function handlySubmit() {
    await createPost(content);
    navigate('/');    
  }

  return (
    <div className='page'>
      <PostForm
        value={content}
        onChange={setContent}
        onSubmit={handlySubmit}
        submitLabel='Опубликовать'
        onCancel={() => navigate('/')}
      />
    </div>
  );
}
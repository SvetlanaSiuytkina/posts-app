import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { getPosts } from '../api/posts';
import PostCard from '../components/PostCard';

export default function PostList() {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();
  
  useEffect(() => {
    getPosts().then((data) => setPosts(data));
  }, []);

  return (
    <div className='feed'>
      <div className='feed_top'>
        <button
          className='btn btn-primary'
          onClick={() => navigate('/posts/new')}
        >
          Создать пост
        </button>
      </div>

      {posts.length === 0 && (
        <div className='empty'>
          Пока нет постов. Создайте первый.
        </div>
      )}

      {posts.map((post) => (
        <PostCard
          key={post.id}
          post={post}
        />
      ))}
    </div>
  );
}
import { useNavigate } from 'react-router';
import avatar from '../assets/avatar.png';
import { useState } from 'react';

export default function PostCard({ post }) {
  const navigate = useNavigate();

  const [likes, setLikes] = useState(0);

  const created = new Date(post.created);
  const now = new Date();
  const differenceMin = Math.floor((now - created) / 1000 / 60);
  const timeAgo = 
    differenceMin < 1 
    ? 'только что' 
    : differenceMin < 60 
      ? `${differenceMin} мин.`
      : `${Math.floor(differenceMin / 60)} ч.`
  
  return (
    <div 
      className='post-card'
      onClick={() => navigate(`/posts/${post.id}`)}
    >
      <div className='post-card_header'>
        <img
          className="post-card_avatar"
          src={avatar}
          alt="Аватар"
        />
        <div className='post-card_meta'>
          <div className='post-card_author'>Svetlana Siuytkina</div>
          <div className='post-card_time'>junior frontend developer {timeAgo}</div>
        </div>
      </div>

      <div className='post-card_content'>{post.content}</div>

      <div className='post-card_actions'>
        <button 
          className='post-card_action'
          onClick={(e) => {
            e.stopPropagation();
            setLikes((prev) => prev + 1);
          }}
        >
          👍 Нравится {likes > 0 && likes}
        </button>

        <button
          className='post-card_action'
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          💬 Комментировать
        </button>
      </div>
    </div>
  );
}
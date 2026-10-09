import { useNavigate, useParams } from 'react-router';
import { getPost, updatePost, deletePost } from '../api/posts';
import PostForm from '../components/PostForm';
import { useEffect, useState } from 'react';
import avatar from '../assets/avatar.png';

export default function PostView() {
  const {id} = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null)
  const [isEditing, setIsEditing] = useState(false);
  const [content, setContent] = useState('');

  useEffect(() => {
    getPost(id).then((data) => {
      setPost(data.post);
      setContent(data.post.content)
    });
  }, [id]);

  if (!post) return <div className='empty'>Загрузка...</div>;

  if (isEditing) {
    async function handlySave() {
      await updatePost(id, content);
      setPost((prev) => ({ ...prev, content }));
     setIsEditing(false);
    }

    return (
      <div className='page'>
        <PostForm
          value={content}
          onChange={setContent}
          onSubmit={handlySave}
          submitLabel='Сохранить'
          onCancel={() => setIsEditing(false)}
        />
      </div>
    );
  }

  return (
    <div className='page'>
      <div className='post-card post-card-view'>
        <div className='post-card_header'>
          <img 
            className='post-card_avatar'
            src={avatar} 
            alt='Аватар'
          />
          <div className='post-card_meta'>
            <div className='post-card_author'>Svetlana Siuytkina</div>
            <div className='post-card_time'>junior frontend developer</div>
          </div>
        </div>

        <div className='post-card_content'>{post.content}</div>

        <div className='post-card_actions'>
          <button
            className='btn btn-primary'
            onClick={() => setIsEditing(true)}
          >
            Изменить
          </button>
          <button
            className='btn btn-danger'
            onClick={async () => {
              await deletePost(id);
              navigate('/');
            }}
          >
            Удалить
          </button>
        </div>
      </div>
    </div>
  );
}
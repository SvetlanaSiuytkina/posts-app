import { useState } from 'react';
import avatar from '../assets/avatar.png';

const tabs = [
  { id: 'publication', label: '📝 Публикация' },
  { id: 'media', label: '📷 Фото/видео' },
  { id: 'live', label: '🎥 Прямой эфир' },
  { id: 'more', label: '⋯ Ещё' },
];

export default function PostForm({ value, onChange, onSubmit, submitLabel, onCancel }) {
  const [activeTab, setActiveTab] = useState('publication');

  return (
    <div className='post-form'>
      <div className='post-form_tabs'>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type='button'
            className={'post-form_tab' + (activeTab === tab.id ? ' post-form_tab-active' : '')}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}

        <button 
          className='post-form_close'
          onClick={onCancel}>
            ✕
        </button>
      </div>

      <div className='post-form_body'>
        <img 
          className='post-card_avatar'
          src={avatar}
          alt='Аватар' 
        />
        {activeTab === 'publication' && (
          <textarea
            className='post-form_textarea'
            placeholder='Что у вас нового?'
            value={value}
            onChange={(e) => onChange(e.target.value)}
          />  
        )}
        
        {activeTab === 'media' && (
          <div className='post-form_stub'>📷 Загрузка фото/видео</div>
        )}

        {activeTab === 'live' && (
          <div className="post-form_stub">🎥 Прямой эфир</div>
        )}

        {activeTab === 'more' && (
          <div className="post-form_stub">⋯ Дополнительные опции</div>
        )}
      </div>

      <div className='form-footer'>
        <button 
          className='btn btn-primary'
          onClick={onSubmit}>
            {submitLabel}
        </button>
      </div>
    </div>
  );
}
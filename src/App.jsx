import { BrowserRouter, Routes, Route } from 'react-router';
import PostList from './pages/PostList';
import PostNew from './pages/PostNew';
import PostView from './pages/PostView';

export default function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/" element={<PostList />} />
          <Route path="/posts/new" element={<PostNew />} />
          <Route path="/posts/:id" element={<PostView />} />
          <Route
            path="*"
            element={<div className="empty">Страница не найдена</div>}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
const baseUrl = '/api/posts';

//все посты
export async function getPosts() {
  const response = await fetch(baseUrl);
  return await response.json();
}

//1 пост
export async function getPost(id) {
  const response = await fetch(`${baseUrl}/${id}`);
  return await response.json(); 
}

//создасть пост
export async function createPost(content) {
  await fetch(baseUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ content })
  });
}

//обновить пост
export async function updatePost(id, content) {
  await fetch(`${baseUrl}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id, content })
  });
}

//удалить пост
export async function deletePost(id) {
  await fetch(`${baseUrl}/${id}`, {
    method: 'DELETE'
  });
}
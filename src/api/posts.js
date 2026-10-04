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

//обновить пост

//удалить пост

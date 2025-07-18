import React, { useState, useEffect } from 'react';

function App() {
  const [posts, setPosts] = useState([]);       
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null);     

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        if (!res.ok) throw new Error('네트워크 응답에 문제가 있습니다');
        return res.json();
      })
      .then((data) => {
        setPosts(data.slice(0, 10));  
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>로딩 중…</p>;
  if (error)   return <p>에러 발생: {error}</p>;

  return (
    <div style={{ padding: 20 }}>
      <h1>게시글 목록 (10개)</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id} style={{ marginBottom: 16 }}>
            <h2 style={{ margin: 0, fontSize: '1.2rem' }}>{post.title}</h2>
            <p style={{ margin: '4px 0' }}>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

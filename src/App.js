import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [post, setPost] = useState();

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await axios.get('http://localhost:3000/posts');
        setPost(result.data);
      } catch (error) { }
    };

    getData();
  }, []);
  return (
    <div className="App">
      <div>This is posts:</div>
      {post?.map((p) => {
        return (
          <div key={p.id}>{p?.title}</div>
        );
      })}
    </div>
  );
}

export default App;

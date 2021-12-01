// @src/App.jsx

import React, { useState } from 'react';
import { Button } from '@mui/material';
import styles from './App.module.css';
import Card from './components/Card/Card';
import posts from './data/posts';
import SignIn from './pages/SignIn/SignIn';

const App = () => {
  const [contentType, setContentType] = useState('Card');

  const getContent = () => {
    if (contentType === 'Card') {
      return (
        <div className={styles.layout}>
          {posts.map((element, index) => (
            <Card
              key={index}
              title={element.title}
              likes={element.likes}
              order={index + 1}
              image={element.image}
            />
          ))}
        </div>
      )
    } else {
      return <SignIn />
    }  
  }

  return (
    <main className={styles.section}>
      <section className={styles.container}>
        <div className={styles.btnGroup}>
          <Button
            variant="contained"
            onClick={() => setContentType('Card')}>
              Card
          </Button>
          <Button
            variant="contained"
            onClick={() => setContentType('SignIn')}>
              Sign In
          </Button>
        </div>
        {getContent()}
      </section>
    </main>
  );
};

export default App;
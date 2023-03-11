import React from 'react';
import './App.css';
import Review from './Review'

function App() {
  return (
    <main className="App">
      <section className='container'>
        <header className='heading-title'>
          <h1>Our Reviews</h1>
        </header>

        <Review/>
      </section>
    </main>
  );
}

export default App;

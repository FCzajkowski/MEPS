import { render } from 'preact';
import { useState } from 'preact/hooks';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Preact z JSX w Expressie!</h1>
      <p>Licznik: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Zwiększ
      </button>
    </div>
  );
};

render(<App />, document.getElementById('app'));
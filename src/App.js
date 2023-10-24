import { useEffect, useState } from 'react';
import './App.css';
import './bootstrap.min.css';
import { Field } from './components/Field';

function App() {
  const [avatar, setAvatar] = useState({});

  return (
    <div className="App">
      <Field avatar={avatar} setAvatar={setAvatar}></Field>
    </div>
  );
}

export default App;

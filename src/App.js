import { useEffect, useState } from 'react';
import './App.css';
import './bootstrap.min.css';
import { Field } from './components/Field';
import { SelectAvatarMenu } from './components/SelectAvatarMenu';

function App() {
  const [avatar, setAvatar] = useState("");

  return (
    <div className="App">
      
      {avatar === "" ? <SelectAvatarMenu avatar={avatar} setAvatar={setAvatar}></SelectAvatarMenu> : (
      <Field avatar={avatar} setAvatar={setAvatar}></Field>
      )}
    </div>
  );
}

export default App;

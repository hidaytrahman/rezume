import { useState } from 'react';
import './App.scss';
import ResumeController from './components/controller/ResumeController';
import Resume from './components/resume/Resume';

const App = () => {

  const [view, setView] = useState('edit');

  return (
    <div className="App">
      <h1>Resume Maker</h1>

      <button onClick={() => setView('edit')}>Edit</button>

      <button onClick={() => setView('view') }>View</button>

      {
        view === 'edit' ?
          <ResumeController />
          : <Resume />
      }



    </div>
  );
}

export default App;

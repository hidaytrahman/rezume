import { useState } from 'react';
import './App.scss';
import ResumeController from './components/controller/ResumeController';
import Header from './components/Header';
import Resume from './components/resume/Resume';
const App = () => {
  const [view, setView] = useState('edit');

  return (
    <div className="App">

      <Header view={view} setView={setView} />
      {view === 'edit' ?
        <ResumeController />
        : <Resume />}

    </div>
  );
}

export default App;

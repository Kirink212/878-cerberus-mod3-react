import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import App from './App';
import Header from './components/Header';
import TaskForm from './components/TaskForm';
import { TaskProvider } from './contexts/task.context';

import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <>
    <TaskProvider>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<App/>}/>
          <Route path="/create" element={<TaskForm/>}/>
        </Routes>
      </BrowserRouter>
    </TaskProvider>
  </>
);

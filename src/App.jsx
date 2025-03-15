import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import './App.css';
import data from './assets/FaqData/FaqData.json';
import tabData from './assets/TabData/TabData.json';
import initialData from './assets/DragAndDropData/DragAndDropData.json';

import Sidebar from './components/Sidebar/Sidebar';
import TodoApp from './pages/TodoApp/TodoApp';
import Accordion from './pages/Accordion/Accordion';
import AccordionFAQ from './pages/AccordionFAQ/AccordionFAQ';
import Tabs from './pages/Tabs/Tabs';
import TrafficLight from './pages/TrafficLight/TrafficLight';
import ToastContainer from './pages/ToastContainer/ToastContainer';
import TanstackQuery from './pages/TanstackQuery/TranstackQuery.jsx';
import FetchOld from './pages/FetchOld/FetchOld';
import DragAndDrop from './pages/DragAndDrop/DragAndDrop';
import Checkbox from './pages/Checkbox/Checkbox';

const App = () => {
  const onTabChangeHandler = (index, tab) => {
    console.log('Tab changed to:', tab.title, 'at index:', index);
  };

  return (
    <Router>
      <div className="flex gap-3">
        <Sidebar />
        <div className="p-3 w-full">
          <Routes>
            <Route path="/" element={<Navigate to="/TodoApp" />} />
            <Route path="/todoapp" element={<TodoApp />} />
            <Route path="/accordion" element={<Accordion data={data} />} />
            <Route path="/accordionfaq" element={<AccordionFAQ data={data} />} />
            <Route path="/tabs" element={<Tabs tabData={tabData} onChange={onTabChangeHandler} />} />
            <Route path="/trafficlight" element={<TrafficLight />} />
            <Route path="/toast" element={<ToastContainer />} />
            <Route path="/tanstack" element={<TanstackQuery />} />
            <Route path="/fetchold" element={<FetchOld />} />
            <Route path="/draganddrop" element={<DragAndDrop initialData={initialData} />} />  
            <Route path="/checkbox" element={<Checkbox />} />  
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;

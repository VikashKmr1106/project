import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import './App.css';
import data from './assets/FaqData/FaqData.json';
import tabData from './assets/TabData/TabData.json';
import initialData from './assets/DragAndDropData/DragAndDropData.json'

import Sidebar from './components/Sidebar/Sidebar';
import Accordion from './pages/Accordion/Accordion';
import AccordionFAQ from './pages/AccordionFAQ/AccordionFAQ';
import Tabs from './pages/Tabs/Tabs';
import TrafficLight from './pages/TrafficLight/TrafficLight';
import ToastContainer from './pages/ToastContainer/ToastContainer';
import TranstackQuery from './pages/TanstackQuery/TranstackQuery';
import FetchOld from './pages/FetchOld/FetchOld';
import DragAndDrop from './pages/DragAndDrop/DragAndDrop';

const App = () => {
  const onTabChangeHandler = (index, tab) => {
    console.log('Tab changed to:', tab.title, 'at index:', index);
  };

  return (
    <Router>
      <div className="flex gap-3">
        <Sidebar />
        <div className="p-3">
          <Routes>
            <Route path="/" element={<Navigate to="/accordion" />} />
            <Route path="/accordion" element={<Accordion data={data} />} />
            <Route path="/accordionfaq" element={<AccordionFAQ data={data} />} />
            <Route path="/tabs" element={<Tabs tabData={tabData} onChange={onTabChangeHandler} />} />
            <Route path="/trafficlight" element={<TrafficLight/>} />
            <Route path="/toast" element={<ToastContainer/>} />
            <Route path="/tanstack" element={<TranstackQuery/>} />
            <Route path="/fetchold" element={<FetchOld/>} />
            <Route path="/draganddrop" element={<DragAndDrop initialData={initialData}/>} />  
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;





// The issue stems from how you're passing the data prop to the Accordion component. The Route element doesn't pass props like other components in React. Instead, you need to use the element prop in Route differently to include the data.
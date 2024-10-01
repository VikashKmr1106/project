import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  // Array of pages to be rendered in the sidebar
  const pages = [
    { name: 'Accordion', path: '/accordion' },
    { name: 'AccordionFAQ', path: '/accordionfaq' },
    { name: 'Tabs', path: '/tabs' },
    { name: 'Traffic Light', path: '/trafficlight' },
    { name: 'Toast', path: '/toast' },
    { name: 'TanStack Query', path: '/tanstack' },
    { name: 'Fetch Old Way ', path: '/fetchold' },
  ];

  return (
    <div className="w-72 p-3 bg-gray-500 text-white h-screen overflow-y-auto">
      <h1 className='text-2xl text-center bg-white text-black p-1 rounded-md w-full'>Sidebar</h1>
      <ul className='mt-4'>
        {/* Dynamically generate the list items using map */}
        {pages.map((page, index) => (
          <li key={index} className='cursor-pointer mt-2'>
            <NavLink 
              to={page.path}
              className={({ isActive }) =>
                isActive 
                  ? 'block w-full bg-gray-700 p-2 rounded-md text-white' 
                  : 'block w-full p-2 rounded-md hover:bg-gray-600 hover:text-white'
              }
            >
              {page.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;

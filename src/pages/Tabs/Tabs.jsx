import { useState } from 'react';
import React from 'react'

const Tabs = ({tabData , onChange}) => {
	console.log('Tabs', tabData)

	const [currentTabIndex, setCurrentTabIndex] = useState(0);

	return (
		<>
		<div className='border p-2 border-black'>

			<div className='flex items-center gap-2'>
			{tabData.tabs.map((tab, index) => (
         <button 
				 key={index} 
				 className={`p-2 font-semibold rounded-sm ${currentTabIndex === index ? 'bg-blue-500 text-white' : 'bg-gray-400'}`}
				 onClick={() => {
					setCurrentTabIndex(index);
					onChange(index , tab);
				 } 
				}
			 >
				 {tab.title}
			 </button>
      ))}
			</div>

		  {/* Tab Content */}
			<div className='p-2 h-64 place-content-center'>
          <div className='flex items-center justify-center'>
            <span className='font-semibold text-xl'>{tabData.tabs[currentTabIndex].content}</span>
          </div>
        </div>
			
		</div>
		
		</>
		
	)
}

export default Tabs;



// import { useState, useEffect } from 'react';
// import React from 'react';

// const Tabs = ({ tabData }) => {
//   // Retrieve currentTabIndex from localStorage or default to 0
//   const [currentTabIndex, setCurrentTabIndex] = useState(
//     parseInt(localStorage.getItem('currentTabIndex')) || 0
//   );

//   // Update localStorage whenever currentTabIndex changes
//   useEffect(() => {
//     localStorage.setItem('currentTabIndex', currentTabIndex);
//   }, [currentTabIndex]);

//   return (
//     <>
//       <div className='border p-2 border-black'>

//         {/* Tab Buttons */}
//         <div className='flex items-center gap-2'>
//           {tabData.tabs.map((tab, index) => (
//             <button 
//               key={index} 
//               className={`p-2 font-semibold rounded-sm ${currentTabIndex === index ? 'bg-blue-500 text-white' : 'bg-gray-400'}`}
//               onClick={() => setCurrentTabIndex(index)}
//             >
//               {tab.title}
//             </button>
//           ))}
//         </div>

//         {/* Tab Content */}
//         <div className='p-2'>
//           <div className='flex items-center justify-center'>
//             {tabData.tabs[currentTabIndex].content}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Tabs;

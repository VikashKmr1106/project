import React from 'react';
import Faq from '../../components/Faq/Faq';

const AccordionFAQ = ({ data }) => {
  // if (!data || !data.faqs) return <p>No FAQs available</p>; // Handle missing data
  
  return (
    <div className='border-2 border-black p-2 mb-1 w-96'>
			<div className='text-center font-bold border-b-2 pb-1 border-black'>
        <h1>Accordion FAQs</h1>
			</div>

			<div className='p-3 '>
			{data.faqs.map((obj, index) => (
        <Faq key={index} faq={obj} /> // Pass each faq item to Faq component
      ))}
			</div>
      
    </div>
  );
};

export default AccordionFAQ;

// import React, { useState } from 'react';
// import Faq from '../../components/Faq/Faq';

// const AccordionFAQ = ({ data }) => {
//   const [activeFaqId, setActiveFaqId] = useState(1); // Set first FAQ to be active by default

//   const toggleFaq = (id) => {
//     setActiveFaqId((prevId) => (prevId === id ? null : id)); // Toggle FAQ visibility
//   };

//   return (
//     <div className='text-center w-100'>
//       <h1>Accordion FAQs</h1>
//       {data.faqs.map((faq, index) => (
//         <Faq 
//           key={index} 
//           faq={faq} 
//           isActive={activeFaqId === faq.id} 
//           onToggle={() => toggleFaq(faq.id)} 
//         />
//       ))}
//     </div>
//   );
// };

// export default AccordionFAQ;

import React, {useState} from 'react';


const Faq = ({ faq }) => {
  const [show , setShow] = useState();

	const handleShow = () => {
		console.log('Add icon click ....')
		setShow(!show)
	}

  return (
		
    <div className="faq-item">

       <div className='pb-1 border-2 border-black mb-1'>
				<div className='flex items-center justify-between'>
				<span className='font-semibold p-1'>{faq.id}. {faq.question}</span>
        <span onClick={handleShow} className='me-2 font-bold cursor-pointer'>{show ? '-' : '+'}</span>
				</div>
        

			  {show && <hr className='border-1 border-black'/>}	
      
			{show && 
			 <div className='mt-2 '>
			 <p>{faq.answer}</p>
		   </div>
			}
      </div>
			
			
       

    </div>
  );
};

export default Faq;


// import React from 'react';

// const Faq = ({ faq, isActive, onToggle }) => {

//   return (
//     <div className="faq-item">
//       <div className='flex justify-between items-center pb-1'>
//         <span className='font-semibold'>{faq.id}. {faq.question}</span>
//         <span onClick={onToggle} className='me-2 font-bold cursor-pointer'>
//           {isActive ? '-' : '+'}
//         </span>
//       </div>

//       <hr className='border-1 border-black'/>

//       {isActive && (
//         <div className='mt-2'>
//           <p>{faq.answer}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Faq;

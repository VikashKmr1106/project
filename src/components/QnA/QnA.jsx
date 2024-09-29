import React from 'react';

const QnA = ({ qna, showAns , handleQnA }) => {
  return (
    <div className='border-2 border-black border-spacing-1 p-2 mb-1 w-96'>
      
      <div className='flex justify-between items-center pb-1'>
        <span className='font-semibold'>{qna.question}</span>
        <span onClick={handleQnA} className='me-2 font-bold cursor-pointer'>{showAns ? '-' : '+'}</span>
      </div>
      
     
			{showAns && <hr className='border-1 border-black' />}
      {showAns && (
        <div className='mt-2 '>
          <p>{qna.answer}</p>
        </div>
      )}
    </div>
  );
};

export default QnA;

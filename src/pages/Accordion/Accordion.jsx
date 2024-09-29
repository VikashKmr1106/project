import { useState } from 'react';
import React  from 'react';
import QnA from '../../components/QnA/QnA';

const Accordion = ({ data }) => {

	const [showIndex , setShowIndex] = useState(-1);

	const handleQnA = (index) => {
		// setShowIndex(index);

		setShowIndex((previewIndex) => {
			if(previewIndex === index){
				return -1;
			}else{
				return index;
			}
		})

	}


  // console.log(data);
  
  return (
    <>
      <div>
        {data.faqs.map((qna , index) => (
          <QnA key={qna.id} qna={qna} showAns={index === showIndex} handleQnA={() => handleQnA(index)} />  
        ))}
      </div>
    </>
  );
};

export default Accordion;

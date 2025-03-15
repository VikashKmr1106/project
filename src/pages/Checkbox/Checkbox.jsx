import React, { useState } from 'react';

const Checkbox = () => {
	// Initialize the state with the checklist
	const [checkList, setCheckList] = useState([
		{ id: 1, label: 'JavaScript', value: 'javascript', checked: false },
		{ id: 2, label: 'Python', value: 'python', checked: false },
		{ id: 3, label: 'Java', value: 'java', checked: false },
		{ id: 4, label: 'C++', value: 'c++', checked: false },
		{ id: 5, label: 'Ruby', value: 'ruby', checked: false },
		{ id: 6, label: 'Swift', value: 'swift', checked: false },
		{ id: 7, label: 'Objective-C', value: 'objc', checked: false },
		{ id: 8, label: 'Kotlin', value: 'kotlin', checked: false },
		{ id: 9, label: 'Rust', value: 'rust', checked: false },
		{ id: 10, label: 'Go', value: 'go', checked: false },
		{ id: 11, label: 'TypeScript', value: 'typescript', checked: false },
	]);
	const [selectedLanguages, setSelectedLanguages] = useState([]);

	const handleCheck = (event) => {
		const { value, checked } = event.target;

		// Update the checkList state
		const updatedCheckList = checkList.map((item) =>
			item.value === value ? { ...item, checked } : item
		);
		setCheckList(updatedCheckList);

		// Add or remove the language from the selectedLanguages in the order of selection
		if (checked) {
			// Add selected item to the end
			setSelectedLanguages([...selectedLanguages, value]);
		} else {
			// Remove the deselected item from the list
			setSelectedLanguages(selectedLanguages.filter((lang) => lang !== value));
		}
	};

	const handleRemove = (languageToRemove) => {
		// Remove the clicked item from selectedLanguages
		setSelectedLanguages(
			selectedLanguages.filter((lang) => lang !== languageToRemove)
		);

		// Uncheck the corresponding checkbox in the checkList state
		const updatedCheckList = checkList.map((item) =>
			item.value === languageToRemove ? { ...item, checked: false } : item
		);
		setCheckList(updatedCheckList);
	};

	return (
		<>
			<div className='card bg-slate-500 shadow-lg rounded-md w-96 h-auto'>
				<div className='card_header text-center text-white bg-cyan-500 p-3 rounded-md'>
					<header className='text-lg font-semibold'>
						Select Programming Language
					</header>
				</div>

				<div className='SelectcheckboxItem text-white p-3 text-lg flex items-center border-white border-b-1'>
					<div className='flex place-items-center gap-3'>
						<h1 className='text-sm'>You Selected:</h1>
						<div className='flex flex-wrap gap-2'>
							{selectedLanguages.length > 0
								? selectedLanguages.map((language, index) => (
										<div
											key={index}
											className='bg-white text-sm text-black py-1 px-3 rounded-lg shadow cursor-pointer'
											onClick={() => handleRemove(language)}>
											{language}
										</div>
								  ))
								: ''}
						</div>
					</div>
				</div>

				<div className='checkbox_list flex flex-col p-3 text-white'>
					{checkList.map((list) => (
						<div key={list.id} className='flex items-center'>
							<input
								type='checkbox'
								className='checkbox_input'
								id={`checkbox-${list.id}`} // Add unique id
								name={list.label}
								value={list.value}
								checked={list.checked}
								onChange={handleCheck}
							/>
							<label htmlFor={`checkbox-${list.id}`} className='ml-2'>
								{list.label}
							</label>{' '}
							{/* Link the label to the input */}
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default Checkbox;

// import React, { useState } from 'react';

// const Checkbox = () => {
//   // Initialize the state with the checklist
//   const [checkList, setCheckList] = useState([
//     { id: 1, label: 'JavaScript', value: 'javascript', checked: false },
//     { id: 2, label: 'Python', value: 'python', checked: false },
//     { id: 3, label: 'Java', value: 'java', checked: false },
//     { id: 4, label: 'C++', value: 'c++', checked: false },
//     { id: 5, label: 'Ruby', value: 'ruby', checked: false },
//     { id: 6, label: 'Swift', value: 'swift', checked: false },
//   ]);
//   const [selectedLanguages, setSelectedLanguages] = useState([]);

//   const handleCheck = (event) => {
//     const { value, checked } = event.target;

//     // Update the checkList state
//     const updatedCheckList = checkList.map((item) =>
//       item.value === value ? { ...item, checked } : item
//     );

//     setCheckList(updatedCheckList);

//     // Update selectedLanguages based on the order in the updatedCheckList
//     const selected = updatedCheckList.filter((item) => item.checked);
//     setSelectedLanguages(selected.map((item) => item.label));
//   };

//   const handleRemove = (event) => {
//     const languageToRemove = event.target.innerText;

//     // Uncheck the corresponding checkbox in the checkList state
//     const updatedCheckList = checkList.map((item) =>
//       item.label === languageToRemove ? { ...item, checked: false } : item
//     );

//     setCheckList(updatedCheckList);  // Update checkList state

//     // Update selectedLanguages based on the current checkList state
//     const selected = updatedCheckList.filter((item) => item.checked);
//     setSelectedLanguages(selected.map((item) => item.label));
//   };

//   return (
//     <>
//       <div className="card bg-slate-500 shadow-lg rounded-md w-96 h-96">
//         <div className="card_header text-center text-white bg-cyan-500 p-3 rounded-md">
//           <header className="text-lg font-semibold">Select Programming Language</header>
//         </div>

//         <div className="SelectcheckboxItem text-white p-3 text-lg flex items-center border-white border-b-1">
//           <div className="flex place-items-center gap-3">
//             <h1 className="text-sm">You Selected:</h1>
//             <div className="flex flex-wrap gap-2">
//               {selectedLanguages.length > 0 ? (
//                 selectedLanguages.map((language, index) => (
//                   <div
//                     onClick={handleRemove}
//                     key={index}
//                     className="bg-white text-sm text-black py-1 px-3 rounded-lg shadow cursor-pointer"
//                   >
//                     {language}
//                   </div>
//                 ))
//               ) : (
//                 ''
//               )}
//             </div>
//           </div>
//         </div>

//         <div className="checkbox_list flex flex-col p-3 text-white">
//           {checkList.map((list) => (
//             <div key={list.id} className="flex items-center">
//               <input
//                 type="checkbox"
//                 className="checkbox_input"
//                 name={list.label}
//                 value={list.value}
//                 checked={list.checked}
//                 onChange={handleCheck}
//               />
//               <span className="ml-2">{list.label}</span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Checkbox;

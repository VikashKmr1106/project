import React, { useRef, useState } from 'react';

const DragAndDrop = ({ initialData }) => {
	const [data, setData] = useState(initialData);
	const dragItem = useRef();
	const dragContainer = useRef();

	// Start dragging
	const handleDragStart = (event, item, container) => {
		dragItem.current = item;
		dragContainer.current = container;
		event.target.style.opacity = '0.5';
	};

	// End dragging
	const handleDragEnd = (event) => {
		event.target.style.opacity = '1';
	};

	// Handle drop logic
	const handleDrop = (event, targetContainer) => {
		event.preventDefault();
		const item = dragItem.current;
		const sourceContainer = dragContainer.current;

		if (sourceContainer !== targetContainer) {
			// Update the data state to move the item from sourceContainer to targetContainer
			setData((prev) => {
				const newData = { ...prev };

				// Remove item from the source container
				newData[sourceContainer] = newData[sourceContainer].filter((i) => i !== item);

				// Add item to the target container
				newData[targetContainer] = [...newData[targetContainer], item];

				return newData;
			});
		}
	};

	// Allow the container to accept drops
	const handleDragOver = (event) => {
		event.preventDefault();
	};

	return (
		<>
			<h1 className="text-center font-bold text-xl mb-6">Drag and Drop Application</h1>

			<div className="grid grid-cols-3 gap-4 w-full">
				{Object.keys(data).map((container) => (
					<div
						key={container}
						className="border p-4"
						onDrop={(event) => handleDrop(event, container)}
						onDragOver={handleDragOver}
					>
						<h2 className="text-center font-semibold mb-2">{container}</h2>
						<div className="space-y-2">
							{data[container].map((item, index) => (
								<div
									key={index}
									draggable="true"
									className="p-2 bg-gray-200 rounded cursor-all-scroll"
									onDragStart={(event) => handleDragStart(event, item, container)}
									onDragEnd={handleDragEnd}
								>
									{item}
								</div>
							))}
						</div>
					</div>
				))}
			</div>
		</>
	);
};

export default DragAndDrop;

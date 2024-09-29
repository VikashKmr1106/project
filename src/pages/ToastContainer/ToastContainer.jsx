import React, { useState } from 'react';

const ToastContainer = () => {
	const [toasts, setToasts] = useState([]);

	// Function to generate a unique ID
	const generateId = () => Math.random().toString(36).substring(2, 9);

	// Function to show a toast
	const handleShowToast = (message, type = 'success') => {
		const id = generateId();
		setToasts([...toasts, { id, message, type }]);

		// Auto-hide the toast after 3 seconds
		setTimeout(() => {
			setToasts(toasts => toasts.filter(toast => toast.id !== id));
		}, 3000);
	};

	// Function to manually close a toast
	const handleCloseToast = (id) => {
		setToasts(toasts.filter(toast => toast.id !== id));
	};

	// Object to map toast types to background colors
	const toastColors = {
		success: 'bg-green-600',
		error: 'bg-red-600',
		info: 'bg-blue-600',
		warning: 'bg-yellow-500',
		default: 'bg-gray-600'
	};

	return (
		<>
			<div className='relative w-[100vh] h-[97vh] bg-green-50 overflow-hidden'>
				{/* Render multiple toasts */}
				<div className="toast-wrapper fixed top-6 right-6 flex flex-col gap-2">
					{toasts.map((toast) => (
						<div
							key={toast.id}
							className={`toast-container flex justify-between w-52 p-3 rounded shadow-lg text-white transition-transform transform duration-500 ease-in-out translate-x-full opacity-0
							${toastColors[toast.type] || toastColors.default} animate-slide-in`}
						>
							<div className="font-bold text-md">{toast.message}</div>
							<div
								className="bg-white text-black p-1 rounded-full w-6 h-6 flex items-center justify-center font-semibold cursor-pointer"
								onClick={() => handleCloseToast(toast.id)}
							>
								X
							</div>
						</div>
					))}
				</div>

				<div className="buttonContainer flex gap-2 mt-8">
					<button
						className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'
						onClick={() => handleShowToast('Success Toast', 'success')}
					>
						Success Toast
					</button>
					<button
						className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
						onClick={() => handleShowToast('Info Toast', 'info')}
					>
						Info Toast
					</button>
					<button
						className='bg-yellow-500 hover:bg-yellow-700 text-black font-bold py-2 px-4 rounded'
						onClick={() => handleShowToast('Warning Toast', 'warning')}
					>
						Warning Toast
					</button>
					<button
						className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'
						onClick={() => handleShowToast('Error Toast', 'error')}
					>
						Error Toast
					</button>
				</div>
			</div>
		</>
	);
};

export default ToastContainer;

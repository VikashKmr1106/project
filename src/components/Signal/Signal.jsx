import React from 'react'

const Signal = ({color , isActive}) => {
	return (

		<div className='w-20 h-20 border-2 border-black rounded-full mb-2' style={{backgroundColor: `${isActive ? color : 'grey'}`}}>
			
		</div>
	)
}

export default Signal
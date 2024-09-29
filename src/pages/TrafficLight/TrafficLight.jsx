import React , {useState , useEffect} from 'react'
import Signal from '../../components/Signal/Signal'

const TrafficLight = ({ light = ['green','yellow','red'] }) => {
	const [active ,setActive] = useState(0)

	useEffect(() => {
		const intervalId = setInterval(() => {
			setActive((prev) => {
				return (prev + 1) % light.length
			})
		} , 1000);
		return () => {
			clearInterval(intervalId);
		}


	} , [])

	return (
		<>
		  {light.map((color , index) => {
				return <Signal key={index} isActive={active === index} color={color}/>
			})}
		</>
	)
}  

export default TrafficLight
import React, { useEffect, useState } from 'react';
import { fetchPost } from '../../assets/Api/Api.jsx'; 

const FetchOld = () => {

	const [user , setUser] = useState([]);
	const [loading, setLoading] = useState(true);  // State for loading status
  const [error, setError] = useState(null);  // State for handling errors

  useEffect(() => {
		const getPost = async () => {
			try{
        const response = await fetchPost();
				setUser(response.data);
			} catch(error) {
				setError(error.message);
			}
			finally{
				setLoading(false);
			}
			
		}
		getPost()
	} , []);

	if (loading) return <h2>Loading...</h2>;  // Show loading state
  if (error) return <h2>Error: {error}</h2>;  // Show error state

	return (
		<>
		  <h1>Fetched Data from the API</h1>
      <div className='grid grid-cols-4 gap-3 mt-3 '>
        {user.map((user) => (
          <li className='list-none shadow-2xl p-4 bg-slate-400 text-white rounded-lg' key={user.id}>
						<h4>{user.id}</h4>
            <h3>Name : {user.name}</h3>
            <p>Email : {user.email}</p>
						<p>company : {user.company.catchPhrase}</p>
						<p>Phone : {user.phone}</p>
          </li>
        ))}
      </div>
		</>
	)
}

export default FetchOld



// import React, { useEffect, useState } from 'react';
// import { fetchPost } from '../../assets/Api/Api.jsx'; 

// const FetchOld = () => {
//   const [user, setUser] = useState(() => {
//     const savedUser = localStorage.getItem('user');
//     return savedUser ? JSON.parse(savedUser) : [];
//   });
//   const [loading, setLoading] = useState(user.length === 0);  // Show loading only if no data in localStorage
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     if (user.length === 0) {
//       const getPost = async () => {
//         try {
//           const response = await fetchPost(); // Fetch data from API
//           setUser(response.data);
//           localStorage.setItem('user', JSON.stringify(response.data)); // Cache data in localStorage
//         } catch (error) {
//           setError(error.message);
//         } finally {
//           setLoading(false);
//         }
//       };
//       getPost(); // Call the function
//     }
//   }, [user]);

//   if (loading) return <h2>Loading...</h2>;  // Show loading state
//   if (error) return <h2>Error: {error}</h2>;  // Show error state

//   return (
//     <>
//       <h1>Fetched Data from the API</h1>
//       <div className="grid grid-cols-4 gap-3 mt-3">
//         {user.map((user) => (
//           <li className="list-none shadow-2xl p-4 bg-slate-400 text-white rounded-lg" key={user.id}>
//             <h4>{user.id}</h4>
//             <h3>Name: {user.name}</h3>
//             <p>Email: {user.email}</p>
//             <p>Company: {user.company.catchPhrase}</p>
//             <p>Phone: {user.phone}</p>
//           </li>
//         ))}
//       </div>
//     </>
//   );
// };

// export default FetchOld;
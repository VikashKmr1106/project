import React from 'react';
import { fetchPost } from '../../assets/Api/Api.jsx'; 
import { useQuery } from '@tanstack/react-query';

const TranstackQuery = () => {
  // Define the query with react-query and use caching
  const { data, error, isPending } = useQuery({
    queryKey: ['user'], // Unique key for this query
    queryFn: async () => {
      try {
        const response = await fetchPost();
        return response.status === 200 ? response.data : [];
      } catch (error) {
        throw new Error(error);
      }
    },
		// staleTime: 5 * 60 * 1000,
    staleTime: Infinity,  // Data never becomes stale
    cacheTime: Infinity,  // Cache data forever unless invalidated
  });

  // Handle loading state
  if (isPending) return <h2>Loading...</h2>;

  // Handle error state
  if (error) return <h2>Error: {error.message}</h2>;

  return (
    <>
      <h1>Fetched Data from the API</h1>
      <div className="grid grid-cols-4 gap-3 mt-3">
        {data?.map((user) => (
          <li className="list-none shadow-2xl p-4 bg-slate-400 text-white rounded-lg" key={user.id}>
            <h4>{user.id}</h4>
            <h3>Name: {user.name}</h3>
            <p>Email: {user.email}</p>
            <p>Company: {user.company.catchPhrase}</p>
            <p>Phone: {user.phone}</p>
          </li>
        ))}
      </div>
    </>
  );
};

export default TranstackQuery;

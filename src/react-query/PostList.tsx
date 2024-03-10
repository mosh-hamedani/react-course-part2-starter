import React, { useState } from 'react';
import usePosts from './hooks/usePosts';

const PostList = () => {
	const pageSize = 10; 
  	const { data, error, isLoading, fetchNextPage, isFetchingNextPage } = usePosts({
		pageSize
	});

	if (isLoading) return <p>Loading...</p>
	if (error) return <p>{error.message}</p>;

	return (
			<>
				<ul className="list-group">
					{data.pages.map((page, index)=>
						<React.Fragment key={index}>
							{
								page.map((post) => (
									<li key={post.id} className="list-group-item">
									{post.title}
									</li>
								))
							}
						</React.Fragment>
						)
					}
				</ul>
				<button 
					className="btn btn-primary my-3 ms-1"
					disabled={isFetchingNextPage}
					onClick={()=> fetchNextPage()}
				>Load More</button>
			</>
	);
};

export default PostList;

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Blogpage = () => {
	// 17. Делаем страницу со списком постов. Делаем запрос на сервер -> получаем ответ -> сетаем в локальный стейт -> отрисовываем через map
	const [posts, setPosts] = useState([]);

	console.log({ posts });

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/posts')
			.then((res) => res.json())
			.then((data) => setPosts(data));
	}, []);

	return (
		<div>
			<ul>
				{posts.map((post) => (
					<Link to={`/posts/${post.id}`} key={post.id}>
						<li>{post.title}</li>
					</Link>
				))}
			</ul>
		</div>
	);
};

export { Blogpage };

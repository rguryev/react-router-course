import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Blogpage = () => {
	// 17. Делаем страницу со списком постов. Делаем запрос на сервер -> получаем ответ -> сетаем в локальный стейт -> отрисовываем через map
	const [posts, setPosts] = useState([]);

	// 24. Работаем с location. Видим что есть свойство state, в него можно передать значения из другой компоненты в время перехода на эту
	console.log(useLocation());

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/posts')
			.then((res) => res.json())
			.then((data) => setPosts(data));
	}, []);

	return (
		<div>
			<h1>Our news</h1>
			{/* 30. Добавляем ссылку на приватный роут <Createpost />. */}
			<Link to='/posts/new'>Add new post</Link>
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

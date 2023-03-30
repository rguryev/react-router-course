import React, { useEffect, useState } from 'react';

import { Link, useParams } from 'react-router-dom';

// 16. Чтобы использовать параметры для динамического отображения нужных компонент используем хук useParams. useParams возвращает параметры, причем параметры мы можем задавать в разном количестве, их может быть несколько. Если задать 'posts/:id' и ввести в url ...posts/123 - хук выведет {id: "123"}. Если будет вложенность 'posts/:id/:title' и вывести ...posts/32/sun - хук выведет {id: '32', title: 'sun'}

// 18. Аналогично со списком постов, только запрашиваем один пост
const Singlepage = () => {
	const [post, setPost] = useState(null);
	const { id } = useParams();
	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
			.then((res) => res.json())
			.then((data) => setPost(data));
	}, [id]);

	return (
		<div>
			{post && (
				<>
					<h1>{post.title}</h1>
					<p>{post.body}</p>
					<Link to={`/posts/${id}/edit`}>Edit this post</Link>
				</>
			)}
		</div>
	);
};

export { Singlepage };

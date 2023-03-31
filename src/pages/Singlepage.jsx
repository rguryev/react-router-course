import React, { useEffect, useState } from 'react';

import { Link, useNavigate, useParams } from 'react-router-dom';

// 16. Чтобы использовать параметры для динамического отображения нужных компонент используем хук useParams. useParams возвращает параметры, причем параметры мы можем задавать в разном количестве, их может быть несколько. Если задать 'posts/:id' и ввести в url ...posts/123 - хук выведет {id: "123"}. Если будет вложенность 'posts/:id/:title' и вывести ...posts/32/sun - хук выведет {id: '32', title: 'sun'}

// 18. Аналогично со списком постов, только запрашиваем один пост
const Singlepage = () => {
	const { id } = useParams();
	// Lesson_5: Работа с историей, локацией и приватными роутами (тема о навигации в компонентах, как обеспечить редиректы, хождение по истории, что такое объект локации, как можно организовать приватные роуты.).

	const navigate = useNavigate();
	const [post, setPost] = useState(null);

	// 21. Делаем кнопку назад. Импортируем хук useNavigate(), создаем функцию navigate которая может принять как ссылку, так и число на сколько шагов назад(-1)/вперед(1) по истории сделать. Делаем
	const goBack = () => navigate(-1);
	// 22. Если передаем ссылку, то функция принимает еще опции replace: false (по умолчанию - движение как по истории), если replace: true - если нужна переадресация и не хочу записывать движение в историю. И второй параметр - это state. Делаем кнопку домой с помощью useNavigate. Но это плохая практика, если надо просто прямая ссылка - используй Link. Навигация хороша например когда есть запрос и по итогам этого запроса хотим пользователя куда-то перенаправить.
	const goHome = () => navigate('/', { replace: true });

	// 25. Работаем с location, при переходе на blogpage передаем стейт. После перехода в location той странице будет этот стейт.
	const goBlog = () => navigate('/posts', { state: 123 });

	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
			.then((res) => res.json())
			.then((data) => setPost(data));
	}, [id]);

	return (
		<div>
			<button onClick={goBack}>Go back</button>
			<button onClick={goHome}>Go home</button>
			<button onClick={goBlog}>Go posts</button>
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

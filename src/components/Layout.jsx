import React from 'react';
import { Link, Outlet } from 'react-router-dom';

// 4. Выносим футер/хедер/сайдбар в этот компонент
// 5. Импортируем компонент Outlet, через него мы говорим разметке куда мы хотим вставить все остальное.

const Layout = () => {
	return (
		<>
			<header>
				<Link to='/'>Home</Link>
				<Link to='/posts'>Blog</Link>
				<Link to='/about'>About</Link>
			</header>

			<main className='container'>
				<Outlet />
			</main>

			<footer className='container'>2021</footer>
		</>
	);
};

export { Layout };

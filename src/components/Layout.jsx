import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { CustomLink } from './CustomLink';

// Lesson_2: Общая разметка и компонент Outlet. // 4. Выносим футер/хедер/сайдбар в этот компонент
// 5. Импортируем компонент Outlet, через него мы говорим разметке куда мы хотим вставить все остальное.

// Lesson_3: Компонент NavLink и его кастомизация. // 8. Если хотим, чтобы выделялась выбранная (активная) ссылка - то вместо Link оборачиваем ссылку в NavLink. NavLink автоматически на выбранный элемент вешает класс .active, поэтому в css просто задаем стили на этот класс. Оставим этот способ в ссылке Home.
// 9. Если хотим задавать другой класс - то задаем className (библиотека позволяет передавать не только строки, но и функцию) и передаем туда функцию, функция принимает по дефолту объект (поэтому можно сделать деструктуризацию и объекта есть ключ isActive, который проверяет, активна ссылка или нет) и с помощью тернарного оператора определяем нужный класс. Выделим эту функцию отдельно в setActive. Оставим этот способ в ссылке Blog.
const setActive = ({ isActive }) => (isActive ? 'active-link' : '');
// 10. Если хотим передавать класс не через className, а через проп style. Style всегда принимает объект, но в данном случае (благодаря библиотеки) в него можем передать функцию и эта функция принимает объект + свойство isActive и должна вернуть объект, куда инлайново задаем стили через тернарный оператор.Оставим этот способ в ссылке About.
const setActiveAlt = ({ isActive }) => ({ color: isActive ? 'var(--color-active)' : '' });

const Layout = () => {
	return (
		<>
			<header>
				{/* <NavLink to='/'>Home</NavLink> */}
				{/* // 14. Импортируем и используем CustomLink в линке Home. */}
				<CustomLink to='/'>Home</CustomLink>
				<NavLink to='/posts' className={setActive}>
					Blog
				</NavLink>
				<NavLink to='/about' style={setActiveAlt}>
					About
				</NavLink>
			</header>

			<main className='container'>
				<Outlet />
			</main>

			<footer className='container'>&copy; ReactRouter Tutorials 2023</footer>
		</>
	);
};

export { Layout };

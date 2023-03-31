import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../hook/useAuth';

const Loginpage = () => {
	// 28. Нам нужна функция navigate + объект location + получаем информацию, откуда мы пришли fromPage (будем брать информацию из объекта location, у него есть свойство state (опционально), у него есть ключ from и там pathname. Если чего-то нет - дефолтным условием будет путь на главную )
	const navigate = useNavigate();
	const location = useLocation();

	const { signin } = useAuth();

	const fromPage = location.state?.from?.pathname || '/';

	// 36. Пишем свой хендлер чтобы отправлять форму
	const handleSubmit = (event) => {
		event.preventDefault();
		const form = event.target;
		const user = form.username.value;
		// 37. Вызываем метод из контекста, который принимает user и колбэк, где указываем путь, куда мы хотим перенаправить пользователя после логина, перенаправляем его в fromPage и replace чтобы мы будучи авторизированным не могли вернуться на окно авторизации.
		signin(user, () => navigate(fromPage, { replace: true }));
	};

	return (
		<div>
			<h1>login page</h1>
			<form onSubmit={handleSubmit}>
				<label>
					Name: <input name='username' />
				</label>
				<button type='submit'>Login</button>
			</form>
		</div>
	);
};

export { Loginpage };

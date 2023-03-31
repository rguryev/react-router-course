// 31. Для того, чтобы сделать простую авторизацию нам надо обеспечить все приложение информацией о том, зарегистрирован пользователь или нет. Реализовать это можно через контекст или редакс. Создаем компоненту, которая содержит контекст и делаем ее оберткой hoc, обернем в нее все роуты приложения.

import React, { createContext, useState } from 'react';

export const authContext = createContext(null);

const AuthProvider = ({ children }) => {
	// 32. Создаем стейт с юзером и методы регистрации. signin принимает юзера и колбэк, в качестве cb ожидаем функцию navigate чтобы после работы с пользователем можно было сделать переадресацию.
	const [user, setUser] = useState(null);
	const signin = (newUser, cb) => {
		setUser(newUser);
		cb();
	};
	const signout = (cb) => {
		setUser(null);
		cb();
	};

	// 33. В контекст передаем объект, где будет пользователь и 2 метода авторизации.
	const value = { user, signin, signout };
	return <authContext.Provider value={value}>{children}</authContext.Provider>;
};

export default AuthProvider;

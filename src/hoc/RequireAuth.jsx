import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../hook/useAuth';

// 26. location поможет в работе с приватными роутами: у нас есть список роутов, и можем сделать абстракцию над ними, будет оберткой для конкретной страницы и эта абстракция обеспечит приватность (зарегистрированный пользователь ли, админ ли и тд)
// 27. В роли children будет выступать любая страница из роута. Делаем проверку, можем ли попасть на эту страницу. Если можем - отрисовываем страницу из роута (приходит из children). Если не можем - делаем переадресацию на страницу логина с помощью Navigate, при этом уточняем, откуда мы приходим через state, чтобы мы могли вернуться после регистрации/авторизации.
const RequireAuth = ({ children }) => {
	const location = useLocation();
	// 35. Вызываем хук useAuth(), он содержит в себе контекст - т.е объект {user, signin, signout}, user - это строка, если она есть = true, если нет = null = false
	const { user } = useAuth();

	if (!user) {
		return <Navigate to='/login' state={{ from: location }} />;
	}
	return children;
};

export { RequireAuth };

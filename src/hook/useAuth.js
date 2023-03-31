import React from 'react';
import { useContext } from 'react';
import { authContext } from '../hoc/AuthProvider';

// 34. Делаем кастомный хук чтобы было удобнее работать с контекстом и не вызывать строчку useContext(authContext) в каждой компоненте. Вызов этого хука вызывает данные {user, signin, signout}
export const useAuth = () => {
	return useContext(authContext);
};

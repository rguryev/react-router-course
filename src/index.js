import React from 'react';
import ReactDOM from 'react-dom/client';
// Lesson_1: Базовый роутинг. // 1. Для того, чтобы роутинг был доступен во всем приложении, обеспечиваем все приложение провайдером - импортируем точку входа из библы.
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	// 2. Оборачиваем все приложение в BrowserRouter
	<BrowserRouter>
		<App />
	</BrowserRouter>,
);

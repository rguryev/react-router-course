import { Link, Route, Routes } from 'react-router-dom';
import { About } from './pages/Aboutpage';
import { Blogpage } from './pages/Blogpage';
import { Homepage } from './pages/Homepage';
import { Notfoundpage } from './pages/Notfoundpage';

// 3. Импортируем страницы, импортируем Route, Routes из библиотеки. Создаем блок Routes, в котором находятся Route с path - за каким значением в url роут следит, и element - какой компонент будет отрисовывать когда сработает роут.

function App() {
	return (
		<>
			<header>
				<Link to='/'>Home</Link>
				<Link to='/posts'>Blog</Link>
				<Link to='/about'>About</Link>
			</header>
			<Routes>
				<Route path='/' element={<Homepage />} />
				<Route path='/about' element={<About />} />
				<Route path='/posts' element={<Blogpage />} />
				<Route path='*' element={<Notfoundpage />} />
			</Routes>
		</>
	);
}

export default App;

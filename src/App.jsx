import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { About } from './pages/Aboutpage';
import { Blogpage } from './pages/Blogpage';
import { Homepage } from './pages/Homepage';
import { Notfoundpage } from './pages/Notfoundpage';

// 3. Импортируем страницы, импортируем Route, Routes из библиотеки. Создаем блок Routes, в котором находятся Route с path - за каким значением в url роут следит, и element - какой компонент будет отрисовывать когда сработает роут.
// 6. Импортируем Layout, оборачиваем все роуты в один Route, который в качестве элемента принимает обертку <Layout /> с футером/хедером. Как это работает: у нас есть одна общая роут-обертка, она будет отрисовываться всегда и внутри этой общей обертки мы сможем динамически что-то менять. Внутри этой роут-обертки, точнее в <Layout /> есть специальный плейсхолдер, куда и будет отрисовываться все внутреннее содержимое.
// 7. Чтобы не повторять path='/', во внутреннем роуте пишем index вместо path='/'

function App() {
	return (
		<>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<Homepage />} />
					<Route path='about' element={<About />} />
					<Route path='posts' element={<Blogpage />} />
					<Route path='*' element={<Notfoundpage />} />
				</Route>
			</Routes>
		</>
	);
}

export default App;

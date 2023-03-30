import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { About } from './pages/Aboutpage';
import { Blogpage } from './pages/Blogpage';
import { Createpost } from './pages/Createpost';
import { Editpost } from './pages/Editpost';
import { Homepage } from './pages/Homepage';
import { Notfoundpage } from './pages/Notfoundpage';
import { Singlepage } from './pages/Singlepage';

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
					{/* Lesson_4: Параметры в ссылках. // 15.  Допустим хотим выводить каждую новость отдельно на страницу, или сделать страницу создания/редактирования поста. Есть посты, надо реализовать функционал, чтобы писать в роутах 'posts/:id' или 'posts/:name'. Если в url написать posts/1234 - то выведется SinglePage  */}
					<Route path='posts/:id' element={<Singlepage />} />
					{/* // 20. Аналогично со страницей редактирования. */}
					<Route path='posts/:id/edit' element={<Editpost />} />
					{/* // 19. Делаем отдельный роут на котором якобы делаем новые страницы (просто пример роута). Задаем явно значение new, это не параметр.*/}
					<Route path='posts/new' element={<Createpost />} />

					<Route path='*' element={<Notfoundpage />} />
				</Route>
			</Routes>
		</>
	);
}

export default App;

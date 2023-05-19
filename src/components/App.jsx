import Header from 'pages/Header';
import Home from 'pages/Home';
import { Routes, Route } from 'react-router-dom';
import Contacts from 'pages/Contacts';
import Registration from 'pages/Registration';
import Login from 'pages/SignIn';
export const App = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<Header></Header>}>
					<Route path="/home" index element={<Home />} />
					<Route
						path="*"
						element={<div>Ooops, i think this page does not exist</div>}
					></Route>
					<Route path="/contacts" element={<Contacts></Contacts>}></Route>
					<Route
						path="/registration"
						element={<Registration></Registration>}
					></Route>
					<Route path="/login" element={<Login></Login>}></Route>
				</Route>
			</Routes>
		</>
	);
};

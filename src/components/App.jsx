import Header from 'pages/Header';
import Home from 'pages/Home';
import { Routes, Route } from 'react-router-dom';
import Contacts from 'pages/Contacts';
import Registration from 'pages/Registration';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getInfoAboutCurrentUser } from 'redux/operations';
import { PrivateRoute } from 'routes/PrivateRoute';
import { RestrictedRoute } from 'routes/RestrictedRoute';
import SignIn from './SignInForm/SignIn';
export const App = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getInfoAboutCurrentUser());
	}, [dispatch]);
	return (
		<>
			<Routes>
				<Route path="/" element={<Header></Header>}>
					<Route path="/home" index element={<Home />} />
					<Route
						path="*"
						element={<div>Ooops, i think this page does not exist</div>}
					></Route>
					<Route
						path="/contacts"
						element={
							<PrivateRoute
								redirectTo="/login"
								component={<Contacts></Contacts>}
							></PrivateRoute>
						}
					></Route>
					<Route
						path="/registration"
						element={
							<RestrictedRoute
								redirectTo="/contacts"
								component={<Registration></Registration>}
							></RestrictedRoute>
						}
					></Route>
					<Route
						path="/login"
						element={
							<RestrictedRoute
								redirectTo="/contacts"
								component={<SignIn></SignIn>}
							></RestrictedRoute>
						}
					></Route>
				</Route>
			</Routes>
		</>
	);
};

import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectUserSignedIn } from 'redux/selectors';
export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
	const isSignedIn = useSelector(selectUserSignedIn);

	return !isSignedIn ? <Navigate to={redirectTo} /> : Component;
};

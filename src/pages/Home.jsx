import { useSelector } from 'react-redux';
import { selectUserEmail, selectUserInfo } from 'redux/selectors';

const Home = () => {
	return (
		<main style={{ margin: 'auto' }}>
			<h1>Hello, i am main page</h1>
		</main>
	);
};
export default Home;

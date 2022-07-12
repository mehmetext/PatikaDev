import axios from "axios";

const getData = async (userID) => {
	const usersUrl = "https://jsonplaceholder.typicode.com/users/";
	const postsUrl = "https://jsonplaceholder.typicode.com/posts?userId=";
	const { data: user } = await axios(usersUrl + userID);
	const { data: posts } = await axios(postsUrl + userID);

	user.posts = posts;

	return user;
};

export default getData;

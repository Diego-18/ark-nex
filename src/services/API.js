import axios from "axios";

export default () => {
	return axios.create({
		baseURL: "https://graditest-store.myshopify.com/products/",
	});
};

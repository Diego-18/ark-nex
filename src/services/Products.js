/* eslint-disable quotes */
import API from "./services/API";

function getProducts() {
	return API().get("free-trainer-3-mmw.js");
}

export default { getProducts };

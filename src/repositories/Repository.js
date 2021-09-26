const API = "https://api.spoonacular.com/";
const API_KEY = "129acc893db54c198cfeafb82bbb174e";

export default {
  request(endpoint, props) {
  	return fetch(`${API}${endpoint}&apiKey=${API_KEY}`, props)
  },
};
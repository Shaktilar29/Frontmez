import axios from 'axios';

const API_URL = 'https://databasemez.herokuapp.com/v1/api/pages';

const headers = { 
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS, post, get",
  "'Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token",
  "Content-Type": "application/json",
  "Accept": "*/*",
};
class PageService {

  PagesItem[] getPageList() {

    try {
      axios.get(API_URL, { headers }).then(response =>{
        return response.data})

        } catch (err) {
          if (err.response) {
            // client received an error response (5xx, 4xx)
            console.log("Server Error:", err)
          } else if (err.request) {
            // client never received a response, or request never left
            console.log("Network Error:", err)
          } else {
            console.log("Client Error:", err)
          }
        }
  }

}

export default new PageService();
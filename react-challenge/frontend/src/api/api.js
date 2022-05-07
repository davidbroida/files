import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL || 'http://localhost:5000';

class companyApi {
  static async signup(data) {
    let res = await axios.post(`${BASE_URL}/users`);
    return res.token;
  }

  static async getUsers(data) {
    let res = await axios.get(`${BASE_URL}/users`);
    return res.data;
  }
}

export default companyApi;

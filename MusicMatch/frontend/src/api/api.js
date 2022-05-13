import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL || 'http://localhost:5000';

class MusicMatchApi {

  static token;

  static async request(endpoint, data = {}, method = 'get') {
    // console.debug('API Call:', endpoint, data, method);

    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${MusicMatchApi.token}` };
    const params = method === 'get' ? data : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error('API Error:', err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  static async signup(data) {
    let res = await this.request(`auth/register`, data, 'post');
    return res.token;
  }

  static async login(data) {
    let res = await this.request(`auth/token`, data, 'post');
    return res.token;
  }

  static async getCurrentUser(username) {
    let res = this.request(`users/${username}`);
    // console.log(res);
    return res.user;
  }
}

export default MusicMatchApi;

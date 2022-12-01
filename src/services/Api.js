import axios from 'axios';
import querystring from 'qs';
import config from '../../env';

const api = axios.create({
  baseURL: config.STAGING,
  timeout: 20000,
  headers: {
    Accept: 'application/json',
  },
  paramsSerializer: params => querystring.stringify(params),
});

export const Api = {
  get: async ({url, params = {}, showLog}) => {
    if (showLog) {
      console.log('API URL', url);
      console.log('API PARAMS', params);
    }

    try {
      const res = await api.get(url, {
        params,
      });

      if (showLog) {
        console.log('API RES', res?.data);
      }

      return res?.data;
    } catch (error) {
      if (showLog) {
        console.log('API ERROR', error);
      }

      const newData = {
        code: error?.code,
        message: error?.message
          ? error?.message
          : 'Sorry something went wrong!',
      };

      throw newData;
    }
  },
};

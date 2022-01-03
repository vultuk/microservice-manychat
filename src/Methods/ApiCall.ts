import axios, { AxiosPromise } from "axios";
import { Settings } from "../Types";

type SuccessData<R> = {
  success: true;
  data: R;
};

type ErrorData = {
  success: false;
  message: string;
}

const apiCall = (settings: Settings) => <D = any, R = any>(uri: string, data: D): Promise<SuccessData<R> | ErrorData> => {
  return axios({
    method: 'post',
    url: `https://api.manychat.com/${uri}`,
    headers: {
      Authorization:
        `Bearer ${settings.apiKey}`,
        'Content-Type': 'application/json',
    },
    data,
  })
  .then((r: any): SuccessData<R> => ({
    success: true,
    ...r.data
  }))
  .catch((err: any): ErrorData => {
    return {
      success: false,
      message: err.message,
    };
  });
}

export default apiCall;
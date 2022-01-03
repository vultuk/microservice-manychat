import axios from "axios";
import { ApiCallMethod, ErrorData, ResponsePromise, Settings, SuccessData } from "../Types";

const apiCall = (settings: Settings): ApiCallMethod => <D = any, R = any>(uri: string, data: D): ResponsePromise<R> => {
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
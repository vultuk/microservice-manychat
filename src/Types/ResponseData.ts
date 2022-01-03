export type ApiCallMethod = <D = any, R = any>(uri: string, data: D) => ResponsePromise<R>;

export type SuccessData<R> = {
  success: true;
  data: R;
};

export type ErrorData = {
  success: false;
  message: string;
}


export type ResponsePromise<R> = Promise<SuccessData<R> | ErrorData>;
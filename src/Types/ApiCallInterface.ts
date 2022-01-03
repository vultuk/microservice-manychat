import { ResponsePromise } from "./ResponseData";
import { Settings } from "./Settings";

type ApiCallInterface = (settings: Settings) => <D = any, R = any>(uri: string, data: D) => ResponsePromise<R>;

export default ApiCallInterface;
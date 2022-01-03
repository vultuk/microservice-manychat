import { apiCall } from "./Methods";
import addTag from "./Methods/AddTag";
import { ManyChatInterface, Settings } from "./Types";

const manyChat = (settings: Settings): ManyChatInterface => {
  const call = apiCall(settings);
  
  return {
    addTag: addTag(call)
  };
}

export default manyChat;
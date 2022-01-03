import { ApiCallMethod } from "../Types";

const addTag = (call: ApiCallMethod) => (userId: string, tag: string) => call<{subscriber_id: string; tag_name: string}>('', {
  subscriber_id: userId, tag_name: tag
})

export default addTag;
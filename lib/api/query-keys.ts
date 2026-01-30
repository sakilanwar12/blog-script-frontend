import { TPostArgs } from './post.api';

const QUERY_KEYS = {
  AUTH: {
    ME: ["me"],
  },
  POST:{
    GET_POSTS: (params?: TPostArgs) => ["posts", params],
    GET_POST: ["post"],
  }

};
export default QUERY_KEYS;
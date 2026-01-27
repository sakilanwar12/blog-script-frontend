import { TPostArgs } from './post.api';

const QUERY_KEYS = {
  AUTH: {
    ME: ["me"],
  },
  POST:{
    GET_POSTS: (args?: TPostArgs) => ["posts", args] as const,
    GET_POST: ["post"],
  }

};
export default QUERY_KEYS;
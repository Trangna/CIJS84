import axios from "axios";

const CommentAxiosApi = {
  GetComment: async () => {
    const url = "https://jsonplaceholder.typicode.com/comments";
    let data = await axios.get(url);
    return data;
  },
};

export default CommentAxiosApi;

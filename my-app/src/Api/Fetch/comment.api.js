const CommentApi = {
  GetComment: async () => {
    const url = "https://jsonplaceholder.typicode.com/comments";
    let response = await fetch(url);
    let data = await response.json();
    return data;
  },
};

export default CommentApi;

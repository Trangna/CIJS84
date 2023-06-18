import { useEffect } from "react";
import { useState } from "react";
// import CommentApi from "../../Api/Fetch/comment.api";
import CommentAxiosApi from "../../Api/Axios/comment.axios.api";

const LoadProductTable = () => {
  const [list, setList] = useState();
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    setLoading(true);
    const response = await CommentAxiosApi.GetComment();
    if (response.status == "200") {
      setList(response.data);
      setTimeout(() => {
        setLoading(true);
      }, 1000);
    }
    setList(response);
  };

  useEffect(() => {
    getData();
  }, []);

  return { list, loading };
};
export default LoadProductTable;

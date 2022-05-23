import { useParams, useNavigate } from "react-router-dom";

export const withRouter = (Child) => {
  return (props) => {
    const params = useParams();
    const navigate = useNavigate();
    return <Child {...props} navigate={navigate} params={params} />;
  };
};

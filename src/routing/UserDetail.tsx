import {
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
const UserDetail = () => {
  const navigate = useNavigate();

  // Methods for accessing the route parameters:
  // #1
  // Note that the value of the params property is a string. So in a real application, when we want fetch a user with a given ID, we have to parse this value to an integer.
  const params = useParams();

  // #2
  // to access and update query string parameters. It returns an array with two elements. First element is our query string parameters. And the second element is a function for updating them.
  const [searchParams, setSearchParams] = useSearchParams();
  // It shows the text in front of ? if you use toString method on this object. Or I can also extract individual parameters like age or sex, by calling get method
  console.log(searchParams.toString());
  console.log(searchParams.get("sex"));
  // I can use setSearchParams function to update query string parameters, But I have to be really careful with that because this function has a side effect. As you have learned our components should be pure. So they shouldn't have any side effects while rendering. So, I should call that function only inside events handlers or inside an effect

  // #3
  // I can access the current location
  const location = useLocation();
  console.log(location);

  return (
    <div className="mx-3 p-3 border">
      <h1>Hi, {params.name}</h1>
      <p>user {params.id} detail page </p>
    </div>
  );
};

export default UserDetail;

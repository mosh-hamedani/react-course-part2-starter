import { useNavigate } from "react-router-dom";

const ContactPage = () => {
  // I want to redirect the user to the home page after submitting a form
  // I should use   Navigate hook
  const navigate = useNavigate();
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        // Redirect the user to the home page
        navigate("/");
      }}
    >
      <button className="btn btn-primary">Submit</button>
    </form>
  );
};

export default ContactPage;

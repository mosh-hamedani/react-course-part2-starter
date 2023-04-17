const ContactPage = () => {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        // Redirect the user to the home page
      }}
    >
      <button className="btn btn-primary">Submit</button>
    </form>
  );
};

export default ContactPage;

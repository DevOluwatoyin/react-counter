import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
function NotFound() {
  return (
    <>
      <Helmet>
        <title>404 page</title>
        <link href="./notFound.js" />
      </Helmet>
      <div className="not-found">
        <h2> Sorry...</h2>
        <p>This page cannot be found.</p>
        <Link to="/">Back to the homepage...</Link>
      </div>
    </>
  );
}

export default NotFound;

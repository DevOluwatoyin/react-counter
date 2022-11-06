import * as React from "react";
import { Link } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";

function ErrorFallback({ error }) {
  return (
    <>
      <div role="alert">
        <p>Owww... Something went wrong:</p>
        <pre style={{ color: "black" }}>{error.message}</pre>
      </div>
      <div>
        <Link to="/">Go back to the homepage...</Link>
      </div>
    </>
  );
}

function SayHi({ prop }) {
  return <div>Hi {prop.toString()}</div>;
}

function SayHello({ prop }) {
  return <div>Hello {prop.toString()}</div>;
}

export default function ErrorPage() {
  return (
    <div>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <SayHi />
        <SayHello />
      </ErrorBoundary>
    </div>
  );
}

import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="landing">
      <h1>Welcome to PopX</h1>
      <p>
        Lorem ipsum dolor sit amet,
        <br />
        consectetur adipiscing elit,
      </p>
      <div className="actions">
        <Link to="/signup" className="btn btn-primary">
          Create Account
        </Link>
        <Link to="/login" className="btn btn-secondary">
          Already Registered? Login
        </Link>
      </div>
    </div>
  );
}

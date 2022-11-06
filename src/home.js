import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="content">
      <div className="content-preview">
        <Link to="/counter">
          <h2>Counter App built with Custom Hooks</h2>
          <p>
            This counter has a <strong>set value of 1</strong>. The increment
            button adds 1 to the current value, the decrement button subtracts 1
            from the current value while the reset button
            <strong> resets value to 0</strong>.
          </p>
        </Link>
      </div>
      <div className="content-preview">
        <Link to="/useReducer">
          <h2>Counter App built with UseReducer</h2>
          <p>
            This counter has a <strong>set value of 2</strong>. The increment
            button adds 5 to the current value, the decrement button subtracts 1
            from the current value while the reset button
            <strong> resets value to 0</strong>.
          </p>
        </Link>
      </div>
      <Link to="./errorPage">
        <button>Don't Click!</button>
      </Link>
    </div>
  );
}

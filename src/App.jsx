import { Link } from "react-router-dom";
import { AppRoutes } from "./routes/AppRoutes";

function App() {
  return (
    <div>
      <Link to={"/characters"}>
        <button>characters</button>
      </Link>
      <Link to={"/location"}>
        <button>location</button>
      </Link>
      <Link to={"/episode"}>
        <button>episode</button>
      </Link>
      <AppRoutes/>
    </div>
  );
}

export default App;

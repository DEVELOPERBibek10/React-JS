import { isAuthenticated } from "./api/auth.ts";
import Routes from "./Routes.tsx";

function App() {
  const user = isAuthenticated();

  return <Routes user={user} />;
}

export default App;

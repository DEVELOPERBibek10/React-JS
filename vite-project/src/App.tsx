import { useSelector } from "react-redux";

import Routes from "./Routes.tsx";
import { RootState } from "./redux/store.ts";

function App() {
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );

  return <Routes user={isAuthenticated} />;
}

export default App;

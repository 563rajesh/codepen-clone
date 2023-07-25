import Home from "./components/Home";
import Dataprovider from "./context/Dataprovider";

function App() {
  return (
    <Dataprovider>
      <Home />
    </Dataprovider>
  );
}

export default App;

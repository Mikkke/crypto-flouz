import { BrowserRouter, Route } from "react-router-dom";
import CoinPage from "./components/CoinPage";
import Main from "./components/Main";

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Main} />
      <Route path="/crypto/:id" component={CoinPage} />
    </BrowserRouter>
  );
}

export default App;

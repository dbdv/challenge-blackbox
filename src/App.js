import { Route } from "wouter";
import Homepage from "./pages/Homepage";
import QuestionsPage from "./pages/QuestionsPage";
import Gameover from "./pages/GameoverPage";

function App() {
  return (
    <div>
      <Route path="/" component={Homepage} />
      <Route path="/questions" component={QuestionsPage} />
      <Route path="/gameover" component={Gameover} />
    </div>
  );
}

export default App;

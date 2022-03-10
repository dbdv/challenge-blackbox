import { Route } from "wouter";
import Homepage from "./pages/Homepage";
import QuestionsPage from "./pages/QuestionsPage";

function App() {
  return (
    <div>
      <Route path="/" component={Homepage} />
      <Route path="/questions" component={QuestionsPage} />
    </div>
  );
}

export default App;

import GameTitle from "./components/GameTitle";
import BoardContainer from "./containers/BoardContainer";

function App() {
  return (
    <div className="app">
      <main className="flex flex-col justify-center items-center">
        <GameTitle />
        <BoardContainer />
      </main>
    </div>
  );
}

export default App;

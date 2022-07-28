import CountButton from "./CountButton";
import SearchBar from "./SearchBar/SearchBar";
import'./styles/styles.css';

const App = () => {
  return (
    <div>
      <CountButton incrementBy={1} buttonColor={'blue'}/>
      <CountButton incrementBy={5} buttonColor={'orange'}/>
      <CountButton incrementBy={6} buttonColor={'pink'}/>
      <SearchBar />
    </div>
  );
};

export default App;

//porps are values that you can pass to.

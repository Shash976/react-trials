import './App.css';
import Nav from './components/Nav';

function App() {
  const styles = {
    color: "tomato",
    fontSize: "40px"
  }
  return (
    <div className="App" style={styles}>
      <Nav list = {['Home', 'Articles', 'About', 'Contact']} />
    </div>
  );
}

export default App;

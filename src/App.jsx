import { Button } from "react-bootstrap";
import "./App.css";
import TopBar from "./components/TopBar";
import Footer from "./components/Footer";
import Welcome from "./components/Welcome";
// import AllTheBooks from "./components/AllTheBooks";
import BookList from "./components/BookList";
import fantasy from "./array/fantasy.json";

function App() {
  return (
    <>
      <TopBar />
      <Welcome>
        <BookList lista={fantasy} />
      </Welcome>
      <Footer />
    </>
  );
}

export default App;

import "./App.scss";
import Header from "./components/Header/Header";
import VideoInfo from "./components/VideoInfo/VideoInfo";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";

function App() {
  return (
    <div className="App">
      <Header />
      <VideoPlayer />
      <VideoInfo />
    </div>
  );
}

export default App;

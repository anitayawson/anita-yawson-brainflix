import "./App.scss";
import CommentSection from "./components/CommentSection/CommentSection";
import Header from "./components/Header/Header";
import VideoInfo from "./components/VideoInfo/VideoInfo";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";

function App() {
  return (
    <div className="App">
      <Header />
      <VideoPlayer />
      <VideoInfo />
      <CommentSection />
    </div>
  );
}

export default App;

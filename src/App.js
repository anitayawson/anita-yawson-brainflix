import "./App.scss";
import CommentSection from "./components/CommentSection/CommentSection";
import Header from "./components/Header/Header";
import NextVideos from "./components/NextVideos/NextVideos";
import VideoInfo from "./components/VideoInfo/VideoInfo";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";

function App() {
  return (
    <div className="App">
      <Header />
      <VideoPlayer />
      <VideoInfo />
      <CommentSection />
      <NextVideos />
    </div>
  );
}

export default App;

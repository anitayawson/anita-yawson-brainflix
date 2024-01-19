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
      <div className="desktop-layout">
        <div className="desktop-layout__info-and-comments">
          <VideoInfo />
          <CommentSection />
        </div>
        <div className="desktop-layout__next-videos">
          <NextVideos />
        </div>
      </div>
    </div>
  );
}

export default App;

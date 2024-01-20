import { useState } from "react";
import "./App.scss";
import CommentSection from "./components/CommentSection/CommentSection";
import Header from "./components/Header/Header";
import NextVideos from "./components/NextVideos/NextVideos";
import VideoInfo from "./components/VideoInfo/VideoInfo";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
import videoData from "./data/videos.json";
import videoDetailsData from "./data/video-details.json";

function App() {
  const [videos] = useState(videoData);
  const [selectedVideo, setSelectedVideo] = useState(videoDetailsData[0]);

  const handleSelectVideo = (clickedId) => {
    const clickedVideo = videoDetailsData.find(
      (video) => clickedId === video.id
    );
    setSelectedVideo(clickedVideo);
  };

  const filteredVideos = videos.filter(
    (video) => video.id !== selectedVideo.id
  );

  return (
    <div className="App">
      <Header />
      <VideoPlayer selectedVideo={selectedVideo} />
      <div className="desktop-layout">
        <div className="desktop-layout__info-and-comments">
          <VideoInfo selectedVideo={selectedVideo} />
          <CommentSection selectedVideo={selectedVideo} />
        </div>
        <div className="desktop-layout__next-videos">
          <NextVideos videos={filteredVideos} selectVideo={handleSelectVideo} />
        </div>
      </div>
    </div>
  );
}

export default App;

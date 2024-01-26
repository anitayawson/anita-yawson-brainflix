import { useState } from "react";
import CommentSection from "../../components/CommentSection/CommentSection";
import NextVideos from "../../components/NextVideos/NextVideos";
import VideoInfo from "../../components/VideoInfo/VideoInfo";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import videoData from "../../data/videos.json";
import videoDetailsData from "../../data/video-details.json";
import "./MainVideo.scss";

export default function MainVideo() {
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
    <main>
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
    </main>
  );
}

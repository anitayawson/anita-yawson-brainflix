import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import CommentSection from "../../components/CommentSection/CommentSection";
import NextVideos from "../../components/NextVideos/NextVideos";
import VideoInfo from "../../components/VideoInfo/VideoInfo";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import "./MainVideo.scss";

const BASE_URL = "https://project-2-api.herokuapp.com";
const API_KEY = "6f6b7c6e-c46d-429c-a683-94ceba2740f1";

export default function MainVideo() {
  const [selectedVideo, setSelectedVideo] = useState({});
  const [videos, setVideos] = useState([]);
  const { videoId } = useParams();
  const navigate = useNavigate();

  const fetchVideos = async () => {
    try {
      const response = await axios.get(
        `${BASE_URL}/videos/?api_key=${API_KEY}`
      );
      setVideos(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideoById = async (id) => {
    try {
      const response = await axios.get(
        `${BASE_URL}/videos/${id}?api_key=${API_KEY}`
      );
      setSelectedVideo(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (videos.length > 0) {
      fetchVideoById(videos[0].id);
    }
  }, [videos]);

  useEffect(() => {
    if (videoId) {
      fetchVideoById(videoId);
    }
  }, [videoId]);

  const handleSelectVideo = (clickedId) => {
    navigate(`/videos/${clickedId}`);
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

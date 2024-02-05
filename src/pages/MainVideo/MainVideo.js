import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import CommentSection from "../../components/CommentSection/CommentSection";
import NextVideos from "../../components/NextVideos/NextVideos";
import VideoInfo from "../../components/VideoInfo/VideoInfo";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import "./MainVideo.scss";

const BASE_URL = process.env.REACT_APP_SERVER_URL;

export default function MainVideo() {
  const [selectedVideo, setSelectedVideo] = useState({});
  const [videos, setVideos] = useState([]);
  const { videoId } = useParams();
  const navigate = useNavigate();

  const fetchVideos = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/videos`);
      setVideos(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchVideoById = async (id) => {
    try {
      const response = await axios.get(`${BASE_URL}/videos/${id}`);
      setSelectedVideo(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  useEffect(() => {
    if (videos.length > 0 && !videoId) {
      navigate("/");
    }
  }, [videos, videoId, navigate]);

  useEffect(() => {
    if (videos.length > 0) {
      fetchVideoById(videoId || videos[0].id);
    }
  }, [videos, videoId]);

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
        <section className="desktop-layout__info-and-comments">
          <VideoInfo selectedVideo={selectedVideo} />
          <CommentSection selectedVideo={selectedVideo} />
        </section>
        <section className="desktop-layout__next-videos">
          <NextVideos videos={filteredVideos} selectVideo={handleSelectVideo} />
        </section>
      </div>
    </main>
  );
}

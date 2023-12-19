import { Player } from "video-react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { _getVideo } from "../../../network/videos";

const INITIAL_STATE = {
  videoId: "",
  title: "",
  description: "",
  thumbnail: "",
  url: "",
  userId: "",
};

const Video = () => {
  const { videoId } = useParams();
  const [video, setVideo] = useState(INITIAL_STATE);

  const loadVideoData = (videoId) => {
    _getVideo(videoId)
      .then((res) => {
        let videos = res.data.data;
        console.log(videos);
        setVideo(videos);
      })
      .catch((err) => {
        console.log({ err });
      });
  };

  useEffect(() => {
    loadVideoData(videoId);
  }, []);

  return (
    <>
      <div className="video-container">
        {video.url && (
          <Player>
            <source src={video.url} />
          </Player>
        )}
      </div>
    </>
  );
};

export default Video;

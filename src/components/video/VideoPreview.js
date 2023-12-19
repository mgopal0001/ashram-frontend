import HoverVideoPlayer from "react-hover-video-player";

const Video = ({ src, thumbnail, alt, onClick }) => {
  return (
    <HoverVideoPlayer
      onClick={onClick}
      videoSrc={src}
      pausedOverlay={
        <img
          src={thumbnail}
          alt={alt}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      }
      loadingOverlay={
        <div className="loading-overlay">
          <div className="loading-spinner" />
        </div>
      }
    />
  );
};

export default Video;

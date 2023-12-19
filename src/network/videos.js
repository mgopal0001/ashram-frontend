import axios from "axios";

export const _getVideos = async () => {
  const headers = {
    "Content-Type": "application/json",
  };
  try {
    const bookData = await axios({
      method: "get",
      url: "http://localhost:8000/api/video",
      headers,
    });
    return bookData;
  } catch (err) {
    console.error("Internal server Error", err);
  }
};

export const _getVideo = async (videoId) => {
  const headers = {
    "Content-Type": "application/json",
  };
  try {
    const bookData = await axios({
      method: "get",
      url: `http://localhost:8000/api/video/${videoId}`,
      headers,
    });
    return bookData;
  } catch (err) {
    console.error("Internal server Error", err);
  }
};

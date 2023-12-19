import "./style.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { _getBookData } from "../../../network/books";
import { _getVideos } from "../../../network/videos";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import VideoPreview from "../../video/VideoPreview";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [videos, setVideos] = useState([]);

  const navigate = useNavigate();

  const loadBookData = () => {
    _getBookData()
      .then((res) => {
        let books = res.data.data.books;
        console.log(books);
        setBooks(books);
      })
      .catch((err) => {
        console.log({ err });
      });
  };

  const loadVideoData = () => {
    _getVideos()
      .then((res) => {
        let videos = res.data.data;
        console.log(videos);
        setVideos(videos);
      })
      .catch((err) => {
        console.log({ err });
      });
  };

  const handleVideoPreviewClick = (video) => {
    navigate(`/video/${video.videoId}`);
  };

  useEffect(() => {
    loadBookData();
    loadVideoData();
  }, []);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <div className="home-con">
        <div className="header-con">
          <h1>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto
            aperiam, ullam esse quia corporis at adipisci porro! Nobis et
            assumenda consequatur fuga optio? Ipsam adipisci quod velit tempora
            dolorem aspernatur?
          </h1>
          <button className="button-87" role="button">
            Donate us
          </button>
        </div>
        <div className="books-con mt-56">
          <h1>BOOKS</h1>
          <div className="books-container">
            <Carousel responsive={responsive}>
              {books.map((book) => (
                <div
                  className="book"
                  key={book.bookId}
                  style={{ background: `url(${book.thumbnail})` }}
                >
                  <div className="book-details-con">
                    <h2>{book.title}</h2>
                    <br></br>
                    by
                    <br></br>
                    {book.authors}
                    <br></br>
                    {book.description}
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>

        <div className="video-con">
          <Carousel responsive={responsive}>
            {videos.map((video) => {
              return (
                <VideoPreview
                  key={video.videoId}
                  onClick={() => handleVideoPreviewClick(video)}
                  src={video.url}
                  alt={video.title}
                  thumbnail={video.thumbnail}
                />
              );
            })}
          </Carousel>
        </div>
      </div>
    </>
  );
};
export default Home;

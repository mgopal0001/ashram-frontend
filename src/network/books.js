import axios from "axios";

export const _getBookData = async () => {
  const headers = {
    "Content-Type": "application/json",
  };
  try {
    const bookData = await axios({
      method: "get",
      url: "http://localhost:8000/api/book",
      headers,
    });
    return bookData;
  } catch (err) {
    console.error("Internal server Error", err);
  }
};

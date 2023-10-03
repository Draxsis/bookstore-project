import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import BooksTable from "../components/home/BooksTable";
import BooksCard from "../components/home/BooksCard";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";

const Home = () => {

  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState("table");

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5000/books")
      .then((response) => {
        setBooks(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Navbar setShowType={setShowType} />
      {loading ? (
        <Spinner />
      ) : showType === "table" ? (
        <div style={{ margin: "60px auto", maxWidth: "80%" }}>
          <BooksTable books={books} />
        </div>
      ) : (
        <div style={{ margin: "30px auto", maxWidth: "90%" }}>
          <BooksCard books={books} />
        </div>
      )}
      <Footer />
    </>
  );
};

export default Home;

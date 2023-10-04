import { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import BooksTable from '../components/home/BooksTable';
import BooksCard from '../components/home/BooksCard';
import Navbar from '../components/navbar';
import Footer from '../components/Footer';
import SearchBar from '../components/SearchBar';

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState('table');
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [titleSearchTerm, setTitleSearchTerm] = useState('');
  const [authorSearchTerm, setAuthorSearchTerm] = useState('');

  useEffect(() => {
    setLoading(true);
    axios
      .get('http://localhost:5000/books')
      .then((response) => {
        setBooks(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  const handleSearch = (titleSearchTerm, authorSearchTerm) => {
    setTitleSearchTerm(titleSearchTerm);
    setAuthorSearchTerm(authorSearchTerm);

    let filtered = books;

    if (titleSearchTerm || authorSearchTerm) {
      filtered = filtered.filter((book) =>
        book.title.toLowerCase().includes(titleSearchTerm.toLowerCase()) &&
        book.author.toLowerCase().includes(authorSearchTerm.toLowerCase())
      );
    }

    setFilteredBooks(filtered);
  };

  // Update filteredBooks when search terms are cleared
  useEffect(() => {
    if (!titleSearchTerm && !authorSearchTerm) {
      setFilteredBooks(books);
    }
  }, [titleSearchTerm, authorSearchTerm, books]);

  return (
    <>
      <Navbar setShowType={setShowType} />
      <SearchBar handleSearch={handleSearch} />
      {loading ? (
        <Spinner />
      ) : showType === 'table' ? (
        <div style={{ margin: '30px auto', maxWidth: '80%' }}>
          <BooksTable books={filteredBooks} />
        </div>
      ) : (
        <div style={{ margin: '30px auto', maxWidth: '90%' }}>
          <BooksCard books={filteredBooks} />
        </div>
      )}
      <Footer />
    </>
  );
};

export default Home;
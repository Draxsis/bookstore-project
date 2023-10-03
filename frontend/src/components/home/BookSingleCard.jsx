/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle, BsInfoCircle, BiShow, BiEdit, BiTrash } from 'react-icons/bi';
import { useState } from 'react';
import BookModal from './BookModal';

const BookSingleCard = ({ book }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className='border border-gray-300 rounded-lg p-4 m-4 relative hover:shadow-lg'>
      <h2 className='absolute top-1 right-2 px-3 py-1 bg-red-300 rounded-lg text-sm'>
        {book.publishYear}
      </h2>
      <h4 className='my-2 text-gray-500'>{book._id}</h4>
      <div className='flex items-center gap-2'>
        <PiBookOpenTextLight className='text-red-300 text-2xl' />
        <h2 className='my-1 font-bold'>{book.title}</h2>
      </div>
      <div className='flex items-center gap-2'>
        <BiUserCircle className='text-red-300 text-2xl' />
        <h2 className='my-1'>{book.author}</h2>
      </div>
      <div className='flex justify-between items-center gap-4 mt-4'>
        <BiShow
          className='text-3xl text-blue-800 hover:text-black cursor-pointer'
          onClick={() => setShowModal(true)}
        />
        <Link to={`/books/details/${book._id}`}>
          <BsInfoCircle className='text-2xl text-green-800 hover:text-black' />
        </Link>
        <Link to={`/books/edit/${book._id}`}>
          <BiEdit className='text-2xl text-yellow-600 hover:text-black' />
        </Link>
        <Link to={`/books/delete/${book._id}`}>
          <BiTrash className='text-2xl text-red-600 hover:text-black' />
        </Link>
      </div>
      {showModal && (
        <BookModal book={book} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
};

export default BookSingleCard;

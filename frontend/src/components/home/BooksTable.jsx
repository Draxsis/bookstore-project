import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';

const BooksTable = ({ books }) => {
  const theme = useTheme();

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>No</TableCell>
            <TableCell>Title</TableCell>
            <TableCell align="center">Author</TableCell>
            <TableCell align="center">Publish Year</TableCell>
            <TableCell align="center">Operations</TableCell> {/* Align Operations header */}
          </TableRow>
        </TableHead>
        <TableBody>
          {books.map((book, index) => (
            <TableRow key={book._id}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{book.title}</TableCell>
              <TableCell align="center">{book.author}</TableCell>
              <TableCell align="center">{book.publishYear}</TableCell>
              <TableCell align="center"> {/* Align icons */}
                <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
                  <Link to={`/books/details/${book._id}`}>
                    <BsInfoCircle className="text-2xl" style={{ color: theme.palette.secondary.main }} />
                  </Link>
                  <Link to={`/books/edit/${book._id}`}>
                    <AiOutlineEdit className="text-2xl" style={{ color: theme.palette.primary.main }} />
                  </Link>
                  <Link to={`/books/delete/${book._id}`}>
                    <MdOutlineDelete className="text-2xl" style={{ color: theme.palette.error.main }} />
                  </Link>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default BooksTable;

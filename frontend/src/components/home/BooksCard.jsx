// BooksCard.js
import React, { useState } from "react";
import {
  Grid,
  Card,
  CardContent,
  CardActions,
  IconButton,
  Typography,
} from "@mui/material";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle, BiShow } from "react-icons/bi";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";
import { Link } from "react-router-dom"; // Import Link

const BooksCard = ({ books }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);

  return (
    <Grid container spacing={2}>
      {books.map((item) => (
        <Grid item key={item._id} xs={12} sm={6} md={4} lg={3}>
          <Card variant="outlined">
            <CardContent>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "10px",
                }}
              >
                <PiBookOpenTextLight
                  style={{
                    fontSize: "2rem",
                    marginRight: "10px",
                    color: "#1976D2",
                  }}
                />
                <Typography variant="h6" noWrap>
                  {item.title}
                </Typography>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "10px",
                }}
              >
                <BiUserCircle
                  style={{
                    fontSize: "1.5rem",
                    marginRight: "10px",
                    color: "#4CAF50",
                  }}
                />
                <Typography variant="subtitle1" noWrap>
                  {item.author}
                </Typography>
              </div>
              <div>
                <Typography variant="caption" npWrap style={{ color: "#607D8B" }}>
                  ID: {item._id}
                </Typography>
              </div>
            </CardContent>
            <CardActions>
              <Link to={`/books/details/${item._id}`}>
                <IconButton aria-label="Detail" color="primary">
                  <BsInfoCircle style={{ color: "#607D8B" }} />
                </IconButton>
              </Link>
              <Link to={`/books/edit/${item._id}`}>
                <IconButton aria-label="Edit" color="primary">
                  <AiOutlineEdit style={{ color: "#607D8B" }} />
                </IconButton>
              </Link>
              <Link to={`/books/delete/${item._id}`}>
                <IconButton aria-label="Delete" color="primary">
                  <MdOutlineDelete style={{ color: "#F44336" }} />
                </IconButton>
              </Link>
              {/* Other buttons */}
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default BooksCard;

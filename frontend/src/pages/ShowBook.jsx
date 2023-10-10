import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Box, Paper, Typography } from "@mui/material";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import TitleIcon from "@mui/icons-material/Title";
import PersonIcon from "@mui/icons-material/Person";
import EventIcon from "@mui/icons-material/Event";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";

const ShowBook = () => {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5000/books/${id}`)
      .then((response) => {
        setBook(response.data.book);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [id]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "auto",
        "@media (max-width: 600px)": {
          height: "100vh", // Adjust height for smaller screens
        },
      }}
    >
      <Paper
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          height: { xs: "auto", md: "700px" },
        }}
      >
        <Box
          sx={{
            flex: 1,
            backgroundColor: "#e0e0e0",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            color: "#fff",
          }}
        >
        <Typography variant="h3" sx={{ color: "black" }}>
          Book Details
        </Typography>
        </Box>
        <Box
          sx={{
            flex: 1,
            padding: "2rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <BackButton />
          {loading ? (
            <Spinner />
          ) : (
            <Box
              sx={{
                border: "1px solid #ccc",
                borderRadius: "8px",
                padding: "1rem",
                height: "675px",
                marginBottom: "1.5rem",
                marginTop: "20px",
                width: "55%",
              }}
            >
              <Box
                sx={{
                  marginBottom: "1.5rem",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "0.5rem",
                    color: "#2C3639",
                    position: "relative",
                  }}
                >
                  <AssignmentIndIcon
                    sx={{
                      position: "absolute",
                      left: "-2px",
                      zIndex: 1,
                    }}
                  />
                  <Typography
                    variant="subtitle1"
                    sx={{
                      fontSize: "1rem",
                      fontWeight: "bold",
                      color: "#2C3639",
                      paddingLeft: "2rem",
                    }}
                  >
                    ID:
                  </Typography>
                </Box>
                <Typography
                  variant="subtitle1"
                  sx={{ fontSize: "1rem", color: "#263238" }}
                >
                  {book._id}
                </Typography>
              </Box>
              <Box
                sx={{
                  marginBottom: "1.5rem",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    marginBottom: "0.5rem",
                    color: "#2C3639",
                    position: "relative",
                  }}
                >
                  <TitleIcon
                    sx={{
                      position: "absolute",
                      left: "-2px",
                      zIndex: 1,
                    }}
                  />
                  <Typography
                    variant="subtitle1"
                    sx={{
                      fontSize: "1rem",
                      fontWeight: "bold",
                      color: "#2C3639",
                      paddingLeft: "2rem",
                    }}
                  >
                    Title:
                  </Typography>
                </Box>
                <Typography
                  variant="subtitle1"
                  sx={{ fontSize: "1rem", color: "#263238" }}
                >
                  {book.title}
                </Typography>
              </Box>
              <Box
                sx={{
                  marginBottom: "1.5rem",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    marginBottom: "0.5rem",
                    color: "#2C3639",
                    position: "relative",
                  }}
                >
                  <PersonIcon
                    sx={{
                      position: "absolute",
                      left: "-2px",
                      zIndex: 1,
                    }}
                  />
                  <Typography
                    variant="subtitle1"
                    sx={{
                      fontSize: "1rem",
                      fontWeight: "bold",
                      color: "#2C3639",
                      paddingLeft: "2rem",
                    }}
                  >
                    Author:
                  </Typography>
                </Box>
                <Typography
                  variant="subtitle1"
                  sx={{ fontSize: "1rem", color: "#263238" }}
                >
                  {book.author}
                </Typography>
              </Box>
              <Box
                sx={{
                  marginBottom: "1.5rem",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    marginBottom: "0.5rem",
                    color: "#2C3639",
                    position: "relative",
                  }}
                >
                  <EventIcon
                    sx={{
                      position: "absolute",
                      left: "-2px",
                      zIndex: 1,
                    }}
                  />
                  <Typography
                    variant="subtitle1"
                    sx={{
                      fontSize: "1rem",
                      fontWeight: "bold",
                      color: "#2C3639",
                      paddingLeft: "2rem",
                    }}
                  >
                    Publish Year:
                  </Typography>
                </Box>
                <Typography
                  variant="subtitle1"
                  sx={{ fontSize: "1rem", color: "#263238" }}
                >
                  {book.publishYear}
                </Typography>
              </Box>
              <Box
                sx={{
                  marginBottom: "1.5rem",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    marginBottom: "0.5rem",
                    color: "#2C3639",
                    position: "relative",
                  }}
                >
                  <AccessTimeIcon
                    sx={{
                      position: "absolute",
                      left: "-2px",
                      zIndex: 1,
                    }}
                  />
                  <Typography
                    variant="subtitle1"
                    sx={{
                      fontSize: "1rem",
                      fontWeight: "bold",
                      color: "#2C3639",
                      paddingLeft: "2rem",
                    }}
                  >
                    Created At:
                  </Typography>
                </Box>
                <Typography
                  variant="subtitle1"
                  sx={{ fontSize: "1rem", color: "#263238" }}
                >
                  {new Date(book.createdAt).toLocaleString()}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    marginBottom: "0.5rem",
                    color: "#2C3639",
                    position: "relative",
                  }}
                >
                  <AccessTimeIcon
                    sx={{
                      position: "absolute",
                      left: "-2px",
                      zIndex: 1,
                    }}
                  />
                  <Typography
                    variant="subtitle1"
                    sx={{
                      fontSize: "1rem",
                      fontWeight: "bold",
                      color: "#2C3639",
                      paddingLeft: "2rem",
                    }}
                  >
                    Last Updated At:
                  </Typography>
                </Box>
                <Typography
                  variant="subtitle1"
                  sx={{ fontSize: "1rem", color: "#263238" }}
                >
                  {new Date(book.updatedAt).toLocaleString()}
                </Typography>
              </Box>
            </Box>
          )}
        </Box>
      </Paper>
    </Box>
  );
};

export default ShowBook;

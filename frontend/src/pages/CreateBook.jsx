import React, { useState } from "react";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
import { Box, Button, TextField, Typography, Container } from "@mui/material";

const CreateBooks = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleSaveBook = () => {
    const data = {
      title,
      author,
      publishYear,
    };
    setLoading(true);
    axios
      .post("http://localhost:5000/books", data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Book Created successfully", { variant: "success" });
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar("Error", { variant: "error" });
        console.log(error);
      });
  };

  return (
    <Container maxWidth="sm" style={{ display: "flex", justifyContent: "space-between", backgroundColor: "#f0f0f0", padding: "20px", marginTop: '9%' }}>
      <div style={{ flex: 1, marginRight: "20px" }}>
        <BackButton />
        <Typography variant="h4" style={{ marginLeft: "15px", marginBottom: "20px", marginTop: "30px" }}>
          Create Book
        </Typography>
        {loading && <Spinner />}
        <Box>
          <TextField
            label="Title"
            variant="outlined"
            fullWidth
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={{ marginBottom: "10px" }}
          />
          <TextField
            label="Author"
            variant="outlined"
            fullWidth
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            style={{ marginBottom: "10px" }}
          />
          <TextField
            label="Publish Year"
            variant="outlined"
            fullWidth
            type="number"
            value={publishYear}
            onChange={(e) => setPublishYear(e.target.value)}
            style={{ marginBottom: "20px" }}
          />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleSaveBook}
            disabled={loading}
          >
            Save
          </Button>
        </Box>
      </div>
      <div style={{ flex: 1, backgroundColor: "#ffffff", padding: "20px" }}>
        {/* Content for the right side (if any) */}
      </div>
    </Container>
  );
};

export default CreateBooks;

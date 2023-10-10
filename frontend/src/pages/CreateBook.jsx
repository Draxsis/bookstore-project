import { useState } from "react";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
import { TextField, Button, Box, Typography, Container } from "@mui/material";

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
    <div style={{ display: "flex", height: "100vh" }}>
        <Box
          sx={{
            flex: 1,
            backgroundColor: "#e0e0e0",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            color: "black",
          }}
        >        
          <Typography variant="h3">
            Create your Books
          </Typography>
        </Box>
      <div
        style={{
          flex: 1,
          padding: "20px",
          backgroundImage: "#ffffff",
          borderRadius: "0 16px 16px 0",
        }}
      >
        <Container
          maxWidth="sm"
          style={{ paddingTop: "20px", textAlign: "center", height: "100%" }}
        >
          <BackButton />
          {loading && <Spinner />}
          <Box
            sx={{
              border: "2px solid #616161",
              borderRadius: "16px",
              padding: "20px",
              width: "80%",
              margin: "80px auto",
            }}
          >
            <div style={{ marginBottom: "20px" }}>
              <Typography variant="h6" style={{ color: "#616161" }}>
                Title
              </Typography>
              <TextField
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                variant="outlined"
                fullWidth
              />
            </div>
            <div style={{ marginBottom: "20px" }}>
              <Typography variant="h6" style={{ color: "#616161" }}>
                Author
              </Typography>
              <TextField
                type="text"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                variant="outlined"
                fullWidth
              />
            </div>
            <div style={{ marginBottom: "20px" }}>
              <Typography variant="h6" style={{ color: "#616161" }}>
                Publish Year
              </Typography>
              <TextField
                type="number"
                value={publishYear}
                onChange={(e) => setPublishYear(e.target.value)}
                variant="outlined"
                fullWidth
              />
            </div>
            <Button
              variant="contained"
              color="primary"
              onClick={handleSaveBook}
              style={{ borderRadius: "8px", padding: "10px 20px" }}
            >
              Create
            </Button>
          </Box>
        </Container>
      </div>
    </div>
  );
};

export default CreateBooks;

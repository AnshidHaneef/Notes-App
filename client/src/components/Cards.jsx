import {
  Box,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";

const Cards = () => {
  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const hoverCardStyles = {
    transition: "box-shadow 0.3s ease-in-out",
    "&:hover": {
      boxShadow: "0px 0px 10px 2px rgba(0,0,0,0.3)",
    }, 
  };

  const editButton = {
    backgroundColor: "#196bb3",
    height: "2.2rem",
    color: "white",
    borderRadius: "8px",
    padding: "10px 20px",
    "&:hover": {
    backgroundColor: "#267cc7",
    },
  }

  const deleteButton= {
    backgroundColor: "#ab1707",
    height: "2.2rem",
    color: "white",
    borderRadius: "8px",
    padding: "10px 20px",
    "&:hover": {
     backgroundColor: "#e80e0e",
    },
  }

  const randomColor = getRandomColor();
  const cardStyle = {
    backgroundColor: randomColor,
    color: "white",
  };

  return (
    <Box width="300px"  sx={hoverCardStyles}>
      <Card sx={cardStyle}>
        <CardContent>
          <Typography variant="h3">Title</Typography>
          <Typography variant="body2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            totam illum eligendi voluptates ab alias!
          </Typography>
        </CardContent>
        <CardActions>
          <Button sx={editButton}> Edit </Button>
          <Button sx={deleteButton}> Delete </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default Cards;

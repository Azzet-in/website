import {
  Paper,
  Title,
  Button,
  createStyles,
  Text,
  Center,
} from "@mantine/core";
import React from "react";

interface CardProps {
  id: number;
  image: string;
  name: string;
  review: string;
  activeSlide: number;
}

const useStyles = createStyles((theme) => ({
  card: {
    height: 233,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },

  title: {
    fontFamily: "Poppins",
    fontWeight: 400,
    color: "#06425A",
    fontSize: 12,
    height: "100%",
    display: "inline-flex",
    alignItems: "center",
    textAlign: "center",
  },

  category: {
    color: theme.white,
    opacity: 0.7,
    fontWeight: 700,
    textTransform: "uppercase",
  },
}));

const ReviewCard = ({ image, review, id, activeSlide }: CardProps) => {
  const { classes } = useStyles();
  return (
    <Center>
      <Paper
        p="xl"
        radius="md"
        sx={{
          backgroundImage:
            "url('https://2k21.s3.ap-south-1.amazonaws.com/Group+109+(2).svg')",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          opacity: id === activeSlide ? 1 : 0.5,
          height: id === activeSlide ? 233 : 200,
        }}
        className={classes.card}
      >
        <Title className={classes.title}>{review}</Title>
      </Paper>
    </Center>
  );
};

export default ReviewCard;

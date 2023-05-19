import {
  Paper,
  Title,
  Image,
  createStyles,
  Text,
  Center,
  Box,
} from "@mantine/core";
import React, { useEffect, useState } from "react";

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
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    if (id === activeSlide) {
      const interval = setInterval(() => {
        setRotate((prev) => prev + 1);
      }, 10);

      return () => clearInterval(interval);
    }
  }, [activeSlide, id]);

  return (
    <Center
      p='xl'
      className={classes.card}
      style={{
        opacity: activeSlide === id ? 1 : 0.5,
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translate(-50%, 0%)",
          zIndex: -1,
        }}
      >
        <Image
          src={"https://2k21.s3.ap-south-1.amazonaws.com/Group+109+(2).svg"}
          alt={"image"}
          width={233}
          height={233}
          fit='contain'
          style={{
            transform: `rotate(${rotate}deg)`,
          }}
        />
      </Box>
      <Title className={classes.title}>{review}</Title>
    </Center>
  );
};

export default ReviewCard;

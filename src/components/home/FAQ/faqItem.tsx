import { Avatar, Box, createStyles, Text } from "@mantine/core";
import React from "react";

interface IFaqItemProps {
  question: string;
  answer: string;
  icon: JSX.Element;
}

const useStyles = createStyles((theme) => ({
  question: {
    marginTop: 5,
    color: "#FFFFFF",
    fontFamily: "Poppins",
    fontWeight: 500,
    fontSize: 20,
  },
  answer: {
    color: "#FFFFFF",
    fontFamily: "Poppins",
    fontWeight: 400,
    fontSize: 11,
  },
}));

const FaqItem: React.FC<IFaqItemProps> = (props) => {
  const { question, answer, icon } = props;
  const { classes } = useStyles();

  return (
    <Box>
      <Avatar size="md" radius="xl" color="#0083B7">
        {icon}
      </Avatar>

      <Box>
        <Text className={classes.question}>{question}</Text>
        <Text className={classes.answer}>{answer}</Text>
      </Box>
    </Box>
  );
};

export default FaqItem;

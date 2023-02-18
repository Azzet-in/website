import { Text, Title, Container, createStyles, Box, Grid } from "@mantine/core";
import { QuestionMark } from "tabler-icons-react";
import FaqItem from "./faqItem";

export const MOCKDATA = [
  {
    icon: <QuestionMark size={32} />,
    question: "Extreme performance",
    answer:
      "This dust is actually a powerful poison that will even make a pro wrestler sick, Regice cloaks itself with frigid air of -328 degrees Fahrenheit",
  },
  {
    icon: <QuestionMark size={32} />,
    question: "Privacy focused",
    answer:
      "People say it can run at the same speed as lightning striking, Its icy body is so cold, it will not melt even if it is immersed in magma",
  },
  {
    icon: <QuestionMark size={32} />,
    question: "No third parties",
    answer:
      "They’re popular, but they’re rare. Trainers who show them off recklessly may be targeted by thieves",
  },
  {
    icon: <QuestionMark size={32} />,
    question: "Secure by default",
    answer:
      "Although it still can’t fly, its jumping power is outstanding, in Alola the mushrooms on Paras don’t grow up quite right",
  },
  {
    icon: <QuestionMark size={32} />,
    question: "24/7 Support",
    answer:
      "Rapidash usually can be seen casually cantering in the fields and plains, Skitty is known to chase around after its own tail",
  },
];

const useStyles = createStyles((theme) => ({
  wrapper: {
    backgroundImage: 'url("/assets/image/bg_faq.png")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    maxWidth: "100%",
    paddingTop: 80,
    paddingBottom: 80,
    paddingLeft: theme.spacing.xl * 4,
    paddingRight: theme.spacing.xl * 4,
    marginTop: 60,

    [theme.fn.smallerThan("md")]: {
      paddingLeft: theme.spacing.xl * 2,
      paddingRight: theme.spacing.xl * 2,

      paddingTop: 40,
      paddingBottom: 40,
    },
  },

  title1: {
    fontFamily: "Poppins",
    fontWeight: 600,
    fontSize: 32,
    textAlign: "center",
    color: "#1B425A",
  },

  title2: {
    fontFamily: "Poppins",
    fontWeight: 700,
    fontSize: 48,
    textAlign: "center",
    color: "#1B425A",
  },

  description: {
    fontFamily: "Poppins",
    fontWeight: 400,
    fontSize: 24,
    textAlign: "center",
    color: "#1B425A",
    letterSpacing: "-0.005em",
  },
}));

export function FAQSection() {
  const { classes, theme } = useStyles();

  return (
    <Box>
      <Container>
        <Title className={classes.title1}>FAQ’s</Title>
        <Title className={classes.title2}>Frequently Asked Questions</Title>

        <Text size="sm" className={classes.description}>
          Have any questions? We’re here to assist you
        </Text>
      </Container>

      <Container className={classes.wrapper}>
        <Grid gutter={2} gutterXs={5} gutterMd="xl" gutterXl={75}>
          {MOCKDATA.map((item, index) => (
            <Grid.Col
              lg={4}
              md={6}
              sm={12}
              sx={{ marginBottom: 10 }}
              key={index}
            >
              <FaqItem {...item} />
            </Grid.Col>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

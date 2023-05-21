import { Text, Title, Container, createStyles, Box, Grid } from "@mantine/core";
import { QuestionMark } from "tabler-icons-react";
import FaqItem from "./faqItem";

export const MOCKDATA = [
  {
    icon: <QuestionMark size={32} />,
    question: "Private contest",
    answer:
      "You can create your own private contest on Azzet. Simply select the 'Create Contest' option and fill in the required information. You can then invite your friends or others to join the contest using the unique contest code.",
  },
  {
    icon: <QuestionMark size={32} />,
    question: "Privacy focused",
    answer:
      "We take the security of your personal information very seriously at Azzet. We use industry-standard security measures to protect your personal information and ensure that it is not shared with third parties.",
  },
  {
    icon: <QuestionMark size={32} />,
    question: "No real trading",
    answer:
      "You DO NOT require a trading/Demat account to participate in the contests. Upon entering any contest to create your portfolio, you get virtual money of in total balance to create a virtual portfolio.",
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
      "We are always happy to help and answer any questions you may have. If you have more questions or need help with Azzet, you can contact our customer support team at admin@azzet.in | +91 8401698962.",
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

        <Text size='sm' className={classes.description}>
          Have any questions? We’re here to assist you
        </Text>
      </Container>

      <Container className={classes.wrapper}>
        <Grid gutter={2} gutterXs={5} gutterMd='xl' gutterXl={75}>
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

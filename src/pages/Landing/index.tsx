import Head from "next/head";
import styles from "src/styles/Home.module.css";
import { FAQSection } from "src/components/home/FAQ/faqSection";
import { Footer } from "src/components/shared/footer";
import TestimonialSection from "src/components/home/Testimonial/testimonial";
import FeatureSection from "src/components/home/Features/feature";
import {
  Box,
  Grid,
  Title,
  Image,
  Text,
  createStyles,
  useMantineTheme,
  Center,
  Container,
} from "@mantine/core";
import useDeviceSize from "src/utils/useDeviceSize";
import { Navbar } from "src/components/shared/navbar";
import { motion } from 'framer-motion';

const useStyles = createStyles((theme) => ({
  container: {
    overflow: "hidden",
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: 50,
  },
  title: {
    color: "#06425A",
    fontSize: 88,
    lineHeight: "5.8rem",
    fontFamily: 'Satoshi',
    fontWeight: 900,
    [theme.fn.smallerThan("md")]: {
      textAlign: "center",
      fontSize: "2.5rem",
      lineHeight: "2.8rem",
    },
  },
  download: {
    display: "flex",
    marginTop: 20,
    [theme.fn.smallerThan("md")]: {
      justifyContent: "center",
    },
  },
  data: {
    color: "#06425A",
    fontSize: 27.25,
    fontFamily: "Poppins",
    fontWeight: 600,
    textAlign: "center",
    padding: 0,
    margin: 0,
  },
  info: {
    color: "#06425A",
    fontSize: 13.63,
    fontFamily: "Poppins",
    fontWeight: 500,
    textAlign: "center",
    padding: 0,
    marginTop: -10,
  },
  features: {
    color: "#06425A",
    fontSize: 50,
    fontFamily: "Satoshi",
    fontWeight: 900,
    textAlign: "center",
  },
  features1: {
    color: "#FFFFFF",
    fontSize: 23,
    fontFamily: "Poppins",
    fontWeight: 600,
    paddingTop: 50,
  },
  featuresDescription: {
    color: "#FFFFFF",
    fontSize: 14,
    fontFamily: "Poppins",
    fontWeight: 400,
  },
}));

const Home = () => {
  const { classes } = useStyles();
  const theme = useMantineTheme();
  const { width } = useDeviceSize();

  const bounceTransition = {
    y: {
      duration: 2.4,
      repeat: Infinity,
      ease: "linear",
      repeatType: "loop"
    }
  };

  return (
    <>
      <Head>
        <title>AZZET</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.bg}>
        <Navbar />

        <Box className={classes.container}>
          <Grid>
            <Grid.Col lg={6} md={6} xs={12}>
              <Box sx={{ paddingTop: 80 }}>
                <Title className={classes.title}>The simple way</Title>
                <Title className={classes.title}>to win, learn,</Title>
                <Title className={classes.title}>and interact</Title>
                <Box className={classes.download}>
                  <Image
                    src="/assets/image/googlePlay.png"
                    alt="googlePlay"
                    width={200}
                  />
                  <Image
                    src="/assets/image/android.png"
                    alt="googlePlay"
                    width={182}
                    sx={{ marginTop: 12 }}
                  />
                </Box>
              </Box>
            </Grid.Col>
            <Grid.Col lg={6} sm={12}>
              <Box sx={{ justifyContent: "right" }}>
                <Grid>
                  <Grid.Col lg={5} sm={12}></Grid.Col>
                  <Grid.Col lg={3} sm={6}>
                    <Text className={classes.data}>1000</Text>
                    <Text className={classes.info}>DAILY CONTESTS</Text>
                  </Grid.Col>
                  <Grid.Col lg={3} sm={6}>
                    <Text className={classes.data}>13 Crore+</Text>
                    <Text className={classes.info}>USERS</Text>
                  </Grid.Col>
                  <Grid.Col lg={1} sm={12}></Grid.Col>
                </Grid>
              </Box>
              <Center>
                <motion.div
                  animate={{
                    y: ["0px", "12px", "0px"],
                  }}
                  transition={bounceTransition}
                >
                  <Image
                    src="/assets/image/landing.svg"
                    alt="landing"
                    width={width > 768 ? 464 : 300}
                    sx={{ marginTop: 20 }}
                  />
                </motion.div>
              </Center>
            </Grid.Col>
          </Grid>
        </Box>

        <Container size={"xl"} sx={{ paddingBottom: 50, paddingTop: 60 }}>
          <Grid>
            <Grid.Col lg={4} md={4} xs={12}>
              <Box>
                <Title className={classes.features}>Win</Title>
                <Box>
                  <Box
                    sx={{
                      backgroundColor: "cyan",
                      width: 70,
                      borderRadius: 100,
                      marginBottom: -55,
                      zIndex: 2,
                      position: "relative",
                      marginLeft: 15,
                      padding: 5,
                      backgroundImage:
                        "linear-gradient(180deg, #9CE2E1, #2B5D6B);",
                    }}
                  >
                    <Text
                      sx={{
                        fontSize: 38,
                        fontFamily: "Poppins",
                        fontWeight: 600,
                        color: "#FFFFFF",
                        textAlign: "center",
                      }}
                    >
                      01
                    </Text>
                  </Box>
                  <Box
                    sx={{
                      backgroundColor: "#06425A",
                      borderRadius: 15,
                      paddingLeft: 15,
                      paddingRight: 8,
                      zIndex: 1,
                      marginTop: 20,
                      height: 212
                    }}
                  >
                    <Grid>
                      <Grid.Col span={5}>
                        <Title className={classes.features1}>Win</Title>
                        <Text className={classes.featuresDescription}>
                          by participating in different gamified contests and
                          get the thrill of investing in the stock market
                        </Text>
                      </Grid.Col>
                      <Grid.Col span={7}>
                        <Image
                          src="/assets/image/win.svg"
                          alt="interact"
                          width={185}
                          height={203}
                          sx={{ marginLeft: 47, marginTop: 2, borderRadius: 15 }}
                        />
                      </Grid.Col>
                    </Grid>
                  </Box>
                </Box>
              </Box>
            </Grid.Col>

            <Grid.Col lg={4} md={4} xs={12}>
              <Box>
                <Title className={classes.features}>Learn</Title>
                <Box>
                  <Box
                    sx={{
                      backgroundColor: "cyan",
                      width: 70,
                      borderRadius: 100,
                      marginBottom: -55,
                      zIndex: 2,
                      position: "relative",
                      marginLeft: 15,
                      padding: 5,
                      backgroundImage:
                        "linear-gradient(180deg, #9CE2E1, #2B5D6B);",
                    }}
                  >
                    <Text
                      sx={{
                        fontSize: 38,
                        fontFamily: "Poppins",
                        fontWeight: 600,
                        color: "#FFFFFF",
                        textAlign: "center",
                      }}
                    >
                      02
                    </Text>
                  </Box>
                  <Box
                    sx={{
                      backgroundColor: "#06425A",
                      borderRadius: 15,
                      paddingLeft: 15,
                      paddingRight: 8,
                      zIndex: 1,
                      marginTop: 20,
                      height: 212
                    }}
                  >
                    <Grid>
                      <Grid.Col span={5}>
                        <Title className={classes.features1}>Learn</Title>
                        <Text className={classes.featuresDescription}>
                          the basics of investment and market strategies from
                          the market itself
                        </Text>
                      </Grid.Col>
                      <Grid.Col span={7}>
                        <Image
                          src="/assets/image/learn.svg"
                          alt="interact"
                          width={190}
                          height={191}
                          sx={{ marginLeft: 40, marginTop: 12 }}
                        />
                      </Grid.Col>
                    </Grid>
                  </Box>
                </Box>
              </Box>
            </Grid.Col>

            <Grid.Col lg={4} md={4} xs={12}>
              <Box>
                <Title className={classes.features}>Interact</Title>
                <Box>
                  <Box
                    sx={{
                      backgroundColor: "cyan",
                      width: 70,
                      borderRadius: 100,
                      marginBottom: -55,
                      zIndex: 2,
                      position: "relative",
                      marginLeft: 15,
                      padding: 5,
                      backgroundImage:
                        "linear-gradient(180deg, #9CE2E1, #2B5D6B);",
                    }}
                  >
                    <Text
                      sx={{
                        fontSize: 38,
                        fontFamily: "Poppins",
                        fontWeight: 600,
                        color: "#FFFFFF",
                        textAlign: "center",
                      }}
                    >
                      03
                    </Text>
                  </Box>
                  <Box
                    sx={{
                      backgroundColor: "#06425A",
                      borderRadius: 15,
                      paddingLeft: 15,
                      paddingRight: 8,
                      zIndex: 1,
                      height: 212,
                      marginTop: 20,
                    }}
                  >
                    <Grid>
                      <Grid.Col span={5}>
                        <Title className={classes.features1}>Interact</Title>
                        <Text className={classes.featuresDescription}>
                          and develop your skills with the help of experts
                          through the Azzet community
                        </Text>
                      </Grid.Col>
                      <Grid.Col span={7}>
                        <Image
                          src="/assets/image/interact.svg"
                          alt="interact"
                          width={210}
                          height={202}
                          sx={{ marginLeft: 20 }}
                        />
                      </Grid.Col>
                    </Grid>
                  </Box>
                </Box>
              </Box>
            </Grid.Col>
          </Grid>

          <Center px={120} py={50}>
            <Text sx={{
              fontSize: 24,
              fontFamily: "Poppins",
              fontWeight: 400,
              color: "#06425A",
              textAlign: "center",
            }}>
              Enter into the thrilling world of the Fantasy stock market. Create a strategy-based virtual portfolio of stocks of real market listed companies and get a chance to win points based on all the companies performance in the real market.
            </Text>
          </Center>

        </Container>

        <FeatureSection />
        <TestimonialSection />
        <FAQSection />
        <Footer />
      </main>
    </>
  );
}

export default Home;

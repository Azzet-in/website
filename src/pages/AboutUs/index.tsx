import Head from "next/head";
import styles from "src/styles/Home.module.css";
import { Footer } from "src/components/shared/footer";
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
import { Navbar } from "src/components/shared/navbar";
import Link from "next/link";

const useStyles = createStyles((theme) => ({
  container: {
    overflow: "hidden",
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: 50,
  },
  title: {
    color: "#06425A",
    textAlign: "center",
    fontFamily: "Satoshi",
    fontWeight: 900,
    marginBottom: 20,
    [theme.fn.smallerThan("md")]: {
      textAlign: "center",
      fontSize: "2.5rem",
      lineHeight: "2.8rem",
    },
  },

  description: {
    fontSize: 18,
    fontFamily: "Poppins",
    fontWeight: 400,
    color: "#06425A",
    textAlign: "center",
  },
  name: {
    fontSize: 18,
    fontFamily: "Poppins",
    fontWeight: 600,
    color: "#06425A",
    textAlign: "center",
  },
  position: {
    fontSize: 18,
    fontFamily: "Poppins",
    fontWeight: 600,
    color: "#06425A",
    textAlign: "center",
    marginTop: -5,
    marginBottom: 5,
  },
}));

const Home = () => {
  const { classes } = useStyles();

  return (
    <>
      <Head>
        <title>AZZET</title>
        <meta name='description' content='' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={styles.bg}>
        <Navbar />

        <Container className={classes.container}>
          <Title className={classes.title}> About Azzet</Title>
          <Text className={classes.description}>
            Azzet is a startup which gamifies learning in the stock market. The
            app hosts multiple contests in the stock market where users can
            participate in these contests, create their own virtual portfolio
            (based on real-time market data) and get rewards based on their
            ranking in the contest. With this, Azzet also provides diverse
            learning resources and conducts quizzes to enhance the knowledge and
            educate the users about investing.
          </Text>
        </Container>

        <Container className={classes.container}>
          <Title className={classes.title}>About Team</Title>
          <Text className={classes.description}>
            Azzet is a startup founded by the final year students of IIT Bombay
            under the mentorship of professors from the Entrepreneurship school
            of IIT Bombay.
          </Text>

          <Box>
            <Text>Team members</Text>
            <Grid>
              <Grid.Col xs={12} md={6} lg={4}>
                <Box
                  sx={{
                    backgroundColor: "#F4F7FF",
                    borderRadius: 10,
                    padding: 15,
                    border: "1px solid #06425A",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <Text className={classes.name}>Dhruv Gajjar</Text>
                    <Text className={classes.position}>CEO </Text>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 10,
                      }}
                    >
                      <Link
                        href={
                          "https://www.linkedin.com/in/dhruv-gajjar-ab237119b/"
                        }
                      >
                        <Image
                          src={"/assets/image/linkedin.png"}
                          alt={"linkedIn"}
                          width={25}
                          height={25}
                        />
                      </Link>
                    </Box>
                  </Box>
                </Box>
              </Grid.Col>
              <Grid.Col xs={12} md={6} lg={4}>
                <Box
                  sx={{
                    backgroundColor: "#F4F7FF",
                    borderRadius: 10,
                    padding: 15,
                    border: "1px solid #06425A",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <Text className={classes.name}>Shivansh Singh</Text>
                    <Text className={classes.position}>CTO </Text>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 10,
                      }}
                    >
                      <Link href={"https://www.linkedin.com/in/shivansh1910/"}>
                        <Image
                          src={"/assets/image/linkedin.png"}
                          alt={"linkedIn"}
                          width={25}
                          height={25}
                        />
                      </Link>
                    </Box>
                  </Box>
                </Box>
              </Grid.Col>
              <Grid.Col xs={12} md={6} lg={4}>
                <Box
                  sx={{
                    backgroundColor: "#F4F7FF",
                    borderRadius: 10,
                    padding: 15,
                    border: "1px solid #06425A",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <Text className={classes.name}>Harshit Modi</Text>
                    <Text className={classes.position}>CMO </Text>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 10,
                      }}
                    >
                      <Link
                        href={
                          "https://www.linkedin.com/in/harshit-modi-ba92731a1/"
                        }
                      >
                        <Image
                          src={"/assets/image/linkedin.png"}
                          alt={"linkedIn"}
                          width={25}
                          height={25}
                        />
                      </Link>
                    </Box>
                  </Box>
                </Box>
              </Grid.Col>
            </Grid>
          </Box>
          <Box>
            <Text> Mentor and Guide</Text>
            <Grid>
              <Grid.Col span={12}>
                <Box
                  sx={{
                    backgroundColor: "#F4F7FF",
                    borderRadius: 10,
                    padding: 15,
                    border: "1px solid #06425A",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <Text className={classes.name}>Mredul Sarda</Text>
                    <Text className={classes.position}>COO office, Slice </Text>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 10,
                      }}
                    >
                      <Link href={"https://www.linkedin.com/in/mredulsarda/"}>
                        <Image
                          src={"/assets/image/linkedin.png"}
                          alt={"linkedIn"}
                          width={25}
                          height={25}
                        />
                      </Link>
                    </Box>
                  </Box>
                </Box>
              </Grid.Col>

              <Grid.Col span={12}>
                <Box
                  sx={{
                    backgroundColor: "#F4F7FF",
                    borderRadius: 10,
                    padding: 15,
                    border: "1px solid #06425A",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <Text className={classes.name}>Umakant Jayaram</Text>
                    <Text className={classes.position}>Director, BSE </Text>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 10,
                      }}
                    >
                      <Link
                        href={
                          "https://www.linkedin.com/in/umakant-jayaram-850459/"
                        }
                      >
                        <Image
                          src={"/assets/image/linkedin.png"}
                          alt={"linkedIn"}
                          width={25}
                          height={25}
                        />
                      </Link>
                    </Box>
                  </Box>
                </Box>
              </Grid.Col>
            </Grid>
          </Box>
        </Container>

        <Footer />
      </main>
    </>
  );
};

export default Home;

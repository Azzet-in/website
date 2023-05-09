import { Center, Container, createStyles, Image } from "@mantine/core";
import styles from "src/styles/comingSoon.module.css";

const CommingSoon = () => {
  const { classes } = useStyles();

  return (
    <div className={classes.section}>
      <Container>
        <div style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}>
          <Image
            src='/assets/image/Azzet.svg'
            alt='landing'
            width={80}
            sx={{ marginTop: 20 }}
          />
          <h1 style={{
            color: "#FFFFFF",
            fontSize: 40,
            fontWeight: "bold",
            marginTop: 20
          }}>Azzet</h1>
        </div>
        <div className={styles.typewriter}>
          <h1 className={classes.coming}>Coming Soon ...</h1>
        </div>
      </Container>
    </div>
  );
};

const useStyles = createStyles((theme) => ({
  section: {
    backgroundColor: "#141415",
    height: "100vh",
    width: "100vw",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  coming: {
    textAlign: "center",
    color: "#00D1BC",
  },
}));

export default CommingSoon;

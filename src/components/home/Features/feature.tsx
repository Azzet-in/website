import {
  createStyles,
  Box,
  Title,
  Grid,
  List,
  Image,
  useMantineTheme,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import React, { useState } from "react";

const useStyles = createStyles((theme) => ({
  title: {
    textAlign: "left",
    fontSize: 51,
    color: "#06425A",
    fontWeight: 700,
    fontFamily: "Poppins",
    lineHeight: 1.5,
    marginBottom: 30,
    marginTop: 50,
  },
  list: {
    textAlign: "left",
    paddingTop: 20,
    color: "#06425A",
    fontSize: 26,
    fontWeight: 400,
    fontFamily: "Poppins",
    lineHeight: 1.5,
    "& li": {
      marginBottom: 20,
      "&:hover": {
        color: "teal",
      },
    },
  },
}));

const FeatureSection = () => {
  const { classes } = useStyles();
  const [activeFeature, setActiveFeature] = useState(0);
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm}px)`);

  const list = [
    {
      id: 1,
      title: "Select the contest on the dashboard",
    },
    {
      id: 2,
      title: "Read the rules",
    },
    {
      id: 3,
      title: "Observe the company details",
    },
    {
      id: 4,
      title: "Create your fantasy portfolio",
    },
    {
      id: 5,
      title: "Win Rewards",
    },
  ];

  return (
    <Box
      sx={{
        paddingLeft:mobile? 50: 100,
        paddingRight: 50,
        overflow: "hidden",
        paddingBottom: 50,
      }}
    >
      <Grid>
        <Grid.Col lg={8} sm={12}>
          <Title className={classes.title}>
            It’s easy to start playing on Azzet
          </Title>
          <List className={classes.list}>
            {list.map((item) => (
              <List.Item
                key={item.id}
                onClick={() => setActiveFeature(item.id)}
                sx={{ cursor: "pointer" }}
              >
                {item.title}
              </List.Item>
            ))}
          </List>
        </Grid.Col>
        <Grid.Col lg={4} sm={12}>
          <Image
            src={
              activeFeature === 1
                ? "/assets/image/f1.svg"
                : activeFeature === 2
                ? "/assets/image/f2.svg"
                : activeFeature === 3
                ? "/assets/image/f3.svg"
                : activeFeature === 4
                ? "/assets/image/f2.svg"
                : activeFeature === 5
                ? "/assets/image/f1.svg"
                : "/assets/image/f1.svg"
            }
            alt="feature"
            sx={{ marginLeft: mobile ? 0 : 150 }}
          />
        </Grid.Col>
      </Grid>
    </Box>
  );
};

export default FeatureSection;

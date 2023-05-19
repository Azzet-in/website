import {
  Box,
  Title,
  createStyles,
  Text,
  useMantineTheme,
  Container,
  Grid,
  Group,
  Rating,
} from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import { useMediaQuery } from "@mantine/hooks";
import React, { useEffect, useRef, useState } from "react";
import ReviewCard from "./reviewCard";
import Autoplay from "embla-carousel-autoplay";

const data = [
  {
    image: "https://2k21.s3.ap-south-1.amazonaws.com/Group+109+(2).svg",
    review:
      "Giving a 5 star rating for the content of learning materials. The concept of swipe cards and UI is so innovative. It's not the conventional type and it's so easy to learn",
    name: "nature",
  },
  {
    image: "https://2k21.s3.ap-south-1.amazonaws.com/Group+109+(2).svg",
    review:
      "This app is a game-changer! With its user-friendly interface, versatile features, and reliable performance. Highly recommended! Kudos to the developers for creating such a valuable learning resource!",
    name: "beach",
  },
  {
    image: "https://2k21.s3.ap-south-1.amazonaws.com/Group+109+(2).svg",
    review:
      "I love the gamification model of the app! It's well ideated and designed. No wonder IIT students are smart! I would like to meet the founders someday to discuss their thought process!",
    name: "nature",
  },
  {
    image: "https://2k21.s3.ap-south-1.amazonaws.com/Group+109+(2).svg",
    review:
      "I can't say enough about how Azzet has helped me become a more confident investor. The educational resources are top-notch, making complex concepts easy to understand. The virtual portfolio contests provide a hands-on learning experience, and the rewards are a great motivator. Azzet has truly made investing fun and profitable!",
    name: "nature",
  },
  {
    image: "https://2k21.s3.ap-south-1.amazonaws.com/Group+109+(2).svg",
    review:
      "Azzet is an outstanding app that combines learning content, real-time market data, and gamification to create an engaging experience for aspiring investors. With its intuitive interface, comprehensive educational resources, and simulated trading features, it's a must-have for anyone looking to learn and invest in the stock market. Highly recommended!",
    name: "tourism",
  },
  {
    image: "https://2k21.s3.ap-south-1.amazonaws.com/Group+109+(2).svg",
    review:
      "I'm impressed with Azzet's user-friendly interface, informative content, and interactive features. It's like having a personal stock market tutor in your pocket! This app has made learning about investing enjoyable and accessible. I highly recommend it to anyone looking to dive into the world of stocks.",
    name: "nature",
  },
];

const useStyles = createStyles((theme) => ({
  rating: {
    textAlign: "right",
    color: "#fff",
    fontFamily: "Poppins",
    fontSize: 16,
    fontWeight: 600,
  },
  ratingValue: {
    textAlign: "right",
    color: "#fff",
    fontFamily: "Poppins",
    fontSize: 16,
    fontWeight: 600,
    marginLeft: 30,
  },
  numberRating: {
    textAlign: "left",
    color: "#E6E9F0",
  },
}));

const TestimonialSection = () => {
  const autoplay = useRef(Autoplay({ delay: 2000 }));

  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm}px)`);
  const { classes } = useStyles();
  const [activeSlide, setActiveSlide] = useState(0);
  const [numberOfRatings, setNumberOfRatings] = useState(1000);

  const slides = data.map((item, index) => (
    <Carousel.Slide key={index}>
      <ReviewCard {...item} activeSlide={activeSlide} id={index} />
    </Carousel.Slide>
  ));

  return (
    <Box sx={{ paddingBottom: 80 }}>
      <Title color={"#06425A"} sx={{ textAlign: "center" }}>
        Reviews & Ratings
      </Title>

      <Box sx={{ paddingTop: 40, paddingBottom: 40 }}>
        <Carousel
          slideSize='33%'
          breakpoints={[{ maxWidth: "sm", slideSize: "100%", slideGap: 2 }]}
          slideGap='xl'
          align='center'
          slidesToScroll={mobile ? 1 : 1}
          loop={true}
          onSlideChange={(index) => setActiveSlide(index)}
          withControls={false}
        >
          {slides}
        </Carousel>
      </Box>

      <Container>
        <Box sx={{ background: "#06425A", borderRadius: 12, padding: 10 }}>
          <Group position='center'>
            <Text className={classes.rating}>App Rating</Text>
            <Rating
              color={"teal"}
              size={"md"}
              value={5}
              fractions={2}
              readOnly
            />
            <Text className={classes.ratingValue}>5/5</Text>
          </Group>

          {/* <Grid> */}
          {/* <Grid.Col lg={4}>
              <Text className={classes.rating}>App Rating</Text>
            </Grid.Col> */}
          {/* <Grid.Col
              lg={4}
              sx={{
                display: "flex",
                justifyContent: "left",
                // borderRight: "1px solid #007C70",
              }}
            >
              <Group position="center">
                <Rating
                  color={"teal"}
                  size={"md"}
                  value={4.5}
                  fractions={2}
                  readOnly
                />
              </Group>

              <Text className={classes.ratingValue}>4.5</Text>
            </Grid.Col> */}
          {/* <Grid.Col lg={4}>
              <Text className={classes.numberRating}>
                {numberOfRatings.toLocaleString()} ratings
              </Text>
            </Grid.Col> */}
          {/* </Grid> */}
        </Box>
      </Container>
    </Box>
  );
};

export default TestimonialSection;

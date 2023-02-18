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
import React, { useState } from "react";
import ReviewCard from "./reviewCard";

const data = [
  {
    image: "https://2k21.s3.ap-south-1.amazonaws.com/Group+109+(2).svg",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta voluptatum architecto adipisci fuga sapiente porro, sit exercitationem quisquam officia commodi, facilis mollitia et voluptates neque, laudantium corporis harum possimus dolore.",
    name: "nature",
  },
  {
    image: "https://2k21.s3.ap-south-1.amazonaws.com/Group+109+(2).svg",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta voluptatum architecto adipisci fuga sapiente porro, sit exercitationem quisquam officia commodi, facilis mollitia et voluptates neque, laudantium corporis harum possimus dolore.",
    name: "beach",
  },
  {
    image: "https://2k21.s3.ap-south-1.amazonaws.com/Group+109+(2).svg",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta voluptatum architecto adipisci fuga sapiente porro, sit exercitationem quisquam officia commodi, facilis mollitia et voluptates neque, laudantium corporis harum possimus dolore.",
    name: "nature",
  },
  {
    image: "https://2k21.s3.ap-south-1.amazonaws.com/Group+109+(2).svg",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta voluptatum architecto adipisci fuga sapiente porro, sit exercitationem quisquam officia commodi, facilis mollitia et voluptates neque, laudantium corporis harum possimus dolore.",
    name: "nature",
  },
  {
    image: "https://2k21.s3.ap-south-1.amazonaws.com/Group+109+(2).svg",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta voluptatum architecto adipisci fuga sapiente porro, sit exercitationem quisquam officia commodi, facilis mollitia et voluptates neque, laudantium corporis harum possimus dolore.",
    name: "tourism",
  },
  {
    image: "https://2k21.s3.ap-south-1.amazonaws.com/Group+109+(2).svg",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta voluptatum architecto adipisci fuga sapiente porro, sit exercitationem quisquam officia commodi, facilis mollitia et voluptates neque, laudantium corporis harum possimus dolore.",
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
    <Box sx={{paddingBottom:80}}>
      <Title color={"#06425A"} sx={{ textAlign: "center" }}>
        Reviews & Ratings
      </Title>

      <Box sx={{ paddingTop: 40, paddingBottom: 40 }}>
        <Carousel
          slideSize="33%"
          breakpoints={[{ maxWidth: "sm", slideSize: "100%", slideGap: 2 }]}
          slideGap="xl"
          align="center"
          slidesToScroll={mobile ? 1 : 1}
          loop
          onSlideChange={(index) => setActiveSlide(index)}
          withControls={false}
        >
          {slides}
        </Carousel>
      </Box>

      <Container>
        <Box sx={{ background: "#06425A", borderRadius: 12, padding: 10 }}>
          <Grid>
            <Grid.Col lg={4}>
              <Text className={classes.rating}>App Rating</Text>
            </Grid.Col>
            <Grid.Col
              lg={4}
              sx={{
                display: "flex",
                justifyContent: "center",
                borderRight: "1px solid #007C70",
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
            </Grid.Col>
            <Grid.Col lg={4}>
              <Text className={classes.numberRating}>
                {numberOfRatings.toLocaleString()} ratings
              </Text>
              {/* convert numberOfRatings to value with appropiate commas example 10000 to 10,000 */}
            </Grid.Col>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default TestimonialSection;

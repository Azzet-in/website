import { createStyles, Text, Container, Image, Grid } from "@mantine/core";
import { Logo } from "./logo";

const useStyles = createStyles((theme) => ({
  footer: {
    paddingTop: theme.spacing.xl * 2,
    backgroundColor: "#E2F0F3",
  },

  logo: {
    maxWidth: 200,

    [theme.fn.smallerThan("sm")]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  },

  description: {
    marginTop: 5,

    [theme.fn.smallerThan("sm")]: {
      marginTop: theme.spacing.xs,
      textAlign: "center",
    },
  },

  inner: {
    display: "flex",
    justifyContent: "space-between",

    [theme.fn.smallerThan("sm")]: {
      flexDirection: "column",
      alignItems: "center",
    },
  },

  wrapper: {
    width: 160,
  },

  link: {
    display: "block",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[1]
        : theme.colors.gray[6],
    fontSize: theme.fontSizes.sm,
    paddingTop: 3,
    paddingBottom: 3,

    "&:hover": {
      textDecoration: "underline",
    },
  },

  title: {
    fontSize: theme.fontSizes.lg,
    fontWeight: 700,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    marginBottom: theme.spacing.xs / 2,
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
  },

  social: {
    [theme.fn.smallerThan("sm")]: {
      marginTop: theme.spacing.xs,
    },
  },

  afterFooter: {
    paddingTop: theme.spacing.xs,
    borderTop: "1px solid #ABD5E5",
    justifyContent: "center",
    textAlign: "center",
  },

  afterFooterText: {
    color: "#06425A",
    fontWeight: 600,
    fontFamily: "Poppins",
    fontSize: 24,
  },

  afterFooterDescription: {
    color: "#06425A",
    fontWeight: 400,
    fontFamily: "Poppins",
    fontSize: 14,
    marginBottom: 34,
  },
}));

const socialLinks = [
  {
    title: "Facebook",
    href: "https://www.facebook.com/mantine.dev",
    icon: "/assets/image/fb.png",
  },
  {
    title: "Twitter",
    href: "https://twitter.com/mantine_dev",
    icon: "/assets/image/twitter.png",
  },
  {
    title: "YouTube",
    href: "https://www.youtube.com/channel/UC1fZ5g1Kv8kW5x5xVJ9y9Yw",
    icon: "/assets/image/yt.png",
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/company/mantine-dev",
    icon: "/assets/image/linkedin.png",
  },
];

const links = [
  {
    title: "Download App",
    href: "/",
  },
  {
    title: "About Us",
    href: "/about",
  },
  {
    title: "How to Play",
    href: "/faq",
  },
  {
    title: "Jobs",
    href: "/contact",
  },
  {
    title: "Invite Friends",
    href: "/contact",
  },
  {
    title: "Helpdesk",
    href: "/contact",
  },
  {
    title: "Community Guidelines",
    href: "/contact",
  },
];

export function Footer() {
  const { classes } = useStyles();

  return (
    <footer className={classes.footer}>
      <Container>
        <Grid>
          <Grid.Col lg={4}>
            <div className={classes.logo}>
              <Logo />
              <Grid>
                {socialLinks.map((e, i) => (
                  <Grid.Col key={i} span={3}>
                    <Image src={e.icon} alt={e.title} width={25} height={25} />
                  </Grid.Col>
                ))}
              </Grid>
            </div>
          </Grid.Col>
          <Grid.Col lg={8}>
            <div>
              <Grid>
                {links.map((e, i) => (
                  <Grid.Col key={i} lg={6} sm={12}>
                    <Text className={classes.title} size="sm" weight={500}>
                      {e.title}
                    </Text>
                  </Grid.Col>
                ))}
              </Grid>
            </div>
          </Grid.Col>
        </Grid>
      </Container>
      <Container className={classes.afterFooter}>
        <Text color="dimmed" size="sm">
          © {new Date().getFullYear()} Azzet. All rights reserved.
        </Text>
        <Text className={classes.afterFooterText}>CORPORATE OFFICE</Text>
        <Text className={classes.afterFooterDescription}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
          mollitia aspernatur sequi porro ipsum, error assumenda aliquam sit
          alias beatae dignissimos fuga ab eius illum officiis amet tempore!
          Architecto, pariatur?
        </Text>
        <Grid>
          <Grid.Col lg={6} sm={12}>
            <Text className={classes.title} size="sm" weight={500}>
              Privacy Policy
            </Text>
          </Grid.Col>
          <Grid.Col lg={6} sm={12}>
            <Text className={classes.title} size="sm" weight={500}>
              Terms & Conditions
            </Text>
          </Grid.Col>
        </Grid>
      </Container>
    </footer>
  );
}

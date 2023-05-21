import { createStyles, Text, Container, Image, Grid } from "@mantine/core";
import Link from "next/link";
import { useRouter } from "next/router";
import { Logo } from "./logo";

const useStyles = createStyles((theme) => ({
  footer: {
    paddingTop: theme.spacing.xl * 2,
    backgroundColor: "#E2F0F3",
  },

  logo: {
    marginTop: -25,
    justifyContent: "center",
    [theme.fn.smallerThan("sm")]: {
      maxWidth: "100%",
    },
    [theme.fn.largerThan("sm")]: {
      maxWidth: 200,
    },
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
    textAlign: "center",
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
  },
}));

const socialLinks = [
  {
    title: "Twitter",
    href: "https://twitter.com/mantine_dev",
    icon: "/assets/image/twitter.png",
  },
  {
    title: "Instagram",
    href: "https://www.instagram.com/azzet.finance/",
    icon: "/assets/image/insta.png",
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/company/azzet-finance/",
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
    href: "/AboutUs",
  },
  {
    title: "How to Play",
    href: "/",
  },
  // {
  //   title: "Jobs",
  //   href: "/contact",
  // },
  {
    title: "Invite Friends",
    href: "/",
  },
  // {
  //   title: "Helpdesk",
  //   href: "/contact",
  // },
  // {
  //   title: "Community Guidelines",
  //   href: "/contact",
  // },
];

export function Footer() {
  const { classes } = useStyles();
  const router = useRouter();

  return (
    <footer className={classes.footer}>
      <Container>
        <Grid>
          <Grid.Col lg={4} sm={12}>
            <div className={classes.logo}>
              <Logo />
              <Grid
                sx={{
                  marginTop: -20,
                  marginBottom: 10,
                }}
              >
                <Grid.Col span={1}></Grid.Col>
                {socialLinks.map((e, i) => (
                  <Grid.Col key={i} span={3}>
                    <Link href={e.href}>
                      <Image
                        src={e.icon}
                        alt={e.title}
                        width={25}
                        height={25}
                      />
                    </Link>
                  </Grid.Col>
                ))}
                <Grid.Col span={1}></Grid.Col>
              </Grid>
            </div>
          </Grid.Col>
          <Grid.Col lg={8} sm={12}>
            <div>
              <Grid>
                {links.map((e, i) => (
                  <Grid.Col
                    key={i}
                    lg={6}
                    sm={12}
                    sx={(theme) => ({
                      [theme.fn.smallerThan("sm")]: {
                        textAlign: "center",
                      },
                    })}
                  >
                    <Link className={classes.title} href={e.href}>
                      {e.title}
                    </Link>
                  </Grid.Col>
                ))}
              </Grid>
            </div>
          </Grid.Col>
        </Grid>
      </Container>
      <Container className={classes.afterFooter}>
        <Text color='dimmed' size='sm'>
          © {new Date().getFullYear()} Azzet. All rights reserved.
        </Text>
        <Text className={classes.afterFooterText}>CORPORATE OFFICE</Text>
        <Text className={classes.afterFooterDescription}>
          114/118, Manek Bhavan, Room No. 33, 2nd, 2nd Floor, Cavel Street,
        </Text>
        <Text className={classes.afterFooterDescription}>
          Gaiwadi Kalbadevi, Mumbai, Mumbai City, Maharashtra, India - 400002
        </Text>
        <Grid
          sx={{
            marginTop: 34,
          }}
        >
          <Grid.Col lg={6} sm={12}>
            <Link className={classes.title} href='/PrivacyPolicy'>
              Privacy Policy
            </Link>
          </Grid.Col>
          <Grid.Col lg={6} sm={12}>
            <Link className={classes.title} href='/TnC'>
              Terms & Conditions
            </Link>
          </Grid.Col>
        </Grid>
      </Container>
    </footer>
  );
}

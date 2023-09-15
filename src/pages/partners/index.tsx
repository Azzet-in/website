import {
  Card,
  Center,
  Container,
  createStyles,
  Group,
  Image,
  PaperProps,
  Text,
  Title,
} from "@mantine/core";
import Head from "next/head";
import Link from "next/link";
import { Footer } from "src/components/shared/footer";
import { Navbar } from "src/components/shared/navbar";

const useStyles = createStyles((theme) => ({
  bg: {
    backgroundImage: "url('/assets/image/bg.svg')",
    backgroundRepeat: "no-repeat",
    minHeight: "100vh",
  },

  card: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
  },
  cardBody: {
    padding: theme.spacing.md,
  },
  description: {
    color: "black",
  },
}));

const Partners = (props: PaperProps) => {
  const { classes } = useStyles();

  const partnerData = [
    {
      image:
        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjgwIiBoZWlnaHQ9IjM3IiB2aWV3Qm94PSIwIDAgMjgwIDM3IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8ZyBjbGlwLXBhdGg9InVybCgjY2xpcDBfMjY2NDZfNDYpIj4KPHBhdGggZD0iTTcxLjQ5MzMgMjguNDQ0NEg3Ni45NTMzVjcuMDA1OThIODQuMDkzM1YxLjgyMTUzSDY0LjRWNy4wMDU5OEg3MS40OTMzVjI4LjQ0NDRaTTg0LjA5MzMgMjguNDQ0NEg4OS4yMjY3VjE5LjQ3NjdDODkuMjI2NyAxNi4zNDczIDkwLjgxMzMgMTQuNDc5MSA5My4yODY3IDE0LjQ3OTFDOTQuMTI2NyAxNC40NzkxIDk0LjgyNjcgMTQuNjE5MiA5NS42MiAxNC44OTk0VjkuNjY4MjdDOTUuMDYgOS41MjgxNSA5NC40NTMzIDkuNDM0NzMgOTMuODkzMyA5LjQzNDczQzkxLjc5MzMgOS40MzQ3MyA4OS44OCAxMC44MzU5IDg5LjIyNjcgMTIuNjU3NVY5LjY2ODI3SDg0LjA5MzNWMjguNDQ0NFpNMTA1LjQ2NyAyOC44NjQ3QzEwOC4wMzMgMjguODY0NyAxMDkuOTkzIDI3LjU1NjkgMTEwLjg4IDI2LjM0MjZWMjguNDQ0NEgxMTYuMDEzVjkuNzE0OTZIMTEwLjg4VjExLjgxNjhDMTEwLjA0IDEwLjYwMjQgMTA4LjA4IDkuMjk0NjEgMTA1LjQ2NyA5LjI5NDYxQzEwMC40NzMgOS4yOTQ2MSA5Ni42NDY2IDEzLjc3ODUgOTYuNjQ2NiAxOS4xMDNDOTYuNjQ2NiAyNC4zODA5IDEwMC40NzMgMjguODY0NyAxMDUuNDY3IDI4Ljg2NDdaTTEwNi41NCAyNC4xOTRDMTAzLjY5MyAyNC4xOTQgMTAxLjgyNyAyMi4wNDU1IDEwMS44MjcgMTkuMTAzQzEwMS44MjcgMTYuMTYwNSAxMDMuNjkzIDE0LjAxMiAxMDYuNTQgMTQuMDEyQzEwOS4zODcgMTQuMDEyIDExMS4yNTMgMTYuMTYwNSAxMTEuMjUzIDE5LjEwM0MxMTEuMjUzIDIyLjA0NTUgMTA5LjM4NyAyNC4xOTQgMTA2LjU0IDI0LjE5NFpNMTI4LjE5MyAyOC44NjQ3QzEzMC43NiAyOC44NjQ3IDEzMi43MiAyNy41NTY5IDEzMy42MDcgMjYuMzQyNlYyOC40NDQ0SDEzOC43NFYwLjMyNjkxN0gxMzMuNjA3VjExLjgxNjhDMTMyLjc2NyAxMC42MDI0IDEzMC44MDcgOS4yOTQ2MSAxMjguMTkzIDkuMjk0NjFDMTIzLjIgOS4yOTQ2MSAxMTkuMzczIDEzLjc3ODUgMTE5LjM3MyAxOS4xMDNDMTE5LjQyIDI0LjM4MDkgMTIzLjIgMjguODY0NyAxMjguMTkzIDI4Ljg2NDdaTTEyOS4zMTMgMjQuMTk0QzEyNi40NjcgMjQuMTk0IDEyNC42IDIyLjA0NTUgMTI0LjYgMTkuMTAzQzEyNC42IDE2LjE2MDUgMTI2LjQ2NyAxNC4wMTIgMTI5LjMxMyAxNC4wMTJDMTMyLjE2IDE0LjAxMiAxMzQuMDI3IDE2LjE2MDUgMTM0LjAyNyAxOS4xMDNDMTM0LjAyNyAyMi4wNDU1IDEzMi4xNiAyNC4xOTQgMTI5LjMxMyAyNC4xOTRaTTE0NS44OCA2Ljg2NTg2QzE0Ny43IDYuODY1ODYgMTQ5LjE5MyA1LjQxNzk1IDE0OS4xOTMgMy41OTYzOUMxNDkuMTkzIDEuNzc0ODMgMTQ3LjcgMC4zMjY5MTcgMTQ1Ljg4IDAuMzI2OTE3QzE0NC4xMDcgMC4zMjY5MTcgMTQyLjYxMyAxLjc3NDgzIDE0Mi42MTMgMy41OTYzOUMxNDIuNjYgNS4zNzEyNCAxNDQuMTA3IDYuODE5MTUgMTQ1Ljg4IDYuODY1ODZaTTE0My4zNiAyOC40NDQ0SDE0OC40OTNWOS45MDE4SDE0My4zNlYyOC40NDQ0Wk0xNTMuMDIgMjguNDQ0NEgxNTguMTUzVjE5LjI4OThDMTU4LjE1MyAxNS42OTM0IDE1OS45MjcgMTMuOTY1MyAxNjIuMzA3IDEzLjk2NTNDMTY0LjQ1MyAxMy45NjUzIDE2NS42MiAxNS42IDE2NS42MiAxOC4zMDlWMjguNDQ0NEgxNzAuNzUzVjE3LjQ2ODNDMTcwLjc1MyAxMi42MTA4IDE2OC4wNDcgOS4yOTQ2MSAxNjMuNTIgOS4yOTQ2MUMxNjEuMDkzIDkuMjk0NjEgMTU5LjE4IDEwLjMyMjIgMTU4LjE1MyAxMS44NjM1VjkuNzE0OTZIMTUzLjAyVjI4LjQ0NDRaTTE4My44MiAyMy40NDY4QzE4MS4yNTMgMjMuNDQ2OCAxNzkuMDYgMjEuNDg1MSAxNzkuMDYgMTguNjM2QzE3OS4wNiAxNS43NDAxIDE4MS4yMDcgMTMuODI1MiAxODMuODIgMTMuODI1MkMxODYuMzg3IDEzLjgyNTIgMTg4LjU4IDE1Ljc0MDEgMTg4LjU4IDE4LjYzNkMxODguNTggMjEuNTMxOCAxODYuNDMzIDIzLjQ0NjggMTgzLjgyIDIzLjQ0NjhaTTE4My4yMTMgMzYuNTcxM0MxODguOTUzIDM2LjU3MTMgMTkzLjI5MyAzMy42Mjg4IDE5My4yOTMgMjYuOTAzVjkuNjIxNTZIMTg4LjE2VjExLjcyMzRDMTg3LjEzMyAxMC4yNzU1IDE4NS4xMjcgOS4yMDEyIDE4Mi43NDcgOS4yMDEyQzE3Ny44NDcgOS4yMDEyIDE3My45MjcgMTMuNDA0OCAxNzMuOTI3IDE4LjY4MjdDMTczLjkyNyAyMy45MTM4IDE3Ny44NDcgMjguMTE3NCAxODIuNzQ3IDI4LjExNzRDMTg1LjEyNyAyOC4xMTc0IDE4Ny4xOCAyNy4wNDMyIDE4OC4xNiAyNS42NDJWMjYuOTAzQzE4OC4xNiAyOS44OTIzIDE4Ni4xNTMgMzIuMDQwOCAxODMuMTIgMzIuMDQwOEMxODEuMDIgMzIuMDQwOCAxNzguOTIgMzEuMzQwMiAxNzcuMjg3IDI5LjcwNTRMMTc0LjQ4NyAzMy41MzU0QzE3Ni42MzMgMzUuNjM3MiAxNzkuOTQ3IDM2LjU3MTMgMTgzLjIxMyAzNi41NzEzWk0yMDQuMTY3IDI4LjQ0NDRIMjA5LjAyTDIyMC4wMzMgMS44MjE1M0gyMTQuMDZMMjA2LjY0IDIwLjMxNzRMMTk5LjEyNyAxLjgyMTUzSDE5My4yNDdMMjA0LjE2NyAyOC40NDQ0Wk0yMjQuNyA2LjYzMjMyQzIyNi41MiA2LjYzMjMyIDIyNy45NjcgNS4xODQ0MiAyMjguMDEzIDMuMzYyODVDMjI4LjAxMyAxLjU0MTI5IDIyNi41MiAwLjA5MzM4MzggMjI0LjcgMC4wOTMzODM4QzIyMi45MjcgMC4wOTMzODM4IDIyMS40MzMgMS41NDEyOSAyMjEuNDMzIDMuMzYyODVDMjIxLjQzMyA1LjE4NDQyIDIyMi45NzMgNi42MzIzMiAyMjQuNyA2LjYzMjMyWk0yMjIuMTggMjguNDQ0NEgyMjcuMzEzVjkuNjY4MjdIMjIyLjE4VjI4LjQ0NDRaTTI0MC41NjcgMjguODY0N0MyNDQuNDg3IDI4Ljg2NDcgMjQ3LjQ3MyAyNy4yMyAyNDkuMjQ3IDI0LjY2MTFMMjQ1LjQyIDIxLjgxMkMyNDQuNTggMjMuMTE5OCAyNDIuOTQ3IDI0LjE5NCAyNDAuNTY3IDI0LjE5NEMyMzguMDkzIDI0LjE5NCAyMzUuOSAyMi43OTI4IDIzNS41NzMgMjAuMjcwN0gyNDkuNTczQzI0OS42NjcgMTkuNDc2NyAyNDkuNjY3IDE4Ljk2MjkgMjQ5LjY2NyAxOC40OTU4QzI0OS42NjcgMTIuMzc3MyAyNDUuMzczIDkuMjk0NjEgMjQwLjQyNyA5LjI5NDYxQzIzNC43MzMgOS4yOTQ2MSAyMzAuNTggMTMuNTQ0OSAyMzAuNTggMTkuMDU2M0MyMzAuNjczIDI0Ljk4ODEgMjM1LjAxMyAyOC44NjQ3IDI0MC41NjcgMjguODY0N1pNMjM1LjgwNyAxNi44MTQ0QzIzNi4zMiAxNC41MjU4IDIzOC40MiAxMy41NDQ5IDI0MC4zMzMgMTMuNTQ0OUMyNDIuMjQ3IDEzLjU0NDkgMjQ0LjExMyAxNC41NzI1IDI0NC41OCAxNi44MTQ0SDIzNS44MDdaTTI2OC45NCAyOC40NDQ0SDI3NC4wMjdMMjgwLjE4NyA5LjY2ODI3SDI3NC42OEwyNzEuMTggMjEuNjcxOUwyNjcuMzUzIDkuNjY4MjdIMjYzLjQzM0wyNTkuNjUzIDIxLjY3MTlMMjU2LjEwNyA5LjY2ODI3SDI1MC42NDdMMjU2Ljg1MyAyOC40NDQ0SDI2MS45NEwyNjUuNDQgMTcuNzk1MkwyNjguOTQgMjguNDQ0NFoiIGZpbGw9ImJsYWNrIi8+CjxwYXRoIGQ9Ik0yMC45MDY3IDI4LjQ0NDRIMTAuNTQ2N1YxMi4xOTA1SDAuMTg2NzA3VjEuODIxNTlIMjAuODZWMjguNDQ0NEgyMC45MDY3Wk00MS42MjY3IDI4LjQ0NDRIMjkuODJMNDAuOTI2NyAxLjgyMTU5SDUyLjczMzRMNDEuNjI2NyAyOC40NDQ0Wk0yOS43NzM0IDEuODIxNTlDMzMuMDQgMS44MjE1OSAzNS43IDQuNDgzODggMzUuNyA3Ljc1MzM1QzM1LjcgMTEuMDIyOCAzMy4wNCAxMy42ODUxIDI5Ljc3MzQgMTMuNjg1MUMyNi41MDY3IDEzLjY4NTEgMjMuODQ2NyAxMS4wMjI4IDIzLjg0NjcgNy43NTMzNUMyMy44OTM0IDQuNDgzODggMjYuNTA2NyAxLjgyMTU5IDI5Ljc3MzQgMS44MjE1OVoiIGZpbGw9ImJsYWNrIi8+CjwvZz4KPGRlZnM+CjxjbGlwUGF0aCBpZD0iY2xpcDBfMjY2NDZfNDYiPgo8cmVjdCB3aWR0aD0iMjgwIiBoZWlnaHQ9IjM2LjQzMTIiIGZpbGw9IndoaXRlIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+Cg==",
      link: "https://www.tradingview.com/",
    },
  ];

  return (
    <>
      <Head>
        <title>AZZET</title>
        <meta name='description' content='' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={classes.bg}>
        <Navbar />
        <Container pb={100} pt={50}>
          <Title
            color={"#06425A"}
            sx={{ textAlign: "center", paddingBottom: 20 }}
          >
            Our Partners
          </Title>

          <Center>
            {partnerData.map((item, index) => (
              <Card
                withBorder
                radius='md'
                p={0}
                className={classes.card}
                key={index}
              >
                <Group noWrap spacing={10}>
                  <Link
                    href={item.link}
                    target='_blank'
                    rel='noopener noreferrer'
                    style={{ textDecoration: "none", marginLeft: 20 }}
                  >
                    <Image src={item.image} />
                  </Link>
                  <div className={classes.cardBody}>
                    <Text className={classes.description} mt='xs' mb='md'>
                      Azzet has partnered with TradingView for its charting. A
                      comprehensive trading and investment platform offering
                      live market data and valuable market insights. With its
                      assistance, users can conveniently track the price of{" "}
                      <Link
                        href='https://in.tradingview.com/symbols/CBOT_MINI-YM1%21/'
                        style={{
                          textDecoration: "none",
                          color: "#06425A",
                        }}
                      >
                        dow futures{" "}
                      </Link>
                      and stay informed about other relevant market trends.
                    </Text>
                  </div>
                </Group>
              </Card>
            ))}
          </Center>
        </Container>
        <Footer />
      </main>
    </>
  );
};

export default Partners;

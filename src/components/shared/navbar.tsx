import { Box } from "@mantine/core";
import Link from "next/link";
import React from "react";
import { Logo } from "./logo";

export const Navbar = () => {
  return (
    <Box mx={40}>
      <Link href='/'>
        <Logo />
      </Link>
    </Box>
  );
};

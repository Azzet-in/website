import React from "react";
import { useForm } from "@mantine/form";
import {
  Text,
  TextInput,
  Paper,
  Group,
  PaperProps,
  Button,
  Anchor,
  Stack,
  Container,
  Select,
  createStyles,
  NumberInput,
  Image as MantineImage,
  SimpleGrid,
  Center,
  Textarea,
} from "@mantine/core";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { Navbar } from "../../components/shared/navbar";
import { Footer } from "../../components/shared/footer";
import { toast } from "src/utils/toast";

const useStyles = createStyles((theme) => ({
  bg: {
    backgroundImage: "url('/assets/image/bg.svg')",
    backgroundRepeat: "no-repeat",
    minHeight: "100vh",
  },
}));

const Support = (props: PaperProps) => {
  const form = useForm({
    initialValues: {
      name: "",
      contact: "",
      message: "",
    },
  });

  const { classes } = useStyles();

  const handleSubmit = async (values: any) => {
    console.log(values);
    const formData = new FormData();
    formData.append("name", values.name);
    formData.append("contact", values.contact);
    formData.append("message", values.message);
    const res = await axios.post(
      "https://knp429apph.execute-api.ap-south-1.amazonaws.com/dev/feedback/support/",
      formData
    );
    toast.success("Form submitted successfully");
  };

  const support = ["Chat with us", "Email us", "Call us"];

  const [isChat, setIsChat] = useState(false);

  const handleSelect = (index: number) => {
    if (index === 0) {
      setIsChat(true);
    } else {
      setIsChat(false);
      if (index === 1) {
        window.location.href = "mailto: admin@azzet.in";
      } else {
        window.location.href = "tel: +91 8401698962";
      }
    }
  };

  return (
    <main className={classes.bg}>
      <Navbar />
      <Container pb={100} pt={50}>
        <Paper radius='md' p='xl' withBorder {...props}>
          <h1>Help & Support</h1>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            {support.map((item, index) => (
              <Button
                variant={isChat && index === 0 ? "filled" : "outline"}
                color='dark'
                radius='sm'
                mt='md'
                mx='xl'
                size='lg'
                onClick={() => handleSelect(index)}
              >
                {item}
              </Button>
            ))}
          </div>

          {isChat && (
            <form onSubmit={form.onSubmit(handleSubmit)}>
              <Stack>
                <TextInput
                  required
                  label='Full Name'
                  placeholder='Your name'
                  value={form.values.name}
                  onChange={(event) =>
                    form.setFieldValue("name", event.currentTarget.value)
                  }
                  radius='md'
                />

                <TextInput
                  required
                  label='Contact Details'
                  placeholder='hello@azzet.in'
                  value={form.values.contact}
                  onChange={(event) =>
                    form.setFieldValue("contact", event.currentTarget.value)
                  }
                  error={form.errors.email && "Invalid email"}
                  radius='md'
                />

                <Textarea
                  required
                  mt='md'
                  label='Message'
                  placeholder='Your message'
                  maxRows={10}
                  minRows={5}
                  autosize
                  name='message'
                  variant='default'
                  {...form.getInputProps("message")}
                />
              </Stack>

              {/* TODO paynow button*/}

              <Group position='apart' mt='xl' pt={20}>
                <Anchor
                  component='button'
                  type='button'
                  color='dimmed'
                  size='xs'
                >
                  {/* Don't have an account? Register */}
                </Anchor>
                <Button type='submit' radius='xl' color='dark'>
                  Submit
                </Button>
              </Group>
            </form>
          )}
        </Paper>
      </Container>

      <Footer />
    </main>
  );
};

export default Support;

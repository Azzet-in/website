import { useToggle, upperFirst } from "@mantine/hooks";
import { useForm } from "@mantine/form";
import styles from "src/styles/registration.module.css";

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
} from "@mantine/core";
import { Navbar } from "src/components/shared/navbar";
import {
  Dropzone,
  IMAGE_MIME_TYPE,
  FileWithPath,
  MIME_TYPES,
} from "@mantine/dropzone";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { IconCloudUpload, IconX, IconDownload } from "@tabler/icons-react";
import { Footer } from "src/components/shared/footer";
import axios from "axios";
import { toast } from "src/utils/toast";
import Link from "next/link";

const useStyles = createStyles((theme) => ({
  dropzone: {
    borderWidth: 1,
    paddingBottom: 50,
  },

  icon: {
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[3]
        : theme.colors.gray[4],
  },

  control: {
    position: "absolute",
    width: 250,
    left: `calc(50% - 125px)`,
    bottom: -20,
  },
  dropzoneWrapper: {
    position: "relative",
  },
}));

const Registrations = (props: PaperProps) => {
  const [submitted, setSubmitted] = useState(false);
  const [value, setValue] = useState(10);

  useEffect(() => {
    setSubmitted(false);
  }, []);

  const form = useForm({
    initialValues: {
      email: "",
      name: "",
      whatsapp: "",
      college: "",
      info: "",
      amount: 50,
      file: null,
    },

    validate: {
      email: (val) => (/^\S+@\S+$/.test(val) ? null : "Invalid email"),
    },
  });

  const openRef = useRef<() => void>(null);
  const { classes, theme } = useStyles();

  const handleFileChange = async (files: FileWithPath[]) => {
    // console.log("files", files);

    // const formData = new FormData();
    // formData.append("file", files[0]);

    // const res = await axios.post(
    //   "http://localhost:8000/api/v2/website/uploadFile",
    //   formData
    // );

    // console.log("res", res);
    form.setFieldValue("file", files[0] as any);
    setFiles(files);
  };

  const handleSubmit = async (values: any) => {
    if (!files[0]) {
      toast.error("Please upload the payment screenshot");
      return;
    }

    if (values.info === "") {
      toast.error("Please select how did you know about the competition");
      return;
    }

    const formData = new FormData();
    formData.append("file", files[0]);
    formData.append("name", values.name);
    formData.append("email", values.email);
    formData.append("whatsapp", values.whatsapp);
    formData.append("college", values.college);
    formData.append("info", values.info);
    formData.append("amount", values.amount);

    const d = await axios
      .post(
        "https://3rkahl3hlk.execute-api.ap-south-1.amazonaws.com/staging/api/v2/website/registration",
        formData
      )
      .catch((err) => {
        console.log("error", err);
        toast.error("Something went wrong");
      });

    if (d?.data.success) {
      toast.success("Form submitted successfully");
      setSubmitted(true);
      window.scrollTo(0, 0);
      setTimeout(() => {
        window.location.href = "/";
      }, 10000);
    }
  };

  const [files, setFiles] = useState<FileWithPath[]>([]);

  const previews = files.map((file, index) => {
    const imageUrl = URL.createObjectURL(file);
    return (
      <MantineImage
        key={index}
        src={imageUrl}
        imageProps={{ onLoad: () => URL.revokeObjectURL(imageUrl) }}
      />
    );
  });

  return (
    <main className={styles.bg}>
      <Navbar />
      {!submitted ? (
        <Container pb={100} pt={50}>
          <Paper radius='md' p='xl' withBorder {...props}>
            <h1>Registration</h1>

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
                  label='Email'
                  placeholder='hello@azzet.in'
                  value={form.values.email}
                  onChange={(event) =>
                    form.setFieldValue("email", event.currentTarget.value)
                  }
                  error={form.errors.email && "Invalid email"}
                  radius='md'
                />

                <TextInput
                  required
                  label='Whatsapp Number'
                  placeholder='+91 99999 99999'
                  value={form.values.whatsapp}
                  onChange={(event) =>
                    form.setFieldValue("whatsapp", event.currentTarget.value)
                  }
                  radius='md'
                />

                <TextInput
                  required
                  label='College name'
                  placeholder='Name of your College or University'
                  value={form.values.college}
                  onChange={(event) =>
                    form.setFieldValue("college", event.currentTarget.value)
                  }
                  radius='md'
                />

                <Select
                  required
                  withinPortal
                  data={[
                    "Friends",
                    "Social Media",
                    "Whatsapp Groups",
                    "College Ambassador",
                    "Email",
                    "Others",
                  ]}
                  placeholder='Pick one'
                  label='How did you know about the competition'
                  value={form.values.info}
                  onChange={(value) =>
                    form.setFieldValue("info", value as string)
                  }
                  radius='md'
                />

                <NumberInput
                  min={0}
                  label='Amount'
                  placeholder='Amount'
                  value={form.values.amount}
                  onChange={(value) =>
                    form.setFieldValue("amount", value as number)
                  }
                  radius='md'
                  disabled
                />
                <div className={classes.dropzoneWrapper}>
                  <div
                    style={{
                      justifyContent: "center",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      paddingTop: 20,
                    }}
                  >
                    <Image
                      src='/assets/image/upi.png'
                      alt='upi'
                      width={300}
                      height={300}
                    />
                    <Text ta='center' fw={700} pt={20} pb={20}>
                      dhfi63526@barodampay
                    </Text>
                  </div>
                  <Dropzone
                    aria-required={true}
                    multiple={false}
                    openRef={openRef}
                    onDrop={(files) => {
                      handleFileChange(files);
                    }}
                    className={classes.dropzone}
                    radius='md'
                    accept={IMAGE_MIME_TYPE}
                    maxSize={10 * 1024 ** 2}
                  >
                    {/* {files.length === 0 ? ( */}
                    <div style={{ pointerEvents: "none" }}>
                      <Group position='center'>
                        <Dropzone.Accept>
                          <IconDownload
                            size={50}
                            color={theme.colors[theme.primaryColor][6]}
                            stroke={1.5}
                          />
                        </Dropzone.Accept>
                        <Dropzone.Reject>
                          <IconX
                            size={50}
                            color={theme.colors.red[6]}
                            stroke={1.5}
                          />
                        </Dropzone.Reject>
                        <Dropzone.Idle>
                          {/* <Image
                          src='/assets/image/upi.png'
                          alt='upi'
                          width={300}
                          height={300}
                        /> */}
                        </Dropzone.Idle>
                      </Group>

                      <Text ta='center' fw={700} fz='lg' mt='xl'>
                        <Dropzone.Accept>Drop files here</Dropzone.Accept>
                        <Dropzone.Reject>
                          Pdf file less than 30mb
                        </Dropzone.Reject>
                        <Dropzone.Idle>
                          {/* dhfi63526@barodampay */}
                        </Dropzone.Idle>
                      </Text>
                      <Text ta='center' fz='sm' mt='xs' c='dimmed'>
                        Upload payment screenshot. We can accept only{" "}
                        <i>image</i> files that are less than 5mb in size.
                      </Text>
                    </div>
                    {/* ) : ( */}
                    <div>
                      <SimpleGrid
                        cols={1}
                        breakpoints={[{ maxWidth: "sm", cols: 1 }]}
                        mt={previews.length > 0 ? "xl" : 0}
                      >
                        {previews}
                      </SimpleGrid>
                    </div>
                    {/* )} */}
                  </Dropzone>
                  <Button
                    className={classes.control}
                    size='md'
                    radius='xl'
                    onClick={() => openRef.current?.()}
                  >
                    Select file
                  </Button>
                </div>
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
                <Button type='submit' radius='xl'>
                  Submit
                </Button>
              </Group>
            </form>
          </Paper>
        </Container>
      ) : (
        <Container style={{ height: "100vh" }} pb={100} pt={50}>
          <Text
            sx={{
              fontSize: 20,
              fontWeight: 700,
              textAlign: "center",
            }}
          >
            Your details have been recorded. You will get a confirmation email
            on your registered email ID. For more details, you can reach out to
            us at
            <Link href={"tel:+91 6352698962"}> +91 6352698962.</Link>
          </Text>
          <Text
            sx={{
              fontSize: 15,
              fontWeight: 500,
              textAlign: "center",
              paddingTop: 20,
            }}
          >
            You will be automatically redirected to the home page in 10 seconds
          </Text>
        </Container>
      )}

      <Footer />
    </main>
  );
};

export default Registrations;

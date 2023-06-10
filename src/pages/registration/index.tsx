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
} from "@mantine/core";
import { Navbar } from "src/components/shared/navbar";
import {
  Dropzone,
  IMAGE_MIME_TYPE,
  FileWithPath,
  MIME_TYPES,
} from "@mantine/dropzone";
import Image from "next/image";
import { useRef } from "react";
import { IconCloudUpload, IconX, IconDownload } from "@tabler/icons-react";
import { Footer } from "src/components/shared/footer";

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
    left: `calc(50% - ${125})`,
    bottom: 20,
  },
}));

const Registrations = (props: PaperProps) => {
  const [type, toggle] = useToggle(["login", "register"]);

  const form = useForm({
    initialValues: {
      email: "",
      name: "",
      whatsapp: "",
      college: "",
      info: "",
      amount: 0,
      file: null,
    },

    validate: {
      email: (val) => (/^\S+@\S+$/.test(val) ? null : "Invalid email"),
    },
  });

  const openRef = useRef<() => void>(null);
  const { classes, theme } = useStyles();

  return (
    <main className={styles.bg}>
      <Navbar />
      <Container pb={100} pt={50}>
        <Paper radius='md' p='xl' withBorder {...props}>
          <h1>Registration</h1>

          <form onSubmit={form.onSubmit(() => {})}>
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
                withinPortal
                data={["React", "Angular", "Svelte", "Vue"]}
                placeholder='Pick one'
                label='How did you know about the competition'
                value={form.values.info}
                onChange={(value) =>
                  form.setFieldValue("info", value as string)
                }
                radius='md'
              />

              <NumberInput
                required
                min={0}
                label='Amount'
                placeholder='Amount'
                value={form.values.amount}
                onChange={(value) =>
                  form.setFieldValue("amount", value as number)
                }
                radius='md'
              />

              <Dropzone
                multiple={false}
                openRef={openRef}
                onDrop={(files) => {
                  console.log(files);
                }}
                className={classes.dropzone}
                radius='md'
                accept={IMAGE_MIME_TYPE}
                maxSize={10 * 1024 ** 2}
                onReject={(files) => console.log("rejected files", files)}
              >
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
                      <Image
                        src='/assets/image/upi.png'
                        alt='upi'
                        width={300}
                        height={300}
                      />
                    </Dropzone.Idle>
                  </Group>

                  <Text ta='center' fw={700} fz='lg' mt='xl'>
                    <Dropzone.Accept>Drop files here</Dropzone.Accept>
                    <Dropzone.Reject>Pdf file less than 30mb</Dropzone.Reject>
                    <Dropzone.Idle>dhfi63526@barodampay</Dropzone.Idle>
                  </Text>
                  <Text ta='center' fz='sm' mt='xs' c='dimmed'>
                    Drag&apos;n&apos;drop files here to upload. We can accept
                    only <i>.png and .jpeg</i> files that are less than 10mb in
                    size.
                  </Text>
                </div>
              </Dropzone>
            </Stack>

            <Group position='apart' mt='xl'>
              <Anchor
                component='button'
                type='button'
                color='dimmed'
                onClick={() => toggle()}
                size='xs'
              >
                {/* Don't have an account? Register */}
              </Anchor>
              <Button type='submit' radius='xl'>
                {upperFirst(type)}
              </Button>
            </Group>
          </form>
        </Paper>
      </Container>
      <Footer />
    </main>
  );
};

export default Registrations;

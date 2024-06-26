import { AdminDashboardLayout } from "@/components/admin/AdminDashboardLayout";
import {
  Avatar,
  Badge,
  Button,
  Container,
  Flex,
  LoadingOverlay,
  SimpleGrid,
  Stack,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import React from "react";
import { UsersTable } from "@/pages/admin/users";
import Link from "next/link";
import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query";
import { Jobs } from "@/models/Job";
import { axios } from "@/lib/axios";
import { openConfirmModal } from "@mantine/modals";
import { queryClient } from "@/pages/_app";

const getCourses = (): Promise<{
  status: "OK" | "ERROR";
  courses: Jobs[];
}> => {
  return axios.get(`/api/jobs`);
};

const Courses = () => {
  const router = useRouter();

  const { data } = useQuery(["all-courses"], getCourses, {
    enabled: router.isReady,
  });

  const handleDeleteCourse = async (course: Jobs) => {
    openConfirmModal({
      title: "Delete Job",
      centered: true,
      children: (
        <Text size="sm">
          Are you sure you want to delete this job ({course.title} #
          {course._id})?
        </Text>
      ),
      labels: { confirm: "Delete Job", cancel: "No don't delete" },
      confirmProps: { color: "red" },
      onConfirm: async () => {
        try {
          await axios.delete(`/api/jobs/${course._id}`);
        } catch (error) {
          console.log(error);
        }
        await queryClient.refetchQueries(["all-courses"]);
      },
    });
  };

  return (
    <AdminDashboardLayout>
      <Container size="xl">
        <Title order={1} mt="sm">
          Jobs
        </Title>

        <Stack mt="xl" justify="space-between" style={{ flexDirection: "row" }}>
          <form>
            <TextInput
              placeholder="Search Jobs"
              icon={<IconSearch size={14} />}
              size="md"
            />
          </form>
          <Button component={Link} href="/admin/jobs/new" size="md">
            Add Jobs
          </Button>
        </Stack>

        {data?.courses.length === 0 ? (
          <Text mt="2rem" align="center" c="dimmed">
            No Jobs found
          </Text>
        ) : null}

        <SimpleGrid
          mt="1rem"
          mb="3rem"
          cols={4}
          breakpoints={[
            { maxWidth: "xl", cols: 3 },
            { maxWidth: "lg", cols: 2 },
            { maxWidth: "xs", cols: 1 },
          ]}
        >
          {data?.courses.map((course: Jobs) => (
            <CourseCard
              key={course._id}
              image={course.featuredImage}
              title={course.title}
              createdAt={new Date(course.createdAt)}
              href={`/jobs/${course._id}`}
              onDelete={() => handleDeleteCourse(course)}
              showActions={true}
              editUrl={`/admin/jobs/${course._id}/edit`}
              skillset={course.skillset}
              country={course.country}
              time={course.time}
              companyname={course.companyname}
              gender={course.gender}
            />
          ))}
          {!data ? <LoadingOverlay visible={true} overlayBlur={2} /> : null}
        </SimpleGrid>
      </Container>
    </AdminDashboardLayout>
  );
};

import { createStyles, Card, rem, Group, ActionIcon } from "@mantine/core";
import { IconEdit, IconTrash } from "@tabler/icons-react";
import { useEffect, useState } from "react";

import { timeAgo } from "@/utils/timeAgo";
import Image from "next/image";

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },

  footer: {
    padding: `${theme.spacing.xs} ${theme.spacing.lg}`,
    marginTop: theme.spacing.md,
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },
}));

type CourseCardProps = {
  image: string;
  title: string;
  createdAt: Date;
  href: string;
  showActions?: boolean;
  editUrl?: string;
  onDelete?: () => void;
  skillset: string;
  companyname: string;
  time: string;
  country: string;
  gender:string
};

export const CourseCard = ({
  image,
  title,
  createdAt,
  href,
  onDelete,
  editUrl,
  skillset,
  showActions,
  companyname,
  time,
  gender,
  country,
}: CourseCardProps) => {
  const { classes, theme } = useStyles();
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  return (
    <Card withBorder padding="lg" radius="md" className={classes.card}>
      <Card.Section mb="sm">
        <Image
          src={image}
          height={720}
          width={1080}
          style={{ height: "200px", width: "100%", objectFit: "cover" }}
          alt="image"
        />
      </Card.Section>

      <Group>
        {skillset ? <Badge>{skillset}</Badge> : null}
        <Badge color="blue">{time}</Badge>
      </Group>

      <Text
        component={Link}
        href={href}
        fw={700}
        className={classes.title}
        mt="xs"
        display={"block"}
      >
        {title}
      </Text>
      <Text c="dimmed"> {country}</Text>
      <Text c="dimmed">{gender}</Text>

      <Flex mt="sm" gap="md">
        <div style={{ marginTop: "5px" }}>
          <Avatar radius="sm" />
        </div>
        <div>
          <Text fw={500}>{companyname}</Text>

          <Text fz="xs" c="dimmed" size="xs">
            {hydrated ? `Posted ${timeAgo(createdAt) || "0 second ago"}` : null}
          </Text>
        </div>
      </Flex>

      <Card.Section className={classes.footer}>
        <Group position="apart">
          <Button
            variant={"outline"}
            component={Link}
            href={href}
            radius="md"
            style={{ flex: 1 }}
          >
            View details
          </Button>

          {showActions ? (
            <Group spacing={0}>
              {editUrl ? (
                <ActionIcon component={Link} href={editUrl}>
                  <IconEdit
                    size="1.2rem"
                    color={theme.colors.blue[6]}
                    stroke={1.5}
                  />
                </ActionIcon>
              ) : null}
              <ActionIcon onClick={onDelete}>
                <IconTrash
                  size="1.2rem"
                  color={theme.colors.red[6]}
                  stroke={1.5}
                />
              </ActionIcon>
            </Group>
          ) : null}
        </Group>
      </Card.Section>
    </Card>
  );
};

export default Courses;

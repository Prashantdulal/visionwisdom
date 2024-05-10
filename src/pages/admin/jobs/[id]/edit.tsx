import { AdminDashboardLayout } from "@/components/admin/AdminDashboardLayout";
import {
  Autocomplete,
  Button,
  Container,
  NumberInput,
  SimpleGrid,
  Switch,
  TextInput,
  Title,
} from "@mantine/core";
import React from "react";
import { Text } from "@mantine/core";
import { axios } from "@/lib/axios";
import { useForm, zodResolver } from "@mantine/form";
import { NewCourseCredentialsDTO, newCourseSchema } from "@/validators";
import Highlight from "@tiptap/extension-highlight";
import SubScript from "@tiptap/extension-subscript";
import Superscript from "@tiptap/extension-superscript";
import TextAlign from "@tiptap/extension-text-align";
import Underline from "@tiptap/extension-underline";
import { useEditor } from "@tiptap/react";
import { Link } from "@mantine/tiptap";
import { StarterKit } from "@tiptap/starter-kit";
import { useRouter } from "next/router";
import { queryClient } from "@/pages/_app";
import { Jobs } from "@/models/Job";
import { useQuery } from "@tanstack/react-query";
import { TextEditor, UploadBtn } from "@/pages/admin/jobs/new";

const getCourse = (
  id: string
): Promise<{ status: "OK" | "ERROR"; course: Jobs }> => {
  return axios.get(`/api/jobs/${id}/`);
};

const EditCourse = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data } = useQuery(["course", id], () => getCourse(id as string), {
    enabled: router.isReady,
    onSuccess: (d) => {
      form.setValues({
        companyname: d.course.companyname,
        content: d.course.content,
        country: d.course.country,
        featuredImage: d.course.featuredImage,
        skillset: d.course.skillset,
        time: d.course.time,
        title: d.course.title,
        gender:d.course.gender
      });

      editor?.commands.setContent(d.course.content);
    },
  });
  const form = useForm<NewCourseCredentialsDTO>({
    validateInputOnBlur: true,
    validate: zodResolver(newCourseSchema),
    initialValues: {
      featuredImage: "",
      title: "",
      content: "",
      gender:"",
      time: "",
      companyname: "",
      skillset: "",
      country: "",
      salary:""
    },
  }); 

  const editor = useEditor({
    extensions: [
      
      Underline,
      Link,
      Superscript,
      SubScript,
      Highlight,
      TextAlign.configure({ types: ["heading", "paragraph"] }),
    ],
    onCreate: ({ editor }) => {
      editor.commands.setContent(data?.course.content || "");
    },
    onUpdate: ({ editor }) => {
      form.setFieldValue("content", editor.getHTML());
    },
  });

  const handleUpdateCourse = async (data: NewCourseCredentialsDTO) => {
    await axios.patch(`/api/jobs/${id}`, data);

    await queryClient.refetchQueries(["all-courses"]);
    await router.push(`/admin/jobs`);
  };

  return (
    <AdminDashboardLayout>
      <Container size="xl">
        <form onSubmit={form.onSubmit(handleUpdateCourse)}>
        <Title order={1} mt="sm">
            New Jobs
          </Title>

          <UploadBtn
            value={form.values.featuredImage}
            onChange={(val: string) => {
              form.setFieldValue("featuredImage", val);
            }}
          />
          {form.errors.featuredImage ? (
            <Text fz="xs" color={"red"}>
              {form.errors.featuredImage}
            </Text>
          ) : null}

<SimpleGrid
            cols={3}
            mt="md"
            breakpoints={[
              { maxWidth: "sm", cols: 1 },
              { maxWidth: "md", cols: 2 },
            ]}
          >
            <TextInput
              label="Job Title"
              error={form.errors.title}
              {...form.getInputProps("title")}
              withAsterisk
            />
            <TextInput
              label="Company Name"
              error={form.errors.companyname}
              {...form.getInputProps("companyname")}
              withAsterisk
            />
              <Autocomplete
              label="Gender"
              error={form.errors.gender}
              {...form.getInputProps("gender")}
              data={[
                { value: "Male" },
                { value: "Female" }
              
              ]}
              withAsterisk
            />
          </SimpleGrid>

          <SimpleGrid
            cols={3}
            mt="md"
            breakpoints={[
              { maxWidth: "sm", cols: 1 },
              { maxWidth: "md", cols: 2 },
            ]}
          >
            <TextInput
              label="Country"
              error={form.errors.country}
              {...form.getInputProps("country")}
              withAsterisk
            />
            <TextInput
              label="Required Skill Sets"
              error={form.errors.skillset}
              {...form.getInputProps("skillset")}

            />



            <TextInput
              label="Duty Hours"
              error={form.errors.time}
              {...form.getInputProps("time")}

              withAsterisk
            />
          </SimpleGrid>


          <SimpleGrid>
            <TextInput label="Salary"  error={form.errors.salary}
            {...form.getInputProps("salary")}/>
          
          </SimpleGrid>



          <TextEditor content={form.values.content} editor={editor} />
          {form.errors.content ? (
            <Text fz="xs" color={"red"}>
              {form.errors.content}
            </Text>
          ) : null}

          <Button mt="md" type="submit">
            Add Course
          </Button>
        </form>
      </Container>
    </AdminDashboardLayout>
  );
};

export default EditCourse;

import * as Yup from "yup";

import { Form, Formik } from "formik";

import Button from "../../../components/Button/Button";
import { Content } from "../../../types/content";
import FormikInput from "../../../components/FormikInput/FormikInput";
import FormikTextArea from "../../../components/FormikTextArea/FormikTextArea";
import { HOME_PATH } from "../../../consts/paths";
import { UserContext } from "../../../contexts/UserContext";
import styles from "./ContentForm.module.scss";
import { toast } from "react-hot-toast";
import { useContext } from "react";
import { useCreateContent } from "../../../hooks/content";
import { useNavigate } from "react-router-dom";

const validationSchema = Yup.object().shape({
  title: Yup.string().required("Required"),
  description: Yup.string().required("Required"),
});

const ContentForm = () => {
  const navigate = useNavigate();

  const { mutateAsync: createContent } = useCreateContent();

  const token = useContext(UserContext)?.token;

  const handleCreateContent = (values: Content) => {
    if (!token) {
      toast.error("Something went wrong");
      return;
    }

    createContent({
      token,
      content: {
        title: values.title,
        description: values.description,
      },
    })
      .then((response) => {
        toast.success("Content created successfully");
        navigate(HOME_PATH);
      })
      .catch(() => toast.error("You've entered wrong details"));
  };

  return (
    <div className={styles.container}>
      <Formik
        initialValues={{
          id: null,
          user_id: null,
          title: "",
          description: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleCreateContent}
      >
        {() => (
          <Form className={styles.container__form}>
            <FormikInput type="text" name="title" placeholder="Title" />
            <FormikTextArea name="description" placeholder="Description" />
            <Button variant="primary" type="submit">
              SUBMIT CONTENT
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContentForm;

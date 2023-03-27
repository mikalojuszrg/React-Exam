import * as Yup from "yup";

import { Form, Formik } from "formik";
import { useLocation, useNavigate } from "react-router-dom";

import Button from "../Button/Button";
import { Content } from "../../types/content";
import FormikInput from "../FormikInput/FormikInput";
import { UserContext } from "../../contexts/UserContext";
import { toast } from "react-hot-toast";
import { useContext } from "react";
import { useCreateContent } from "../../hooks/content";

const validationSchema = Yup.object().shape({
  title: Yup.string().required("Required"),
  description: Yup.string().required("Required"),
});

const ContentForm = () => {
  const location = useLocation();
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
        console.log(response);
        console.log(values);
        toast.success("Content created successfully");
      })
      .catch(() => toast.error("You've entered wrong details"));
  };

  return (
    <div>
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
          <Form>
            <FormikInput type="text" name="title" placeholder="Title" />
            <FormikInput
              type="text"
              name="description"
              placeholder="Description"
            />
            <Button variant="primary" type="submit">
              SUBMIT
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContentForm;

import { ErrorMessage, Field } from "formik";
import TextArea, { Props } from "../TextArea/TextArea";

const FormikTextArea = (props: Props) => {
  return (
    <div>
      <Field {...props} as={TextArea} />
      <ErrorMessage component="div" {...props} />
    </div>
  );
};

export default FormikTextArea;

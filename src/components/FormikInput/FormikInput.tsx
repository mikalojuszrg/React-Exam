import { ErrorMessage, Field } from "formik";
import Input, { Props } from "../Input/Input";

const FormikInput = (props: Props) => {
  return (
    <div>
      <Field {...props} as={Input} />
      <ErrorMessage component="div" {...props} />
    </div>
  );
};

export default FormikInput;

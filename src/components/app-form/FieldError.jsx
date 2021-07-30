import { ErrorMessage } from "formik";

export default function FieldError({ field, ...props }) {
  return (
    <ErrorMessage name={field} {...props}>
      {(msg) => <span className="input-error">{msg}</span>}
    </ErrorMessage>
  );
}

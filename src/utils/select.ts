import * as yup from "yup";

export interface optionType {
  label: string;
  value: string;
}

export const optionTypeSchema = yup.object({
  label: yup.string().required("Required"),
  value: yup.string().required("Required"),
});

import { contactImg } from "assets";
import styles from "./styles.module.scss";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, SubmitHandler } from "react-hook-form";
import * as yup from "yup";
import countryCodes from "utils/countryCodes.json";
import { optionType, optionTypeSchema } from "utils";
import Select from "react-select";

export interface ContactData {
  name: string;
  email: string;
  countryCode: optionType;
  number: string;
  message: string;
}

const initialValues: ContactData = {
  name: "",
  email: "",
  countryCode: { label: "+234", value: "+234" },
  number: "",
  message: "",
};

const schema = yup
  .object({
    name: yup.string().required("Required"),
    email: yup.string().email("Enter a valid email").required("Required"),
    message: yup.string().required("Required"),
    countryCode: optionTypeSchema,
    number: yup
      .string()
      .required("Required")
      .min(8, "Enter a valid phone number")
      .matches(/^[0-9]+$/, "Phone number can only contain numbers"),
  })
  .required();

const ContactUI = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch,
  } = useForm<ContactData>({
    resolver: yupResolver(schema),
    defaultValues: initialValues,
  });

  return (
    <>
      <section className={styles.container}>
        <img className={styles.img} src={contactImg} alt="piggy bank" />
        <div className={styles.contact}>
          <h1 className={styles.ttl}>
            Let’s help you build a strong financial portfolio
          </h1>
          <p className={styles.txt}>
            You can reach us anytime via{" "}
            <a href="mailto:info@zitrafundmanagers.com">
              info@zitrafundmanagers.com
            </a>
          </p>

          <form className={styles.form}>
            <div className={`${styles.inputWrap}`}>
              <label>Full name</label>
              <input
                type={"text"}
                placeholder="your name"
                {...register("name", {
                  required: true,
                })}
              />
              {errors.name?.message ? (
                <p className={styles.errorMessage}>{errors.name?.message}</p>
              ) : (
                ""
              )}
            </div>
            <div className={`${styles.inputWrap}`}>
              <label>Email</label>
              <input
                placeholder="your@email.com"
                type={"email"}
                {...register("email", {
                  required: true,
                })}
              />
              {errors.email?.message ? (
                <p className={styles.errorMessage}>{errors.email?.message}</p>
              ) : (
                ""
              )}
            </div>
            <div className={`${styles.inputWrap}`}>
              <label>Phone number</label>
              <div className={styles.selectWrap} >
                <Select
                  onChange={(x: any) => setValue("countryCode", x)}
                  className={`${styles.select}`}
                  classNamePrefix="formSelect"
                  name={"countryCode"}
                  options={countryCodes.map((item) => ({
                    label: item.dial_code,
                    value: item.dial_code,
                  }))}
                  value={
                    watch("countryCode").value ? watch("countryCode") : null
                  }
                />
                <input
                  placeholder=""
                  type={"email"}
                  {...register("number", {
                    required: true,
                  })}
                />
              </div>
              {!watch("countryCode").value &&
              errors.countryCode?.value?.message ? (
                <p className={styles.errorMessage}>
                  {errors.countryCode.value?.message}
                </p>
              ) : (
                ""
              )}
            </div>
            <div className={`${styles.inputWrap}`}>
              <label>How can we help?</label>
              <textarea
                placeholder="Give a brief description"
                {...register("message", {
                  required: true,
                })}
              />
              {errors.message?.message ? (
                <p className={styles.errorMessage}>{errors.message?.message}</p>
              ) : (
                ""
              )}
            </div>
            <button className={styles.btn} >Send message</button>
          </form>
        </div>
      </section>
    </>
  );
};
export { ContactUI };

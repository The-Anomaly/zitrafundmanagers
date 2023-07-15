import { optionType, optionTypeSchema } from "utils";
import styles from "./styles.module.scss";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, SubmitHandler } from "react-hook-form";
import * as yup from "yup";
import Select from "react-select";
import countryCodes from "utils/countryCodes.json";
import { CloseIcon } from "assets";
import { useSearchParams } from "react-router-dom";
import { locationOptions, serviceOptions } from "utils/options";
import { useEffect } from "react";

export interface GetStartedData {
  firstName: string;
  lastName: string;
  location: optionType;
  countryCode: optionType;
  number: string;
  email: string;
  service: optionType;
}

const initialValues: GetStartedData = {
  firstName: "",
  lastName: "",
  countryCode: { label: "+234", value: "+234" },
  number: "",
  email: "",
  service: { label: "", value: "" },
  location: { label: "", value: "" },
};

const schema = yup
  .object({
    firstName: yup.string().required("Required"),
    lastName: yup.string().required("Required"),
    email: yup.string().email("Enter a valid email").required("Required"),
    countryCode: optionTypeSchema,
    location: optionTypeSchema,
    number: yup
      .string()
      .required("Required")
      .min(8, "Enter a valid phone number")
      .matches(/^[0-9]+$/, "Phone number can only contain numbers"),
    service: optionTypeSchema,
  })
  .required();

interface GetStartedProps {
  submit: (data: GetStartedData) => void;
  clear: boolean;
}

const GetStartedFormUI: React.FC<GetStartedProps> = ({ submit, clear }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch,
  } = useForm<GetStartedData>({
    resolver: yupResolver(schema),
    defaultValues: initialValues,
  });

  useEffect(() => {
    reset();
    // document.getElementsByTagName("html")[0].style.overflow = "hidden";
  }, [clear]);

  const close = () => {
    // document.getElementsByTagName("html")[0].style.overflow = "unset";
    searchParams.delete("getstarted");
    setSearchParams(searchParams);
  };

  const cancel = () => {
    reset();
    close();
  };

  const onSubmit: SubmitHandler<GetStartedData> = (data) => {
    submit(data);
  };

  return (
    <>
      <aside className={styles.container}>
        <section className={styles.content}>
          <div  className={styles.body}>
            <CloseIcon onClick={close} role="button" className={styles.close} />
            <h1 className={styles.ttl}>Get started</h1>
            <p className={styles.txt}>
              Get enquiry into any of our products, and lets help you build a
              healthy financial portfolio
            </p>
            <form className={styles.form}>
              <div className={`${styles.inputWrap}`}>
                <label>First name</label>
                <input
                  type={"text"}
                  placeholder="your first name"
                  {...register("firstName", {
                    required: true,
                  })}
                />
                {errors.firstName?.message ? (
                  <p className={styles.errorMessage}>
                    {errors.firstName?.message}
                  </p>
                ) : (
                  ""
                )}
              </div>
              <div className={`${styles.inputWrap}`}>
                <label>Last name</label>
                <input
                  type={"text"}
                  placeholder="your last name"
                  {...register("lastName", {
                    required: true,
                  })}
                />
                {errors.lastName?.message ? (
                  <p className={styles.errorMessage}>
                    {errors.lastName?.message}
                  </p>
                ) : (
                  ""
                )}
              </div>
              <div className={`${styles.inputWrap}`}>
                <label>Email</label>
                <input
                  type={"email"}
                  placeholder="your email"
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
                <div className={styles.selectWrap}>
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
                {errors.number?.message ? (
                  <p className={styles.errorMessage}>
                    {errors.number?.message}
                  </p>
                ) : (
                  ""
                )}
              </div>
              <div className={`${styles.inputWrap}`}>
                <label>Location</label>
                <Select
                  onChange={(x: any) => setValue("location", x)}
                  className={`${styles.select}`}
                  classNamePrefix="formSelect"
                  name={"location"}
                  options={locationOptions}
                  value={watch("location").value ? watch("location") : null}
                />
                {errors.location?.value?.message ? (
                  <p className={styles.errorMessage}>
                    {errors.location?.value?.message}
                  </p>
                ) : (
                  ""
                )}
              </div>
              <div className={`${styles.inputWrap}`}>
                <label>Choose the kind of service you need</label>
                <Select
                  onChange={(x: any) => setValue("service", x)}
                  className={`${styles.select}`}
                  classNamePrefix="formSelect"
                  name={"service"}
                  options={serviceOptions}
                  value={watch("service").value ? watch("service") : null}
                />
                {errors.service?.value?.message ? (
                  <p className={styles.errorMessage}>
                    {errors.service?.value?.message}
                  </p>
                ) : (
                  ""
                )}
              </div>
            </form>
          </div>
          <div className={styles.btnSec}>
            <button onClick={cancel} className={styles.cancel}>
              Cancel
            </button>
            <button onClick={handleSubmit(onSubmit)} className={styles.submit}>
              Submit
            </button>
          </div>
        </section>
      </aside>
    </>
  );
};

export { GetStartedFormUI };

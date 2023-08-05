import { optionType, optionTypeSchema } from "utils";
import styles from "./styles.module.scss";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, SubmitHandler } from "react-hook-form";
import * as yup from "yup";
import Select from "react-select";
import countryCodes from "utils/countryCodes.json";
import { CloseIcon, UploadIcon } from "assets";
import { useSearchParams } from "react-router-dom";
import { locationOptions, serviceOptions } from "utils/options";
import { useEffect, useState } from "react";

export interface GetStartedData {
  name: string;
  location: optionType;
  countryCode: optionType;
  number: string;
  email: string;
  bvn: string;
  service: optionType;
  file: FileList | null | any;
}

const initialValues: GetStartedData = {
  name: "",
  countryCode: { label: "+234", value: "+234" },
  number: "",
  email: "",
  bvn: "",
  service: { label: "", value: "" },
  location: { label: "", value: "" },
  file: null,
};

const isFile = (value: any): value is File => value instanceof File;

const schema = yup
  .object({
    name: yup.string().required("Required"),
    bvn: yup.string().required("Required").matches(/[0-9]/, "Only digits are allowed"),
    email: yup.string().email("Enter a valid email").required("Required"),
    countryCode: optionTypeSchema,
    location: optionTypeSchema,
    number: yup
      .string()
      .required("Required")
      .min(8, "Enter a valid phone number")
      .matches(/^[0-9]+$/, "Phone number can only contain numbers"),
    service: optionTypeSchema,
    file: yup
      .mixed()
      .nullable()
      .test("fileSize", "File is too large", (value) =>
        value === null
          ? true
          : value && isFile(value[0]) && value[0].size <= 1048576 * 5
      ),
  })
  .required();

interface GetStartedProps {
  submit: (data: GetStartedData) => void;
  clear: boolean;
}

const GetStartedFormUI: React.FC<GetStartedProps> = ({ submit, clear }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [closeAnimation, setCloseAnimation] = useState(false);

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

    setTimeout(() => {
      document.getElementsByTagName("html")[0].style.overflow = "hidden";
    }, 800);
  }, [clear]);

  const close = () => {
    setCloseAnimation(true);
    document.getElementsByTagName("html")[0].style.overflow = "unset";
    searchParams.delete("getstarted");

    setTimeout(() => {
      setSearchParams(searchParams);
    }, 1000);
  };

  const cancel = () => {
    reset();
    close();
  };

  const onSubmit: SubmitHandler<GetStartedData> = (data) => {
    submit(data);
  };

  const file = watch("file");

  return (
    <>
      <aside className={styles.container}>
        <section
          className={`${styles.content} ${
            closeAnimation ? styles.content__close : ""
          }`}
        >
          <div className={styles.body}>
            <CloseIcon onClick={close} role="button" className={styles.close} />
            <h1 className={styles.ttl}>Get started</h1>
            <p className={styles.txt}>
              Get enquiry into any of our products, and lets help you build a
              healthy financial portfolio
            </p>
            <form className={styles.form}>
              <div className={`${styles.inputWrap}`}>
                <label>Full name</label>
                <input
                  type={"text"}
                  placeholder="your full name"
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
                  menuPlacement="top"
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
                  menuPlacement="top"
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
              <div className={`${styles.inputWrap}`}>
                <label>Bank Verification Number (BVN)</label>
                <input
                  type={"number"}
                  placeholder="Enter BVN"
                  {...register("bvn", {
                    required: true,
                  })}
                />
                {errors.bvn?.message ? (
                  <p className={styles.errorMessage}>{errors.bvn?.message}</p>
                ) : (
                  ""
                )}
              </div>
              <div className={`${styles.inputWrap}`}>
                <label>Upload government approved ID (Max. 5MB)</label>
                <label className={styles.upload} htmlFor="file">
                  {file ? file[0].name ?? "Upload ID card" : "Upload ID card"}
                  <input
                    id="file"
                    style={{ display: "none" }}
                    type="file"
                    {...register("file")}
                    accept=".png, .jpeg, .jpg, .pdf"
                  />
                  <UploadIcon />
                </label>
                <p className={styles.msg} >.pdf .doc .jpeg .png files accepted</p>
                {errors.file?.message ? (
                  <p className={styles.errorMessage}>
                    {errors.file?.message.toString()}
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

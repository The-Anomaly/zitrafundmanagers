import { optionType, optionTypeSchema } from "utils";
import styles from "./styles.module.scss";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, SubmitHandler } from "react-hook-form";
import * as yup from "yup";
import Select from "react-select";
import countryCodes from "utils/countryCodes.json";
import { CloseIcon } from "assets";

const serviceOptions: optionType[] = [
  {
    label: "Private Wealth Accounts",
    value: "Private Wealth Accounts",
  },
  {
    label: "Fixed Income Notes",
    value: "Fixed Income Notes",
  },
  {
    label: "Mutual Funds",
    value: "Mutual Funds",
  },
  {
    label: "Foreign Currency Investments",
    value: "Foreign Currency Investments",
  },
  {
    label: "Zitra Alternative Investments",
    value: "Zitra Alternative Investments",
  },
  {
    label: "Ethical Investments",
    value: "Ethical Investments",
  },
];

export interface GetStartedData {
  name: string;
  countryCode: optionType;
  number: string;
  message: string | undefined;
  service: optionType;
  file: any;
}

const initialValues: GetStartedData = {
  name: "",
  countryCode: { label: "+234", value: "+234" },
  number: "",
  message: "",
  service: { label: "", value: "" },
  file: undefined,
};

const schema = yup
  .object({
    name: yup.string().required("Required"),
    countryCode: optionTypeSchema,
    number: yup
      .string()
      .required("Required")
      .min(8, "Enter a valid phone number")
      .matches(/^[0-9]+$/, "Phone number can only contain numbers"),
    file: yup.mixed(),
    service: optionTypeSchema,
    message: yup.string(),
  })
  .required();

export interface ModalProps {
  show: Boolean;
  close: () => void;
}

const GetStartedFormUI: React.FC<ModalProps> = ({ show, close }) => {
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

  const cancel = () => {
    reset();
    close();
  };

  return (
    <>
      <aside className={styles.container}>
        <section className={styles.content}>
          <CloseIcon onClick={close} role="button" className={styles.close} />
          <h1 className={styles.ttl}>Get started</h1>
          <p className={styles.txt}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
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
              <label>Choose the kind of service you need</label>
              <Select
                onChange={(x: any) => setValue("service", x)}
                className={`${styles.select}`}
                classNamePrefix="formSelect"
                name={"service"}
                options={serviceOptions}
                value={watch("service").value ? watch("service") : null}
              />
              {errors.service?.message ? (
                <p className={styles.errorMessage}>{errors.service?.message}</p>
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
          </form>
          <div className={styles.btnSec}>
            <button onClick={cancel} className={styles.cancel}>
              Cancel
            </button>
            <button className={styles.submit}>Submit</button>
          </div>
        </section>
      </aside>
    </>
  );
};

export { GetStartedFormUI };

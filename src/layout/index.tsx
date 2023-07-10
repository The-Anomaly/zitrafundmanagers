import { useSearchParams } from "react-router-dom";
import { Footer } from "./footer";
import { Navbar, NavbarProps } from "./navbar";
import styles from "./styles.module.scss";
import axios from "axios";
import { Preloader, Toast } from "components";
import { SENDINBLUE_KEY, SENDINBLUE_LIST_ID } from "config";
import React from "react";

interface LayoutProps extends NavbarProps {
  children: any;
}

const Layout: React.FC<LayoutProps> = ({ children, active }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [toast, setToast] = React.useState({
    show: false,
    type: false,
    title: "",
    text: "",
  });
  const [loading, setLoading] = React.useState(false);
  const [clear, setClear] = React.useState(false);

  const apply = () => {
    setSearchParams({ getstarted: "true" });
  };

  const newsletter = async (email) => {
    setLoading(true);
    const options = {
      method: "POST",
      url: "https://api.sendinblue.com/v3/contacts",
      headers: {
        accept: "application/json",
        "api-key": SENDINBLUE_KEY,
      },
      data: {
        email,
        listIds: [Number(SENDINBLUE_LIST_ID)],
      },
    };

    axios
      .request(options)
      .then((response) => {
        setToast({
          show: true,
          type: true,
          title: "Great",
          text: "You've successfully subscribed to our newsletter!",
        });

        setClear(!clear);
      })
      .catch((error) => {
        setToast({
          show: true,
          type: false,
          title: "Error",
          text: error.response.data.message,
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      <Preloader loading={loading} />
      <Toast
        {...toast}
        closeModal={() => setToast({ ...toast, show: false })}
      />
      <Navbar active={active} apply={apply} />
      <main className={styles.main}>{children}</main>
      <Footer clear={clear} submit={newsletter} />
    </>
  );
};

export { Layout };

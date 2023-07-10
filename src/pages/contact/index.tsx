import axios from "axios";
import { Preloader, Toast } from "components";
import { MAILJET_API_KEY, MAILJET_SECRET_KEY } from "config";
import { ContactData, ContactUI } from "features";
import { useState } from "react";

const Contact = () => {
  const [clear, setClear] = useState(false);
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState({
    show: false,
    type: false,
    title: "",
    text: "",
  });

  const sendEmail = (data: ContactData) => {
    setLoading(true);
    axios
      .post(
        "https://anomaly-mailer.netlify.app/.netlify/functions/server/mailjet",
        {
          messages: [
            {
              From: {
                Email: "zenna@zitrainvestments.com",
                Name: "Zenna",
              },
              To: [
                {
                  Email: "info@zitrafundmanagers.com",
                  Name: "Zitra Fund Managers",
                },
              ],
              Subject: "New Contact Submission for Zitra Fund Managers - Contact Form",
              // TextPart: "My first Mailjet email",
              HTMLPart: `<h3>Hello Zitra Admin,</h3>
            <p style="font-size:14px">A new contact form has been submitted on your website. The details are below:</p>
            <ul style="font-size:14px">
            <li>Full name: <b>${data.name}</b></li>
            <li>Last name: <b>${data.countryCode.value}${data.number}</b></li>
            <li>Email address: <b>${data.email}</b></li>
            <li>Phone number: <b>${data.message}</b></li>
            </ul>
            Best regards.
          `,
              CustomID: "AppGettingStartedTest",
            },
          ],
        },
        {
          headers: {
            "private-key": MAILJET_API_KEY,
            "secret-key": MAILJET_SECRET_KEY,
          },
        }
      )
      .then((res) => {
        if (res.status === 200) {
          setClear(!clear);
          setToast({
            show: true,
            type: true,
            title: "Submitted successfully!",
            text: res.data.message,
          });
        }
      })
      .catch((err) => {
        setToast({
          show: true,
          type: false,
          title: "Failed to submit",
          text: err.response.data.message,
        });
      })
      .finally(() => setLoading(false));
  };

  return (
    <>
      <Preloader loading={loading} />
      <Toast
        {...toast}
        closeModal={() => setToast({ ...toast, show: false })}
      />
      <ContactUI clear={clear} submit={sendEmail} />
    </>
  );
};
export { Contact };

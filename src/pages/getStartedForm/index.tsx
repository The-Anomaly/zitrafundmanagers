import axios from "axios";
import { GetStartedData, GetStartedFormUI, Preloader, Toast } from "components";
import { MAILJET_API_KEY, MAILJET_SECRET_KEY } from "config";
import { useState } from "react";

const GetStartedForm = () => {
  const [clear, setClear] = useState(false);
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState({
    show: false,
    type: false,
    title: "",
    text: "",
  });

  const sendEmail = (data: GetStartedData) => {
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
                  Email: "Info@zitrafundmanagers.com",
                  Name: "Zitra Fund Managers",
                },
              ],
              Subject:
                "New Application Submission for Zitra Fund Managers - Get Started",
              // TextPart: "My first Mailjet email",
              HTMLPart: `<h3>Hello Zitra Admin,</h3>
            <p style="font-size:14px">A new application request has been submitted on your website. The details are below:</p>
            <ul style="font-size:14px">
            <li>First name: <b>${data.firstName}</b></li>
            <li>Last name: <b>${data.lastName}</b></li>
            <li>Phone number: <b>${data.countryCode} ${data.number}</b></li>
            <li>Email address: <b>${data.email}</b></li>
            <li>Product or service: <b>${data.service}</b></li>
            <li>Location: <b>${data.location}</b></li>
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
            title: "Application Received",
            text: res.data.message,
          });
        }
      })
      .catch((err) => {
        setToast({
          show: true,
          type: false,
          title: "Failed to send application",
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
      <GetStartedFormUI clear={clear} submit={sendEmail} />
    </>
  );
};
export { GetStartedForm };

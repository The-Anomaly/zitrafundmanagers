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

  const getBase64 = (file: File) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        let encoded: any = reader.result
          ?.toString()
          .replace(/^data:(.*,)?/, "");
        if (encoded.length % 4 > 0) {
          encoded += "=".repeat(4 - (encoded.length % 4));
        }
        return resolve(encoded);
      };
      reader.onerror = (error) => reject(error);
    });
  };

  const sendEmail = async (data: GetStartedData) => {
    setLoading(true);

    const message: any = {
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
    <li>Full name: <b>${data.name}</b></li>
    <li>Phone number: <b>${data.countryCode.value} ${data.number}</b></li>
    <li>Email address: <b>${data.email}</b></li>
    <li>BVN: <b>${data.bvn}</b></li>
    <li>Product or service: <b>${data.service.label}</b></li>
    <li>Location: <b>${data.location.label}</b></li>
    </ul>
    Best regards.
  `,
      CustomID: "AppGettingStartedTest",
      Attachments: [],
    };

    if (data.file) {
      const base64 = await getBase64(data.file[0]).then((res) => {
        return res;
      });
      message.Attachments.push({
        ContentType: "text/plain",
        Filename: data.file[0]?.name,
        Base64Content: base64,
      });
    }

    await axios
      .post(
        "https://anomaly-mailer.netlify.app/.netlify/functions/server/mailjet",
        {
          messages: [message],
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

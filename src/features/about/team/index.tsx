import {
  director1,
  director2,
  director3,
  director4,
  director5,
  director6,
  director7,
  director8,
} from "assets";
import styles from "./styles.module.scss";

interface MemberProps {
  photo: string;
  role?: string;
  bio: string | any;
  name: string;
}

const Member: React.FC<MemberProps> = ({ photo, name, role, bio }) => {
  return (
    <div className={styles.member}>
      <img className={styles.photo} src={photo} alt="" />
      <p className={styles.name}>{name}</p>
      {role && <p className={styles.role}>{role}</p>}
      {/* <p className={styles.bio}>{bio}</p> */}
    </div>
  );
};

const Team = () => {
  const members: MemberProps[] = [
    {
      photo: director6,
      name: "H.R.M Oba Abdulwasiu Omogbolahan Lawal (Abisogun II)",
      role: "Chairman of the Board",
      bio: (
        <>
          is a highly experienced administrator with over 25 years in the
          Nigerian public sector. He has a background in science and started his
          career in research before joining the Nigerian Police Force. <br />{" "}
          Oba Lawal retired as a Superintendent of Police and holds an Executive
          MSc from the London School of Economics. He has attended prestigious
          institutions like Harvard Kennedy School of Government and the World
          Bank Institute.
          <br /> Oba Lawal is known for his leadership skills and his ability to
          identify, analyze, and implement strategic solutions for sustainable
          change.
        </>
      ),
    },
    {
      photo: director1,
      name: "Babatunde Obadero",
      role: "Managing Director/CEO",
      bio: `Tunde has over 18 years experience in Strategy, Operations and Risk
            Management. Tunde has held previous roles as: Chief Executive Officer,
            CS Advance (a subsidiary of Cardinal Stone Partners), Chief Commercial
            Officer, Pledge Finance, Head of Operations, Page Financials, Head of
            Operations, Skye Bank Plc. Tunde has an MBA from Lagos Business School
            and has had a senior management course at INSEAD.`,
    },
    {
      photo: director2,
      name: "Femi Okuyelu (MIOD)",
      role: "Executive Director",
      bio: `Femi has 15 years experience in Fintech, Business development, marketing, and Strategic partnership. Femi has held roles as; Country Manager, Ferratum NG, Commercial Advisor, Embassy of Finland in Nigeria, Senior Market Analyst, Business Finland, Business Development Lead, Skye Bank Plc. Femi Holds a BSc and an MBA from the university of Lagos.`,
    },
    {
      photo: director3,
      name: "Olaotan Olumuyiwa",
      role: "Executive Director",
      bio: `Olaotan brings to play at the establishment his analytic and problem[1]solving skills aimed at developing, implementing, and improving relatable IT solutions that support business goals. He is an SAP Solution Architect with over 15 years of experience in Information Technology and eBusiness in the Nigerian Banking Sector. Olaotan Olamuyiwa is currently a Director and the Chief Information Officer at Zitra Investments. He holds a BSc in Computer Science (Technology) from Babcock University, Nigeria and a master’s degree in Electronic Business Management from the University of Warwick, United Kingdom.`,
    },
    {
      photo: director4,
      name: "Bolaji Fajenyo",
      role: "Chief Commercial Officer",
      bio: `Bolaji is an experienced relationship manager with over 13 years of experience. He joined Afrinvest in 2009 and handles sales and service interactions with customers. He introduced Treasury Bills investments to retail investors in his previous role. Bolaji has a background in sales and holds a degree in Geography. He has attended courses on anti-money laundering, terrorism finance, SEC rules, and relationship management. He is sponsored by the SEC.`,
    },
    {
      photo: director8,
      name: "Zumah Yahaya",
      role: "Non- executive Director",
      bio: (
        <>
          Is a seasoned growth and strategy specialist with 16 years of
          experience. <br /> She is a Certified Management Consultant and a
          Fellow of the Institute of Management Consultant. Zumah has a diverse
          background in accounting, computer science, and business &
          entrepreneurship. <br /> She has co-founded multiple organizations and
          has served in management and advisory roles. Zumah is passionate about
          optimizing business processes and maximizing profit while promoting
          gender equality and mentoring young women in entrepreneurship.
        </>
      ),
    },
    {
      photo: director5,
      name: "Olu Raheem",
      role: "Non- executive Director",
      bio: `Is the Trade Commissioner for Finland in West Africa, specializing in market entry, business development, marketing, sales, and investment. With extensive experience in promoting trade relations, he works towards enhancing economic cooperation between Finland and countries in West Africa, including Nigeria and Ghana. Olu Raheem is also a private investor, focusing on real estate, tech, design, and art in the West African region. His educational background includes a Master's degree in Business Administration and Management, with a specialization in marketing, from the University of Jyväskylä`,
    },
    {
      photo: director7,
      name: "Seye Ayinla",
      role: "Non- executive Director",
      bio: (
        <>
          is a purposeful attorney with expertise in intellectual property,
          taxation, dispute resolution, and corporate commercial practice.{" "}
          <br /> He has extensive experience in project finance, corporate
          finance, mergers and acquisitions, and corporate restructurings. Seye
          provides legal advisory services to local and international clients,
          focusing on practical solutions to complex legal issues. <br />
          He is also a board member of reputable companies and recently authored
          the pioneering Nigerian Merger Control: Principles and Practice.
          Seye's goal is to deliver optimal solutions to clients in various
          legal matters, including securities offerings, business combinations,
          and financing.
        </>
      ),
    },
  ];

  return (
    <section className={styles.teamBg}>
      <div className={`container ${styles.team}`}>
        <h2 className={styles.team__ttl}>Our Team</h2>
        <p className={styles.team__txt}>
          The collective years of our management team across finance, banking,
          and investment management certifies our business capabilities and deep
          knowledge of the financial industry and the regulatory environment.
        </p>
        <div className={styles.members}>
          {members.map((member, index) => (
            <Member {...member} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export { Team };

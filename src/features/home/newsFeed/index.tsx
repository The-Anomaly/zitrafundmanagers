import { post1, post2, post3 } from "assets";
import styles from "./styles.module.scss";

interface PostProps {
  title: string;
  descrip: string;
  image: string;
  link: string;
  date: string;
  duration: string;
}

const Post: React.FC<PostProps> = ({
  title,
  date,
  descrip,
  duration,
  link,
  image,
}) => {
  return (
    <div className={styles.post}>
      <img src={image} alt="" />
      <p className={styles.post__ttl}>{title}</p>
      <p className={styles.post__txt}>{descrip}</p>
      <span className={styles.post__tag}>{duration} read</span>
      <span className={styles.post__tag}>{date}</span>
      <a href={link} target="_blank" className={styles.post__read}>
        Read article
      </a>
    </div>
  );
};

const NewsFeed = () => {
  const posts: PostProps[] = [
    {
      title: "Nigeria must support MSMEs",
      image: post1,
      descrip: `Top financial expert, Tunde Obadero, is the Chief Executive Officer of Zitra Investments, a licensed lending institution that provides ...`,
      duration: "4 mins",
      date: "May 8, 2023",
      link: "https://tribuneonlineng.com/nigeria-must-support-msmes-if-it-wants-to-survive-economic-meltdown-obadero/",
    },
    {
      title: "How to make more with Zitra",
      image: post2,
      descrip: `Zitra Private Wealth is designed to help our clients build and manage
              tailored investment portfolios to achieve set ...`,
      duration: "2 mins",
      date: "9 months ago",
      link: "https://app.nairacompare.ng/providers/zitra-investment",
    },
    {
      title: "Zitra celebrates 2 years",
      image: post3,
      descrip: `Leading lending and investments company, Zitra Investments, is proud to celebrate two years of providing essential financial ...`,
      duration: "8 mins",
      date: "Oct 17, 2022",
      link: "https://techcabal.com/2022/10/17/zitra-investments-celebrates-two-years-of-offering-financial-solutions-and-aiding-financial-freedom/",
    },
  ];
  return (
    <>
      <section className={`container ${styles.newsfeed}`}>
        <h4 className={styles.newsfeed__ttl}>Newsfeed</h4>
        <div className={styles.posts}>
          {posts.map((item, index) => (
            <Post {...item} key={index} />
          ))}
        </div>
      </section>
    </>
  );
};

export { NewsFeed };

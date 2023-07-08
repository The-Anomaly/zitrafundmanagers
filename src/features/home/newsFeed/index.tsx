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
      <span className={styles.post__tag}>{date} ago</span>
      <a href={link} className={styles.post__read}>
        Read article
      </a>
    </div>
  );
};

const NewsFeed = () => {
  const posts: PostProps[] = [
    {
      title: "How to make more with Zitra",
      image: post1,
      descrip: `Zitra Private Wealth is designed to help our clients build and manage
            tailored investment portfolios to achieve set ...`,
      duration: "8 mins",
      date: "2 months",
      link: "",
    },
    {
      title: "100 Rules of finance",
      image: post2,
      descrip: `Zitra Private Wealth is designed to help our clients build and manage
              tailored investment portfolios to achieve set ...`,
      duration: "4 mins",
      date: "3 months",
      link: "",
    },
    {
      title: "Money Maketh Man",
      image: post3,
      descrip: `Zitra Private Wealth is designed to help our clients build and manage
              tailored investment portfolios to achieve set ...`,
      duration: "2 mins",
      date: "9 months",
      link: "",
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

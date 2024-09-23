import { abujaLaunch, post1, post2, post3 } from "assets";
import styles from "./styles.module.scss";

interface PostProps {
  title: string;
  descrip: string;
  image: string;
  link: string;
  date: string;
  duration: string;
  ctaText: string;
}

const Post: React.FC<PostProps> = ({
  title,
  date,
  descrip,
  duration,
  link,
  image,
  ctaText,
}) => {
  return (
    <div className={styles.post}>
      <img src={image} alt="" />
      <p className={styles.post__ttl}>{title}</p>
      <p className={styles.post__txt}>{descrip}</p>
      <span className={styles.post__tag}>{duration} read</span>
      <span className={styles.post__tag}>{date}</span>
      <a href={link} target="_blank" className={styles.post__read}>
        {ctaText}
      </a>
    </div>
  );
};

const NewsFeed = () => {
  const posts: PostProps[] = [
    {
      title: "Solutions for Smoother Business Growth",
      image: post1,
      descrip: `Zitra understands the challenges small businesses face. One of the biggest hurdles can be cash flow. You deliver your product...`,
      duration: "4 mins",
      date: "March 18, 2024",
      link: "https://businessday.ng/sponsored/article/stuck-waiting-on-payments-zitra-offers-solutions-for-smoother-business-growth/",
      ctaText: "Read article",
    },
    {
      title: "Investing for Nigerians",
      image: post2,
      descrip: `The hustle is real in Nigeria. We work hard, we dream big, and we deserve a future that reflects that effort. But let’s face it...`,
      duration: "2 mins",

      date: "March 18, 2024",
      link: "https://businessday.ng/sponsored/article/investing-for-nigerians-your-guide-to-a-brighter-tomorrow/",
      ctaText: "Read article",
    },
    {
      title: "Zitra Abuja Office Launch",
      image: abujaLaunch,
      descrip: `Zitra launched her office in Abuja and we were thrilled to see so many familiar faces enjoying the various activities...`,
      duration: "10 mins",
      date: "Oct 17, 2022",
      link: "https://www.youtube.com/watch?v=zoVNtITHo54",
      ctaText: "Watch",
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

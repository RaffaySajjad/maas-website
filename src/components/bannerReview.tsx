import DottedPattern from "@/decorators/DottedPattern";
import styles from "@/styles/BannerReview.module.css";

interface IBannerReviewProps {}

const Review = {
  body: "We were impressed with the efficiency and professionalism of the ClaimSettle team.",
  reviewer: "Grace Martin",
  image: "/images/banner-reviewer.png",
};

const BannerReview: React.FC<IBannerReviewProps> = (props) => {
  return (
    <section className={styles.container}>
      <div className={styles.pattern}>
        <DottedPattern fill="rgb(46 134 193)" />
      </div>
      <div className={styles.content}>
        <h2>&quot;{Review.body}&quot;</h2>
        <div className={styles.flex}>
          <img
            className={styles.author}
            src={Review.image}
            alt={Review.reviewer}
          />
          <div className={styles.reviewer}>{Review.reviewer}</div>
        </div>
      </div>
    </section>
  );
};

export default BannerReview;

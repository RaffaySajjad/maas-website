import Star from "@/decorators/Star";
import styles from "@/styles/Rating.module.css";

interface IRatingProps {
  stars: number;
  review: string;
  reviewer: string;
  image: string;
  topQualities: string[];
}

const Rating: React.FC<IRatingProps> = (props) => {
  const { stars, review, reviewer, image, topQualities } = props;
  return (
    <div className={styles.container}>
      <div className={styles.flex}>
        {[...Array(stars)].map((_, index) => (
          <div key={index}>
            <Star />
          </div>
        ))}
        {topQualities.map((quality, index) => (
          <div key={index} className={styles.quality}>
            {quality}
          </div>
        ))}
      </div>
      <div className={styles.review}>
        <img src={image} alt={reviewer} className={styles.image} />
        <div className={styles.column}>
          <div className={styles.textContent}>&quot;{review}&quot;</div>
          <div className={styles.reviewer}>{reviewer}</div>
        </div>
      </div>
    </div>
  );
};

export default Rating;

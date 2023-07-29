import DottedPattern from "@/decorators/DottedPattern";
import styles from "@/styles/Home.module.css";
import Image from "next/image";
import Rating from "./rating";

interface IHomeProps {}

const Home: React.FC<IHomeProps> = () => {
  return (
    <section id="home" className={styles.home}>
      <div className={styles.container}>
        <div />
        <div className={styles.content}>
          <h1>Resolving contract disputes for hydel energy projects</h1>
          <p>
            Our specialized consultancy firm helps resolve contract claims on
            mega hydel energy construction projects
          </p>
          <form className={styles.contact}>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email..."
              className={styles.emailInput}
            />
            <button type="submit" className={styles.submitButton}>
              Get settlement
            </button>
          </form>
          <Rating
            stars={5}
            image="/images/reviewer.png"
            review="ClaimSettle helped us to get a fair settlement for our contract dispute. Their expertise was invaluable."
            reviewer="Addison Lopez"
            topQualities={["Expertise", "Efficiency"]}
          />
        </div>
        <div className={styles.imageSection}>
          <div className={styles.dottedPattern}>
            <DottedPattern />
          </div>
          <div className={styles.inset} />
          <img
            src="/images/power-station.jpg"
            alt="Power Station"
            className={styles.powerStation}
          />
        </div>
      </div>
    </section>
  );
};

export default Home;

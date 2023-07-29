import { handleFormSubmit } from "@/actions/contact";
import BackgroundTriangles from "@/decorators/BackgroundTriangles";
import DottedPattern from "@/decorators/DottedPattern";
import styles from "@/styles/Footer.module.css";

interface IFooterProps {}

const Footer: React.FC<IFooterProps> = (props) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.inset} />
      <div className={styles.pattern}>
        <DottedPattern />
      </div>
      <div className={styles.flex}>
        <div className={styles.contactUs}>
          <div className={styles.content}>
            <h1>
              Get the settlement you deserve
              <span>.</span>
            </h1>
            <p>
              &quot;Thanks to ClaimSettle, we were able to resolve our contract
              dispute quickly and get back to work on our hydel energy
              project.&quot; - Lucy Green
            </p>
            <form className={styles.contact} onSubmit={handleFormSubmit}>
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
          </div>
          <div className={styles.bottom}>
            <BackgroundTriangles />
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        &copy; 2023 | MAAS Contract Care (Pvt.) Ltd
      </div>
    </footer>
  );
};

export default Footer;

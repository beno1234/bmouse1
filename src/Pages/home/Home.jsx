import styles from "../../style";
import {
  Hero,
  Billing,
  Business,
  CTA,
  CardDeal,
  Clients,
  Stats,
  Testimonials,
} from "../../components";
import GalaxyBackground from "react-animated-stars";
import Stars from "../../components/stars";

const Home = () => {
  return (
    <>
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats /> <Business /> <Billing /> <CardDeal /> <Testimonials />
          <Clients /> <CTA />
        </div>
      </div>
    </>
  );
};

export default Home;

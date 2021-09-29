import Layout1 from "../components/layouts/layout-1/layout1";
import HomepageLayout from '../components/layouts/homepageLayout/homepageLayout'
import classes from "./homepage.module.css"

const Home = () => {
  return (
    <HomepageLayout>
      <div className={classes.heroSection}>Layout 1</div>
      <div className={classes.section2}>
        <div>inner el1</div>
        <div>inner el2</div>
      </div>
      <div className={classes.section3}>Layout 3</div>
      <div className={classes.section4}>Layout 4</div>

    </HomepageLayout>
  );
};
export default Home;

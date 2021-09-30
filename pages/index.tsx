import Layout1 from "../components/layouts/layout-1/layout1";
import HomepageLayout from '../components/layouts/homepageLayout/homepageLayout'
import classes from "./homepage.module.css"
import Image from 'next/image'
import heroImage from '../assets/images/heroImage/heroImage.jpg'
import landingPageExample from "../assets/images/landingPage/landingPageExample.webp"
import Link from 'next/link'

const Home = () => {
  return (
    <HomepageLayout>
      <div className={classes.heroSection}>


        <div className={classes.heroContainer}>
          <div className={classes.heroContainerText}>
            <h2> Showcasing different layouts with alternative technologies</h2>
            <p> Landing pages are the most important part of a website. Getting it right is critical. </p>

          </div>

          {/* <p className={classes.heroText}> Check out my React layout and Landing page examples</p> */}
        </div>


      </div>

      <div className={classes.section2}>
        <div>
          <Image src={heroImage} alt="picutre of coffee cup" />
        </div>
        <div className={classes.section2_examples}>
          <h2>Bringing your business online</h2>
          <p> Let me create a landing page for you backed by powerfull tooks that help find customers, drive sales, and manage your day to day</p>
          <Link href="/landingPage1"> Explore more examples</Link>
          <div className={classes.section2_examples_images} >
            <div className={classes.section2_examples_image}>
              <Image src={landingPageExample} alt="landingPage" />
            </div>
            <div>   <Image src={landingPageExample} alt="landingPage" /></div>
          </div>

        </div>
      </div>

      <div className={classes.section3}>Layout 3</div>
      <div className={classes.section4}>Layout 4</div>

    </HomepageLayout>
  );
};
export default Home;

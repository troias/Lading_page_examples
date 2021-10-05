import Layout1 from "../components/layouts/layout-1/layout1";
import HomepageLayout from '../components/layouts/homepageLayout/homepageLayout'
import classes from "./homepage.module.css"
import Image from 'next/image'
import heroImage from '../assets/images/heroImage/heroImage.jpg'
import landingPageExample from "../assets/images/landingPage/landingPageExample.webp"
import Link from 'next/link'
import { FaBeer, FaEye } from 'react-icons/fa';




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
        <div className={classes.heroImageContainer} >
          <Image className={classes.heroImage} src={heroImage} alt="heromImage" />
          <Link href="/examples">
          <button className={classes.heroBtn}>See my Work <FaEye className={classes.btnIcon} /></button>
          </Link>
        </div>
        
        <div className={classes.section2_examples}>
          <h2>Bringing your business online</h2>
          <p> Let me create a landing page for you backed by powerfull tooks that help find customers, drive sales, and manage your day to day</p>
          <h3 className={classes.section2_call}>
          <Link  href="/examples" > Explore more examples</Link>
          </h3>
          <div className={classes.section2_examples_images} >
            <div className={classes.section2_examples_image}>
              <div>
                <Image src={landingPageExample} alt="landingPage" />
                <h3>BEAUTY </h3>
                <h4>by: @Gawdly </h4>
              </div>

            </div>
            <div className={classes.section2_examples_image}>
              <div>
                <Image src={landingPageExample} alt="landingPage" />
                <h3> FOOD & DRINK</h3>
                <h4>by: @Red Coffee Cart </h4>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className={classes.section3}>
      
        <h3>Take the best path forward</h3>
        <FaBeer />
        <h4>Start an online business</h4>
        <p>Create a business, whether you have a fresh idea or are looking for a new way to make money</p>
        <FaBeer />
        <h4>Move your business online</h4>
        <p>Turn your retail sotre into an online sotre and keep serving customers without missing a beat</p>
        <FaBeer />
        <h4>Use new tec stacks</h4>
        <p>Use modern JavaScript libaries and frameworks</p>
        
      </div>
    
      <div className={classes.section4}>
      </div>

    </HomepageLayout>

  );
};
export default Home;

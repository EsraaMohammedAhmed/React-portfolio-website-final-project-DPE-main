import Lottie from "lottie-react";
import "./hero.css";
import devAnimation from "../../animation/dev.json";
import { useRef } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const lottieRef = useRef();

  return (
    <section className="hero flex">
      <div className="left-section  ">
        <div className="parent-avatar flex">
          <motion.img
            initial={{ transform: "scale(0)" }}
            animate={{ transform: "scale(1.1)" }}
            transition={{ damping: 6, type: "spring", stiffness: 100 }}
            src="./me1-modified.png"
            className="avatar"
            alt="img"
          />
          <div className="icon-verified"></div>
        </div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="title my-defination"
        >
          Software designer, <br/> Front End Developer.
        </motion.h1>

        <p className="sub-title">
      
        I’m Esraa Mohamed , a front-end developer , 
        committed to continuous learning . A graduate of the DPE program , 
        I won a programming competition to develop the front-end of websites . 
        and I have experience working within a team .
        </p>

        <button className="hire-me">
          <a href="https://drive.google.com/drive/folders/12jGi25l0RnPF4aq5SYHdFwMSjxolhmw0?usp=drive_link" target="_blank" rel="noreferrer">
            GET MY CV

          </a>
        </button>
        <div className="all-icons flex">
          <div className="icon icon-twitter"></div>
          <div className="icon icon-instagram"></div>
          <div className="icon icon-github"></div>
          <div className="icon icon-linkedin"></div>
        </div>
      </div>

      <div className="right-section animation ">
        <Lottie
          lottieRef={lottieRef}
          className=""
          onLoadedImages={() => {
            // @ts-ignore
            // https://lottiereact.com/
            lottieRef.current.setSpeed(0.5);
          }}
          animationData={devAnimation}
        />
      </div>
    </section>
  );
};

export default Hero;

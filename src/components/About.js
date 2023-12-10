import React from "react";
// countup
// import CountUp from "react-countup";
// interaction observer hook
import { useInView } from "react-intersection-observer";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";
// cv
import DownloadButton from '../components/downlodcv';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className="section" id="about" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
          {/* image */}
          {/* for image motion from right */}
          <motion.div
            variants={fadeIn("right", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex-1 bg-about bg-contain bg-no-repeat h-[400px] "
          ></motion.div>

          {/* text */}
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex-1"
          >
            <h2 className="h2 text-accent">About Me</h2>
            <h3 className="h3 mb-4">
            Know more about me {" "}
            </h3>
            <p className="mb-4 text-justify">
            Hello! My name is kanchan Bhuju, born and raised in Suryabinayak, Bhaktapur.I recently graduated my Bachelors in Information Managment from St.Xaviers College.I'm an aspiring frontend designer passionate about creating visually appealing and user-friendly experience. I'm eager to contribute fresh ideas and a keen eye for design to create seamless and engaging digital solutions. 
            </p>
            {/* stats */}
            {/* <div className="flex gap-x-6 lg:gap-x-10 mb-12">
              <div>
                <div className="text-[40px] font-teritary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={13} duration={3} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Years of <br />
                  Experience
                </div>
              </div>

              <div>
                <div className="text-[40px] font-teritary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={13} duration={3} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Years of <br />
                  Experience
                </div>
              </div>

              <div>
                <div className="text-[40px] font-teritary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={13} duration={3} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Years of <br />
                  Experience
                </div>
              </div>
            </div> */}
            <div className="flex gap-x-8 items-center">
             <DownloadButton/>
              {/* <a href="#" className="text-gradient btn-link">
                My Portfolio
              </a> */}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

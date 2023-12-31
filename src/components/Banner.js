import React from "react";
//images
import Image from "../assets/mypic.png";
// icons
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
// type animation
import { TypeAnimation } from "react-type-animation";
//motion
import { motion } from "framer-motion";
//variants
import { fadeIn } from "../variants";
// scrool link
import { Link as Scrollink} from "react-scroll";


const Banner = () => {
  return (
    <section
      className="min-h-[85vh] lg:min-h-[78vh] flex items-center"
      id="home"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          {/* text */}

          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[55px] font-bold leading-[0.8] lg:text-[80px]"
            >
              Hi! I'm <span>Kanchan</span>
            </motion.h1>

            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[26px] lg:text-[50px] font-secondary font-semibold uppercase leading-[1]"
            >
              <span className="text-[#263D58] mr-4">Frontend</span>
              <TypeAnimation
                sequence={["Developer", 2000, "Designer", 2000]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>

            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-8 mx-w-lg mx-auto lg:mx-0 text-[#0E1F2F]"
            >
              Hey! I am a budding frontend developer and designer passionate
              about turning ideas into visually appeling and user-friendly
              web-experiences. Excited to learn, create, and grow in this
              dynamic world of coding and design. Let's build something awesome
              together!{" "}
            </motion.p>

            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0"
            >
              <Scrollink to="contact">
              <button className="btn btn-lg">Contact Me</button></Scrollink>
              {/* <a href="#" className="text-gradient btn-link">
                My Portfolio
              </a> */}
            </motion.div>
            {/* social medias */}
            <motion.div
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0"
            >
              <a
                href="https://instagram.com/kanch_ann/"
                target="_blank"
                rel="noopener"
              >
                <FaInstagram />
              </a>
              <a
                href="https://linkedin.com/in/kanchan-bhuju"
                target="_blank"
                rel="noopener"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/kanchan7th"
                target="_blank"
                rel="noopener"
              >
                <FaGithub />
              </a>
            </motion.div>
          </div>
          {/* image */}
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            whileInView={"show"}
            className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[400px]"
          >
            <img src={Image} alt="" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;

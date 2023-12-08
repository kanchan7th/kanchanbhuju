import React from "react";
// motion
import { motion } from "framer-motion";
// fadein
import { fadeIn } from "../variants";
// images
import img1 from "../assets/portfolio-img1.png";
import img2 from "../assets/portfolio-img2.png";
import img3 from "../assets/portfolio-img3.png";

const Work = () => {
  return (
    <section className="section" id="work">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10">
          <div className="flex-1">
            <motion.div
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="gap-y-12 mb-10 lg:mb-0"
            >
              {/* text */}
              <div>
                <h2 className="h2 heading-tight text-accent ">My Skills</h2>
                <p className="max-w-sm mb-16 text-justify">
                 These are some skills I acquired in my learning journey.I started with C programming and later i found my interest leaning more towards frontend development and designs but i strive to learn all aspects required in Software Development Process.ALawys eager to delve deeper into field of software development and expand my skill and knowledge in this area.
                </p>
                {/* <button className="btn btn-sm">View all projects</button> */}
              </div>
            </motion.div>
          </div>
          <motion.div 
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex flex-1 gap-x-10">
            <div className="flex-1">
            <div className="flex items-center justify-between w-full rounded overflow-hidden shadow-lg mb-10">
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Html/Css</div>
                <p className="text-gray-700 text-base">
                Html5,Css,Bootstrap,Materialize css,Tailwind Css
                </p>
              </div>
              
            </div>
            <div className="flex items-center justify-between w-full rounded overflow-hidden shadow-lg  mb-10">
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">UI/UX</div>
                <p className="text-gray-700 text-base">
                 Basic understanding of Figma Design and concepts
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between w-full rounded overflow-hidden shadow-lg  mb-10 ">
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">MySql</div>
                <p className="text-gray-700 text-base">
                  Basic knowledge of uses of Structurd Query Language
                </p>
              </div>
            </div>
            </div>
            <div className="flex-1">
            <div className="flex items-center justify-between w-full rounded overflow-hidden shadow-lg mb-10">
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Javascript</div>
                <p className="text-gray-700 text-base">
                Javascript Faundamentals,Vue.js,React.js
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between w-full rounded overflow-hidden shadow-lg mb-10">
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">QA</div>
                <p className="text-gray-700 text-base">
                manual test to evaluate functionality and identify defects
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between w-full rounded overflow-hidden shadow-lg mb-10">
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Others</div>
                <p className="text-gray-700 text-base">
                  OOP concepts,version controls,backend ,api etc
                </p>
              </div>
            </div>
            </div>
            
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;

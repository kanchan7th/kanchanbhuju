import React from "react";

// icons
import { BsArrowUpRight } from "react-icons/bs";
// motion
import { motion } from "framer-motion";
// fadein
import { fadeIn } from "../variants";
import { Link } from "react-scroll";

// services data
const services = [
  {
    name: "Frontend Designer",
    description:
      "I love to seamelessly merge creativity with code to craft visually stunning and user-centric digital interfaces",
    // link: "Learn More",
  },
  {
    name: "Content Writer",
    description:
      "It's always exciting for me to deliver impactful messages through effective storytelling and persuasive writing",
    // link: "Learn More",
  },
  {
    name: "Social Media/Digital Marekting ",
    description:
      "Although only just a side hustle, it has been fun making online pressence on every social media platform through strategic content and effective campaigns",
    // link: "Learn More",
  },
];

const Services = () => {
  return (
    <section className="section" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-20">
        
          {/* services */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex-1"
          >
            {/* services list */}
            <div>
              {services.map((service, index) => {
                // destructure service
                const { name, description, link } = service;
                return (
                  <div
                    className="border-b border--white/20 h-[146px] mb-[38px] flex"
                    key={index}
                  >
                    <div>
                      <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">
                        {name}
                      </h4>
                      <p className="font-secondary leading-tight">
                        {description}
                      </p>
                    </div>
                    <div className="flex flex-col flex-1 items-end">
                      <a
                        href="#"
                        className="btn w-9 h-9 mb-[42px] flex justify-center items-center"
                      >
                        <BsArrowUpRight />
                      </a>
                      <a href="#" className="text-gradient text-sm">
                        {link}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
            {/* text */}
            <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat  mb-12 lg:mb-0"
          >
            <h2 className="h2 text-black mb-15"> What I Do</h2>
            {/* <h3 className="h3 max-w-[455px] mb-16">
              Im frontend enthusisast. I love frontend designing
            </h3> */}
            {/* <button className="btn btn-lg">See My Work</button> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;

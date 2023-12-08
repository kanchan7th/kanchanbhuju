import React from "react";
const miscellaneous = () => {
    return (
         
          <section>
          <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
          {/* overlay */}
          <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300 "></div>
          {/* image */}
          <img
            className="group-hover:scale-125 transition-all duration-500 "
            src={img1}
            alt=""
          />
          {/* pretitle */}
          <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
            <span className="text-gradient">UI/UX Design</span>
          </div>
          {/* Project Title */}
          <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
            <span className="text-3xl text-white">Project Title</span>
          </div>
        </div>
        <motion.div 
              variants={fadeIn("left", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
          className="flex-1 flex flex-col gap-y-10">
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              {/* overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300 "></div>
              {/* image */}
              <img
                className="group-hover:scale-125 transition-all duration-500 "
                src={img2}
                alt=""
              />
              {/* pretitle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">UI/UX Design</span>
              </div>
              {/* Project Title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3xl text-white">Project Title</span>
              </div>
            </div>
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              {/* overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300 "></div>
              {/* image */}
              <img
                className="group-hover:scale-125 transition-all duration-500 "
                src={img3}
                alt=""
              />
              {/* pretitle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">UI/UX Design</span>
              </div>
              {/* Project Title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3xl text-white">Project Title</span>
              </div>
            </div>
          </motion.div>
        </section>
    );
};

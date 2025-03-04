import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { scheduleData } from "../Constants";

const Schedule = () => {
  const { scrollYProgress } = useScroll();

  const scale = useTransform(scrollYProgress, [0.3, 0.6, 0.75, 0.87], [0.5, 1, 1, 0.7]);

  return (
    <section id="Schedule">
      <h2 className=" mb-8 pt-5 text-center text-4xl tracking-tighter lg:text-5xl">
        Horarios
      </h2>

      <motion.div
        style={{ scale }}
        className="min-h-screen  bg-[#8B4B76] relative overflow-hidden p-4 md:p-16 "
      >
        {/* Content */}
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-light text-white mb-12">
            Agenda
          </h1>

          <div className="space-y-6">
            {scheduleData.map((day) => (
              <div
                key={day.day}
                className="flex flex-col md:flex-row items-start gap-1"
              >
                {/* Day of the week */}
                <div className="w-32 md:w-48">
                  <h2 className="text-xl md:text-2xl font-light text-white">
                    {day.day}
                  </h2>
                </div>

                {/* Schedule line and classes */}
                <div className="flex-1">
                  <div className="border-t border-white/30 mt-4 pt-4">
                    <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_1fr] gap-2 text-white">
                      {day.classes.map((classItem, index) => (
                        <div
                          key={index}
                          className="grid grid-cols-[1fr_1fr_1fr] md:contents text-sm md:text-base"
                        >
                          <div className="font-light">{classItem.time}</div>
                          <div className="font-light">{classItem.type}</div>
                          <div className="font-light">
                            {classItem.instructor}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Schedule;

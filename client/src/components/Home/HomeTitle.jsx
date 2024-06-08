import { motion } from "framer-motion";

export default function HomeTitle() {
 
  const MULTIDIRECTION_SLIDE_VARIANTS = {
    hidden: { opacity: 0, x: "-25vw" },
    visible: { opacity: 1, x: 0 },
    right: { opacity: 0, x: "25vw" },
  };
  return (
    <div className="overflow-hidden mx-auto">
      <motion.h1
        initial="hidden"
        animate="visible"
        variants={MULTIDIRECTION_SLIDE_VARIANTS}
        transition={{ duration: 1 }}
        className="text-[80px] text-center font-oswald leading-[normal] font-bold"
      >
        Unleash Your Style:
      </motion.h1>

      <motion.h1
        initial="right"
        animate="visible"
        variants={MULTIDIRECTION_SLIDE_VARIANTS}
        transition={{ duration: 1 }}
        className="text-[80px] text-center font-oswald leading-[normal] font-bold"
      >
        Exclusive Clothing Collection
      </motion.h1>
    </div>
  );
}

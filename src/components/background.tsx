import { motion, useScroll, useTransform } from "framer-motion";

export default function Background() {
  let { scrollYProgress } = useScroll();
  let y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  return (
    <motion.div className="absolute top-0 left-0 w-full h-full bg-gray-900 -z-20">
      <video
        muted
        playsInline
        autoPlay
        loop
        className="top-0 left-0 object-cover object-center w-full h-screen opacity-80 -z-10"
        src="https://www.w3schools.com/howto/rain.mp4"
      ></video>
      <div className="absolute top-0 left-0 w-full h-screen -inset-px bg-gradient-to-t from-gray-900 to-transparent" />
    </motion.div>
  );
}

import "./advantages.scss";
import { motion } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Advantages = () => {
  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on morden solutions
          <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Great</motion.b> team
            player
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>For Your</motion.b>{" "}
            Business.
          </h1>
          <a href="/#Portfolio">
            <button>PROJECTS</button>
          </a>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Productive</h2>
          <p>I never give up and can solve the most difficult problem</p>
          <a href="/#Contact">
            <button>Contact</button>
          </a>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Proactive</h2>
          <p>
            The most modern and effective solutions. I have many ideas for
            improvement.
          </p>
          <a href="/#Contact">
            <button>Contact</button>
          </a>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Responsible</h2>
          <p>You can rely on me. I complete tasks on time and keep promises</p>
          <a href="/#Contact">
            <button>Contact</button>
          </a>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Communicative</h2>
          <p>I&apos;m very friendly. I love people and know how to support.</p>
          <a href="/#Contact">
            <button>Contact</button>
          </a>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Advantages;

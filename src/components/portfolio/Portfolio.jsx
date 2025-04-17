import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 0,
    title: "3d site on Three.js",
    img: "/portfolio/space2.JPG",
    desc: "The site was created purely for educational purposes.",
    link: "https://space.soft-easy.ru/",
  },
  // {
  //   id: 1,
  //   title: "Logistic company",
  //   img: "/portfolio/mbe.png",
  //   desc: "Online delivery calculator. The creation of the calculator made it possible to launch effective advertising campaigns and double the company’s profits and revenue.",
  //   link: "https://mbe.express/",
  // },
  // {
  //   id: 2,
  //   title: "Electric motors",
  //   img: "/portfolio/el-dv.png",
  //   desc: "Online store of industrial equipment. More than 500,000 products. Convenient filters help managers, integration with warehouse, accounting and CRM",
  //   link: "https://el-dv.com/",
  // },
  // {
  //   id: 3,
  //   title: "Sweet gifts",
  //   img: "/portfolio/podarok-1.png",
  //   desc: "Convenient filters and product selection. Automation of production and packaging of gifts. Systematization of work with suppliers",
  //   link: "https://podarok-1.ru/",
  // },
  {
    id: 4,
    title: "Electronic Database",
    img: "/portfolio/bazaskachat.png",
    desc: "Fully automated store with payment options and instant download of goods. Without manager's participation.",
    link: "https://bazaskachat.ru/",
  },
  // {
  //   id: 5,
  //   title: "Shut-off valves and accessories",
  //   img: "/portfolio/roke.JPG",
  //   desc: "Online store with product filters, customer registration, shopping cart, favorites. Desktop version only.",
  //   link: "https://roke.pro/",
  // },
  // {
  //   id: 6,
  //   title: "Spare parts for meat industry",
  //   img: "/portfolio/smiraks2.JPG",
  //   desc: "Adaptive website with a convenient admin panel for editing content",
  //   link: "https://smiraks.com/",
  // },
  {
    id: 7,
    title: "Electric motors",
    img: "/portfolio/korsoni.JPG",
    desc: "Nice and clean site",
    link: "https://korsoni.com/",
  },
  {
    id: 8,
    title: "Car rental service in Kazan and Nizhnekamsk",
    img: "/portfolio/carrent2.JPG",
    desc: "Several forms for calculating the cost of rent taking into account many factors.",
    link: "https://carrent-kzn.ru/",
  },
  {
    id: 9,
    title: "Psychologists service",
    img: "/portfolio/closed-gestalt.JPG",
    desc: "Video communication, chat, catalog, payments, quizzes and much more.",
    link: "https://closed-gestalt.ru/",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);
  const opacity = useTransform(scrollYProgress, [0.8, 1], [1, 0.5]); // Adjust opacity

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y, opacity }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <a href={item.link} target="_blank" rel="noreferrer">
              <button>See Website</button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items
        .sort((a, b) => b.id - a.id)
        .map((item) => (
          <Single item={item} key={item.id} />
        ))}
    </div>
  );
};

export default Portfolio;

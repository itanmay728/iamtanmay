import suprams from "./companyLogos/supramsLogo.png";
import pwskill from "./companyLogos/PWSkillsLogo.png"
import anterisLogo from "./companyLogos/AnterisLogo.png"

const PortfolioExperiences = [
  {
    date: "Oct 2023 - Present",
    company: "Anteris Software Solutions Pvt Ltd",
    logo: anterisLogo,
    role: "Software Development Engineer",
    description: [
      "Designed & Developed a web app from scratch with back-end on Spring boot, Hibernate, MySQL & front-end on Thymeleaf, HTML, CSS & Bootstrap",
      "Added some features like role based login, Fetching data from mysql database. users can read, delete & update data according to their roles.",
      "Search employee by there email, Added a QR code When someone scan that QR Code a public form will opened user can also download that QR Code and print&past anywhere. Added Auto mail sender",
    ],
    companyUrl: "",
    technology: ["Java", "JavaScript", , "React.js", "Spring Boot" , "Hibernate","MySQL"]
  },
  {
    date: "Oct 2022 - May-2023",
    company: "Suprams Info Solutions",
    logo: suprams,
    role: "Full-Stack Developer Intern",
    description: [
      "Designed & Developed a web app from scratch with back-end on Spring boot, Hibernate, MySQL & front-end on Thymeleaf, HTML, CSS & Bootstrap",
      "Added some features like role based login, Fetching data from mysql database. users can read, delete & update data according to their roles.",
      "Search employee by there email, Added a QR code When someone scan that QR Code a public form will opened user can also download that QR Code and print&past anywhere. Added Auto mail sender",
    ],
    companyUrl: "https://www.suprams.net/about-us.php",
    technology: ["Java", "Spring Boot" , "Hibernate","MySQL", "Thymeleaf"]
  },
  {
    date: "Jul 2022 - Sep-2022",
    company: "PW Skills",
    logo: pwskill,
    role: "Java Developer Intern",
    description: [
      "Designed & Developed a web E-commerce application from scratch with back-end on Spring boot, Hibernate, MySQL & front-end on Thymeleaf, HTML, CSS & Bootstrap.",
      "Also created Solution Design documents of this project.",
      "Added some features like The reader will have to register application first, Book tracking for users, history tracking for the user.",
    ],
    companyUrl: "https://pwskills.com/",
    technology: ["Java", "Spring Boot" , "Hibernate","MySQL", "Thymeleaf", "Bootstrap"]
  },
];

export default PortfolioExperiences;

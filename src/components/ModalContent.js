import "./ModalContent.css";
import { IoLogoLinkedin, IoLogoGithub } from "react-icons/io5";
import logo from "../img/modal-img.svg";
function ModalContent() {
  return (
    <>
      <div className="modal-box">
        <p className="modal-text">
          My name is Yusuf, and I have developed this To-Do-List application by
          combining my knowledge in HTML, CSS, JavaScript and the React
          framework. I am an aspiring software developer, with great passion in
          front-end and back-end development. Below are links to my LinkedIn and
          GitHub profile.
        </p>
        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/yusuf-esse-473796161/
"
            className="logo-link"
          >
            <IoLogoLinkedin name="logo-linkedin" size="5em"></IoLogoLinkedin>
          </a>
          <a
            href="https://github.com/yusufesse/
"
            className="logo-link"
          >
            <IoLogoGithub name="logo-linkedin" size="5em"></IoLogoGithub>
          </a>
        </div>
      </div>
      <div className="img-box">
        <img
          src={logo}
          className="modal-img"
          alt="image of person noting to-do tasks on a piece of paper"
        />
      </div>
    </>
  );
}

export default ModalContent;

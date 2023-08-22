import Typical from "react-typical";
import "./Profile.css";

export default function Profile() {
 

  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.linkedin.com/in/tufan-sari/">
                <i className="fa fa-linkedin-square"></i>
              </a>
              <a href="https://github.com/tufansari">
                <i className="fa fa-github-square"></i>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="text1">
              {" "}
              <strong>
                Hello, I'm <span className="special-text">Tufan</span>
              </strong>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="text">
              {" "}
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Web Frontend Developer",
                    2000,
                    "React Developer",
                    2000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                <i>
                  Trying to build applications with front end operations and
                  mostly focus on React.js.
                </i>
              </span>
              <br />
              <br />
            </span>
          </div>
          <div className="profile-options">
          <a href="mailto:tufanrsari@gmail.com">
            <button className="btn btn-success">
              {""}
              Hire Me!{""}
            </button>
            </a>
            <a href="TufanSARI's.Resume.pdf" download="TufanSARI's.Resume.pdf">
              <button className="btn btn-warning">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}

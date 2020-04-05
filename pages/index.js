import Link from "next/link";
import { Button } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faTrophy,
  faCode,
  faBolt,
  faThLarge,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";

const Home = () => (
  <div className="container">
    <div className="navBar">
      <img
        alt="logo"
        src="https://cdn.assets-gdevs.com/gdLogo.png"
        className="logo"
      />
      <div className="buttons">
        <Link href="/">
          <div className="button" id="home">
            Home
          </div>
        </Link>
        <Link href="/about">
          <div className="button">About</div>
        </Link>
        <Link href="/download">
          <div id="download" className="button">
            Download
          </div>
        </Link>
      </div>
    </div>
    <div className="gradient">
      <div className="homePageTitleContainer">
        <img
          alt="logoBig"
          src="https://cdn.assets-gdevs.com/gdLogo.png"
          className="logoBig"
        />
        <div className="homePageTitle">
          <h1>GDLauncher</h1>
          <p>The future of minecraft launchers</p>
          <Link href="/download">
            <Button type="primary" className="downloadButton">
              Download it Now!
            </Button>
          </Link>
        </div>
      </div>
    </div>
    <img
      alt="isometric"
      src="https://cdn.assets-gdevs.com/isometricLauncher.png"
      className="isometric"
    />
    <div className="features">
      <h1>Why to use GDLauncher ?</h1>
      <p>
        GDLauncher is free and open source. Only a few developers work on it,
        and they all have a full time job and a life outside of here. They do
        this because they love helping the community by building an incredible
        product that can make Minecraft more enjoyable.
      </p>
      <img alt="launcher1" src="https://cdn.assets-gdevs.com/launcher-1.jpg" />
    </div>
    <div className="reasons">
      <div className="column">
        <div>
          <FontAwesomeIcon
            icon={faUsers}
            size="4x"
            style={{ color: "white" }}
          />
          <h2>we listen</h2>
        </div>
        <div>
          <FontAwesomeIcon icon={faBolt} size="4x" style={{ color: "white" }} />
          <h2>fast</h2>
        </div>
      </div>

      <div className="column">
        <div>
          <FontAwesomeIcon
            icon={faTrophy}
            size="4x"
            style={{ color: "white" }}
          />
          <h2>modern ui</h2>
        </div>
        <div>
          <FontAwesomeIcon icon={faCode} size="4x" style={{ color: "white" }} />
          <h2>open source</h2>
        </div>
      </div>

      <div className="column">
        <div>
          <FontAwesomeIcon
            icon={faThLarge}
            size="4x"
            style={{ color: "white" }}
          />
          <h2>customizable</h2>
        </div>
        <div>
          <FontAwesomeIcon
            icon={faThumbsUp}
            size="4x"
            style={{ color: "white" }}
          />
          <h2>easy to use</h2>
        </div>
      </div>
    </div>
    {/* <div className="screenshots"> */}
    <img
      alt="modpacksBrowser"
      src="modpacksBrowser.png"
      className="modpacksBrowser"
    />
    {/* </div> */}

    <style jsx>{`
      .container {
        height: 400vh;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background: #2f5266;
      }

      .navBar {
        position: absolute;
        top: 0;
        z-index: 2;
        width: 100%;
        height: 80px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
      }

      .gradient {
        position: absolute;
        width: 100%;
        height: 100vh;
        left: 0;
        top: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        background: linear-gradient(
          180deg,
          #212b36 50.77%,
          rgba(33, 43, 54, 0) 100%
        );
        z-index: 1;
      }

      .homePageTitleContainer {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
        max-width: 1000x;
        max-height: 450px;
        z-index: 2;
        position: absolute;
        top: 200px;
        animation: fadeInLeft ease 1s;
      }

      .homePageTitle {
        width: 450px;
        max-height: 320px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        -webkit-justify-content: flex-start;
        align-items: flex-start;
        color: white;
      }

      .homePageTitle > h1 {
        margin-bottom: 10px 0;
        width: 100%;
        color: white;
        font-style: normal;
        font-weight: 900;
        font-size: 72px;
        line-height: 84px;
      }

      .logoBig {
        width: 30%;
        z-index: 1;
      }

      .homePageTitle > p {
        color: white;
        font-style: normal;
        font-weight: normal;
        font-size: 40px;
        line-height: 56px;
      }

      .features {
        margin-top: 600px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        animation: fadeInLeft ease 1s;
      }

      .features > h1 {
        color: white;
        text-align: center;
        font-style: normal;
        font-weight: bold;
        font-size: 64px;
        line-height: 75px;
        text-align: center;
        animation: fadeInLeft ease 1s;
      }

      .features > p {
        color: white;
        text-align: center;
        margin: 60px 0 80px 0;
        font-style: normal;
        font-weight: normal;
        font-size: 30px;
        line-height: 75px;
        text-align: center;
        max-width: 90%;
        animation: fadeInLeft ease 1s;
      }

      .features > img {
        max-width: 90%;
        animation: fadeInLeft ease 1s;
      }

      .screenshots {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      @keyframes MoveUpDown {
        0% {
          transform: translateY(0);
        }
        50% {
          transform: translateY(-20px);
        }
        100% {
          transform: translateY(0px);
        }
      }

      .isometric {
        animation: MoveUpDown 2s linear infinite;
        position: absolute;
        max-width: 95%;
        height: auto;
        top: 180px;
        z-index: 0;
        animation: fadeInTop ease 1s;
      }

      #download {
        font-style: normal;
        font-weight: 900;
        font-size: 20px;
        line-height: 28px;
        color: #27ae60;
      }

      .logo {
        width: 54px;
        margin: 0 0 0 24px;
      }

      .modpacksBrowser {
        max-width: 90%;
      }

      .button {
        margin: 10px;
      }

      .buttons {
        width: 400px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        color: white;
      }

      .buttons > div {
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 28px;
      }

      .reasons {
        margin: 150px 0 150px 0px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 900px;
        height: 350px;
        animation: fadeInLeft ease 1s;
      }

      .column {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
      }

      .column > div {
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      h2 {
        margin-top: 20px;
        color: white;
      }

      
      @keyframes fadeInTop {
        0% {
          opacity: 0;
          transform: translateY(-20px);
        }
        100% {
          opacity: 1;
          transform: translateY(0);
        }
      }

      @keyframes fadeInLeft {
        0% {
          opacity: 0;
          transform: translateX(-20px);
        }
        100% {
          opacity: 1;
          transform: translateX(0);
        }
      }

      @media only screen and (min-height: 800px && max-height: 1000px) {
        .container {
          height: 500vh;
        }

        .features {
          margin-top: 900px;
        }

        .isometric {
          max-width: 85%;
        }
      }

      @media only screen and (max-height: 800px) {
        .container {
          height: 550vh;
        }

        .features {
          margin-top: 900px;
        }

        .isometric {
          max-width: 85%;
        }
      }

      @media only screen and (max-height: 700px) {
        .container {
          height: 600vh;
        }

        .features {
          margin-top: 900px;
        }

        .isometric {
          max-width: 75%;
        }

        .reasons {
          height: 1400px;
        }

        .reasons > .column {
          height: 300px;
        }
      }

      @media only screen and (max-height: 650px) {
        .container {
          height: 700vh;
        }

        .features {
          margin-top: 900px;
        }

        .isometric {
          max-width: 75%;
        }

        .reasons {
          height: 1400px;
        }

        .reasons > .column {
          height: 300px;
        }
      }

      @media only screen and (max-width: 1000px) {
        .downloadButton {
          display: none !important;
        }

        .homePageTitleContainer {
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          align-items: center;
          z-index: 2;
          position: absolute;
          top: 200px;
        }

        .homePageTitle {
          width: 589px;
          max-height: 320px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          -webkit-justify-content: center;
          align-items: center;
          color: white;
        }

        .logoBig {
          width: 50%;
          z-index: 1;
        }

        .reasons {
          flex-direction: column;
          justify-content: space-enevly;
          width: auto;
          height: 1200px;
        }

        .reasons > .column {
          margin-top: 0px;
          height: 340px;
        }

        .homePageTitle > h1,
        .homePageTitle > p {
          text-align: center;
        }

        .features {
          margin-top: 900px;
        }

        .features > h1 {
          font-weight: bold;
          font-size: 55px;
        }
      }

      @media only screen and (max-width: 420px) {
        .homePageTitle {
          max-width: 350px;
        }

        .homePageTitle > h1 {
          font-size: 60px;
        }

        .homePageTitle > p {
          max-width: 350px;
        }
      }
    `}</style>
  </div>
);

export default Home;

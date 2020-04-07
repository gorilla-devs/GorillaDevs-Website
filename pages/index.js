import Link from "next/link";
import theme from "../theme";
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
import { faDiscord } from "@fortawesome/free-brands-svg-icons";

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
          <div className="homePageRow">
            <div className="homePageTitleRow">
              <Link href="/download">
                <Button type="primary" className="downloadButton">
                  Download it Now!
                </Button>
              </Link>
              <Link href="/download">
                <Button
                  id="discord"
                  type="primary"
                  className="downloadButton"
                  style={{ background: "#7289DA" }}
                >
                  Join Discord&nbsp;
                  <FontAwesomeIcon icon={faDiscord} />
                </Button>
              </Link>
            </div>
            <a href="https://patreon.com/gorilladevs">
              <img
                alt="logo"
                src="https://cdn.assets-gdevs.com/patreonButton.png"
                className="patreonButton"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
    <img
      alt="isometric"
      src="https://cdn.assets-gdevs.com/isometricLauncher.png"
      className="isometric"
    />
    <div className="features">
      <h1>Why use GDLauncher ?</h1>
      <p>
        GDLauncher is a free and open source custom Minecraft launcher with
        simplicity and power in mind. It allows users to create custom instances
        in just one click, download curse modpacks and mods and more!
      </p>
      <img alt="launcher1" src="https://cdn.assets-gdevs.com/launcher-1.jpg" />
    </div>
    <div className="reasons">
      <div>
        <FontAwesomeIcon
          icon={faUsers}
          size="4x"
          style={{ color: theme.palette.text.primary }}
        />
        <h2>we listen</h2>
      </div>

      <div>
        <FontAwesomeIcon
          icon={faThLarge}
          size="4x"
          style={{ color: theme.palette.text.primary }}
        />
        <h2>customizable</h2>
      </div>
      <div>
        <FontAwesomeIcon
          icon={faThumbsUp}
          size="4x"
          style={{ color: theme.palette.text.primary }}
        />
        <h2>easy to use</h2>
      </div>
    </div>

    <div className="screenshots">
      <div className="screenshotsRow">
        <img
          alt="launcher2"
          src="https://cdn.assets-gdevs.com/launcher-2.PNG"
        />
        <div className="screenshotsRowText">
          <FontAwesomeIcon
            icon={faTrophy}
            size="4x"
            style={{ color: theme.palette.text.primary }}
          />
          <h1>Easily Manage And Create Instance</h1>

          <p>
            You can easily download vanilla or forge instances and add mods to
            it.
          </p>
        </div>
      </div>
      <div className="screenshotsRowMid">
        <div className="screenshotsRowText">
          <FontAwesomeIcon
            icon={faBolt}
            size="4x"
            style={{ color: theme.palette.text.primary }}
          />
          <h1>Directly Download CurseForge's Modpacks</h1>
          <p>
            From our launcher you can easily download curseforge's modpacks and
            start to play!
          </p>
        </div>
        <img
          alt="modpacksBrowser"
          src="https://cdn.assets-gdevs.com/modpacksBrowser.png"
        />
      </div>
      <div className="screenshotsRow">
        <img alt="launcher2" src="https://cdn.assets-gdevs.com/code.png" />
        <div className="screenshotsRowText">
          <FontAwesomeIcon
            icon={faCode}
            size="4x"
            style={{ color: theme.palette.text.primary }}
          />
          <h1>open source</h1>

          <p>
            You can easily download vanilla or forge instances and add mods to
            it.
          </p>
        </div>
      </div>
    </div>
    {/* <div className="faq">
      <h1>Most frequently asked questions</h1>
    </div> */}
    <div className="footer">
      <div>
        <img
          alt="logoFooter"
          src="https://cdn.assets-gdevs.com/gdLogo.png"
          className="logoFooter"
        />
      </div>
      <div className="usefulLinks">
        <h2>Useful Links</h2>
        <a href="https://github.com/gorilla-devs/GDLauncher/issues">
          Report an issue
        </a>
      </div>
      <div className="resource">
        <h2>Resource</h2>
        <a href="https://discordapp.com/invite/ZxRxPqn">Discord Community</a>
        <a href="https://www.patreon.com/gorilladevs">Become a patreon</a>
        <a href="https://github.com/gorilla-devs/GDLauncher/wiki">Wiki</a>
      </div>
      <div className="support">
        <h2>Support</h2>
        <a href="mailto:info@gdevs.io">Contact us</a>
        <a href="https://github.com/gorilla-devs/GDLauncher">Github</a>
      </div>
    </div>

    <style jsx>{`
      .container {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background: ${theme.palette.primary.dark};
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

      .patreonButton {
        z-index: 2;
        width: 200px;
        margin-top: 25px;
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
        max-height: 340px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        -webkit-justify-content: flex-start;
        align-items: flex-start;
        color: ${theme.palette.text.primary};
      }

      .homePageTitle > h1 {
        margin-bottom: 10px 0;
        width: 100%;
        color: ${theme.palette.text.primary};
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
        color: ${theme.palette.text.primary};
        font-style: normal;
        font-weight: normal;
        font-size: 40px;
        line-height: 56px;
      }
      .homePageRow {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
      }

      .homePageTitleRow {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 430px;
      }

      .features {
        margin-top: 120vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        animation: fadeInLeft ease 1s;
      }

      .features > h1 {
        color: ${theme.palette.text.primary};
        text-align: center;
        font-style: normal;
        font-weight: bold;
        font-size: 64px;
        line-height: 75px;
        text-align: center;
        animation: fadeInLeft ease 1s;
      }

      .features > p {
        color: ${theme.palette.text.primary};
        text-align: center;
        margin: 60px 0 80px 0;
        font-style: normal;
        font-weight: normal;
        font-size: 25px;
        line-height: 70px;
        text-align: center;
        max-width: 80%;
        animation: fadeInLeft ease 1s;
      }

      .features > img {
        max-width: 90%;
        animation: fadeInLeft ease 1s;
      }

      .screenshots {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        max-width: 90%;
      }

      .screenshotsRow {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
        margin: 70px 0 0 0;
        animation: fadeInLeft ease 1s;
      }

      .screenshotsRowMid {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
        margin: 70px 0 0 0;
        animation: fadeInLeft ease 1s;
      }

      .screenshotsRowText {
        margin: 50px 0 50px 0;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        color: ${theme.palette.text.primary};
        animation: fadeInLeft ease 1s;
      }

      .screenshotsRowText > h1 {
        margin-top: 40px;
        text-align: left;
        color: ${theme.palette.text.primary};
        text-align: center;
        font-style: normal;
        font-weight: bold;
        font-size: 20px;
        text-align: center;
        animation: fadeInLeft ease 1s;
      }

      .screenshotsRowText > p {
        text-align: left;
        color: ${theme.palette.text.primary};
        text-align: center;
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 25px;
        text-align: center;
        animation: fadeInLeft ease 1s;
        max-width: 400px;
      }

      .screenshotsRow > img {
        max-width: 40%;
      }

      .screenshotsRowMid > img {
        max-width: 40%;
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
        position: absolute;
        max-width: 95%;
        height: auto;
        top: 180px;
        z-index: 0;
        animation: fadeInTop ease 1s, MoveUpDown 2s linear infinite;
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
        color: ${theme.palette.text.primary};
      }

      .buttons > div {
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 28px;
      }

      .reasons {
        margin: 150px 0 100px 0px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 900px;
        height: 350px;
        animation: fadeInLeft ease 1s;
      }

      .reasons > div {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
      }

      h2 {
        margin-top: 20px;
        color: ${theme.palette.text.primary};
      }

      .faq > h1 {
        color: ${theme.palette.text.primary};
        margin-bottom: 100px;
        text-align: center;
        font-style: normal;
        font-weight: bold;
        font-size: 60px;
        line-height: 75px;
        text-align: center;
        animation: fadeInLeft ease 1s;
      }

      .footer {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        margin-top: 200px;
        z-index: 2;
        background-color: ${theme.palette.grey[700]};
        height: 300px;
        width: 100%;
      }

      .usefulLinks > a {
        color: ${theme.palette.text.primary};
      }

      .resource > a {
        color: ${theme.palette.text.primary};
      }

      .support > a {
        color: ${theme.palette.text.primary};
      }

      .logoFooter {
        margin-top: 20px;
        width: 54px;
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

      @keyframes fadeInRight {
        0% {
          opacity: 0;
          transform: translateX(0);
        }
        100% {
          opacity: 1;
          transform: translateX(-20px);
        }
      }
      @media only screen and (min-height: 1024px) {
        .container {
          height: 500vh;
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
          height: 700vh;
        }

        .features {
          margin-top: 900px;
        }

        .isometric {
          max-width: 75%;
        }

        .reasons {
          height: 530px;
          margin: 100px 0 10px 0;
        }

        .homePageTitle {
          max-height: 400px;
        }

        .homePageTitleRow {
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          height: 130px;
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

      @media only screen and (max-height: 1000) {
        .container {
          height: 600vh;
        }
      }

      @media only screen and (max-width: 1000px) {
        .container {
          height: 600vh;
        }

        .footer{
          height: 500px;
        }

        .homePageTitle {
          max-height: 400px;
        }

        .homePageTitleRow {
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          justify-content: space-between;
          height: 130px;
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
          max-height: 380px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          -webkit-justify-content: center;
          align-items: center;
          color: ${theme.palette.text.primary};
        }

        .logoBig {
          width: 50%;
          z-index: 1;
        }

        .reasons {
          flex-direction: column;
          justify-content: space-enevly;
          width: auto;
          height: 1500px;
          margin: 100px 0 100px 0;
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
        
        .features > p{
          line-height: 30px;
        }

        .features > h1 {
          font-weight: bold;
          font-size: 55px;
        }

        .footer {
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .footer > div {
          width: 130px;
          flex-direction: column;
          justify-content: center;
          align-items: center;
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

        .homePageTitleRow{
          max-width: 360px;
        }

        .isometric {
          display: none;
        }

        .logoBig {
          margin-bottom: 30px;
        }

        #download {
          display: none;
        }

        .buttons {
          justify-content: space-evenly;
        }

        .
      }

      @media only screen and (max-width: 800px) {
        .screenshotsRow {
          flex-direction: column;
          justify-content: space-evenly;
          margin: 50px 0 50px 0;
        }

        .screenshotsRowText {
          margin: 40px 0 50px 0;
        }

        .screenshotsRowMid {
          flex-direction: column-reverse;
        }
      }
    `}</style>
  </div>
);

export default Home;

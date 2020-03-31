import Link from "next/link";
import theme from "./theme";
import { Button } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Home = () => (
  <div className="container">
    <div className="navBar">
      <img alt="logo" src="gdLogo.png" className="logo" />
      {/* <Button>Home</Button> */}
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
        <img alt="logo" src="gdLogo.png" className="logoBig" />
        <div className="homePageTitle">
          <h1>GDLauncher</h1>
          <p>The future of minecraft launchers</p>
          <button>Download</button>
        </div>
      </div>
      <img alt="isometric" src="isometricLauncher.png" className="isometric" />
      <div className="features">
        <h1>Why to use GDLauncher ?</h1>
        <img alt="launcher1" src="launcher-1.png" />
      </div>
    </div>

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
      }

      .homePageTitle {
        width: 589px;
        max-height: 320px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        -webkit-justify-content: flex-start;
        align-items: flex-start;
        color: white;
      }

      .homePageTitle > h1 {
        margin: 0;
        width: 100%;
        color: white;
        font-family: Roboto;
        font-style: normal;
        font-weight: 900;
        font-size: 72px;
        line-height: 84px;
      }

      .homePageTitle > p {
        color: white;

        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 40px;
        line-height: 56px;
      }

      .features > h1 {
        margin-top: 1000px;
        color: white;
        text-align: center;
        margin-bottom: 80px;
        font-family: Roboto;
        font-style: normal;
        font-weight: bold;
        font-size: 64px;
        line-height: 75px;
        text-align: center;
      }

      .logoBig {
        width: 30%;
        z-index: 1;
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
        top: 80px;
        z-index: 0;
      }

      #download {
        font-family: Roboto;
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
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 28px;
      }
    `}</style>

    <style jsx global>{`
      html,
      body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      }

      * {
        box-sizing: border-box;
      }
    `}</style>
  </div>
);

export default Home;

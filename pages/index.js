import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinux,
  faWindows,
  faApple,
  faGithub,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";
import {
  faDownload,
  faCode,
  faUser,
  faThumbsUp,
  faTrophy,
} from "@fortawesome/free-solid-svg-icons";
import Navbar from "../components/navbar";
import BisectHosting from "../components/BisecHosting";
import theme from "../theme";

const downloadLauncherBasedOnOs = (os) => {
  console.log("os", os);
  if (os === "Win32" || os === "Win16") {
    console.log("OK");
    return (
      <Button
        type="primary"
        className="downloadButton"
        style={{ display: "flex" }}
        href="https://github.com/gorilla-devs/GDLauncher-Releases/releases/latest/download/GDLauncher-win32-setup.exe"
      >
        Download for Windows
      </Button>
    );
  } else if (
    os === "Darwin" ||
    os === "Mac68K" ||
    os === "MacPPC" ||
    os === "MacIntel"
  ) {
    return (
      <Button
        type="primary"
        className="downloadButton"
        href="https://github.com/gorilla-devs/GDLauncher-Releases/releases/latest/download/GDLauncher-darwin-setup.dmg"
        style={{ display: "flex" }}
      >
        Download for MacOs
      </Button>
    );
  } else if (os === "linux" || os === "Linux i686" || os === "Linux armv7l") {
    return (
      <Button
        type="primary"
        className="downloadButton"
        href="https://github.com/gorilla-devs/GDLauncher-Releases/releases/latest/download/GDLauncher-linux-setup.AppImage"
        style={{ display: "flex" }}
      >
        Download for Linux
      </Button>
    );
  }
};

const Download = () => {
  const [os, setOs] = useState(null);

  useEffect(() => {
    if (window.navigator.platform) setOs(window.navigator.platform);
  }, []);

  return (
    <div className="container">
      <Navbar />
      <div className="PartneredContainer">
        <BisectHosting size={10} />
      </div>
      <img
        src="https://cdn.assets-gdevs.com/isometricDesign.png"
        className="isometricDesign"
      />
      <div className="firstView">
        <div className="innerContainer">
          <div className="innerContainerText">
            <h1>GDLauncher</h1>
            <p>The future of minecraft launchers</p>
          </div>
          <div className="supportButtons">
            <Button
              type="primary"
              href="https://github.com/gorilla-devs/GDLauncher"
              className="downloadButton"
              style={{
                color: theme.palette.text.primary,
                cursor: "pointer",
                background: theme.palette.primary.main,
                borderColor: theme.palette.primary.main,
              }}
            >
              <FontAwesomeIcon icon={faDownload} size="2x" />
              &nbsp;Download Now!
            </Button>
            <Button
              type="primary"
              href="https://github.com/gorilla-devs/GDLauncher"
              className="githubButton"
            >
              <FontAwesomeIcon
                icon={faGithub}
                size="2x"
                style={{ color: theme.palette.text.primary, cursor: "pointer" }}
              />
              &nbsp;Github
            </Button>
            <Button
              type="primary"
              className="discordButton"
              href="https://discord.gg/ZxRxPqn"
            >
              <FontAwesomeIcon
                icon={faDiscord}
                size="2x"
                style={{
                  color: theme.palette.text.primary,
                  cursor: "pointer",
                  background: "#7289DA",
                }}
              />
              &nbsp;Discord
            </Button>
          </div>
          {/* <h1 className="title">Download the launcher and have fun!</h1> */}
          {/* <div className="downloadContainer">
          {os ? (
            downloadLauncherBasedOnOs(os)
          ) : (
            <Button type="primary" className="downloadButton">
            Download
            </Button>
            )}
            <div className="icons">
            <p>Available for:</p>
            <FontAwesomeIcon
            onClick={() => setOs("Win32")}
            icon={faWindows}
            size="2x"
            style={{ color: theme.palette.text.primary, cursor: "pointer" }}
            />
            <FontAwesomeIcon
            onClick={() => setOs("Darwin")}
            icon={faApple}
            size="2x"
            style={{ color: theme.palette.text.primary, cursor: "pointer" }}
            />
            <FontAwesomeIcon
            onClick={() => setOs("linux")}
            icon={faLinux}
            size="2x"
            style={{ color: theme.palette.text.primary, cursor: "pointer" }}
            />
            </div>
            <div className="portableContainer">
            <a href="https://github.com/gorilla-devs/GDLauncher-Releases/releases/latest/download/GDLauncher-win32-portable.zip">
            PortableWin
            </a>
            
            <a href="https://github.com/gorilla-devs/GDLauncher-Releases/releases/latest/download/GDLauncher-linux-portable.zip">
            PortableLinux
            </a>
            </div>
          </div> */}
        </div>
      </div>
      <div className="whyGd">
        <h1>Why use GDLauncher?</h1>
        <div className="whyGdPreview">
          <div className="column">
            <div className="rect">
              <FontAwesomeIcon icon={faUser} size="4x" />
              <h2>We Listen</h2>
            </div>
            <div className="rect">
              <FontAwesomeIcon icon={faCode} size="4x" />
              <h2>Open Source</h2>
            </div>
          </div>
          <img
            src="https://cdn.assets-gdevs.com/layout.png"
            className="layout"
          />
          <div className="column">
            <div className="rect">
              <FontAwesomeIcon icon={faThumbsUp} size="4x" />
              <h2>Easy to use</h2>
            </div>
            <div className="rect">
              <FontAwesomeIcon icon={faTrophy} size="4x" />
              <h2>User Friendly</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="Features">
        <div className="leftImgFeature">
          <img
            src="https://cdn.assets-gdevs.com/launcher-1.jpg"
            className="layout"
          />
          <div>
            <h1>Easily Manage And Create Instances</h1>
            <p>
              You can easily download vanilla or forge instances and add mods to
              it.
            </p>
          </div>
        </div>
        <div className="rightImgFeature">
          <div>
            <h1>Easily Manage And Create Instances</h1>
            <p>
              You can easily download vanilla or forge instances and add mods to
              it.
            </p>
            <img
              src="https://cdn.assets-gdevs.com/launcher-1.jpg"
              className="layout"
            />
          </div>
        </div>
        <div className="rightImgFeature"></div>
        <div className="leftImgFeature"></div>
      </div>

      <style jsx>{`
        .container {
          height: 700vh;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          background: ${theme.palette.primary.dark};
          overflow-x: hidden;
        }

        .PartneredContainer {
          display: absolute;
          left: 50%;
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
        }

        .isometricDesign {
          position: absolute;
          right: 0;
          top: 180px;
          z-index: 0;
        }

        .innerContainer {
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          z-index: 1;
        }

        .innerContainerText {
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          color: ${theme.palette.text.primary};
        }

        .innerContainerText > h1 {
          width: 400px;
          font-family: Roboto;
          font-style: normal;
          font-weight: 900;
          font-size: 72px;
          line-height: 84px;
          color: ${theme.palette.text.primary};
        }

        .innerContainerText > p {
          width: 510px;
          font-family: Roboto;
          font-style: normal;
          font-weight: 500;
          font-size: 48px;
          line-height: 56px;
          text-align: center;
        }

        .supportButtons {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          z-index: 2;
          margin-bottom: 30px;
        }

        .firstView {
          display: flex;
          flex-direction: column;
          justify-content: center;
          width: 100%;
          height: 100vh;
        }

        .whyGd {
          margin-top: 400px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 100vh;
        }

        .whyGd > h1 {
          width: 675px;
          font-family: Roboto;
          font-style: normal;
          font-weight: bold;
          font-size: 64px;
          line-height: 75px;
          text-align: center;
          margin-bottom: 50px;
          color: ${theme.palette.text.primary};
        }

        .whyGdPreview {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          width: 1300px;
        }

        .whyGdPreview > .column {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .rect {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 176px;
          height: 140px;
          border-radius: 5px;
          background: ${theme.palette.grey[700]};
          color: ${theme.palette.text.primary};
        }

        .Features {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .leftImgFeature {
          display: flex;
          justify-content: space-between;
          width: 70%;
        }

        .leftImgFeature > div > h1 {
          width: 400px;
          font-family: Roboto;
          font-style: normal;
          font-weight: bold !important;
          font-size: 30px;
          line-height: 42px;
        }

        .leftImgFeature > div > p {
          font-family: Roboto;
          font-style: normal;
          font-weight: 300;
          font-size: 30px;
          line-height: 42px;
        }

        .leftImgFeature > div {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 600px;
          padding: 20px;
          margin-left: 50px;
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

        .button {
          margin: 10px;
        }

        .portableButton {
          background: transparent;
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

        .downloadContainer {
          z-index: 1;
          display: flex;
          flex-direction: column;
          color: ${theme.palette.text.primary};
          animation: fadeInLeft ease 1s;
        }

        .downloadContainer > .icons {
          margin-top: 15px;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
        }

        .downloadContainer > p {
          font-weight: 700;
          width: 90px;
        }

        .portableContainer {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          margin: 0;
        }

        .portableContainer a {
          color: #5a7391;
        }

        @media only screen and (max-width: 414px) {
          .sponsor > img {
            max-width: 200px;
          }
        }
      `}</style>
    </div>
  );
};

export default Download;

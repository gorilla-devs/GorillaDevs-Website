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
      <div className="innerContainer">
        <img
          alt="logoBig"
          src="https://cdn.assets-gdevs.com/gdLogo.png"
          className="logoBig"
        />
        <div className="supportButtons">
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
        <div className="downloadContainer">
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
        </div>
        <div className="sponsor">
          <h2>Sponsored by:</h2>
          <img alt="sponsor" src="" />
        </div>
      </div>

      <style jsx>{`
        .container {
          height: 100vh;
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background: ${theme.palette.primary.dark};
        }

        .innerContainer {
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
        }

        .supportButtons {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          z-index: 2;
          margin-bottom: 30px;
        }

        .logoBig {
          width: 250px;
          z-index: 1;
          margin-bottom: 35px;
          animation: fadeInTop ease 2s, MoveUpDown 2s;
        }

        .title {
          color: ${theme.palette.text.primary};
          z-index: 1;
          font-weight: 900;
          animation: fadeInLeft ease 2s;
        }

        .sponsor {
          z-index: 2;
          margin-top: 60px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          animation: fadeInLeft ease 2s;
        }

        .sponsor > h2 {
          text-align: center;
          color: ${theme.palette.text.primary};
        }

        .sponsor > img {
          width: 400px;
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
          justify-content: center;
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
          color: #5a7391 !important;
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

import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinux,
  faWindows,
  faApple,
} from "@fortawesome/free-brands-svg-icons";
import theme from "./theme";

// GDLauncher-win32-portable.zip

const downloadLauncherBasedOnOs = (os) => {
  //  https://github.com/gorilla-devs/GDLauncher-Releases/releases/latest/download/GDLauncher-darwin-setup.dmg
  //  https://github.com/gorilla-devs/GDLauncher-Releases/releases/latest/download/GDLauncher-win32-setup.exe
  // https://github.com/gorilla-devs/GDLauncher-Releases/releases/latest/download/GDLauncher-linux-setup.AppImage
  console.log("os", os);
  if (os === "Win32" || os === "Win16") {
    console.log("OK");
    return (
      <div>
        <Button
          type="primary"
          className="downloadButton"
          style={{ display: "flex" }}
          href="https://github.com/gorilla-devs/GDLauncher-Releases/releases/latest/download/GDLauncher-win32-setup.exe"
        >
          Download
        </Button>
        <div style={{ textAlign: "center" }}>Windows, installer</div>
      </div>
    );
  } else if (
    os === "Darwin" ||
    os === "Mac68K" ||
    os === "MacPPC" ||
    os === "MacIntel"
  ) {
    return (
      <div>
        <Button
          type="primary"
          className="downloadButton"
          href="https://github.com/gorilla-devs/GDLauncher-Releases/releases/latest/download/GDLauncher-darwin-setup.dmg"
          style={{ display: "flex" }}
        >
          Download
        </Button>
        <div style={{ textAlign: "center" }}>MacOs, installer</div>
      </div>
    );
  } else if (os === "linux" || os === "Linux i686" || os === "Linux armv7l") {
    return (
      <div>
        <Button
          type="primary"
          className="downloadButton"
          href="https://github.com/gorilla-devs/GDLauncher-Releases/releases/latest/download/GDLauncher-linux-setup.AppImage"
          style={{ display: "flex" }}
        >
          Download
        </Button>
        <div style={{ textAlign: "center" }}>Linux, AppImage</div>
      </div>
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
      <img
        alt="launcher"
        src="https://cdn.assets-gdevs.com/launcher-1.jpg"
        className="launcher1"
      />
      <div className="gradient">
        <h1 className="title">Download the launcher and have fun!</h1>
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
              onClick={() => setOs("darwin")}
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

        .title {
          color: ${theme.palette.text.primary};
          position: absolute;
          top: 20%;
          font-weight: 900;
          animation: fadeInLeft ease 2s;
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
          justify-content: center;
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

        .launcher1 {
          animation: MoveUpDown 2s linear infinite, fadeInTop ease 2s;
          max-width: 95%;
          height: auto;
          z-index: 0;
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
          position: absolute;
          top: 30%;
          z-index: 2;
          display: flex;
          flex-direction: column;
          color: ${theme.palette.text.primary};
          animation: fadeInLeft ease 1s;
        }

        .downloadContainer > .icons {
          margin-top: 30px;
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

        @media only screen and (max-height: 650px) {
          .container {
            height: 130vh;
          }
          .launcher1 {
            max-width: 90%;
          }
        }
      `}</style>
    </div>
  );
};

export default Download;

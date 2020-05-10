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
      <div id="home" className="PartneredContainer">
        <h3>Partnered with:</h3>
        <BisectHosting showPointerCursor size={70} />
      </div>
      <div className="firstView">
        <img
          src="https://cdn.assets-gdevs.com/isometricDesign.png"
          className="isometricDesign"
        />
        <div className="innerContainer">
          <div className="innerContainerText">
            <h1>GDLauncher</h1>
            <p>The future of minecraft launchers</p>
          </div>
          <div className="supportButtons">
            <Button
              type="primary"
              href="#downloadContainer"
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
        <div className="ImgFeature">
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
        <div className="ImgFeature">
          <div>
            <h1>Directly Download CurseForge's Modpacks</h1>
            <p>
              From our launcher you can easily download curseforge's modpacks
              and start to play!
            </p>
          </div>
          <img
            src="https://cdn.assets-gdevs.com/modpacksBrowser.png"
            className="layout"
          />
        </div>
        <div className="ImgFeature">
          <img
            src="https://cdn.assets-gdevs.com/instanceCreation.PNG"
            className="layout"
          />
          <div>
            <h1>Support for Vanilla, Forge and Fabric</h1>
            <p>
              You can play Vanilla, forge and fabric directly from the launcher,
              without needing to download something esle
            </p>
          </div>
        </div>
        <div className="ImgFeature">
          <div>
            <h1>Build in mod manager</h1>
            <p>You can easily download single mods to add to your instance</p>
          </div>
          <img
            src="https://cdn.assets-gdevs.com/modsManager.PNG"
            className="layout"
          />
        </div>
        <div className="ImgFeature">
          <img
            src="https://cdn.assets-gdevs.com/javaSetup.png"
            className="layout"
          />
          <div>
            <h1>Auto java setup</h1>
            <p>You don't need anymore to download java, we'll do it for you!</p>
          </div>
        </div>
        <div className="rightImgFeature"></div>
        <div className="ImgFeature"></div>
      </div>
      <div className="patreonContainer">
        <div>
          <h1>Donate To Support GDLauncher</h1>
          <p>
            If you like GDLauncher, consider becoming a Patron to help it grow.
            Even a dollar can make a difference!
          </p>
          <img
            src="https://cdn.assets-gdevs.com/patreonButton.png"
            className="layout"
          />
        </div>
      </div>
      <div id="downloadContainer" className="downloadContainer">
        <div className="downloadInnerContainer">
          <img
            src="https://cdn.assets-gdevs.com/launcher-1.jpg"
            className="layout"
          />
          <div className="downloadButtons">
            <h1 className="title">Download GDLauncher Now!</h1>
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
        </div>
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
          width: 200px;
          display: flex;
          flex-direction: column;
          position: absolute;
          top: 40px;
          left: 45%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
        }

        .PartneredContainer > h3 {
          color: ${theme.palette.text.primary};
          font-family: Roboto;
          font-style: normal;
          font-weight: 900;
          font-size: 24px;
          line-height: 28px;
        }
        .firstView {
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: center;
          width: 100%;
          height: 100vh;
        }

        .isometricDesign {
          position: absolute;
          right: 0;
          top: 10%;
          z-index: 0;
          width: 90%;
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

        .whyGd {
          margin-top: 600px;
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

        .ImgFeature {
          display: flex;
          justify-content: space-between;
          width: 70%;
          margin: 50px 0;
        }

        .ImgFeature > div > h1 {
          width: 400px;
          font-family: Roboto;
          font-style: normal;
          font-weight: bold !important;
          font-size: 30px;
          line-height: 42px;
        }

        .ImgFeature > div > p {
          font-family: Roboto;
          font-style: normal;
          font-weight: 300;
          font-size: 30px;
          line-height: 42px;
        }

        .ImgFeature > div {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 600px;
          padding: 20px;
          margin-left: 50px;
        }

        .patreonContainer {
          width: 100%;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .downloadContainer {
          width: 100%;
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .downloadInnerContainer {
          width: 70%;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .downloadButtons {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          margin-left: 40px;
        }

        .downloadButtons > .icons {
          margin-top: 15px;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          width: 200px;
        }

        .downloadButtons > h1 {
          text-align: center;
          width: 459px;

          font-family: Roboto;
          font-style: normal;
          font-weight: bold;
          font-size: 36px;
          line-height: 42px;
        }

        .patreonContainer > div {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .patreonContainer > div > h1 {
          height: 42px;

          font-family: Roboto;
          font-style: normal;
          font-weight: 900;
          font-size: 36px;
          line-height: 42px;
        }

        .patreonContainer > div > p {
          height: 56px;

          font-family: Roboto;
          font-style: normal;
          font-weight: 500;
          font-size: 24px;
          line-height: 28px;
          text-align: center;
        }

        .portableContainer {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          margin: 0;
          width: 200px;
        }

        .portableContainer a {
          color: #5a7391;
        }

        @media only screen and (max-width: 414px) {
          .supportButtons {
            flex-direction: column;
          }

          .supportButtons > githubButton,
          discordButton {
            margin: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default Download;

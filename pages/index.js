import Head from "next/head";
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
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import Navbar from "../components/navbar";
import BisectHosting from "../components/BisecHosting";
import theme from "../theme";

const Download = () => {
  return (
    <div className="container">
      <Head>
        <title>GDLauncher - A Custom Minecraft Launcher</title>
        <meta
          name="description"
          content="GDLauncher is a simple, yet powerful Minecraft custom launcher with a strong focus on the user experience"
        />

        {/* <!-- Primary Meta Tags --> */}
        <meta name="title" content="GDLauncher - A Custom Minecraft Launcher" />
        <meta
          name="description"
          content="GDLauncher is a simple, yet powerful Minecraft custom launcher with a strong focus on the user experience"
        />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="http://gdevs.io/" />
        <meta
          property="og:title"
          content="GDLauncher - A Custom Minecraft Launcher"
        />
        <meta
          property="og:description"
          content="GDLauncher is a simple, yet powerful Minecraft custom launcher with a strong focus on the user experience"
        />
        <meta property="og:image" content="/previewGD.png" />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="/previewGD.png" />
        <meta property="twitter:url" content="http://gdevs.io/" />
        <meta
          property="twitter:title"
          content="GDLauncher - A Custom Minecraft Launcher"
        />
        <meta
          property="twitter:description"
          content="GDLauncher is a simple, yet powerful Minecraft custom launcher with a strong focus on the user experience"
        />
        <meta property="twitter:image" content="/previewGD.png" />

        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta charSet="utf-8" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff"></meta>
      </Head>
      <div id="home" className="PartneredContainer">
        <h3>Partnered with:&nbsp;&nbsp;</h3>
        <BisectHosting showPointerCursor size={200} />
        <p>&nbsp;&nbsp;&nbsp;&nbsp;-25% off with our promo code: GDL </p>
      </div>
      <Navbar />
      <div className="mainContainer">
        <div className="firstView">
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
                <FontAwesomeIcon icon={faDownload} size="3em" />
                &nbsp;Download Now!
              </Button>
              <Button
                type="primary"
                href="https://github.com/gorilla-devs/GDLauncher"
                className="githubButton"
                style={{
                  color: theme.palette.text.primary,
                  cursor: "pointer",
                  background: "#333",
                  borderColor: "#333",
                }}
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  size="2x"
                  style={{
                    color: theme.palette.text.primary,
                    cursor: "pointer",
                  }}
                />
                &nbsp;Github
              </Button>
              <Button
                type="primary"
                className="discordButton"
                href="https://discord.gg/ZxRxPqn"
                style={{
                  color: theme.palette.text.primary,
                  cursor: "pointer",
                  background: "#7289da",
                  borderColor: "#7289da",
                }}
              >
                <FontAwesomeIcon
                  icon={faDiscord}
                  size="2x"
                  style={{
                    color: theme.palette.text.primary,
                    cursor: "pointer",
                  }}
                />
                &nbsp;Discord
              </Button>
            </div>
          </div>
        </div>
        <div className="Features">
          <h1>Why use GDLauncher?</h1>
          <div className="ImgFeature">
            <img
              src="https://cdn.assets-gdevs.com/launcher-1.webp"
              alt="launcher"
            />
            <div>
              <h1>Easily Manage And Create Instances</h1>
              <p>
                You can easily download vanilla, forge or fabric instances and
                add mods to it.
              </p>
            </div>
          </div>
          <div className="ImgFeature ImgFeatureLeft">
            <img
              src="https://cdn.assets-gdevs.com/modpacksBrowser.webp"
              alt="modpacksBrowser"
            />
            <div>
              <h1>Directly Download CurseForge's Modpacks</h1>
              <p>
                From our launcher you can easily download curseforge's modpacks
                and start to play!
              </p>
            </div>
          </div>
          <div className="ImgFeature">
            <img
              src="https://cdn.assets-gdevs.com/instanceCreation.webp"
              alt="instanceCreation"
            />
            <div>
              <h1>Support for Vanilla, Forge and Fabric</h1>
              <p>
                You can play Vanilla, forge and fabric directly from the
                launcher, without needing to download something else.
              </p>
            </div>
          </div>
          <div className="ImgFeature ImgFeatureLeft">
            <img
              src="https://cdn.assets-gdevs.com/modsManager.webp"
              alt="modsManager"
            />
            <div>
              <h1>Build in mod manager</h1>
              <p>
                You can easily download single mods to add to your instance.
              </p>
            </div>
          </div>
          <div className="ImgFeature">
            <img
              src="https://cdn.assets-gdevs.com/javaSetup.webp"
              alt="javaSetup"
            />
            <div>
              <h1>Auto java setup</h1>
              <p>
                You don't need to download java anymore, since we'll do it for
                you!
              </p>
            </div>
          </div>
        </div>
        <div className="patreonContainer">
          <div>
            <h1>Donate To Support GDLauncher</h1>
            <p>
              If you like GDLauncher, consider becoming a Patron to help it
              grow. Even a dollar can make a difference!
            </p>
            <a href="https://www.patreon.com/gorilladevs">
              <img
                src="https://cdn.assets-gdevs.com/patreonButton.png"
                alt="patreon"
              />
            </a>
          </div>
        </div>
        <div id="downloadContainer" className="downloadContainer">
          <div className="downloadInnerContainer">
            <img
              src="https://cdn.assets-gdevs.com/launcher-1.webp"
              alt="launcher"
            />
            <div className="downloadButtons">
              <h1 className="title">Download GDLauncher Now!</h1>
              <div className="buttons">
                <Button
                  type="primary"
                  className="downloadButton"
                  style={{ display: "flex" }}
                  href="https://github.com/gorilla-devs/GDLauncher-Releases/releases/latest/download/GDLauncher-win-setup.exe"
                >
                  Download for Windows{" "}
                  <FontAwesomeIcon
                    icon={faWindows}
                    style={{
                      color: theme.palette.text.primary,
                      marginLeft: 10,
                    }}
                  />
                </Button>
                <Button
                  type="primary"
                  className="downloadButton"
                  href="https://github.com/gorilla-devs/GDLauncher-Releases/releases/latest/download/GDLauncher-mac-setup.dmg"
                  style={{ display: "flex" }}
                >
                  Download for MacOs
                  <FontAwesomeIcon
                    icon={faApple}
                    style={{
                      color: theme.palette.text.primary,
                      marginLeft: 10,
                    }}
                  />
                </Button>
                <Button
                  type="primary"
                  className="downloadButton"
                  href="https://github.com/gorilla-devs/GDLauncher-Releases/releases/latest/download/GDLauncher-linux-setup.AppImage"
                  style={{ display: "flex" }}
                >
                  Download for Linux
                  <FontAwesomeIcon
                    icon={faLinux}
                    style={{
                      color: theme.palette.text.primary,
                      marginLeft: 10,
                    }}
                  />
                </Button>
              </div>
              <div className="portableContainer">
                <a href="https://github.com/gorilla-devs/GDLauncher-Releases/releases/latest/download/GDLauncher-win-portable.zip">
                  PortableWin
                </a>

                <a href="https://github.com/gorilla-devs/GDLauncher-Releases/releases/latest/download/GDLauncher-linux-portable.snap">
                  PortableLinux
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .container {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          background: ${theme.palette.primary.dark};
          overflow-x: hidden;
        }

        .mainContainer {
          margin-top: 130px;
          width: 100%;
          overflow: hidden;
        }

        .PartneredContainer {
          width: 100%;
          display: flex;
          padding: 5px;
          position: fixed;
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 4;
          background: ${theme.palette.grey[800]};
        }

        .PartneredContainer > h3 {
          color: ${theme.palette.text.primary};
          font-family: Inter;
          font-style: normal;
          font-weight: 900;
          font-size: 16px;
          line-height: 28px;
        }

        .PartneredContainer > p {
          color: ${theme.palette.text.primary};
          font-family: Inter;
          font-style: normal;
          font-weight: 300;
          font-size: 12px;
          line-height: 28px;
          margin: 0;
          width: 220px;
        }

        .firstView {
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: center;
          width: 100%;
          height: 100vh;
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
          font-family: Inter;
          font-style: normal;
          font-weight: 900;
          font-size: 72px;
          line-height: 84px;
          color: ${theme.palette.text.primary};
        }

        .innerContainerText > p {
          font-family: Inter;
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

        .Features {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .Features h1 {
          width: 100%;
          text-align: center;
          font-size: 60px;
          font-weight: 700;
        }

        .ImgFeature {
          display: flex;
          justify-content: space-between;
          width: 70%;
          margin: 50px 0;
        }

        .ImgFeatureLeft {
          flex-direction: row-reverse;
        }

        .ImgFeature > div > h1 {
          width: 400px;
          font-family: Inter;
          width: 100%;
          text-align: start;
          font-family: Inter;
          font-style: normal;
          font-weight: bold !important;
          font-size: 30px;
          line-height: 42px;
        }

        .ImgFeature > div > p {
          font-family: Inter;
          font-style: normal;
          font-weight: 300;
          font-size: 30px;
          line-height: 42px;
        }

        .ImgFeature > div {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: start;
          width: 600px;
          padding: 20px;
          margin-left: 50px;
        }

        .ImgFeature > img {
          width: 600px;
        }

        .patreonContainer {
          width: 100%;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .patreonContainer p {
          max-width: 600px;
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
          margin-left: 70px;
        }

        .downloadButtons > .buttons {
          margin-top: 15px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 180px;
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

          font-family: Inter;
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

        .patreonContainer img {
          max-width: 300px;
        }

        .patreonContainer > div > h1 {
          text-align: center;
          font-family: Inter;
          font-style: normal;
          font-weight: 900;
          font-size: 36px;
          line-height: 42px;
        }

        .patreonContainer > div > p {
          font-family: Inter;
          font-style: normal;
          font-weight: 300;
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

        @media screen and (max-width: 1200px) {
          .PartneredContainer p {
            width: 220px;
          }

          .ImgFeature {
            flex-direction: column;
            align-items: center;
          }

          .ImgFeature > div {
            margin: 0;
            justify-content: center;
            align-items: center;
          }

          .ImgFeature > div > h1 {
            text-align: center;
            font-size: 28px;
          }

          .ImgFeature > div > p {
            max-width: 350px;
            font-size: 22px;
            text-align: center;
          }

          .ImgFeature > img {
            max-width: 300px;
          }

          .downloadInnerContainer > img {
            display: none;
          }

          .downloadButtons {
            margin: 0;
          }

          .downloadButtons h1 {
            font-size: 25px;
          }
        }

        @media screen and (max-width: 600px) {
          .PartneredContainer > h3 {
            display: none;
          }

          .PartneredContainer > p {
            width: 220px;
          }

          .supportButtons {
            flex-direction: column;
          }

          .ImgFeature > div > p {
            font-size: 22px;
          }

          .firstView {
            margin-bottom: 200px;
          }

          .innerContainerText h1 {
            font-size: 60px;
          }

          .innerContainerText p {
            font-size: 40px;
          }

          .ImgFeature {
            flex-direction: column;
            align-items: center;
          }

          .ImgFeature > div {
            margin: 0;
            justify-content: center;
            align-items: center;
          }

          .ImgFeature > div > h1 {
            text-align: center;
            font-size: 28px;
          }

          .ImgFeature > div > p {
            max-width: 350px;
            font-size: 22px;
            text-align: center;
          }

          .ImgFeature > img {
            max-width: 300px;
          }

          .PartneredContainer > h3 {
            color: ${theme.palette.text.primary};
            font-family: Inter;
            font-style: normal;
            font-weight: 900;
            font-size: 16px;
            line-height: 28px;
            display: none;
          }

          .PartneredContainer > p {
            width: 220px;
          }

          .downloadInnerContainer > img {
            display: none;
          }

          .downloadButtons {
            margin: 0;
          }

          .downloadButtons h1 {
            font-size: 25px;
          }

          .patreonContainer p {
            width: 350px;
            font-size: 22px;
          }

          .patreonContainer > div > a > img {
            width: 300px;
          }

          ::-webkit-scrollbar {
            width: 8px;
            height: 8px;
            border-radius: 1px;
          }

          ::-webkit-scrollbar-thumb {
            background-color: #909ea4;
            border-radius: 3px;
          }

          ::-webkit-scrollbar-track {
            background-color: #050818;
            border-radius: 1px;
          }

          @media screen and (max-width: 414px) {
            .ImgFeature > div {
              margin: 0;
              justify-content: center;
              align-items: center;
            }

            .Features h1 {
              font-size: 55px;
            }

            .ImgFeature > div > h1 {
              text-align: center;
              font-size: 16px;
              width: 300px;
            }

            .ImgFeature > div > p {
              max-width: 350px;
              font-size: 20px;
              width: 300px;
              text-align: center;
            }

            .ImgFeature > img {
              max-width: 250px;
            }

            .PartneredContainer > p {
              width: 150px;
              text-align: center;
            }

            .innerContainerText > h1 {
              font-size: 40px;
            }

            .innerContainerText > p {
              font-size: 40px;
            }

            .patreonContainer > div > h1 {
              font-size: 30px;
            }

            .patreonContainer > div > p {
              width: 300px;
            }

            .patreonContainer > div > a > img {
              width: 200px;
            }

            .downloadButtons > h1 {
              font-size: 20px;
            }
          }
        }
      `}</style>
    </div>
  );
};

export default Download;

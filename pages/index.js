import Head from "next/head";
import Link from "next/link";
import theme from "./theme";
import { Button } from "antd";

const Home = () => (
  <div className="container">
    {/* <main>
  <div className="Container">
</main> */}

    <div className="gradient">
      <div className="navBar">
        <img alt="logo" src="gdLogo.png" className="logo" />
        {/* <Button>Home</Button> */}
        <div className="buttons">
          <div className="button" id="home">
            Home
          </div>
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
      <div className="homePageTitleContainer">
        <img alt="logo" src="gdLogo.png" className="logoBig" />
        <div className="homePageTitle">
          <h1>GDLauncher</h1>
          <p>The future of minecraft launchers</p>
          <button>Download</button>
        </div>
      </div>
      <img alt="isometric" src="isometricLauncher.png" className="isometric" />
    </div>

    <style jsx>{`
      .container {
        height: 400vh;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        background: #2f5266;
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
        width: 1098px;
        height: 450px;
        z-index: 2;
        position: absolute;
        top: 200px;
      }

      .homePageTitle {
        width: 589px;
        height: 360px;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: flex-start;
        color: white;
      }

      .homePageTitle > h1 {
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
        font-size: 48px;
        line-height: 56px;
      }

      .logoBig {
        width: 430px;

        z-index: 1;
      }

      .isometric {
        position: absolute;
        max-width: 100%;
        height: auto;
        top: 80px;
        z-index: 0;
      }

      .navBar {
        width: 100%;
        height: 80px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
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

      main {
        padding: 5rem 0;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
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

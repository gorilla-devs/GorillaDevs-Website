import Link from "next/link";
import theme from "../theme";
import NavBar from "../components/navbar";

const About = () => (
  <div className="container">
    <div className="navBar">
      <NavBar />
      <div className="gradient"></div>
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

      .gradient {
        z-index: -1;
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

      .features > h1 {
        margin-top: 1000px;
        color: ${theme.palette.text.primary};
        text-align: center;
        margin-bottom: 80px;
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
        color: ${theme.palette.text.primary};
      }

      .buttons > div {
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 28px;
      }
    `}</style>
  </div>
);

export default About;

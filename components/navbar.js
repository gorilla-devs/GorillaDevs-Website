import Link from "next/link";
import theme from "../theme";

const NavBar = () => (
  <div>
    <div className="navBar">
      <img
        alt="logo"
        src="https://cdn.assets-gdevs.com/gdLogo.webp"
        className="logo"
      />
      <div className="buttons">
        <Link href="/">
          <div className="button" id="homeButton">
            Home
          </div>
        </Link>
        <a href="#downloadContainer">
          <div id="download" className="button">
            Download
          </div>
        </a>
      </div>
    </div>

    <style jsx>{`
      .navBar {
        position: fixed;
        top: 50px;
        left: 0;
        z-index: 2;
        width: 100%;
        height: 80px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        background: ${theme.palette.primary.dark}
      }

      
      #download {
        font-style: normal;
        font-weight: 900;
        font-size: 20px;
        line-height: 28px;
        color: #27ae60;
        transition: all .2 ease-in-out;
      }
      
      #download:hover {
        filter: brightness(110%);
      }

      .logo {
        width: 54px;
        margin: 0 0 0 24px;
      }

      .button {
        margin: 10px;
        transition: all 0.2s ease-in-out;
      }

      .button:hover {
        filter: brightness(110%);
      }

      a{
        color: ${theme.palette.text.primary}
      }

      .buttons {
        width: 300px;
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
    }
    `}</style>
  </div>
);

export default NavBar;

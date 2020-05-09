import Link from "next/link";
import theme from "../theme";

const NavBar = () => (
  <div>
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
        <Link href="/guide">
          <div className="button">Guide</div>
        </Link>
        <Link href="/download">
          <div id="download" className="button">
            Download
          </div>
        </Link>
      </div>
    </div>

    <style jsx>{`
      .navBar {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 2;
        width: 100%;
        height: 80px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
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
    }
    `}</style>
  </div>
);

export default NavBar;

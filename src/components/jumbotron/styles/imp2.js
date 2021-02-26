import React, { useState } from "react";
import styles from "../Services2/Services2.module.scss";
import useHover from "../../../utilities/useHover";
import Layout from "../../layouts/Layout/Layout";
import { Link } from "../../elements";
import THEME from "../../../state/theme";
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';


export default ({ data = [], items = "6" }) => {
  const [amount, setAmount] = useState(items);

  const servicesList = data
    .map((item, index) => (

      <article key={index}>

        <div>
          <div className={styles.card}>
            <h1>{item.heading}</h1>
            <div className={styles.wrapper}>
              <figure>
                <img src={item.icon} alt="icon" />
              </figure>
              <h2>{item.title}</h2>
              <ul>
                <li> <a href="#"> <TwitterIcon /> </a></li>
                <li> <a href="#"> <LinkedInIcon /> </a></li>
                <li> <a href="#"> <GitHubIcon />  </a></li>
              </ul>
            </div>
          </div>
        </div>

      </article>


    ))
    .slice(0, amount);

  const moreButton =
    amount < data.length ? (

      <div className={["layout-footer", styles.footer].join(" ")}>
        <Button click={() => setAmount(data.length)}>View all team</Button>
      </div>

    ) : null;

  return (

    <div>
      <Layout
        col="2"
        padding
        style={{
          background: "rgb(240,240,240)",
        }} >
        <div className="layout-header">
          <span className={styles.subtitle} style={{ color: THEME.color }}>
            WE ALL CAN WORK; BUT TOGETHER WE WIN.
        </span>
          <h2>MEET THE CORE TEAM</h2>
        </div>
        {servicesList}
        {moreButton}
      </Layout>
    </div>

  );
};

const Button = ({ click, children }) => {
  const [hoverRef, isHovered] = useHover();

  return (
    <button
      ref={hoverRef}
      onClick={click}
      style={{ color: isHovered ? THEME.color : "#000" }}
    >
      {children}
      <i className="las la-long-arrow-alt-right" />
    </button>
  );
};

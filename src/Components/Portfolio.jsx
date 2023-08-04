/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Data Modelling using Power BI 🎉",
    description:
      "An article on data modelling and why it is important",
    url: "https://medium.com/@faith_oseghale/data-modelling-using-power-bi-c4a0cbd38ed6",
  },
  {
    title: "A data analysis project",
    description:
      "This project shows the various attributes of careers in the data space ranging from Data Analyst, Data Engineers, Data Architect, and many more.",
    url: "https://github.com/Omonigho24/Data-Professionals-Survey-Analysis",
  },
  {
    title: "My Resume Site",
    description:
      "Includes my experience and design abilities.",
    url: "https://drive.google.com/file/d/1N-_y8DmwhB-0l_3LiIl0ZOuncFIzCeIb/view?usp=sharing",
  },
  {
    title: "How to publish Power BI dashboard online",
    description:
      "Publishing a report to Power BI service can be a hassle, so I wrote this article to explain it.",
    url: "https://medium.com/@faith_oseghale/how-to-publish-your-power-bi-dashboard-online-d901b4ffbca1",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

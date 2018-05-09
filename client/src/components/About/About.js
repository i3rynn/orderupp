import React from "react";
import "./About.css";

const About = () => (
  <div>
  <h1>Meet the Staff</h1>
  <div className="card">
    <div className="img-container">
      <img alt="David" src="Headshots/DavidL.PNG" />
    </div>
    <div className="content">
      <ul>
        <li>
          <h2>Head Chef</h2>
          <strong>David Lester</strong>
        </li>
        <li>
          Executive chef. At the young age of 26, David has already established a strong name for himself
          in the restaurant industry. He is a professional cook who is proficient in all aspects of food preparation.
        </li>
      </ul>
    </div>
  </div>
  <div className="card">
    <div className="img-container">
      <img alt="Amelia" src= "Headshots/image.png" />
    </div>
    <div className="content">
      <ul>
        <li>
          <h2>Sous Chef</h2>
          <strong>Amelia Outland</strong>
        </li>
        <li>
          A Philadelphia native, Amelia has fond memories of learning about delicious home cooking with her family in Philadelphia, Georgia and Turks and Caicos. She began working in a string of New York City restaurants: The Tasty Grub where she was promoted to sous chef after just four months on the job. From rolling dumplings with her grandmother for her famous chicken and dumplings, stirring gumbo with her aunt while preparing for the crawfish boil, grilling clams and shucking corn at her grandparents’ house. Without realizing it, she was falling in love with the food and the memories it has the power to create. In 2018, Amelia was named one of the Top 10 Best New Chefs in America by Food & Wine magazine
        </li>
      </ul>
    </div>
  </div>
  <div className="card">
    <div className="img-container">
      <img alt="chris"  src= "Headshots/image2.jpeg" />
    </div>
    <div className="content">
      <ul>
        <li>
          <h2>Pastry Chef</h2>
          <strong>Chris Yang</strong>
        </li>
        <li>
          Chris is the greatest pastry chef on planet earth, having won numerous, countless awards for his culinary expertise and creativity when it comes to desserts.
          Apart from working here, he is also currently an Iron Chef on Iron Chef America specializing in French Dessert.
        </li>
      </ul>
    </div>
  </div>
  <div className="card">
    <div className="img-container">
      <img alt="Jermaine" src= "Headshots/jermaine.jpg" />
    </div>
    <div className="content">
      <ul>
        <li>
          <h2>Bartender</h2>
          <strong>Jermaine</strong>
        </li>
        <li>
          Jermaine Foster, 37. Master Dishwasher a.k.a. The King of Cutlery a.k.a Silver Palms. This guy has the quickest hands in the Southeast, shuffling plates and pots like playing cards at lightning fast speed as though the were playing cards
        </li>
      </ul>
    </div>
  </div>
  <div className="card">
    <div className="img-container">
      <img alt="Katherine"  src= "Headshots/image1.jpeg" />
    </div>
    <div className="content">
      <ul>
        <li>
          <h2>Custodian</h2>
          <strong>Katherine Rosenkranz</strong>
        </li>
        <li>
          Short Bio Goes Here
        </li>
      </ul>
    </div>
  </div>
  <div className="card">
    <div className="img-container">
      <img alt="Thomas" src= "Headshots/Screenshot_20180508-193327.png" />
    </div>
    <div className="content">
      <ul>
        <li>
          <h2>Host</h2>
          <strong>Thomas Gentle</strong>
        </li>
        <li>
          Thomas Gentle is a recent graduate of Georgia Tech with a degree in Business Administration IT Management. Thomas is pursuing an entrepreneur career path and is currently leading his second startup. He has a desire to learn how to code so that he can better manage and lead a team of developers.
        </li>
      </ul>
    </div>
  </div>
  <div className="card">
    <div className="img-container">
    </div>
    <div className="content">
      <ul>
        <li>
          <h2>Manager</h2>
          <strong>Marsalis Sanders</strong>
        </li>
        <li>
          Short Bio Goes Here
        </li>
      </ul>
    </div>
  </div>
</div>

);

export default About;

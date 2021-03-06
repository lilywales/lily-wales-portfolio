import React, { Component } from "react";
import "./AboutContent.css";
import aboutImage from "./aboutImg.png";

class AboutContent extends Component {
  render() {
    return (
      <div className="wrapper">
        <img className="aboutImg" src={aboutImage} alt="Bikini Bottom" />
        <div className="aboutWrapper">
          <p>
            Lily Wales is a UK
            <br /> based artist working
            <br /> with handmade
            <br />
            photomontage and
            <br /> sculpture. Currently her
            <br /> practice investigates
            <br /> the appropriation of
            <br /> nature within nuclear
            <br /> weaponry, exploring the
            <br />
            mushroom cloud as an
            <br /> icon and commenting
            <br /> on the bizarre use of
            <br />
            language in historical
            <br /> civil defence. With
            <br /> specific attention
            <br />
            towards the naming of
            <br /> nuclear weaponry such
            <br /> as the M65 cannon
            <br /> more commonly known
            <br /> as Atomic Annie, as
            <br /> well as the atomic
            <br /> bombs Mr Plumbob,
            <br /> Smokey and Romeo to
            <br /> name a few, Lily
            <br /> examines the ability
            <br />
            language has to
            <br /> anaesthetise public
            <br /> perception.
          </p>
        </div>

        <div className="pastWrapperLarge">
          <p>
            RESIDENCIES & RESEARCH TRIPS <br />
            <br />
            – New York from a-n UPCOMING JUNE 2019 <br />
            – The New Art Gallery Walsall 2018 <br />
            – Hiroshima & Nagasaki from DYCP Arts Council England 2018
            <br /> – Nevada Test Site from Engine & Grain bursary 2018
            <br /> <br />
            SHOWS <br />
            <br />
            – Illustrated Brum X PMT 2019
            <br />
            – Blue Streak in Mezz at The New Art Gallery Walsall 2019
            <br />
            – Phorm at Salford Circus 2018
            <br />
            – New Art West Midlands at Airspace Gallery 2018
            <br />
            – Yorks ikon 2017
            <br />
            – Reclaim Photography Festival 2017
            <br />
            – Fertile Ground at Argentea Gallery 2017
            <br />
            – Future Late at Tate Modern 2016
            <br />
            – 112 Space 2015
            <br />
            – Chaos Computer Club at Birmingham Open Media 2015
            <br />
            – Photographers Wall at Library of Birmingham 2014
            <br />
            – Narrative Structures at Stryx gallery 2013
            <br />
            – Much Beta at mac birmingham 2013
            <br />
          </p>
        </div>
        <div className="pastWrapperSmall">
          <p>
            RESIDENCIES & RESEARCH TRIPS <br />
            <br />
            – New York from a-n UPCOMING JUNE 2019 <br />
            – The New Art Gallery Walsall 2018 <br />
            – Hiroshima & Nagasaki from DYCP Arts Council England 2018
            <br /> – Nevada Test Site from Engine & Grain bursary 2018
            <br /> <br />
            SHOWS <br />
            <br />
            – Illustrated Brum X PMT 2019
            <br />
            – Blue Streak in Mezz at The New Art Gallery Walsall 2019
            <br />
            – Phorm at Salford Circus 2018
            <br />
            – New Art West Midlands at Airspace Gallery 2018
            <br />
            – Yorks ikon 2017
            <br />
            – Reclaim Photography Festival 2017
            <br />
            – Fertile Ground at Argentea Gallery 2017
            <br />
            – Future Late at Tate Modern 2016
            <br />
            – 112 Space 2015
            <br />
            – Chaos Computer Club at Birmingham Open Media 2015
            <br />
            – Photographers Wall at Library of Birmingham 2014
            <br />
            – Narrative Structures at Stryx gallery 2013
            <br />
            – Much Beta at mac birmingham 2013
            <br />
          </p>
        </div>
      </div>
    );
  }
}

export default AboutContent;

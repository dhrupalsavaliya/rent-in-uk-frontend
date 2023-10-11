import MobileMenu from "../common/header/MobileMenu";
import AgentsTeam from "./AgentsTeam";
import FeaturedProperties from "./FeaturedProperties";
import FindProperties from "../home-8/FindProperties";
import Header from "./Header";
import LookingItem from "./LookingItem";
import Blogs from "../common/Blogs";
import Partners from "../common/Partners";
import Footer from "../common/footer/Footer";
import CopyrightFooter from "../common/footer/CopyrightFooter";
import PopupSignInUp from "../common/PopupSignInUp";
import Hero from "./Hero";
import ComfortPlace from "../home-8/ComfortPlace";
import CallToAction from "../common/CallToAction";
import WhyChoose from "../common/WhyChoose";

import Link from "next/link";
import React, { useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import comfortPlace from "../../data/comfortPlace";

const PropertyList = comfortPlace;
function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 4 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

const index = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const filteredProperties = {
    "Single Occupancy": PropertyList.filter(
      (property) => property.type === "Single Occupancy"
    ),
    "Entire House": PropertyList.filter(
      (property) => property.type === "Entire House"
    ),
    "Entire Flat": PropertyList.filter(
      (property) => property.type === "Entire Flat"
    ),
    "Other Property Types": PropertyList.filter(
      (property) => property.type === "Other Property Types"
    ),
  };

  return (
    <>
      {/* <!-- Main Header Nav --> */}
      <Header />

      {/* <!--  Mobile Menu --> */}
      <MobileMenu />

      {/* <!-- Modal --> */}
      <PopupSignInUp />

      {/* <!-- 6th Home Design --> */}
      <Hero />

      {/* <!-- Feature Properties --> */}
      <section id="feature-property" className="feature-property-home6">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="main-title mb40">
                <h2>Featured Properties</h2>
                <p>
                  Handpicked properties by our team.{" "}
                  <a className="float-end" href="/listing-list">
                    View All <span className="flaticon-next"></span>
                  </a>
                </p>
              </div>
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}

        <div className="feature_property_home6_slider ">
          <div className="container ml--xxl-0">
            <div className="gutter-x15">
              <FeaturedProperties />
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Why Chose Us --> */}
      <section id="why-chose" className="whychose_us bgc-f7 pb30">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="main-title text-center">
                <h2>Why Choose Us</h2>
                <p>We provide full service at every step.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <WhyChoose style="home10" />
          </div>
        </div>
      </section>

      {/* <!-- Property Cities --> */}
      <section id="property-city" className="property-city pb30 bb1">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="main-title text-center">
                <h2>Find Properties in These Cities</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="row">
            <FindProperties />
          </div>
          {/* End .row */}
        </div>
      </section>

      {/* <!-- Find Comfort Place --> */}
      <section id="comfort-place" className="comfort-place pb30 bb1">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="main-title text-center">
                <h2>Find a Place That Fits Your Comfort</h2>
                <p>
                  Explore the greates places in the city. You won’t be
                  disappointed.
                </p>
              </div>
            </div>
          </div>
          <div className="container">
              <Box sx={{ width: "100%" }}>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }} >
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                    indicatorColor="secondary"
                  >
                    <Tab label="Single Occupancy"/>
                    <Tab label="Entire House"/>
                    <Tab label="Entire Flat"/>
                    <Tab label="Other Property Types"/>
                  </Tabs>
                </Box>
                <CustomTabPanel value={value} index={0} className="list-house">
                  <div className="flex-container">
                  {filteredProperties["Single Occupancy"].map((property) => (
                    <div key={property.id}>
                      <div className="col-sm-6 col-lg-3" key={property.id}>
                        <Link
                          href="/listing-grid-v5"
                          className="icon_hvr_img_box image-1 d-block"
                          style={{
                            backgroundImage: `url(${property.bgImg})`,
                          }}
                        >
                          <div className="overlay">
                            <div className="icon">
                              <span className={property.icon}></span>
                            </div>
                            <div className="details">
                              <h4>{property.name}</h4>
                              <p>{property.number} Listings</p>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  ))}
                  </div>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                <div className="flex-container">
                  {filteredProperties["Entire House"].map((property) => (
                    <div key={property.id}>
                      <div className="col-sm-6 col-lg-3" key={property.id}>
                        <Link
                          href="/listing-grid-v5"
                          className="icon_hvr_img_box image-1 d-block"
                          style={{
                            backgroundImage: `url(${property.bgImg})`,
                          }}
                        >
                          <div className="overlay">
                            <div className="icon">
                              <span className={property.icon}></span>
                            </div>
                            <div className="details">
                              <h4>{property.name}</h4>
                              <p>{property.number} Listings</p>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  ))}
                  </div>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={2}>
                <div className="flex-container">
                  {filteredProperties["Entire Flat"].map((property) => (
                    <div key={property.id}>
                      <div className="col-sm-6 col-lg-3" key={property.id}>
                        <Link
                          href="/listing-grid-v5"
                          className="icon_hvr_img_box image-1 d-block"
                          style={{
                            backgroundImage: `url(${property.bgImg})`,
                          }}
                        >
                          <div className="overlay">
                            <div className="icon">
                              <span className={property.icon}></span>
                            </div>
                            <div className="details">
                              <h4>{property.name}</h4>
                              <p>{property.number} Listings</p>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  ))}
                  </div>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={3}>
                <div className="flex-container">
                  {filteredProperties["Other Property Types"].map(
                    (property) => (
                      <div key={property.id}>
                        <div className="col-sm-6 col-lg-3" key={property.id}>
                          <Link
                            href="/listing-grid-v5"
                            className="icon_hvr_img_box image-1 d-block"
                            style={{
                              backgroundImage: `url(${property.bgImg})`,
                            }}
                          >
                            <div className="overlay">
                              <div className="icon">
                                <span className={property.icon}></span>
                              </div>
                              <div className="details">
                                <h4>{property.name}</h4>
                                <p>{property.number} Listings</p>
                              </div>
                            </div>
                          </Link>
                        </div>
                      </div>
                    )
                  )}
                  </div>
                </CustomTabPanel>
              </Box>
          </div>
          {/* <div className="row">
            <ComfortPlace />
          </div> */}
        </div>
      </section>

      {/* <!-- Our Blog --> */}
      <section className="our-blog bb1 pb30">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="main-title text-center">
                <h2>Articles & Tips</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <Blogs />
          </div>
        </div>
      </section>

      {/* <!-- Our Partners --> */}
      {/* <section id="our-partners" className="our-partners">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="main-title text-center">
                <h2>Our Partners</h2>
                <p>We only work with the best companies around the globe</p>
              </div>
            </div>
          </div>
          <div className="row">
            <Partners />
          </div>
        </div>
      </section> */}

      <section className="start-partners bgc-thm pt50 pb50">
        <div className="container">
          <CallToAction
            title="Become a Real Estate Agent"
            description="We only work with the best companies around the globe"
            buttonText="Register Now"
            redirectTo="/register"
            component="Home"
          />
        </div>
      </section>

      {/* <!-- Our Footer --> */}
      <section className="footer_one home6 bgc-f7">
        <div className="container">
          <div className="row">
            <Footer />
          </div>
        </div>
      </section>

      {/* <!-- Our Footer Bottom Area --> */}
      <section className="footer_middle_area home6 pt30 pb30">
        <div className="container">
          <CopyrightFooter />
        </div>
      </section>
    </>
  );
};

export default index;

import React from "react"
import SEO from "../components/seo"
import Layout from "./../components/layout"
import { Link } from "gatsby"
import "./about_us.css"

function about_us() {
  return (
    <Layout>
      <SEO title="About Us" />
      <div>
        <main className="content">
          <div className="about-us-content">
            <h1 className="about-us">
              A little history about Mike and Judy's Jewels...
            </h1>
            <p className="about-us-text">
              Mike and Judy started handcrafting jewelry in 2014 as a personal
              hobby.
              <br /> As they started to get interest from co-workers and family
              they started making pieces for quite a few people. They have since
              produced an impressive inventory of Handcrafted Jewelry and want
              to share their passion with the world. They are constantly
              crafting new pieces that will be added to the store as they become
              available. You won't find low quality materials with their
              jewelry, no. Find out more about the materials they use &nbsp;
              <Link to="/about_us/#mats">here.</Link> They strive to bring only
              the best quality beads and materials to you.
            </p>
            <div className="wow flip about-us-cta" data-wow-iteration="2">
              <Link to="/shop" className="shop-btn">
                SHOP
              </Link>
            </div>
          </div>
        </main>
        <section className="about-us--section">
          <div className="about-us--left">
            <p>
              Each piece is crafted by hand with love and care. These intricate
              pieces will be treasured for years to come, whether you buy them
              for yourself, or treat a friend or relative with them. Great gifts
              for Holidays, Birthdays, Special Events, or Just Because...
              <br />
            </p>
          </div>
          <div className="about-us--right">
            <img
              src={require("../images/glass-beads-and-needlenose-pliers.jpg")}
              alt="needle-nose pliers and glass beads"
            />
            <img
              src={require("../images/bead-bottles.jpg")}
              alt="little bottles with beads in them"
            />
          </div>
        </section>
        <section id="mats" className="section-mats">
          <hr className="style-two" />
          <h2 className="mats-head">What Materials Are Used</h2>
          <hr className="style-two" />

          <div className="mats-desc">
            <p className="lead">What Are Beads?</p>
            <p>
              Beads come in all shapes, sizes and types. They can be made up of
              stone, plastics, wood, pearl, glass, bone, gemstones, or even fine
              metals. They are decorative objects that have a small hole in them
              for stringing or threading and are believed to have been used in
              jewelry making for approximately the last 100,000 years, as
              evidenced by a pair of Nassarius sea snail shell beads &nbsp;
              <a
                href="https://en.wikipedia.org/wiki/Bead"
                rel="noopener noreferrer"
                target="_blank"
              >
                (read more here...)
              </a>
              <br />
            </p>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default about_us

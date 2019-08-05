import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
// import { useStaticQuery } from "gatsby"
import "./Index.css"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

import bracelet from "../images/bead-bracelet.png"
import dragonfly from "../images/dragonfly-necklace.png"
import pinkPendant from "../images/pink-crystal-pendant.png"
import laceNecklace from "../images/lace-necklace-and-earrings.png"

// =============================================
// ===============   STYLES     ================
// =============================================

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`

// =============================================
// ===============   Component  ================
// =============================================

const IndexPage = () => {
  // useStaticQuery(console.log("FFFFF", window.screenX))
  return (
    <Layout>
      <SEO title="Home" />
      <FlexColumn>
        <main className="content" id="home">
          <img
            src={bracelet}
            alt="bead bracelet"
            className="cta-image wow bounceInLeft"
            data-wow-delay=".25s"
          />
          <div className="rightHome">
            <h1 className="wow bounceInRight" data-wow-delay=".5s">
              Handcrafted Jewelry
            </h1>
            <div className="wow flipInY" data-wow-delay="1s">
              <a href="shop.html" className="btn" id="btn-test">
                Enter Shop
              </a>
            </div>
          </div>
        </main>
        <div className="cta-desc bottom">
          <h2>Every Piece is Hand-Made in the USA</h2>
          <p>
            At Mike &amp; Judy's Jewels, all of the pieces are individually
            hand-crafted with love and care. Join our mailer to keep up-to-date
            on
            <span>NEW PRODUCTS</span> and
            <span>SALES</span> by visiting our
            <a href="contact.html">Contact</a> page.
          </p>
        </div>
        <section>
          <hr className="style-two" />
          <h2 className="wow zoomIn">A Few of Our Beautiful Pieces</h2>
          <hr className="style-two" />
          <div className="figs">
            <figure className="wow bounceInLeft">
              <img
                src={dragonfly}
                alt="a beaded dragonfly necklace"
                className="promo-sm"
              />
              <figcaption>
                <h3>Dragonfly Necklace</h3>
                <p>A Beautiful Beaded Chain with Dragonfly Pendant.</p>
                <div className="shop-cta-btn">
                  <a href="shop.html" className="btn">
                    Buy Now
                  </a>
                </div>
              </figcaption>
            </figure>
            <figure className="wow zoomIn">
              <img
                src={pinkPendant}
                alt="a pionk bead chain with a crystal pendant"
                className="promo-lg"
              />
              <figcaption>
                <h3>Pink Teardrop</h3>
                <p>A Pink Beaded Chain with a Teardrop Crystal Pendant.</p>
                <div className="shop-cta-btn">
                  <a href="shop.html" className="btn">
                    Buy Now
                  </a>
                </div>
              </figcaption>
            </figure>
            <figure className="wow bounceInRight">
              <img
                src={laceNecklace}
                alt="a beaded lace-pattern necklace and earrings"
                className="promo-sm"
              />
              <figcaption>
                <h3>Lace Necklace and Earrings</h3>
                <p>A Beaded Lace Necklace with Matching Earrings.</p>
                <div className="shop-cta-btn">
                  <a href="shop.html" className="btn">
                    Buy Now
                  </a>
                </div>
              </figcaption>
            </figure>
          </div>
          <hr className="style-two" />
          <div className="shop-cta">
            <p>See All of Our Pieces in the</p>
            <div className="wow flip" data-wow-iteration="2">
              <a href="shop.html" className="btn">
                SHOP
              </a>
            </div>
          </div>
        </section>
      </FlexColumn>
    </Layout>
  )
}

export default IndexPage

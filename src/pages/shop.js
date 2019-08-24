import React from "react"
import SEO from "../components/seo"
import Layout from "./../components/layout"
import { Link } from "gatsby"

import "./shop.css"

// let on = 0,
//   time = 500,
//   pos = 1,
//   pos2 = 2,
//   pos3 = 3

// function rightClick() {
//   rotateRight()
//   on = 1
// }

// function leftClick() {
//   rotateLeft()
//   on = 1
// }

// function play() {
//   setInterval(() => rotateLeft(), 3000)
// }

// function rotateLeft() {
//   if (on === 0) {
//     let currentImage = document.querySelector(
//       `.p_slider_item:nth-of-type(${pos})`
//     )
//     console.log(currentImage)
//   }
// }

function shop() {
  return (
    <Layout>
      <SEO title="Shop | Showroom" />
      <div>
        <div className="showcase-body">
          <div className="p_slider">
            <div className="p_slider__item">
              <img
                src={require("../images/bracelet-showcase.png")}
                alt="bracelet"
              />
            </div>
            <div className="p_slider__item">
              <img
                src={require("../images/braided-necklace-showcase.png")}
                alt="necklace"
              />
            </div>
            <div className="p_slider__item">
              <img
                src={require("../images/c-knot-bracelet-showcase.png")}
                alt="bracelet"
              />
            </div>
          </div>
          <div className="controls">
            <div className="left">
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/arrow.png"
                alt="left control"
              />
            </div>
            <div className="right">
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/arrow.png"
                alt="right control"
              />
            </div>
          </div>
        </div>

        <section className="shop-section">
          <div className="shop-card">
            <img
              src={require("../images/necklace.png")}
              alt="a beaded necklace"
              className="shop-card--img"
            />
            <p className="shop-card--p">
              A vast array of beautiful beaded chain and rope necklaces
            </p>
            <div className="btn-scale">
              <Link to="/shop/necklaces">Necklaces</Link>
            </div>
          </div>
          <div className="shop-card">
            <img
              src={require("../images/silver-rose-pendant.png")}
              alt="a silver framed clay rose pendant"
              className="shop-card--img"
            />
            <p className="shop-card--p">
              beautiful and unique handcrafted Pendants.
            </p>
            <div className="btn-scale">
              <Link to="/shop/pendants">Pendants</Link>
            </div>
          </div>
          <div className="shop-card">
            <img
              src={require("../images/bracelets.png")}
              alt="beaded bracelets"
              className="shop-card--img"
            />
            <p className="shop-card--p">
              Beautifully crafted bracelets for every occassion
            </p>
            <div className="btn-scale">
              <Link to="/shop/bracelets">Bracelets</Link>
            </div>
          </div>
          <div className="shop-card">
            <img
              src={require("../images/cone-shell--earrings.png")}
              alt="beaded shell earrings"
              className="shop-card--img"
            />
            <p className="shop-card--p">Beaded and fine-silver earrings.</p>
            <div className="btn-scale">
              <Link to="/shop/earrings">Earrings</Link>
            </div>
          </div>
          <div className="shop-card">
            <img
              src={require("../images/rings.png")}
              alt="beaded rings"
              className="shop-card--img"
            />
            <p className="shop-card--p">Be Delighted with our Beaded Rings</p>
            <div className="btn-scale">
              <Link to="/shop/rings">Rings</Link>
            </div>
          </div>
          <div className="shop-card">
            <img
              src={require("../images/lace-necklace-and-earrings.png")}
              alt="an egyptian style lacy necklace and earring set"
              className="shop-card--img"
            />
            <p className="shop-card--p">
              Don't be incomplete, get the matching sets here
            </p>
            <div className="btn-scale">
              <Link to="/shop/sets">Sets</Link>
            </div>
          </div>
          <div className="shop-card">
            <img
              src={require("../images/silver-bracelet-and-earrings.png")}
              alt="fine-silver leaf bracelet and earring"
              className="shop-card--img"
            />
            <p className="shop-card--p">
              Don't miss our hand-made fine-silver jewelry.
            </p>
            <div className="btn-scale">
              <Link to="/shop/metals">Fine Metals</Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default shop

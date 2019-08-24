import React from "react"
import SEO from "../../components/seo"
import Layout from "./../../components/layout"
import { Link } from "gatsby"
import ShopNav from "./shopNav"

function metals(props) {
  return (
    <Layout>
      <SEO title="Shop | Metals" />
      <div className="shop-content content">
        <div className="shop-head">
          <h1 className="shop-heading">Handcrafted Fine Metals</h1>
          <hr className="style-two" />
        </div>
        <div className="cat-head">
          <h3>CATEGORIES</h3>
        </div>
        <div className="wrapper">
          <ShopNav currentPath={props.location.pathname} />
          <div className="fig-row">
            <figure className="shop-fig">
              <Link className="fig-anchor" to="/productTemplate">
                <img
                  src={require("../../images/necklace.png")}
                  alt="a bead necklace"
                />
              </Link>
              <figcaption>Bead Rope Chain</figcaption>
              <p>$20.00</p>
              <img
                src={require("../../images/cart_btn.png")}
                alt="add to cart button"
                className="paypal"
              />
            </figure>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default metals

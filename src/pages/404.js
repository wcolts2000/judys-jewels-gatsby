import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "./404.css"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <main className="content">
      <div className="err-wrapper">
        <div className="text">
          <p>
            Ohhhh noooooo.....
            <br /> It looks like we can't find what you are looking for
            <br /> Get back to the shop here
          </p>
          <div className="wow pulse" data-wow-delay="1s" data-wow-iteration="7">
            <Link to="/shop/" className="err-404-shop">
              ENTER SHOP
            </Link>
          </div>
        </div>
        <h1 className="err-404 ">404</h1>
      </div>
    </main>
  </Layout>
)

export default NotFoundPage

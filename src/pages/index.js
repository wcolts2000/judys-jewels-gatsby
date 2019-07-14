import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

// import bracelet from "../assets/img/bead-bracelet.png"
// import dragonfly from "../assets/img/dragonfly-necklace.png"
// import pinkPendant from "../assets/img/pink-crystal-pendant.png"
// import laceNecklace from "../assets/img/lace-necklace-and-earrings.png"
// import shoppingAnnex from "../assets/img/shopping-annex.jpeg"

// =============================================
// ===============   STYLES     ================
// =============================================

// const HeaderContainer = styled.header`
//   padding: 0 0 16px 0;
//   z-index: 90;
// `

// =============================================
// ===============   Component  ================
// =============================================

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage

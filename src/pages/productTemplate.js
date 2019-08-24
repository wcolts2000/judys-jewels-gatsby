import React from "react"
import SEO from "./../components/seo"
import Layout from "./../components/layout"
import "./productTemplate.css"
import { Link } from "gatsby"

function productTemplate(props) {
  return (
    <Layout>
      <SEO title="Product Template" />
      <div>
        <main class="content">
          <div class="product-wrapper">
            <div class="product-card">
              <h1>PRODUCT NAME</h1>
              <div
                class="primary"
                style={{
                  backgroundImage: `url(
                    ${require("../images/lace-necklace-and-earrings.png")}
                  )`,
                }}
              ></div>

              <div class="product-thumbs">
                <Link
                  to="/shop"
                  class="selected thumbnail"
                  data-big="../images/lace-necklace-and-earrings.png"
                >
                  <div
                    class="thumbnail-image"
                    style={{
                      backgroundImage: ` url(
                        ${require("../images/lace-necklace-and-earrings.png")}
                      )`,
                    }}
                  ></div>
                </Link>
                <Link
                  to="/shop"
                  class="thumbnail"
                  data-big="./img/dragonfly-necklace.png"
                >
                  <div
                    class="thumbnail-image"
                    style={{
                      backgroundImage: `url(${require("../images/dragonfly-necklace.png")})`,
                    }}
                  ></div>
                </Link>
                <Link
                  to="/shop"
                  class="thumbnail"
                  data-big="../images/bead-bracelet.png"
                >
                  <div
                    class="thumbnail-image"
                    style={{
                      backgroundImage: `url("../image/bead-bracelet.png")`,
                    }}
                  ></div>
                </Link>
                <Link
                  to="/shop"
                  class="thumbnail"
                  data-big="../images/necklace.png"
                >
                  <div
                    class="thumbnail-image"
                    style={{
                      backgroundImage: `url(${require("../images/necklace.png")})`,
                    }}
                  ></div>
                </Link>
                <Link
                  to="/shop"
                  class="thumbnail"
                  data-big="../images/pink-crystal-pendant.png"
                >
                  <div
                    class="thumbnail-image"
                    style={{
                      backgroundImage: `url(${require("../images/pink-crystal-pendant.png")})`,
                    }}
                  ></div>
                </Link>
              </div>
            </div>
            <div class="product-desc">
              <h2>Product Name Again</h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor
                excepturi porro sed ipsa iste corporis molestiae dolore sint
                fugit. Rerum perspiciatis fugit ex ratione odit deleniti
                voluptas iste quisquam reiciendis molestias nulla placeat
                suscipit consequatur eum quidem enim eaque, tempora numquam!
                Adipisci saepe vero repellendus, similique architecto nihil
                facere cumque!
              </p>
              <img
                src={require("../images/cart_btn.png")}
                alt="add to cart button"
              />
            </div>
          </div>
        </main>
        <section class="suggested-items-sect">
          <h2>Customers who bought this also like these...</h2>
          <hr class="style-two" />
          <div class="suggested-items">
            <Link to="/shop">
              <img
                src={require("../images/bead-bracelet.png")}
                alt="a beaded bracelet"
              />
            </Link>
            <Link to="/shop">
              <img
                src={require("../images/dragonfly-necklace.png")}
                alt="a dragonfly necklace"
              />
            </Link>
            <Link to="/shop">
              <img
                src={require("../images/lace-necklace-and-earrings.png")}
                alt="a beaded lace style necklace with matching earrings"
              />
            </Link>
            <Link to="/shop">
              <img
                src={require("../images/necklace.png")}
                alt="i beautiful beaded rope necklace"
              />
            </Link>
            <Link to="/shop">
              <img
                src={require("../images/pink-crystal-pendant.png")}
                alt="a pink schwarskovski crystal necklace"
              />
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default productTemplate

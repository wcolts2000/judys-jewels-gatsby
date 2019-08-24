import React from "react"
import SEO from "../components/seo"
import Layout from "./../components/layout"
import "./contact.css"

function contact() {
  return (
    <Layout>
      <SEO title="Contact" />
      <div>
        <main class="content">
          <section class="contact">
            <h1 class="contact-heading">Join Our E-mail List</h1>
            <p class="contact-text">
              Stay informed of new products as they come to the shop by adding
              yourself to our e-mail mailer list. We don't share your email info
              or send spam...ONLY NEWS OF NEW PRODUCTS GOING INTO THE SHOP.
              <br /> Even better, you can remove yourself from the list at any
              time.
            </p>
            <form id="my_form" onsubmit="submitForm(); return false;">
              <div class="form-group">
                <legend>Name:</legend>
                <input
                  type="text"
                  id="n"
                  class="form-control"
                  name="name"
                  placeholder="Enter Your Name"
                  required
                />
                <br />
                <legend>Email:</legend>
                <div class="input-group">
                  <input
                    class="form-control"
                    id="e"
                    type="email"
                    name="email"
                    placeholder="Enter Your Email"
                    required
                  />
                </div>
                <b />

                <input id="mybtn" type="submit" value="SUBMIT" />
                <span id="status"></span>
              </div>
            </form>
          </section>
        </main>
        <ul class="contact-info">
          <li>
            775.XXX.XXXX
            <i class="fas fa-phone"></i>
          </li>
          <li>
            700 E Pecklam Ln Unit 250
            <i class="fas fa-map-marker-alt"></i>
          </li>
          <li>Reno, NV 89502</li>
          <li>
            sales@mikenjudysjewels.com
            <i class="far fa-envelope"></i>
          </li>
        </ul>
      </div>
    </Layout>
  )
}

export default contact

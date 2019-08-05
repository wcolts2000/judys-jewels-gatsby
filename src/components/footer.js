import React from "react"
import styled from "styled-components"
import UpArrow from "./upArrow"

const Footer = styled.footer`
  background: linear-gradient(to right, hsl(266, 78%, 64%), #00c4cc);
  color: #fff;
  text-align: center;
  padding: 20px 0;
  font-size: 1.5em;

  @media screen and (max-width: 750px) {
    font-size: 1.2em;
  }

  a {
    color: #fff;
    font-size: 1.3em;
    padding: 0 10px;
  }
`

function footer() {
  return (
    <>
      <UpArrow />
      <Footer>
        <p>
          &copy; 2019 | Like Us on Facebook!
          <a
            href="https://www.facebook.com/profile.php?id=100008990355830"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i className="fab fa-facebook-square"></i>
          </a>
        </p>
      </Footer>
    </>
  )
}

export default footer

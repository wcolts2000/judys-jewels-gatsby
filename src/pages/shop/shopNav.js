import React from "react"
import { Link } from "gatsby"

function shopNav({ currentPath }) {
  return (
    <>
      <hr className="style-two" />
      <div className="shop-cats">
        <Link
          to="/shop/necklaces"
          className={currentPath === "/shop/necklaces" && "active"}
        >
          Necklaces
        </Link>
        <Link
          to="/shop/pendants"
          className={currentPath === "/shop/pendants" && "active"}
        >
          Pendants
        </Link>
        <Link
          to="/shop/bracelets"
          className={currentPath === "/shop/bracelets" && "active"}
        >
          Bracelets
        </Link>
        <Link
          to="/shop/earrings"
          className={currentPath === "/shop/earrings" && "active"}
        >
          Earrings
        </Link>
        <Link
          to="/shop/rings"
          className={currentPath === "/shop/rings" && "active"}
        >
          Rings
        </Link>
        <Link
          to="/shop/sets"
          className={currentPath === "/shop/sets" && "active"}
        >
          Sets
        </Link>
        <Link
          to="/shop/metals"
          className={currentPath === "/shop/metals" && "active"}
        >
          Fine Metals
        </Link>
      </div>
    </>
  )
}

export default shopNav

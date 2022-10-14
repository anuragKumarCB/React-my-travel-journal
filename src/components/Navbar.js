import React from "react"

export default function Navbar() {
    const navTitle = "my travel journal"
    return (
        <div className="navbar">
            <i class="fa-solid fa-earth-americas fa-xl"></i>
            <span>{navTitle}</span>
        </div>
    )
}
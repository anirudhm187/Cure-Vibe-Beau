import React from 'react'
import "../styles/footer.css"

const Footer = () => {
  return (
    <>
      <div className="disclaimer">
        <h4>In compliance with Drugs and Cosmetics Act, 1940 and Drugs and Cosmetics Rules, 1945, we don't process requests for habit forming drugs.</h4>
      </div>
      <div className="footnotes">
        <div className="infoCol">
            <p>Cure Vibe Beau -</p>
            <p>Healthcare SOlutions</p>
            <p>Ⓒ 2022</p>
            <p>Chandigarh, India</p>
        </div>
        <div className="infoCol">
            <p>Contact us -</p>
            <p>Email : query@curevibebeau.com</p>
            <p>1800-xxx-xxxx</p>
        </div>
        <div className="infoCol">
            <p>Designed and developed with ❣️  By -</p>
            <p><b>Anirudh Mohan</b></p>
            <a href="https://www.linkedin.com/in/am812/">
                <p>Linkedin</p>
            </a>
            <a href="https://github.com/ANI8M">
                <p>Github</p>
            </a>
        </div>
      </div>
    </>
  )
}

export default Footer

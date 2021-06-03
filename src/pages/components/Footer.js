
import * as React from "react"
import { Link } from "gatsby"

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="footer-container">
      <div className="footer-choices">

        <div className="footer-buttons">
          <Link className="footer-links" to="/terms/">terms</Link>
          <Link className="footer-links" to="/privacy/">privacy policy</Link>
        </div>

        <div className="copyright">
          <p>© {new Date().getFullYear()} • Sheprd Technologies Inc.</p>
        </div>


      </div>


      </div>

    )}}

  export default Footer

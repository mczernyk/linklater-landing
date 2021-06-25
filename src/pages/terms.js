import * as React from "react"
import { Link } from "gatsby"
import { FaLink } from "react-icons/fa";
import Seo from "../components/seo"
import icon from "../images/Icon-Black.png"



const Terms = () => (
  <div>
    <Seo title="Terms of Service" />

    <div className="terms-container">
      <Link className="title-terms" to="/">
        <h1>LinkLater</h1>
        <div className="link-icon-terms"><img src={icon}/></div>
      </Link>
      <div className="terms-text">
        <p>
        The LinkLater Beta Program is a voluntary program through which users may use a pre-release version of our mobile application (the “LinkLater App”) and provide feedback. The LinkLater App is owned and operated by Sheprd Technologies Inc. (“Licensor”). Your use of the LinkLater App and the LinkLater Beta Program is subject to our <Link className="terms-links" to="/terms/">Terms of Service</Link> and <Link className="terms-links" to="/privacy/">Privacy Policy</Link>.
        </p>
        <h2>Terms of Service</h2>
        <p>BY USING THE LINKLATER APP, YOU AGREE TO THESE TERMS (“Agreement”). If you do not agree to the terms of this Agreement, do not use the LinkLater App. This Agreement is between Sheprd Technologies Inc. (“Licensor”) and you. You must be 18 years or older.</p>
        <p><b>1. Beta Product and License:</b>  Licensor may provide you with access to a pre-release version of our mobile app (“Beta Product”).  Licensor may terminate access to the Beta Product at any time without cause or advance notice to you. When you access the Beta Product, Licensor grants to you a limited, revocable, non-exclusive license to use the Beta Product for personal use. This license does not include the right to, and you agree not to (a) rent, lease or sublicense the Beta Product or make it available on a network to other users; (b) modify, adapt, translate, reverse engineer, decompile or disassemble the Beta Product; (c) create derivative works from the Beta Product; or (d) copy the Beta Product in an unauthorized manner.</p>
        <p><b>2. Your Information:</b>  Licensor will collect, use, disclose and dispose of personal information as described in the <Link className="terms-links" to="/privacy/">Privacy Policy</Link>.</p>
        <p><b>3. DISCLAIMER/LIABILITY LIMITATIONS:</b>  THE BETA PRODUCT AND ALL RELATED SERVICES ARE PROVIDED "AS IS" AND, TO THE MAXIMUM EXTENT ALLOWABLE UNDER LAW, LICENSOR DISCLAIMS ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING ANY WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NONINFRINGEMENT.  WITHOUT LIMITING THE FOREGOING SENTENCE, LICENSOR DOES NOT WARRANT THAT OPERATION OF THE BETA PRODUCT WILL BE UNINTERRUPTED OR ERROR-FREE, THAT THE BETA PRODUCT WILL BE COMPATIBLE WITH ANY OTHER PRODUCT, OR THAT THE BETA PRODUCT WILL WORK PROPERLY ON ALL DESIGNATED DEVICES.  LICENSOR MAY IN DISCRETION, DISCONTINUE SUPPORTING THE BETA PRODUCT AT ANY TIME, AND LICENSOR HAS NO LIABILITY FOR DISCONTINUANCE.  LICENSOR WILL NOT BE LIABLE TO YOU FOR ANY PERSONAL INJURY, PROPERTY DAMAGE, LOST PROFITS, COST OF SUBSTITUTE GOODS, LOSS OF DATA OR ANY OTHER FORM OF DIRECT OR INDIRECT, SPECIAL, INCIDENTAL, CONSEQUENTIAL OR PUNITIVE DAMAGES FROM ANY CAUSES OF ACTION ARISING OUT OF OR RELATED TO THIS AGREEMENT OR THE BETA PRODUCT, WHETHER ARISING IN TORT (INCLUDING NEGLIGENCE), CONTRACT, STRICT LIABILITY OR OTHERWISE, WHETHER OR NOT LICENSOR HAS BEEN ADVISED OF THE POSSIBILITY OF THOSE DAMAGES.  IN NO EVENT WILL LICENSOR’S TOTAL LIABILITY TO YOU FOR ALL DAMAGES EXCEED $10.  SOME JURISDICTIONS DO NOT ALLOW FOR CERTAIN LIMITATIONS OF LIABILITIES OR WARRANTIES, SO SOME OR ALL OF THE ABOVE EXCLUSIONS AND LIMITATIONS MAY NOT APPLY TO YOU.</p>
        <p><b>4. Miscellaneous:</b>  This Agreement is construed and interpreted in accordance with the laws of the State of New York. The parties agree to work in good faith to resolve any disputes. If a dispute cannot be resolved, you must seek resolution only through binding arbitration. If the binding arbitration terms of this Section are not enforceable in a dispute, both parties submit to personal jurisdiction in New York and further agree that the dispute shall be brought in a court within New York County, New York.  If any provision of this Agreement is held invalid or unenforceable, in whole or in part, that provision will be modified to the minimum extent necessary to make it valid and enforceable, and the validity and enforceability of all other provisions of this Agreement shall not be affected thereby.  This Agreement constitutes the entire agreement between the parties related to the subject matter hereof and supersedes all prior oral and written and all contemporaneous oral negotiations, commitments and understandings of the parties, all of which are merged herein.</p>
        <p><b>5. Questions or Complaints:</b>  You may submit any questions or complaints to <a key="email" href={'mailto:team@linklater.app'}>team@linklater.app</a>.
        </p>
      </div>

    </div>

    <div className="footer-container">
      <div className="footer-choices">

        <div className="footer-buttons">
          <Link className="footer-links" to="/">home</Link>
          <Link className="footer-links" to="/privacy/">privacy policy</Link>
        </div>

        <div className="copyright">
          <p>© {new Date().getFullYear()} • Sheprd Technologies Inc.</p>
        </div>


      </div>


      </div>


  </div>
)

export default Terms

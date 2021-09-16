import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <div className="error">
    <h1>404: Not Found</h1>
    <p>There is nothing here, please double check your request.</p>
    </div>

  </Layout>
)

export default NotFoundPage

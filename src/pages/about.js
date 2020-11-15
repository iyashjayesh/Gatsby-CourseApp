import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SupermanSection from "../components/globalComponents/SupermanSection"
import Infoblock from "../components/globalComponents/Infoblock"
import DualInfoblock from "../components/globalComponents/DualInfoblock"
import Teamphotosection from "../components/About/Teamphotosection"

const AboutPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <SupermanSection 
      img={data.img.childImageSharp.fluid}
      title="About Us" 
      supermanClass="about-background" 
    />
    <DualInfoblock heading="A message from CEO" src="https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
    <Infoblock heading="About Vision"/>  
    <Teamphotosection/>
  </Layout>
)

export const query = graphql `
{
  img: file(relativePath: { eq: "about.png" }) {
    childImageSharp{
      fluid{
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}
`

export default AboutPage

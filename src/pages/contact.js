import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SupermanSection from "../components/globalComponents/SupermanSection"
import Infoblock from "../components/globalComponents/Infoblock"
import Contact from "../components/Contact/contact"

const ContactPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <SupermanSection 
      img={data.img.childImageSharp.fluid}
      title="Contact Us" 
      supermanClass="about-background" 
    />
    {/* <DualInfoblock heading="A message from CEO" src="https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/> */}
    <Infoblock heading="How can we help?"/>  
    <Contact />
    <Teamphotosection/>
  </Layout>
)

export const query = graphql `
{
  img: file(relativePath: { eq: "contact.png" }) {
    childImageSharp{
      fluid{
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}
`

export default ContactPage

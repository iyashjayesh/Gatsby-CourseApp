import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SupermanSection from "../components/globalComponents/SupermanSection"
import Infoblock from "../components/globalComponents/Infoblock"
import DualInfoblock from "../components/globalComponents/DualInfoblock"
import Coursecart from "../components/Cart/Coursecart"


const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <SupermanSection 
      img={data.img.childImageSharp.fluid}
      title="I write Code" 
      subtitle="Yash Chauhan | @iyashjayesh" 
      supermanClass="superman-background" 
    />
    <Infoblock heading="About Us"/>
    <Coursecart courses={data.courses}/>
    <DualInfoblock heading="Our Team" src="https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
  </Layout>
)

export const query = graphql `
{
  img: file(relativePath: { eq: "heromain2.jpg" }) {
    childImageSharp{
      fluid{
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }

  courses: allContentfulCourses{
    edges{
      node{
        id
        title
        price
        category
        description{
          description
        }
        image{
          fixed(width:200, height:120){
            ...GatsbyContentfulFixed_tracedSVG
          }
        }
      }
    }
  }
  
}
`

export default IndexPage

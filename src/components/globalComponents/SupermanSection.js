import React from 'react'
import BackgroundImage from 'gatsby-background-image'

export default function SupermanSection({img,title,subtitle,supermanClass}) {
    return (
        <BackgroundImage className={supermanClass} fluid={img}>
                <h1 className="text-white test-uppercase text-center display-4">
                    {title}
                </h1>
                <div>
                    <h4 className="text-warning">{subtitle}</h4>
                </div>
        </BackgroundImage>
    )
}



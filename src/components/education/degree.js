import React from "react"
import { EducationType } from "../../types"
import { GatsbyImage } from "gatsby-plugin-image"

const Degree = props => {
  const { school, period, major, minor, thesis, image} = props

  return (
    <div className="border-t-4 border-line relative flex bg-back-light p-4 lg:p-8 bg-no-repeat text-sm mb-6">
      {image && (
        <div className="w-24 px-2 mr-2">
          <GatsbyImage image={image.childImageSharp.gatsbyImageData} alt={school} />
        </div>
      )}
      <div className="lg:flex-1">
        <h4 className="font-bold">{school}</h4>
        <p className="italic">{period}</p>
        <h5>{major}</h5>
        {minor && <h6>Minor: {minor}</h6>}
        {thesis && <p className="w-full whitespace-pre-line">Thesis: {thesis}</p>}
      </div>
    </div>
  )
}

Degree.propTypes = EducationType

export default Degree

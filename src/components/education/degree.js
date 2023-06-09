import React from "react"
import { EducationType } from "../../types"

const Degree = props => {
  const { school, period, major, minor, thesis} = props
  const image = null

  return (
    <div className="border-t-4 border-line relative flex flex-wrap bg-back-light p-4 lg:p-8 bg-no-repeat text-sm mb-6">
      {/* {image && (
        <div className="w-full pb-4 lg:w-2/5 lg:pr-8 lg:pb-0">
          <GatsbyImage image={image.childImageSharp.gatsbyImageData} alt={school} />
        </div>
      )} */}
      <div className="lg:flex-1">
        <h4 className="font-bold">{school}</h4>
        <h5>{major}</h5>
        {minor && <h6>Minor: {minor}</h6>}
        <p className="font-light">{period}</p>
        <p className="w-full py-4 whitespace-pre-line">{thesis}</p>
      </div>
    </div>
  )
}

Degree.propTypes = EducationType

export default Degree

import React from "react"
import Degree from "./degree"
import { arrayOf, shape, EducationType } from "../../types"

const Education = ({ education }) => (
  <>
    <h5 className="font-header font-semibold text-front text-sm uppercase mb-3">
      Education
    </h5>
    {education.map((degree, i) => (
      <Degree key={`${degree.school}_${i}`} {...degree} />
    ))}
  </>
)

Education.propTypes = {
  education: arrayOf(shape(EducationType)),
}

export default Education

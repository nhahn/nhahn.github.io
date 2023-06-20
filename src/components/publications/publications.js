import React from "react"
import Publication from "./publication"
import { arrayOf, shape, PublicationType } from "../../types"

const Publications = ({ publications }) => (
  <>
    <h5 className="font-header font-semibold text-front text-sm uppercase mb-3">
      Publications
    </h5>
    {publications.sort((a,b) => b.year - a.year).map((publication, i) => (
      <Publication key={`${publication.title}_${i}`} {...publication} />
    ))}
  </>
)

Publications.propTypes = {
  publications: arrayOf(shape(PublicationType)),
}

export default Publications

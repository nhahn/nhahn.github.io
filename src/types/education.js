import { graphql } from "gatsby"
import { arrayOf, shape, string, object, oneOf } from "prop-types"

export const EducationType = {
  school: string.isRequired,
  period: string.isRequired,
  major: string,
  minor: string,
  thesis: string,
  image: shape({
    childImageSharp: object.isRequired,
  })
}

export const query = graphql`
  fragment EducationFragment on EducationYaml {
    school
    period
    major
    minor
    thesis
    image {
      childImageSharp {
        gatsbyImageData(width: 640, quality: 85)
      }
    }
  }
`

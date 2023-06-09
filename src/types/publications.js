import { graphql } from "gatsby"
import { arrayOf, shape, string, object, oneOf } from "prop-types"

export const PublicationType = {
  name: string.isRequired,
  authors: string.isRequired,
  link: string,
  description: string
}

export const query = graphql`
  fragment PublicationFragment on PublicationsYaml {
    name
    authors
    link
    description
  }
`

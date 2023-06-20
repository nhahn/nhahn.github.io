import { graphql } from "gatsby"
import { arrayOf, number, string, object, oneOf } from "prop-types"

export const PublicationType = {
  title: string.isRequired,
  authors: string.isRequired,
  pdf: string,
  doi: string,
  year: number,
  description: string
}

export const query = graphql`
  fragment PublicationFragment on PublicationsYaml {
    title
    authors
    pdf {
      relativePath
    }
    doi
    fields {
      citation
      bibtex
    }
    year
  }
`

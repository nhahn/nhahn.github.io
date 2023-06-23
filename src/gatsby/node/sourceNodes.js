module.exports = ({ actions }) => {
  actions.createTypes(`
    type WorkHistoryYaml implements Node {
      id: ID!
      company: String!
      period: String
      position: String
      url: String
    }

    type ProjectsYaml implements Node {
      id: ID!
      description: String
      icon: String
      image: File @fileByRelativePath
      name: String!
      status: String
      tags: [String]
      url: String
      who: String!
    }

    type EducationYaml implements Node {
      id: ID!
      school: String!
      period: String!
      major: String
      minor: String
      thesis: String
      image: File @fileByRelativePath
    }

    type PublicationsYaml implements Node {
      id: ID!
      title: String!
      authors: String!
      pdf: File @fileByRelativePath
      year: Int
      doi: String
      description: String
    }
  `)
}

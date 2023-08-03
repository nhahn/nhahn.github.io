//TODO make sure I have the right version here that is using promises
const fetch = require('node-fetch');

module.exports = ({ node, actions }) => {
    const { createNode, createNodeField } = actions
    // Transform the new node here and create a new node or
    // create a new node field.

    if (node.internal.type == "PublicationsYaml" && node.doi) {
        let bibtexFetch = fetch(`http://doi.org/${node.doi}`,
        {
            headers: {
              'Accept': 'application/x-bibtex'
            }
        }).then(resp => resp.text());
        

        let citationFetch = fetch(`http://doi.org/${node.doi}`,
        {
            headers: {
              'Accept': 'text/x-bibliography'
            }
        }).then(resp => resp.text());


        return Promise.all([bibtexFetch, citationFetch])
        .then(([bibtex, citation]) => {
          createNodeField({node, name: 'citation', value: citation});
          createNodeField({node, name: 'bibtex', value: bibtex});
          return node;
        }).catch(err => {
          console.error(`Error fetching DOI: ${err.message}`);
          return node;
        })
      } 

  }
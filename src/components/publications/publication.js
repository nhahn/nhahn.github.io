import React from "react"
import { PublicationType } from "../../types"
import {FaExternalLinkAlt} from 'react-icons/fa'

const Publication = props => {
  const { title, authors, pdf, description, fields } = props
  return (
    <div className="relative flex flex-wrap bg-no-repeat text-sm p-4">
      <div className="lg:flex-1">
        <h4 className="font-bold inline-flex">
          {pdf &&
            <a
            className="hover:opacity-75 transition-opacity duration-150"
            href={pdf.relativePath}
            rel="noreferrer noopener"
            target="_blank"
          >
            {title}
          </a>
          }
          {!pdf && title}
          {pdf && (
          <a
            className="pl-2 underline hover:opacity-75 transition-opacity duration-150"
            href={pdf.relativePath}
            rel="noreferrer noopener"
            target="_blank"
          >
            <FaExternalLinkAlt />
          </a>
        )}
        </h4>
        <p className="w-full pwhiespace-pre-line">{fields.citation}</p>
      </div>
    </div>
  )
}

Publication.propTypes = PublicationType

export default Publication

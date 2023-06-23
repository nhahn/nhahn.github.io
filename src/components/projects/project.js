import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import { ProjectType } from "../../types"
import ProjectIcon from "./project-icon"
import ProjectStatus from "./project-status"
import ProjectTags from "./project-tags"
import {FaExternalLinkAlt} from 'react-icons/fa'

const Project = props => {
  const { name, image, url, description, status, tags, icon, who } = props
  return (
    <div className="border-t-4 border-line relative flex flex-wrap bg-back-light p-4 lg:p-8 bg-no-repeat text-sm mb-6">
      {image && (
        <div className="w-full pb-4 lg:w-2/5 lg:pr-8 lg:pb-0">
          <GatsbyImage image={image.childImageSharp.gatsbyImageData} alt={name} />
        </div>
      )}
      <div className="lg:flex-1">
        <h4 className="font-bold inline-flex">
          {url &&
            <a
            className="hover:opacity-75 transition-opacity duration-150"
            href={url}
            rel="noreferrer noopener"
            target="_blank"
          >
            {name}
          </a>
          }
          {!url && name}
          {url && (
          <a
            className="pl-2 underline hover:opacity-75 transition-opacity duration-150"
            href={url}
            rel="noreferrer noopener"
            target="_blank"
          >
            <FaExternalLinkAlt />
          </a>
        )}
        </h4>
        <h6>{who}</h6>
        <p className="w-full py-4 whitespace-pre-line">{description}</p>
        <ul className="pr-2">
          {status && <ProjectStatus status={status} />}
          {tags && <ProjectTags tags={tags} />}
        </ul>

        {icon && <ProjectIcon icon={icon} />}
      </div>
    </div>
  )
}

Project.propTypes = ProjectType

export default Project

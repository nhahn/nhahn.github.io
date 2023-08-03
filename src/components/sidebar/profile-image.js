import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import { ProfileType } from "../../types"

const ProfileImage = ({ image, name }) => (
  <div className="relative inline-block leading-none">
    <GatsbyImage
      image={image.childImageSharp.gatsbyImageData}
      alt={name}
      className="rounded-full relative z-10"
    />
  </div>
)

ProfileImage.propTypes = {
  image: ProfileType.image,
  name: ProfileType.name,
}

export default ProfileImage

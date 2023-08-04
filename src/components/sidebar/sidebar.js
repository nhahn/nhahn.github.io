import React from "react"
import Location from "./location"
import ProfileImage from "./profile-image"
import { arrayOf, shape, ProfileType, SocialType } from "../../types"
import SocialLinks from "../social-links/social-links"
import {FaRegFilePdf} from 'react-icons/fa'

const Sidebar = ({ profile, social }) => (
  <aside className="w-full lg:w-1/3 lg:border-r border-line lg:px-6 xl:px-12">
    <div className="flex flex-col h-full justify-between">
      <div className="flex flex-col items-center">
        <h1 className="font-header font-black text-front text-5xl leading-none break-words mb-4">
          {profile.name}
        </h1>
        <h2 className="font-header font-light text-front text-2xl leading-none mb-6">
          {profile.profession}
        </h2>
        {profile.image && (
          <ProfileImage image={profile.image} name={profile.name} />
        )}
        <br />
        {profile.company && (
          <h4 className="font-header uppercase">{profile.company}</h4>
        )}
        {profile.location && (
          <Location
            location={profile.location}
            relocation={profile.relocation}
          />
        )}
        <h3 className="mt-3">
          <a
            className="hover:opacity-75 transition-opacity duration-150 flex items-center underline"
            href="/CV.pdf"
            rel="noreferrer noopener"
            target="_blank"
          >
            <FaRegFilePdf className="inline-block mr-1"/>
            Curriculum Vitae (CV)
          </a></h3>
      </div>

      <div className="pt-8 pb-12 lg:py-0">
        <h5 className="font-header font-semibold text-front text-sm uppercase mb-3">
          Connect
        </h5>
        <SocialLinks social={social} />
      </div>
    </div>
  </aside>
)

Sidebar.propTypes = {
  profile: shape(ProfileType),
  social: arrayOf(shape(SocialType)),
}

export default Sidebar

import React from "react";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import { teamMembers } from "../../../utils/teamMembers";

const Team = () => {
  return (
    <div className="container mx-auto py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Meet Our Exceptional Team</h2>
        <p className="text-lg max-w-2xl mx-auto text-base-content/80">
          Our diverse team of passionate experts is dedicated to delivering innovative software solutions and unparalleled client satisfaction.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <div key={index} className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <div className="avatar">
                <div className="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src={member.image} alt={member.name} />
                </div>
              </div>
            </figure>
            <div className="card-body items-center text-center">
              <h3 className="card-title text-2xl">{member.name}</h3>
              <p className="text-primary text-lg">{member.role}</p>
              <p className="text-base-content/70">{member.bio}</p>
              <div className="card-actions justify-center mt-4">
                {member.social.linkedin && (
                  <a
                    href={member.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-ghost btn-circle"
                  >
                    <FaLinkedin className="w-6 h-6" />
                  </a>
                )}
                {member.social.twitter && (
                  <a
                    href={member.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-ghost btn-circle"
                  >
                    <FaTwitter className="w-6 h-6" />
                  </a>
                )}
                {member.social.github && (
                  <a
                    href={member.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-ghost btn-circle"
                  >
                    <FaGithub className="w-6 h-6" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <a href="/careers" className="btn btn-secondary btn-lg">
          Join Our Growing Team
        </a>
      </div>
    </div>
  );
};

export default Team;

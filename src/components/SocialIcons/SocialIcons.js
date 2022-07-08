import React from "react";
import "./SocialIcons.css";
import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { socialprofils } from "../../content_options";

export const Socialicons = (params) => {
  return (
    <div className="stick_follow_icon">
      <ul>
        {socialprofils.github && (
          <li>
            <a target='#' href={socialprofils.github}>
              <FaGithub />
            </a>
          </li>
        )}
        {socialprofils.linkedin && (
          <li>
            <a target='#' href={socialprofils.linkedin}>
              <FaLinkedin />
            </a>
          </li>
        )}
      </ul>
      <p id="connectWithMe">Connect With Me</p>
    </div>
  );
};

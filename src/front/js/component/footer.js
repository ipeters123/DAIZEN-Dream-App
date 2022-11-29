import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserFriends } from "@fortawesome/free-solid-svg-icons";

export const Footer = () => (
  <footer className="footer mt-auto py-3 text-center">
    <div className="follow">
      <FontAwesomeIcon icon={faUserFriends} />
      Follow Us:
      <ul>
        <li>
          <a href="https://www.linkedin.com/in/dariel-au-703555236/">
            Dariel Au
          </a>
        </li>
      </ul>
    </div>
    © 2022 Copyright: All Rights Reserved
  </footer>
);

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'


const Footer: React.FC = () => {
  return (
    <div className = "h-[3vh] w-[100vw] fixed left-0 bottom-0 footer flex flex-row text-xl sm:footer-horizontal  bg-[#9cffa6] text-[#355938]">
        <a href = 'https://github.com/legriffalo' target = "_blank">
                <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href = 'https://www.linkedin.com/in/nick-griffiths-7b139198/' target = "_blank" >
                <FontAwesomeIcon icon={faLinkedin} />
        </a>

</div>

  );
};

export default Footer;




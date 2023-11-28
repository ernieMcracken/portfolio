import React, { useCallback, useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";
import { useScrollDirection } from "../hooks/useScrollDirection";
import { useMousePosition } from "../hooks/useMousePosition";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: hello@example.com",
  },
  {
    icon: faGithub,
    url: "https://github.com",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

const Header = () => {
  const [mouseTop, setMouseTop] = useState(false);
  const scrollDirection = useScrollDirection(100);

  const show = scrollDirection !== "down" || mouseTop;

  //closure
  function handleLinkClick(e, anchor) {
    return function () {
      e.preventDefault();

      const id = `${anchor}-section`;
      const element = document.getElementById(id);
      console.log(e, anchor);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };
  }

  useMousePosition(
    50,
    useCallback(() => {
      console.log("trigger acton");
      setMouseTop(true);
    }, []),
    useCallback(() => {
      console.log("leave action");
      setMouseTop(false);
    }, [])
  );

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      sx={
        show
          ? { transform: "translateY(0)" }
          : { transform: "translateY(-200px)" }
      }
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
      zIndex={20}
    >
      <Box color="white" maxWidth="1280px" margin="0 auto" zIndex={20}>
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <HStack spacing={8}>
              {/* Add social media links based on the `socials` data */}
              {socials.map((social) => (
                <a key={social.url} href={social.url}>
                  <FontAwesomeIcon icon={social.icon} size="2x" />
                </a>
              ))}
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              {/* Add links to Projects and Contact me section */}
              <a
                href="#invalid-id"
                onClick={(e) => handleLinkClick(e, "projects")()}
              >
                Projects
              </a>
              <a
                href="#invalid-id"
                onClick={(e) => handleLinkClick(e, "contactme")()}
              >
                Contact Me
              </a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;

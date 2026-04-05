import { FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa";
import { personalInfo } from "./resume";
import type { ReactNode } from "react";
import {
  NAVBAR_SCROLL_THRESHOLD,
  BACK_TO_TOP_THRESHOLD,
  NAV_OBSERVER_MARGIN,
  REVEAL_OBSERVER_MARGIN,
  SKILL_BAR_OBSERVER_MARGIN,
  REVEAL_DURATION,
  REVEAL_OFFSET,
  REVEAL_X_OFFSET,
} from "@/config";

export {
  NAVBAR_SCROLL_THRESHOLD,
  BACK_TO_TOP_THRESHOLD,
  NAV_OBSERVER_MARGIN,
  REVEAL_OBSERVER_MARGIN,
  SKILL_BAR_OBSERVER_MARGIN,
  REVEAL_DURATION,
  REVEAL_OFFSET,
  REVEAL_X_OFFSET,
};

export interface SocialLink {
  href: string;
  icon: ReactNode;
  label: string;
}

export const socialLinks: SocialLink[] = [
  {
    href: personalInfo.linkedin,
    icon: FaLinkedinIn({ size: 17 }),
    label: "LinkedIn",
  },
  {
    href: personalInfo.github,
    icon: FaGithub({ size: 17 }),
    label: "GitHub",
  },
  {
    href: `mailto:${personalInfo.email}`,
    icon: FaEnvelope({ size: 17 }),
    label: "Email",
  },
];

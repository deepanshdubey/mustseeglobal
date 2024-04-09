import React from "react";
import logoImg from "@/images/logo.png";
import logoLightImg from "@/images/logo-light.png";
import LogoSvgLight from "./LogoSvgLight";
import LogoSvg from "./LogoSvg";
import Link from "next/link";
import { useThemeMode } from "@/utils/useThemeMode";

export interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "w-24" }) => {
  const { isDarkMode } = useThemeMode();

  return (
    <Link
      href="/"
      className={`ttnc-logo inline-block text-primary-6000 focus:outline-none focus:ring-0 ${className}`}
    >

      {isDarkMode ? (
        <LogoSvgLight />
      ) : (
        <LogoSvg />

      )}
    </Link>
  );
};

export default Logo;

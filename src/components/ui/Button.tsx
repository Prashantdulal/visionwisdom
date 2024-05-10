// Button.tsx

import React, { ReactNode } from "react";
import Link from "next/link";
import styles from "./Button.module.css";

type ReactAnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;
type ReactButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;
type Variant = "primary" | "darkPrimary" | "lightSecondary";
type Size = "default" | "large";

export enum ButtonComponentType {
  LINK = "link",
  BUTTON = "button",
}

type IBaseProps = {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
};

type AnchorProps = IBaseProps & ReactAnchorProps & {};
type ButtonProps = IBaseProps & ReactButtonProps & {};

type ButtonComponentProps<T extends ButtonComponentType> = {
  as?: T;
  children: ReactNode;
  href?: string; // Add href prop for Link functionality
} & (T extends ButtonComponentType.BUTTON ? ButtonProps : AnchorProps);

export function Button<T extends ButtonComponentType>({
  children,
  as,
  variant = "primary",
  size = "default",
  href, // Add href prop
  ...restProps
}: ButtonComponentProps<T>) {
  const commonProps = {
    className: `${styles.btn} ${styles[variant]} ${styles[size]}`,
  };

  if (as === ButtonComponentType.LINK && href) // Check if as is LINK and href is provided
    return (
      <Link href={href} passHref>
        <button {...commonProps} {...(restProps as ReactButtonProps)}>
          {children}
        </button>
      </Link>
    );

  return (
    <button {...commonProps} {...(restProps as ReactButtonProps)}>
      {children}
    </button>
  );
}

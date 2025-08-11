import Link from "next/link";
import React from "react";
import { cn } from "@/lib/utils";

type BaseProps = {
  children: React.ReactNode;
  className?: string;
};

type ButtonAsLink = BaseProps & {
  href: string; // bắt buộc khi là link
  target?: React.HTMLAttributeAnchorTarget;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
};

type ButtonAsButton = BaseProps & {
  href?: never; // không cho phép href khi là button
  target?: never; // target chỉ dành cho link
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  isLoading?: boolean;
};

type ButtonProps = ButtonAsLink | ButtonAsButton;

export const Button = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>((props, ref) => {
  const { children, className } = props;

  const classes = cn(
    "flex items-center gap-3 w-fit px-4 py-2 rounded-[10px] font-semibold text-xl text-white bg-primary font-bold cursor-pointer",
    "max-md:font-bold max-md:text-xl max-md:px-4 max-md:py-2 max-md:rounded-[10px] max-md:bg-white max-md:border max-md:border-primary50 max-md:text-primary",
    className
  );

  // Nhánh Link
  if ("href" in props) {
    const linkProps = props as ButtonAsLink;
    return (
      <Link href={linkProps.href} passHref legacyBehavior>
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          className={classes}
          target={linkProps.target}
          onClick={linkProps.onClick}
        >
          {children}
        </a>
      </Link>
    );
  }

  // Nhánh Button
  const buttonProps = props as ButtonAsButton;
  return (
    <button
      ref={ref as React.Ref<HTMLButtonElement>}
      className={classes}
      type={buttonProps.type ?? "button"}
      onClick={buttonProps.onClick}
      disabled={buttonProps.disabled || buttonProps.isLoading}
    >
      {children}
      {buttonProps.isLoading && (
        <div className="w-4 h-4 rounded-full border-[3px] border-t-transparent animate-spin" />
      )}
    </button>
  );
});

Button.displayName = "Button";

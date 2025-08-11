import Link from "next/link";
import React from "react";
import { cn } from "@/lib/utils";

type BaseProps = {
  children: React.ReactNode;
  className?: string;
};

type ButtonAsLink = BaseProps & {
  href: string;
  target?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
};

type ButtonAsButton = BaseProps & {
  href?: undefined;
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

  if ("href" in props) {
    return (
      <Link href={props.href} passHref legacyBehavior>
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          className={classes}
          target={props.target}
          onClick={props.onClick}
        >
          {children}
        </a>
      </Link>
    );
  }

  return (
    <button
      ref={ref as React.Ref<HTMLButtonElement>}
      className={classes}
      type={props.type ?? "button"}
      onClick={props.onClick}
      disabled={props.disabled || props?.isLoading}
    >
      {children}
      {props.isLoading && (
        <div className="w-4 h-4 rounded-full border-[3px] border-t-transparent animate-spin" />
      )}
    </button>
  );
});

Button.displayName = "Button";

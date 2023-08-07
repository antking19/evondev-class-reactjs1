"use client";

import { RenderButtonSize, RenderButtonVariant } from "@/types/button.types";
import "./button.scss";

const buttonVariant: RenderButtonVariant = {
    primary: "bg-green-500",
    secondary: "bg-blue-500",
    danger: "bg-red-500",
};

const buttonSize: RenderButtonSize = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
};

type ButtonProps = {
    title: string;
    variant: "primary" | "secondary" | "danger";
    size: "sm" | "md" | "lg";
    icon?: any;
    isLoading: boolean;
};

const Button = (props: ButtonProps) => {
    const { title, variant, size, icon, isLoading } = props;
    return (
        <>
            <button
                className={`inline-flex justify-center gap-5 items-center w-[300px] ${
                    buttonVariant[variant]
                } p-5 rounded-lg text-white ${buttonSize[size]} ${
                    isLoading ? "opacity-50 cursor-not-allowed" : ""
                }`}
            >
                {isLoading ? (
                    <div className="loading-spinner"></div>
                ) : (
                    <>
                        {title} {icon}
                    </>
                )}
            </button>
        </>
    );
};

export default Button;

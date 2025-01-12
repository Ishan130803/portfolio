"use client";

import { cn } from "@/lib/utils";
import { CopyCheck, CopyIcon } from "lucide-react";
import { HTMLAttributes, useState } from "react";

type CopyToClipboardButtonProps = {
  text: string;
} & HTMLAttributes<SVGElement>;

function CopyToClipboardButton({ text, ...props }: CopyToClipboardButtonProps) {
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const handleCopy = async () => {
    try {
      // Copy text to clipboard
      await navigator.clipboard.writeText(text);
      setIsCopied(true); // Show "Copied!" effect
      // Remove "Copied!" text after 2 seconds
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text:", err);
    }
  };

  const buttonStyle = isCopied
    ? "text-green-700 self-center hover:text-green-500 font-bold"
    : "text-[#ADB7BE] self-center hover:text-white font-bold";

  return (
    <>
      <span
        className="shrink-0 size-14 border-[0.5px] border-[#D1D1ED1] bg-[#222222] hover:bg-[#2A2A2A] flex items-center justify-center rounded-md"
        onClick={handleCopy}
      >
        {isCopied ? (
          <CopyCheck
            {...props}
            className={cn(buttonStyle, props.className)}
          ></CopyCheck>
        ) : (
          <CopyIcon
            {...props}
            className={cn(buttonStyle, props.className)}
          ></CopyIcon>
        )}
      </span>
    </>
  );
}

export { CopyToClipboardButton };

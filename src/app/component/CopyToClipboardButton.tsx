"use client";

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
    ? "text-green-700 h-4 self-center hover:text-green-500 font-bold"
    : "text-[#ADB7BE] h-4 self-center hover:text-white font-bold";

  return (
    <>
      {isCopied ? (
        <CopyCheck
          {...props}
          className={buttonStyle}
          onClick={handleCopy}
        ></CopyCheck>
      ) : (
        <CopyIcon
          {...props}
          className={buttonStyle}
          onClick={handleCopy}
        ></CopyIcon>
      )}
    </>
  );
}

export { CopyToClipboardButton };

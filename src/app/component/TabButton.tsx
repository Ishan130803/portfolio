"use client";

import { ReactNode } from "react";

type TabButtonProps = {
  active: boolean;
  selectTab: any;
  children?: ReactNode;
};

function TabButton({ active, selectTab, children }: TabButtonProps) {
  const buttonClasses = active
    ? "text-white border-b border-purple-500"
    : "text-[#ADB7BE]";
  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold ${buttonClasses}`}>
        {children}
      </p>
    </button>
  );
}

export { TabButton };

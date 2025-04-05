import React from "react";

export const metadata = {
  title: "Property Details | Estate Haven",
  description: "View detailed information about this property",
};

export default function PropertyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
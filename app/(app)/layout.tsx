import type { ReactNode } from "react";
import AppSidebar from "./_components/app-sidebar";

export default function AppLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#F6ECDF" }}>
      <AppSidebar />
      <main style={{ flex: 1, minWidth: 0, height: "100vh", overflowY: "auto" }}>{children}</main>
    </div>
  );
}

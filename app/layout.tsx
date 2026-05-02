import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Incident Playbook Builder – Dynamic Incident Response Generator",
  description: "Generate customized incident response playbooks based on your service architecture and past incidents. Built for DevOps teams and SREs."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="75075b54-cd32-40e5-8144-f2a1fd014ffa"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}

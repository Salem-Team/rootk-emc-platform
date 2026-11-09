import type { Metadata } from "next";
import { Providers } from "@/components/Providers";
import "./globals.css";

const siteUrl = "https://salem-team.github.io/rootk-emc-platform/";

export const metadata: Metadata = {
  title: "ROOTK SYSTEMS | Electronics Maintenance Center Platform Proposal",
  description:
    "عرض فني وتجاري من ROOTK Systems لمنصة متكاملة: مركز صيانة إلكترونيات، متجر إلكتروني، وخدمات الشركات — بقيمة 197,000 جنيه مصري.",
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: "ROOTK SYSTEMS | Electronics Maintenance Center Platform Proposal",
    description:
      "عرض فني وتجاري من ROOTK Systems لمنصة متكاملة لمركز صيانة الإلكترونيات والتجارة الإلكترونية وخدمات الشركات.",
    url: siteUrl,
    siteName: "ROOTK SYSTEMS",
    locale: "ar_EG",
    type: "website",
    images: [{ url: "/rootk-logo.png", width: 670, height: 625, alt: "ROOTK SYSTEMS" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ROOTK SYSTEMS | Electronics Maintenance Center Platform Proposal",
    description:
      "عرض فني وتجاري من ROOTK Systems لمنصة متكاملة لمركز صيانة الإلكترونيات والتجارة الإلكترونية وخدمات الشركات.",
  },
  icons: {
    icon: "/rootk-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body className="min-h-dvh antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"
import Header from "@/components/Header/Header"
import FreeShipping from "@/components/Header/FreeShipping"
import Banner from "@/components/Header/Banner"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Silver Desires",
  description: "E-commerce project",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        <FreeShipping />
        <Banner />
        {children}
      </body>
    </html>
  )
}

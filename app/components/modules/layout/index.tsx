'use client'
import StoreProvider from "@/app/StoreProvider"
import Navbar from "../navbar";
import Footer from "../footer";

export default function Layout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <StoreProvider>
                <Navbar />
                {children}
                <Footer />
            </StoreProvider>

        </>
    )
}
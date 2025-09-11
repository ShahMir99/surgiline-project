import TopHeaderAndFooter from "@/components/Layout/TopHeaderAndFooter";

export default function RootLayout({ children} : { children: React.ReactNode}) {
    return (
        <TopHeaderAndFooter>
            {children}
        </TopHeaderAndFooter>
    )
}
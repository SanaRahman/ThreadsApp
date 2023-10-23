import { ClerkProvider } from "@clerk/nextjs"
import { Inter } from "next/font/google"
import '../globals.css'

export const metadata={
title: 'Threads',
description: 'A next.js 13.5 Meta Threads Application'
}

const inter = Inter({subsets: ["latin"]})

export default function RootLayout({
    // these are the props
    children
}:{
    // types of the props simce we are using typescript
    children: React.ReactNode
}){
return (
<ClerkProvider>
<html lang="en">
<body className={'${inter.className} '}>
    {children}
</body>
</html>
</ClerkProvider>)
}
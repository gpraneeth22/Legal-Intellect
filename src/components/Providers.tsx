"use client"

import { PropsWithChildren, useState } from "react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { trpc } from "@/app/_trpc/client"
import { httpBatchLink } from "@trpc/client"
import { Env } from "@/config/AppEnvironment"

const Providers = ({ children }: PropsWithChildren) => {
    const [queryClient] = useState(() => new QueryClient())
    const [trpcClient] = useState(() => trpc.createClient({
        links: [
            httpBatchLink({
                url: Env.apiUrl
            })
        ]
    }))
    return (
        <trpc.Provider client={trpcClient} queryClient={queryClient} >
            <QueryClientProvider client={queryClient} >
                {children}
            </QueryClientProvider>
        </trpc.Provider>
    )
}

export default Providers
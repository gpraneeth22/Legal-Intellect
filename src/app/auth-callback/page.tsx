"use client"
import { useRouter, useSearchParams } from "next/navigation"
import { trpc } from "../_trpc/client"
import { Loader2 } from "lucide-react"

const CallbackPage = () => {
    const router = useRouter()

    const searchParams = useSearchParams()
    const from = searchParams.get('from')

    trpc.user.authCallback.useQuery(undefined, {
        onSuccess: ({ success }) => {
            if (success) {
                //user is in DB
                router.push(from ? `/${from}` : '/dashboard')
            }
        },
        onError: (error) => {
            if (error.data?.code === 'UNAUTHORIZED') {
                router.push('/sign-in')
            }
        },
        retry: true,
        retryDelay: 500
    })

    return (
        <div className=" w-full mt-24 flex justify-center " >
            <div className="flex flex-col items-center gap-2" >
                <Loader2 className=" h-8 w-8 animate-spin text-zinc-800" />
                <h3 className=" font-semibold text-xl" >Setting up your account...</h3>
                <p>You&apos;ll be redirected automatically.</p>
            </div>
        </div>
    )

}

export default CallbackPage
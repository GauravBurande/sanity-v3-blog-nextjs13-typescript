import Image from "next/image";
import Link from "next/link";
import urlFor from "../lib/urlFor";

export const RichTextComponents: any = {
    type: {
        image: ({value}: any) => {
                <div 
                className="relative w-full h-96 m-10 mx-auto"
                >
                    <Image
                        className="object-contain"
                        src={urlFor(value).url()}
                        alt="blog post image"
                        fill
                    />
                </div>
        }
    },
    lists: {
        bullet: ({children}: any) => {
            <ul 
            className="ml-10 py-5 list-disc space-y-5"
            >{children}</ul>
        },
        number: ({children}: any) => {
            <ol 
            className="mt-5 list-decimal"
            >{children}</ol>
        },   
    },
    blocks: {
        h1: ({children}: any) => {
            <h1 
            className="text-5xl py-10 font-bold my-3"
            >{children}</h1>
        },
        h2: ({children}: any) => {
            <h2 
            className="text-4xl py-10 font-bold my-3"
            >{children}</h2>
        },
        h3: ({children}: any) => {
            <h3 
            className="text-3xl py-10 font-bold my-3"
            >{children}</h3>
        },
        h4: ({children}: any) => {
            <h4 
            className="text-2xl py-10 font-bold my-3"
            >{children}</h4>
        },
        blockquote: ({children}: any) => {
            <blockquote 
            className="border-l-[#0acbcb] border-l-4 pl-5 py-5 my-5"
            >{children}</blockquote>
        },
    }, 

    marks: {
        link: ({children, value}: any) => {
           const rel = !value.href.startsWith("/")
           ? "noreferrer noonpener"
           : undefined

           return (
            <Link
            href={value.href}
            rel={rel}
            className="underline decoration-[#0acbcb] hover:decoration-white"
            >
                {children}
            </Link>
           )
        },
    },
}
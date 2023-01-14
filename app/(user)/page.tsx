import { previewData } from "next/headers"
import { groq } from "next-sanity"
import { client } from "../../lib/sanity.client"
import PreviewSuspense from "../../components/PreviewSuspense"
import PreviewBlogList from "../../components/PreviewBlogList"
import { lazy } from "react"

const query = groq`
  *[_type=='post']{
    ...,
    author->,
    categories[]->,
  } | order(_createdAt, desc)
`

const Page = async () => {

    const BlogList = lazy(() => import('../../components/BlogList'))

    if (previewData()) {
        return (
            < PreviewSuspense
            fallback={
            <div role="status">
                <p className="text-center text-lg animate-pulse text-[#0ACBCB]">Loading Preview Data...</p>
            </div>
        }>
            <PreviewBlogList query={query} />
            </PreviewSuspense>
        )
}

    const posts = await client.fetch(query)
    return (
        <>
        <BlogList posts={posts} />
        </>
    )
}

export default Page

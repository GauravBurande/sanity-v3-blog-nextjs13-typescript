import { previewData } from "next/headers"
import { groq } from "next-sanity"
import { client } from "../../lib/sanity.client"
import PreviewSuspense from "../../components/PreviewSuspense"
// import PreviewBlogList from "../../components/PreviewBlogList"
import BlogList from "../../components/BlogList"
import { lazy } from "react"

const query = groq`
  *[_type=='post']{
    ...,
    author->,
    categories[]->,
  } | order(_createdAt, desc)
`

const Page = async () => {

    const PreviewBlogList = lazy(() => import("../../components/PreviewBlogList"))

    if (previewData()) {

        // I'm having an error below here (index.js?cc3a:10 Uncaught TypeError: wakeable.then is not a function at Object.markComponentSuspended)
        // I think it's related to the previewsuspense component or something related to the fallback, I've tried possibly every solution available on stackoverflow
        // maybe the component wrapped in previewsuspense is not returning a promise

        return (
            < PreviewSuspense
            fallback={
            <div className="text-center text-lg animate-pulse text-[#0ACBCB]">Loading Preview Data...</div>
        }>
            <PreviewBlogList />
        </PreviewSuspense>
        )

//1. One common cause of this error is that the fallback prop passed to the Suspense component is not a valid React element. Make sure that the fallback prop is a valid React element or a functional component that returns a valid React element.

//2. Make sure that the component wrapped by the Suspense component is correctly imported and exported.

//3. Another common issue is that the component wrapped by the Suspense component doesn't return a promise. Make sure that the component wrapped by Suspense component returns a promise.

//4. Make sure that the component wrapped by the Suspense component is wrapped with the lazy() function, this is important to make sure the component is loaded on demand.

//5. Make sure that you are using the correct version of React and React-DOM.

//6. Make sure that you are using the correct version of next-react-dev and next-react-server
}

    const posts = await client.fetch(query)
    return (
        <>
        <BlogList posts={posts} />
        this is not preview data
        </>
    )
}

export default Page
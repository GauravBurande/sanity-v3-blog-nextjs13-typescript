import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import urlFor from "../lib/urlFor";
import ClientSideRoute from "./ClientSideRoute";


type Props = {
    posts: Post[];
}

const BlogList = ({posts}: Props) => {
  return (
    <div>
      <hr className="border-[#0ACBCB] mb-10"/>

      <div className="grid grid-cols-1 md:grid-cols-2 px-10 gap-10 gap-y-16 pb-24">
        {posts.map((post) => {

          return (
              <ClientSideRoute 
              key={post._id}
              route={`/post/${post.slug.current}`}>
            <div className="flex flex-col group cursor-pointer"
            >
              <div className="relative w-full h-80 drop-shadow-xl group-hover:scale-105 transition-transform duration-200 ease-out overflow-hidden">
                <Image
                  className="object-cover object-left lg:object-center"
                  src={urlFor(post.mainImage).url()}
                  alt={JSON.stringify(post.author.name)}
                  fill
                  sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 100vw,
              100vw"
                />

                <div className="absolute bottom-0 w-full bg-black bg-opacity-40 backdrop-blur-lg rounded drop-shadow-lg text-gray-100 p-5 flex justify-between">
                  <div>
                    {/* <p className="font-bold">{post.title}</p> */}
                    <p>
                      {new Date(post._createdAt).toLocaleDateString
                        (
                          "en-US", {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                        }
                      )}
                    </p>
                  </div>

                  <div className="flex flex-col md:flex-row gap-y-2 md:gap-x-2 items-center ml-4">
                    {post.categories.map((category, index) => {
                      return (
                            <div key={index} className="bg-[#0ACBCB] text-center text-black px-3 py-1 rounded-full text-sm font-semibold">
                              <p>{category.title}</p>
                            </div>
                          )
                        })}
                  </div>
                </div>
              </div>

              <div className="mt-5 flex-1">
                <p className="underline text-lg font-bold line-clamp-2`">{post.title}</p>
                <p className="text-gray-500 line-clamp-2">{post.description}</p>
              </div>

              <p className=" mt-5 font-bold flex items-center group-hover:underline">
                Read Post
                <ArrowUpRightIcon className="ml-2 h-4 w-4"/>
              </p>
            </div>
      </ClientSideRoute>
          );
        })
      }
      </div>
   </div>
  )
}

export default BlogList

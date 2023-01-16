import { groq } from "next-sanity";
import Image from "next/image";
import { client } from "../../../../lib/sanity.client";
import urlFor from "../../../../lib/urlFor";

type Props = {
    params: {
        slug: string;
    };
}

const Post = async ({params: {slug}}: Props) => {

    const query = groq`
    *[_type=='post' && slug.current == $slug][0]
    {
    ...,
    author->,
    categories[]->,
  }
    `

    const post: Post = await client.fetch(query, {slug})

  return (
    <article>
      <section>
        <div>
            <div className="relative">
                <Image
                    className="object-cover object-center mx-auto"
                    src={urlFor(post.mainImage).url()}
                    alt={JSON.stringify(post.author.name)}
                    fill
                    sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 100vw,
              100vw"
                />
            </div>
        </div>
      </section>
    </article>
  )
}

export default Post

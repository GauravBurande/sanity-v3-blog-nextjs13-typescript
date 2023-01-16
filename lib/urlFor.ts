import { client } from "./sanity.client";
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(client)

function urlFor(source: any) {
    return builder.image(source);
    // return builder.image(source).url();
}

export default urlFor;
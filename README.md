# This is a tech blog which I built using sanity v3, typescript, nextJS v13 and TailwindCSS for styling.
## I just wanted to know how's the developer experience of using sanity as a backend service and learn typescript by using typescript in one of my portfolio projects.
### In my opinion firebase is more easy to setup and use for backend services than sanity as the sanity developer community is not that much big, it'll be harder for you to find a solution if you run into any error, It'll be a little bit early to use. On the other hand it's so easy to find a solution to any error caused while using firebase because it's been in the dev community for a while.

You can visit the webapp here: [CapTon Blog](https://urcapton.netlify.app/)

My preffered weapons of choice to build this webapp:

* Sanity v3
* NextJS v13
* TailwindCSS

I tried using appDir instead of pages directory, as I don't have much experience or the required experience using nextJS with TypeScript, I cannot explain much about what's better and other things.

I used portabletext-react package to populate the blog data fetched from sanity backend, but can't figure out why it's not styling the components.
There are two different packages react-portable-text and @portabletext/react with 90% of similarities, they do the exactly same thing.
And it's not even clear which package to use. I installed react-portable-text and it's importing the portableText function from @portabletext/react.

But the studio provided by sanity is really awesome. You can visit it on your own webapp via ```/studio``` route.
I used next-sanity module to integrate sanity studio in the nextJS webapp.

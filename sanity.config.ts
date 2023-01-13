import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas'
import { myTheme } from './theme'
import Logo from './components/Logo'
import StudioNavbar from './components/StudioNavbar'

const projectId: any = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset: any = process.env.NEXT_PUBLIC_SANITY_DATASET

export default defineConfig({
  basePath: "/studio",
  name: 'Blog_Studio',
  title: 'Blog Studio',

  projectId,
  dataset,

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
  studio: {
    components: {
      logo: Logo,
      navbar: StudioNavbar,
    }
  },
  theme: myTheme
})

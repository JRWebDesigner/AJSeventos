import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schema } from "./src/sanity/schemaTypes";

export default defineConfig({
  projectId: 'w7ejryvg',
  dataset: 'production',
  plugins: [
    structureTool(),
  ],
  schema,
});
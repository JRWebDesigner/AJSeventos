import type { SchemaTypeDefinition } from "sanity";
import { imageLinkType } from "./imageLink";
import { GalleryPhotos } from "./GalleryPhotos";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [imageLinkType,GalleryPhotos],
};
import type { SchemaTypeDefinition } from "sanity";
import { imageLinkType } from "./imageLink";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [imageLinkType],
};
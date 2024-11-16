import { defineField, defineType } from "sanity";

export const GalleryPhotos = defineType({
  name: "GalleryPhotos",
  type: "document",
  fields: [
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true, // Permite recortar la imagen
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative Text",
          description: "Texto alternativo para la accesibilidad.",
        },
      ],
    }),
  ],
    preview: {
    select: {
      media: "image",
    },
  },
});
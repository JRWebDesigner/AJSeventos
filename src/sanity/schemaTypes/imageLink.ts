import { defineField, defineType } from "sanity";

export const imageLinkType = defineType({
  name: "imageLink",
  title: "Image with Link",
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
    defineField({
      name: "link",
      title: "Link",
      type: "url",
      description: "Enlace asociado a la imagen.",
    }),
    defineField({
      name: "Fecha",
      title: "Titulo",
      type: "string",
      description: "Fecha del evento",
    }),
    defineField({
      name: "Ciudad",
      title: "Ciudad",
      type: "text",
      description: "Ciudad del evento",
    }),
    defineField({
      name: "Lugar",
      title: "Lugar",
      type: "text",
      description: "Lugar del evento",
    }),
  ],
  preview: {
    select: {
      Fecha: "Fecha",
      media: "image",
    },
  },
});
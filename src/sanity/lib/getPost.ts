import { sanityClient } from "sanity:client";

export async function getImageLinks() {
  const query = `*[_type == "imageLink"] | order(Fecha desc){ 
    _id, 
    image{asset->{url}}, 
    link, 
    Fecha, 
    Ciudad,
    Lugar
  }`;
  
  const imageLinks = await sanityClient.fetch(query);
  return imageLinks;
}

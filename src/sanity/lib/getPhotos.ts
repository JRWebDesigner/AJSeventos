import { sanityClient } from "sanity:client";

export async function getPhotos() {
  const query = `*[_type == "GalleryPhotos"] | order(_createdAt desc){ 
      _id, 
      image {asset -> {url},alt} 
  }`;
  
  const photosGallery = await sanityClient.fetch(query);
  return photosGallery;
}

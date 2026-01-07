import { type SanityDocument } from "next-sanity";
import { client } from "@/src/sanity/client";
import ServicesClient from "./ServicesClient";

const SERVICES_QUERY = `
  *[_type == "service"] | order(_createdAt asc) {
    _id,
    title,
    description,
    impact,
    icon
  }
`;

const options = { next: { revalidate: 30 } };

export default async function ServicesPage() {
  const services = await client.fetch<SanityDocument[]>(
    SERVICES_QUERY,
    {},
    options
  );

  return <ServicesClient services={services} />;
}

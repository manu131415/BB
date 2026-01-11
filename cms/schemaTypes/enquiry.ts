// sanity/schema/enquiry.ts
import { defineField, defineType } from "sanity"

export default defineType({
  name: "enquiry",
  title: "Enquiry",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "phone",
      title: "Phone",
      type: "string",
    }),
    defineField({
      name: "company",
      title: "Company / Brand",
      type: "string",
    }),
    defineField({
      name: "subject",
      title: "Subject",
      type: "string",
    }),
    defineField({
      name: "budget",
      title: "Budget",
      type: "string",
    }),
    defineField({
      name: "timeline",
      title: "Timeline",
      type: "string",
    }),
    defineField({
      name: "services",
      title: "Services Interested",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "message",
      title: "Project Brief",
      type: "text",
      validation: (rule) => rule.required(),
    }),
  ],
})

import {defineField, defineType} from 'sanity' 

const enquiry = defineType({
  name: 'enquiry',
  title : 'Enquiry',
  type: 'document',
  fields: [
    defineField({
      name: 'Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'email',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'phone',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'company_or_brand_name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'project_or_collaboration_details',
      type: 'text', 
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'budget',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
     defineField({
      name: 'timeline',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'project_brief',
      type: 'text',
    }),
  ],
})

export default enquiry

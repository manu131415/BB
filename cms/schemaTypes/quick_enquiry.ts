// schemas/quick_enquiry.ts
import { defineField, defineType } from 'sanity';

const quick_enquiry = defineType({
  name: 'quick_enquiry',
  title: 'Quick Enquiry',
  type: 'document',
  fields: [
    defineField({
      name: 'email',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'message',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'createdAt',
      type: 'datetime',
      readOnly: true,
      initialValue: () => new Date().toISOString(),
    }),
  ],
});

export default quick_enquiry;

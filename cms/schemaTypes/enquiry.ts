export default {
  name: 'enquiry',
  title: 'Enquiries',
  type: 'document',
  fields: [
    { name: 'name', title: 'Name', type: 'string' },
    { name: 'email', title: 'Email', type: 'string' },
    { name: 'brand', title: 'Brand', type: 'string' },
    { name: 'projectType', title: 'Project Type', type: 'string' },
    { name: 'budget', title: 'Budget', type: 'string' },
    { name: 'message', title: 'Message', type: 'text' }
  ]
}

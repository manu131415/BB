export default {
  name: 'client',
  title: 'Clients',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Client Name',
      type: 'string'
    },
    {
      name: 'logo',
      title: 'Client Logo',
      type: 'image',
      options: { hotspot: true }
    },
    {
      name: 'industry',
      title: 'Industry',
      type: 'string'
    },
    {
      name: 'featured',
      title: 'Featured Client',
      type: 'boolean'
    }
  ]
}

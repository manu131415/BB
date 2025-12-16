export default {
  name: 'service',
  title: 'Services',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Service Title',
      type: 'string'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text'
    },
    {
      name: 'impact',
      title: 'Impact Statement',
      type: 'string'
    },
    {
      name: 'icon',
      title: 'Service Icon',
      type: 'image'
    }
  ]
}

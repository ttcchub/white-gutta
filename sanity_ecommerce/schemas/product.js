export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'array',
      of: [{ type: 'image' }],
      options: {
        hotspot: true,
      }
    },
    { 
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    { 
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 90,
      }
    },
    { 
      name: 'price',
      title: 'Price',
      type: 'number',
    },
    { 
      name: 'details',
      title: 'Details',
      type: 'string',
    },
    { 
      name: 'soldout',
      title: 'Sold Out',
      type: 'string',
    },
    { 
      name: 'disableBtn',
      title: 'Disable Btn',
      type: 'boolean',
    },
    {
      name: 'countInStock',
      title: 'CountInStock',
      type: 'number',
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
    },
  ]
}

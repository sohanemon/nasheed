import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'test',
  title: 'Test',
  type: 'document',
  fields: [
    defineField({
      name: 'emon',
      title: 'Emon',
      type: 'string',
    }),
    defineField({
      name: 'another',
      title: 'Another',
      type: 'text',
    }),
    defineField({
      name: 'audio',
      title: 'Audio',
      type: 'file',
      options: {
        storeOriginalFilename: true,
      },
    }),
  ],
  preview: {
    select: {
      title: 'emon',
    },
  },
})

import { defineConfig } from "tinacms";

export default defineConfig({
  branch: "main",
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  token: process.env.TINA_TOKEN,
  build: {
    outputFolder: "admin",
    publicFolder: "public"
  },
  media: {
    tina: {
      mediaRoot: "/assets/images/uploads",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
        {
  name: 'pages',
  path: 'content',
  label: 'Pages',
  label_singular: 'Page',
  description: 'All pages',
  i18n: true,
  ui: {
  allowedActions: {
    create: true,
    createNestedFolder: false,
  },
},
  
  ui: {
  filename: {
    readonly: true,
    slugify: (values) => {
      const title = values.title || "untitled"
      const date = values.date ? new Date(values.date) : new Date()
      const year = date.getFullYear()
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');

      const slug = title
        .toLowerCase()
        .replace(/ /g, '-')

      const path = `${slug}/_index`

      return path
    },
  },
},
  
  
  



match: {
    include: '**/_index',
    exclude: '{config/*/_index,indexes/*/_index,pages/*/_index,products/*/_index,products_tags/*/_index,}',
},





fields: [
        {
  label: 'is page',
  name: 'isPage',
  type: 'boolean', ui: { component: 'hidden' },
  default: true,
  required: false,
  i18n: 'duplicate'
},
        {
  label: 'Draft',
  name: 'draft',
  type: 'boolean',
  default: true,
  required: false,
  i18n: true
},
        {
  label: 'Page title',
  hint: 'Displayed in tabs, search results, and in SMS/Messages/Social networks preview',
  name: 'title',
  type: 'string',
  required: true,
  i18n: true,
  isTitle: true
  
},
        {
  label: 'Description',
  hint: 'Displayed in tabs, search results, and in SMS/Messages/Social networks preview',
  name: 'description',
  type: 'string', ui: { component: 'textarea' },
  required: false,
  i18n: true 
},
        {
  label: 'Image principale',
  hint: 'Displayed in search results, and in SMS/Messages/Social networks preview',
  name: 'image',
  type: 'object',
  required: false,
  i18n: true,
  collapsed: true,
  fields: [
  
        {
  label: 'Image',
  hint: 'Resize and compress image before sending : https://bulkresizephotos.com/fr?quality=90&type=width&width=1600',
  name: 'src',
  type: 'image',
  required: false,
  i18n: true,
  choose_url: false,
  media_library: {
    config: {
      max_file_size: '700000'
    }
  },
  media_path: '/assets/images/uploads',
  public_path: '/images/uploads'
},
        {
  label: 'Text alternative',
  hint: 'For an image that conveys information (leave blank if decorative image)',
  name: 'alt',
  type: 'string',
  required: false,
  i18n: true
}
,
]
},
        {
  label: 'Hero',
  name: 'hero',
  type: 'object',
  required: false,
  collapsed: true,
  i18n: true,
  fields: [
  
        {
  label: 'Surtitle',
  name: 'surtitle',
  type: 'string',
  required: false,
  i18n: true 
},
        {
  label: 'Title',
  name: 'title',
  type: 'string',
  required: false,
  i18n: true 
},
        {
  label: 'Text',
  name: 'text_markdown',
  nameOverride: 'text',
  type: 'rich-text',
  minimal: true,
  buttons: ['bold', 'italic', 'link', 'bulleted-list'],
  editor_components: [],
  modes: ['rich_text'],
  required: false,
  i18n: true 
},
        {
  label: 'CTAs',
  label_singular: 'CTA',
  name: 'ctas',
  type: 'object', list: true,
  collapsed: true,
  i18n: true,
  min: 0,
  max: 2,
  allow_add: true,
  required: false,
  summary: '{{fields.text}}',
  fields: [
  
        {
  label: 'Text',
  name: 'text',
  type: 'string',
  required: false,
  i18n: true 
},
        {
  label: 'URL',
  name: 'url',
  type: 'string',
  required: false,
  i18n: true 
},
        {
  label: 'Language',
  hint: 'Enter code lang (e.g. fr) if different of the current page language',
  name: 'lang',
  type: 'string',
  required: false,
  i18n: true
},
        {
  label: 'Is blank?',
  name: 'blank',
  type: 'boolean',
  required: false,
  i18n: true
},
]
}
,
        {
  label: 'Image',
  name: 'image',
  type: 'object',
  required: false,
  i18n: true,
  collapsed: true,
  fields: [
  
        {
  label: 'Image',
  hint: 'Resize and compress image before sending : https://bulkresizephotos.com/fr?quality=90&type=width&width=1600',
  name: 'src',
  type: 'image',
  required: false,
  i18n: true,
  choose_url: false,
  media_library: {
    config: {
      max_file_size: '700000'
    }
  },
  media_path: '/assets/images/uploads',
  public_path: '/images/uploads'
},
        {
  label: 'Text alternative',
  hint: 'For an image that conveys information (leave blank if decorative image)',
  name: 'alt',
  type: 'string',
  required: false,
  i18n: true
}
,
        {
  label: 'Credit',
  name: 'credit',
  type: 'rich-text',
  minimal: true,
  buttons: ['link'],
  editor_components: [],
  modes: ['rich_text'],
  required: false,
  i18n: true 
},
        {
  label: 'Is background?',
  name: 'background',
  type: 'boolean',
  required: false,
  i18n: 'duplicate' 
},
        {
  label: 'Darken?',
  name: 'darken',
  type: 'boolean',
  required: false,
  i18n: 'duplicate' 
},
]
},
        {
  label: 'Video',
  name: 'video',
  type: 'object',
  required: false,
  i18n: true,
  collapsed: true,
  fields: [
  
        {
  label: 'MP4',
  hint: 'Video (MP4)',
  name: 'mp4', media: { accept: 'video/mp4' },
  type: 'image',
  required: false,
  i18n: 'duplicate',
  choose_url: true,
  media_library: {
    config: {
      max_file_size: 5000000
    }
  },
  media_path: '/static/assets/videos',
  public_path: '/assets/videos'
}
,
        {
  label: 'WEBM',
  hint: 'Video (WEBM)',
  name: 'webm', media: { accept: 'video/webm' },
  type: 'image',
  required: false,
  i18n: 'duplicate',
  choose_url: true,
  media_library: {
    config: {
      max_file_size: 5000000
    }
  },
  media_path: '/static/assets/videos',
  public_path: '/assets/videos'
}
,
        {
  label: 'Mobile MP4',
  hint: 'Video (MP4)',
  name: 'mp4_mobile',
  type: 'image',
  required: false,
  i18n: 'duplicate',
  choose_url: true,
  media_library: {
    config: {
      max_file_size: 5000000
    }
  },
  media_path: '/static/assets/videos',
  public_path: '/assets/videos'
},
        {
  label: 'Mobile WEBM',
  hint: 'Video (WEBM)',
  name: 'webm_mobile',
  type: 'image',
  required: false,
  i18n: 'duplicate',
  choose_url: true,
  media_library: {
    config: {
      max_file_size: 5000000
    }
  },
  media_path: '/static/assets/videos',
  public_path: '/assets/videos'
},
        {
  label: 'Controls',
  name: 'controls',
  type: 'boolean',
  default: true,
  required: false,
  i18n: 'duplicate'
}
,
        {
  label: 'Autoplay',
  name: 'autoplay',
  type: 'boolean',
  default: false,
  required: false,
  i18n: 'duplicate'
}
,
        {
  label: 'Loop',
  name: 'loop',
  type: 'boolean',
  default: false,
  required: false,
  i18n: 'duplicate'
}
,
        {
  label: 'Legend',
  name: 'legend',
  type: 'string',
  required: false,
  i18n: true 
},
        {
  label: 'Transcription',
  name: 'transcription',
  type: 'string', ui: { component: 'textarea' },
  required: false,
  i18n: true
}
,
        {
  label: 'Is background?',
  name: 'background',
  type: 'boolean',
  required: false,
  i18n: 'duplicate' 
},
        {
  label: 'Darken?',
  name: 'darken',
  type: 'boolean',
  required: false,
  i18n: 'duplicate' 
},
        {
  label: 'Poster',
  hint: 'Placehoster image for video',
  name: 'poster',
  type: 'image',
  required: false,
  i18n: true,
  choose_url: false,
  media_library: {
    config: {
      max_file_size: '700000'
    }
  },
  media_path: '/assets/images/uploads',
  public_path: '/images/uploads'
},
]
}
,
        
{
  label: 'Alignment',
  hint: '',
  name: 'align',
  type: 'string', ui: { component: 'select' },
    options: [{ label: 'Start', value: 'start' },{ label: 'Center', value: 'center' },{ label: 'End', value: 'end' },
    ],
  required: false,
  i18n: 'duplicate'
}

,
]
},
        {
  label: 'Body',
  name: 'body',
  type: 'rich-text',
  required: false,
  i18n: true,
  isBody: true
  
},
        {
  label: 'Blocs',
  label_singular: 'Bloc',
  required: false,
  name: 'blocks',
  i18n: true,collapsed: false,
    type: 'object', list: true,
    templateKey: 'type', templates: [{
  label: 'Audio',
  name: 'audio',
  type: 'object',
  required: false,
  i18n: true,
  collapsed: false,
  summary: '{{heading.title}}',
  fields: [
  
        {
  label: 'Heading',
  name: 'heading',
  type: 'object',
  required: false,
  i18n: true,
  collapsed: true,
  summary: '{{title}}',
  fields: [
  
        {
  label: 'Surtitle',
  name: 'surtitle',
  type: 'string',
  required: false,
  i18n: true 
},
        {
  label: 'Title',
  name: 'title',
  type: 'string',
  required: false,
  i18n: true 
},
        {
  label: 'Text',
  name: 'text_markdown',
  nameOverride: 'text',
  type: 'rich-text',
  minimal: true,
  buttons: ['bold', 'italic', 'link', 'bulleted-list'],
  editor_components: [],
  modes: ['rich_text'],
  required: false,
  i18n: true 
},
]
}
,
        {
  label: 'Audios',
  name: 'audio',
  type: 'object',
  required: false,
  i18n: true,
  collapsed: true,
  fields: [
  
        {
  label: 'MP3',
  hint: 'Audio (MP3)',
  name: 'mp3',
  type: 'image',
  required: false,
  i18n: 'duplicate',
  choose_url: true,
  media_library: {
    config: {
      max_file_size: 700000
    }
  },
  media_path: '/static/assets/audios',
  public_path: '/assets/audios'
}
,
        {
  label: 'OGG',
  hint: 'Audio (OGG)',
  name: 'ogg',
  type: 'image',
  required: false,
  i18n: 'duplicate',
  choose_url: true,
  media_library: {
    config: {
      max_file_size: 700000
    }
  },
  media_path: '/static/assets/audios',
  public_path: '/assets/audios'
}
,
        {
  label: 'Autoplay',
  name: 'autoplay',
  type: 'boolean',
  default: false,
  required: false,
  i18n: 'duplicate'
}
,
        {
  label: 'Loop',
  name: 'loop',
  type: 'boolean',
  default: false,
  required: false,
  i18n: 'duplicate'
}
,
        {
  label: 'Transcription',
  name: 'transcription',
  type: 'string', ui: { component: 'textarea' },
  required: false,
  i18n: true
}
,
]
}
,
        {
  label: 'With a background?',
  name: 'background',
  type: 'boolean',
  default: false,
  required: false,
  i18n: 'duplicate' 
},
]
}
,{
  label: 'Alert',
  name: 'alert',
  type: 'object',
  required: false,
  i18n: true,
  collapsed: false,
  summary: '{{text_markdown}}',
  fields: [
  
        {
  label: 'Text',
  name: 'text_markdown',
  nameOverride: 'text',
  type: 'rich-text',
  minimal: true,
  buttons: ['bold', 'italic', 'link', 'bulleted-list'],
  editor_components: [],
  modes: ['rich_text'],
  required: false,
  i18n: true 
},
        
{
  label: 'State',
  hint: '',
  name: 'state',
  type: 'string', ui: { component: 'select' },
    options: [{ label: 'Danger', value: 'danger' },{ label: 'Dark', value: 'dark' },{ label: 'Info', value: 'info' },{ label: 'Light', value: 'light' },{ label: 'Primary', value: 'primary' },{ label: 'Secondary', value: 'secondary' },{ label: 'Success', value: 'success' },{ label: 'Warning', value: 'warning' },
    ],
    default: 'light',
  required: true,
  i18n: 'duplicate'
}

,
        {
  label: 'With a background?',
  name: 'background',
  type: 'boolean',
  default: false,
  required: false,
  i18n: 'duplicate' 
},
]
}
,{
  label: 'Chart',
  name: 'chart',
  type: 'object',
  required: false,
  i18n: true,
  collapsed: false,
  summary: '{{heading.title}}',
  fields: [
  
        {
  label: 'Heading',
  name: 'heading',
  type: 'object',
  required: false,
  i18n: true,
  collapsed: true,
  summary: '{{title}}',
  fields: [
  
        {
  label: 'Surtitle',
  name: 'surtitle',
  type: 'string',
  required: false,
  i18n: true 
},
        {
  label: 'Title',
  name: 'title',
  type: 'string',
  required: false,
  i18n: true 
},
        {
  label: 'Text',
  name: 'text_markdown',
  nameOverride: 'text',
  type: 'rich-text',
  minimal: true,
  buttons: ['bold', 'italic', 'link', 'bulleted-list'],
  editor_components: [],
  modes: ['rich_text'],
  required: false,
  i18n: true 
},
]
}
,
        {
  label: 'Chart',
  name: 'chart',
  type: 'object',
  required: false,
  i18n: true,
  collapsed: true,
  fields: [
  
        {
  label: 'Title',
  name: 'title',
  type: 'string',
  required: false,
  i18n: true 
},
        
{
  label: 'Chart type',
  hint: '',
  name: 'type',
  type: 'string', ui: { component: 'select' },
    options: [{ label: 'Bar', value: 'bar' },{ label: 'Pie', value: 'pie' },{ label: 'Line', value: 'line' },{ label: 'Polar area', value: 'polarArea' },{ label: 'Radar', value: 'radar' },
    ],
    default: 'bar',
  required: false,
  i18n: 'duplicate'
}

,
        {
  label: 'Items',
  label_singular: 'Item',
  name: 'items',
  type: 'object', list: true,
  required: false,
  i18n: true,
  collapsed: true,fields: [
  
        {
  label: 'Label',
  name: 'label',
  type: 'string',
  required: false,
  i18n: true 
},
        {
  label: 'Value',
  name: 'value',
  type: 'string',
  required: false,
  i18n: true 
},
        {
  label: 'Color',
  name: 'color',
  type: 'string',
  allowInput: true,
  enableAlpha: true,
  required: false,
  i18n: 'duplicate'
}
,
]
},
]
}
,
        
{
  label: 'Grid',
  hint: '',
  name: 'grid',
  type: 'string', ui: { component: 'select' },
    options: [{ label: 'Small', value: 'small' },{ label: 'Medium', value: 'medium' },{ label: 'Large', value: 'large' },{ label: 'Container', value: 'container' },{ label: 'Full', value: 'full' },
    ],
    default: 'large',
  required: true,
  i18n: 'duplicate'
}

,
        {
  label: 'With a background?',
  name: 'background',
  type: 'boolean',
  default: false,
  required: false,
  i18n: 'duplicate' 
},
]
}
,{
  label: 'Comparison',
  name: 'comparison',
  type: 'object',
  required: false,
  i18n: true,
  collapsed: false,
  summary: '{{heading.title}}',
  fields: [
  
        {
  label: 'Heading',
  name: 'heading',
  type: 'object',
  required: false,
  i18n: true,
  collapsed: true,
  summary: '{{title}}',
  fields: [
  
        {
  label: 'Surtitle',
  name: 'surtitle',
  type: 'string',
  required: false,
  i18n: true 
},
        {
  label: 'Title',
  name: 'title',
  type: 'string',
  required: false,
  i18n: true 
},
        {
  label: 'Text',
  name: 'text_markdown',
  nameOverride: 'text',
  type: 'rich-text',
  minimal: true,
  buttons: ['bold', 'italic', 'link', 'bulleted-list'],
  editor_components: [],
  modes: ['rich_text'],
  required: false,
  i18n: true 
},
]
}
,
        {
  label: 'Column',
  name: 'column',
  type: 'number',
  min: 1,
  max: 6,
  value_type: 'int',
  default: 3,
  i18n: 'duplicate'
}
,
        {
  label: 'Items',
  label_singular: 'Item',
  name: 'items',
  type: 'object', list: true,
  required: false,
  i18n: true,
  collapsed: true,
  summary: '{{title}}',
  fields: [
  
        {
  label: 'Title',
  name: 'title',
  type: 'string',
  required: false,
  i18n: true 
},
        {
  label: 'Text',
  name: 'text',
  type: 'string',
  required: false,
  i18n: true 
},
        {
  label: 'Badge',
  hint: 'Show a badge',
  name: 'badge',
  type: 'string',
  required: false,
  i18n: true
}
,
        {
  label: 'Offer',
  name: 'offer',
  type: 'object',
  required: false,
  i18n: true,
  collapsed: false,
  fields: [
  
        {
  label: 'Price',
  hint: 'e.g: 300000 (for 300 000 €)',
  name: 'price',
  type: 'number',
  required: false,
  i18n: 'duplicate'
}
,
        


{
  label: 'Discount',
  hint: 'Amount of the reduction, e.g: 30%',
  name: 'discount',
  type: 'string',
  required: false,
  i18n: 'duplicate',
  


  pattern: [
    "^[0-9]*(%?)$",
    "Value only (without currency)"
  ]

}
,
        {
  label: 'Hide price',
  name: 'hide_price',
  type: 'boolean',
  required: false,
  i18n: 'duplicate'
}
,
        {
  label: 'Text',
  name: 'text',
  type: 'string',
  required: false,
  i18n: true 
},
]
}
,
        {
  label: 'Arguments',
  label_singular: 'Argument',
  name: 'arguments',
  type: 'object', list: true,
  required: false,
  i18n: true,
  collapsed: true,
  summary: '{{text}}',
  fields: [
  
        {
  label: 'Icon',
  hint: 'Icon name from https://icons.getbootstrap.com/',
  name: 'icon',
  type: 'string',
  required: false,
  i18n: 'duplicate'
}
,
        {
  label: 'Text',
  name: 'text',
  type: 'string',
  required: false,
  i18n: true 
},
]
}
,
        {
  label: 'Is highlighted?',
  name: 'is_highlighted',
  type: 'boolean',
  required: false,
  i18n: true
},
        {
  label: 'CTA',
  name: 'cta',
  type: 'object',
  required: false,
  i18n: true,
  collapsed: true,
  summary: '{{text}}',
  fields: [
  
        {
  label: 'Text',
  name: 'text',
  type: 'string',
  required: false,
  i18n: true 
},
        {
  label: 'URL',
  name: 'url',
  type: 'string',
  required: false,
  i18n: true 
},
        {
  label: 'Language',
  hint: 'Enter code lang (e.g. fr) if different of the current page language',
  name: 'lang',
  type: 'string',
  required: false,
  i18n: true
},
        {
  label: 'Is blank?',
  name: 'blank',
  type: 'boolean',
  required: false,
  i18n: true
},
]
}
,
]
},
        {
  label: 'With a background?',
  name: 'background',
  type: 'boolean',
  default: false,
  required: false,
  i18n: 'duplicate' 
},
]
}
,{
  label: 'Call to action',
  name: 'cta',
  type: 'object',
  required: false,
  i18n: true,
  collapsed: false,
  summary: '{{cta.text}}',
  fields: [
  
        {
  label: 'Heading',
  name: 'heading',
  type: 'object',
  required: false,
  i18n: true,
  collapsed: true,
  summary: '{{title}}',
  fields: [
  
        {
  label: 'Surtitle',
  name: 'surtitle',
  type: 'string',
  required: false,
  i18n: true 
},
        {
  label: 'Title',
  name: 'title',
  type: 'string',
  required: false,
  i18n: true 
},
        {
  label: 'Text',
  name: 'text_markdown',
  nameOverride: 'text',
  type: 'rich-text',
  minimal: true,
  buttons: ['bold', 'italic', 'link', 'bulleted-list'],
  editor_components: [],
  modes: ['rich_text'],
  required: false,
  i18n: true 
},
]
}
,
        {
  label: 'CTAs',
  label_singular: 'CTA',
  name: 'ctas',
  type: 'object', list: true,
  collapsed: true,
  i18n: true,
  min: 0,
  max: 2,
  allow_add: true,
  required: false,
  summary: '{{fields.text}}',
  fields: [
  
        {
  label: 'Text',
  name: 'text',
  type: 'string',
  required: false,
  i18n: true 
},
        {
  label: 'URL',
  name: 'url',
  type: 'string',
  required: false,
  i18n: true 
},
        {
  label: 'Language',
  hint: 'Enter code lang (e.g. fr) if different of the current page language',
  name: 'lang',
  type: 'string',
  required: false,
  i18n: true
},
        {
  label: 'Is blank?',
  name: 'blank',
  type: 'boolean',
  required: false,
  i18n: true
},
]
}
,
        {
  label: 'With a background?',
  name: 'background',
  type: 'boolean',
  default: false,
  required: false,
  i18n: 'duplicate' 
},
]
}
,{
  label: 'Datas',
  name: 'datas',
  type: 'object',
  required: false,
  i18n: true,
  collapsed: false,
  summary: '{{heading.title}}',
  fields: [
  
        {
  label: 'Heading',
  name: 'heading',
  type: 'object',
  required: false,
  i18n: true,
  collapsed: true,
  summary: '{{title}}',
  fields: [
  
        {
  label: 'Surtitle',
  name: 'surtitle',
  type: 'string',
  required: false,
  i18n: true 
},
        {
  label: 'Title',
  name: 'title',
  type: 'string',
  required: false,
  i18n: true 
},
        {
  label: 'Text',
  name: 'text_markdown',
  nameOverride: 'text',
  type: 'rich-text',
  minimal: true,
  buttons: ['bold', 'italic', 'link', 'bulleted-list'],
  editor_components: [],
  modes: ['rich_text'],
  required: false,
  i18n: true 
},
]
}
,
        {
  label: 'Column',
  name: 'column',
  type: 'number',
  min: 1,
  max: 6,
  value_type: 'int',
  default: 3,
  i18n: 'duplicate'
}
,
        {
  label: 'Items',
  label_singular: 'Item',
  name: 'items',
  type: 'object', list: true,
  required: false,
  i18n: true,
  collapsed: true,
  summary: '{{title}}',
  fields: [
  
        {
  label: 'Prefix',
  name: 'prefix',
  type: 'string',
  required: false,
  i18n: true 
},
        {
  label: 'Value',
  name: 'value_number',
  nameOverride: 'value',
  type: 'number',
  required: false,
  i18n: true 
},
        {
  label: 'Suffix',
  hint: 'e.g: %',
  name: 'suffix',
  type: 'string',
  required: false,
  i18n: true 
},
        {
  label: 'Limit',
  hint: '',
  name: 'limit',
  type: 'number',
  required: true,
  default: 100,
  i18n: 'duplicate'
},
        {
  label: 'Title',
  name: 'title',
  type: 'string',
  required: false,
  i18n: true 
},
        {
  label: 'Text',
  name: 'text',
  type: 'string',
  required: false,
  i18n: true 
},
]
},
        {
  label: 'With a background?',
  name: 'background',
  type: 'boolean',
  default: false,
  required: false,
  i18n: 'duplicate' 
},
]
},{
  label: 'Editorial',
  name: 'editorial',
  type: 'object',
  required: false,
  i18n: true,
  collapsed: false,
  summary: '{{title}}',
  fields: [
  
        
{
  label: 'Direction',
  hint: '',
  name: 'direction',
  type: 'string', ui: { component: 'select' },
    options: [{ label: 'Text on the left / image on the right', value: 'ltr' },{ label: 'Image on the left / text on the right', value: 'rtl' },
    ],
    default: 'ltr',
  required: false,
  i18n: 'duplicate'
}
,
        {
  label: 'Surtitle',
  name: 'surtitle',
  type: 'string',
  required: false,
  i18n: true 
},
        {
  label: 'Title',
  name: 'title',
  type: 'string',
  required: false,
  i18n: true 
},
        {
  label: 'Text',
  name: 'text_markdown',
  nameOverride: 'text',
  type: 'rich-text',
  minimal: true,
  buttons: ['bold', 'italic', 'link', 'bulleted-list'],
  editor_components: [],
  modes: ['rich_text'],
  required: false,
  i18n: true 
},
        {
  label: 'Notes',
  label_singular: 'Note',
  hint: 'To link a word in the text to a note, suffix it with "[*]". Notes and "[\\*]" are linked by their order.',
  name: 'notes',
  type: 'object', list: true,
  required: false,
  i18n: true,
  collapsed: true,
  fields: [
  
        {
  label: 'Text',
  name: 'text',
  type: 'string',
  required: false,
  i18n: true 
},
]
},
        {
  label: 'CTAs',
  label_singular: 'CTA',
  name: 'ctas',
  type: 'object', list: true,
  collapsed: true,
  i18n: true,
  min: 0,
  max: 2,
  allow_add: true,
  required: false,
  summary: '{{fields.text}}',
  fields: [
  
        {
  label: 'Text',
  name: 'text',
  type: 'string',
  required: false,
  i18n: true 
},
        {
  label: 'URL',
  name: 'url',
  type: 'string',
  required: false,
  i18n: true 
},
        {
  label: 'Language',
  hint: 'Enter code lang (e.g. fr) if different of the current page language',
  name: 'lang',
  type: 'string',
  required: false,
  i18n: true
},
        {
  label: 'Is blank?',
  name: 'blank',
  type: 'boolean',
  required: false,
  i18n: true
},
]
}
,
        {
  label: 'Image',
  name: 'image',
  type: 'object',
  required: false,
  i18n: true,
  collapsed: true,
  fields: [
  
        {
  label: 'Image',
  hint: 'Resize and compress image before sending : https://bulkresizephotos.com/fr?quality=90&type=width&width=1600',
  name: 'src',
  type: 'image',
  required: false,
  i18n: true,
  choose_url: false,
  media_library: {
    config: {
      max_file_size: '700000'
    }
  },
  media_path: '/assets/images/uploads',
  public_path: '/images/uploads'
},
        {
  label: 'Text alternative',
  hint: 'For an image that conveys information (leave blank if decorative image)',
  name: 'alt',
  type: 'string',
  required: false,
  i18n: true
}
,
        {
  label: 'Credit',
  name: 'credit',
  type: 'rich-text',
  minimal: true,
  buttons: ['link'],
  editor_components: [],
  modes: ['rich_text'],
  required: false,
  i18n: true 
},
]
},
        {
  label: 'With a background?',
  name: 'background',
  type: 'boolean',
  default: false,
  required: false,
  i18n: 'duplicate' 
},
]
}
,{
  label: 'Embed',
  name: 'embed',
  type: 'object',
  required: false,
  i18n: true,
  collapsed: false,
  summary: '{{heading.title}}',
  fields: [
  
        {
  label: 'Heading',
  name: 'heading',
  type: 'object',
  required: false,
  i18n: true,
  collapsed: true,
  summary: '{{title}}',
  fields: [
  
        {
  label: 'Surtitle',
  name: 'surtitle',
  type: 'string',
  required: false,
  i18n: true 
},
        {
  label: 'Title',
  name: 'title',
  type: 'string',
  required: false,
  i18n: true 
},
        {
  label: 'Text',
  name: 'text_markdown',
  nameOverride: 'text',
  type: 'rich-text',
  minimal: true,
  buttons: ['bold', 'italic', 'link', 'bulleted-list'],
  editor_components: [],
  modes: ['rich_text'],
  required: false,
  i18n: true 
},
]
}
,
        {
  label: 'Embed',
  name: 'embed',
  type: 'string', ui: { component: 'textarea' },
  required: false,
  i18n: 'duplicate'
}
,
        {
  label: 'With a background?',
  name: 'background',
  type: 'boolean',
  default: false,
  required: false,
  i18n: 'duplicate' 
},
]
}
,{
  label: 'FAQ',
  name: 'faq',
  type: 'object',
  required: false,
  i18n: true,
  collapsed: false,
  summary: '{{heading.title}}',
  fields: [
  
        {
  label: 'Heading',
  name: 'heading',
  type: 'object',
  required: false,
  i18n: true,
  collapsed: true,
  summary: '{{title}}',
  fields: [
  
        {
  label: 'Surtitle',
  name: 'surtitle',
  type: 'string',
  required: false,
  i18n: true 
},
        {
  label: 'Title',
  name: 'title',
  type: 'string',
  required: false,
  i18n: true 
},
        {
  label: 'Text',
  name: 'text_markdown',
  nameOverride: 'text',
  type: 'rich-text',
  minimal: true,
  buttons: ['bold', 'italic', 'link', 'bulleted-list'],
  editor_components: [],
  modes: ['rich_text'],
  required: false,
  i18n: true 
},
]
}
,
        {
  label: 'Items',
  label_singular: 'Item',
  name: 'items',
  type: 'object', list: true,
  required: false,
  i18n: true,
  collapsed: true,
  summary: '{{title}}',
  fields: [
  
        {
  label: 'Summary',
  name: 'summary',
  type: 'string',
  required: false,
  i18n: true 
},
        {
  label: 'Text',
  name: 'text_markdown',
  nameOverride: 'text',
  type: 'rich-text',
  minimal: true,
  buttons: ['bold', 'italic', 'link', 'bulleted-list'],
  editor_components: [],
  modes: ['rich_text'],
  required: false,
  i18n: true 
},
        {
  label: 'Name',
  name: 'name',
  type: 'string',
  required: false,
  i18n: true 
},
        {
  label: 'Title',
  name: 'title',
  type: 'string',
  required: false,
  i18n: true 
},
        {
  label: 'Open?',
  name: 'open',
  type: 'boolean',
  required: false,
  i18n: 'duplicate'
},
]
},
        {
  label: 'With a background?',
  name: 'background',
  type: 'boolean',
  default: false,
  required: false,
  i18n: 'duplicate' 
},
]
},{
  label: 'Figure',
  name: 'figure',
  type: 'object',
  required: false,
  i18n: true,
  collapsed: false,
  summary: '{{title}}',
  fields: [
  
        {
  label: 'Heading',
  name: 'heading',
  type: 'object',
  required: false,
  i18n: true,
  collapsed: true,
  summary: '{{title}}',
  fields: [
  
        {
  label: 'Surtitle',
  name: 'surtitle',
  type: 'string',
  required: false,
  i18n: true 
},
        {
  label: 'Title',
  name: 'title',
  type: 'string',
  required: false,
  i18n: true 
},
        {
  label: 'Text',
  name: 'text_markdown',
  nameOverride: 'text',
  type: 'rich-text',
  minimal: true,
  buttons: ['bold', 'italic', 'link', 'bulleted-list'],
  editor_components: [],
  modes: ['rich_text'],
  required: false,
  i18n: true 
},
]
}
,
        {
  label: 'Figure',
  name: 'figure',
  type: 'object',
  required: false,
  i18n: true,
  collapsed: true,
  fields: [
  
        {
  label: 'Image',
  hint: 'Resize and compress image before sending : https://bulkresizephotos.com/fr?quality=90&type=width&width=1600',
  name: 'src',
  type: 'image',
  required: false,
  i18n: true,
  choose_url: false,
  media_library: {
    config: {
      max_file_size: '700000'
    }
  },
  media_path: '/assets/images/uploads',
  public_path: '/images/uploads'
},
        {
  label: 'Text alternative',
  hint: 'For an image that conveys information (leave blank if decorative image)',
  name: 'alt',
  type: 'string',
  required: false,
  i18n: true
}
,
        {
  label: 'Legend',
  name: 'legend',
  type: 'string',
  required: false,
  i18n: true 
},
        {
  label: 'Credit',
  name: 'credit',
  type: 'rich-text',
  minimal: true,
  buttons: ['link'],
  editor_components: [],
  modes: ['rich_text'],
  required: false,
  i18n: true 
},
        {
  label: 'Is screenshot?',
  hint: 'Add fake browser',
  name: 'screenshot',
  type: 'boolean',
  default: false,
  required: false,
  i18n: 'duplicate'
}
,
]
}
,
        
{
  label: 'Grid',
  hint: '',
  name: 'grid',
  type: 'string', ui: { component: 'select' },
    options: [{ label: 'Small', value: 'small' },{ label: 'Medium', value: 'medium' },{ label: 'Large', value: 'large' },{ label: 'Container', value: 'container' },{ label: 'Full', value: 'full' },
    ],
    default: 'large',
  required: true,
  i18n: 'duplicate'
}

,
        
{
  label: 'Offset',
  hint: '',
  name: 'offset',
  type: 'string', ui: { component: 'select' },
    options: [{ label: 'Start', value: 'start' },{ label: 'Center', value: 'center' },{ label: 'End', value: 'end' },
    ],
  required: false,
  i18n: 'duplicate'
}

,
        {
  label: 'With a background?',
  name: 'background',
  type: 'boolean',
  default: false,
  required: false,
  i18n: 'duplicate' 
},
]
}
,{
  label: 'Form',
  name: 'form',
  type: 'object',
  required: false,
  i18n: true,
  collapsed: false,
  summary: '{{heading.title}}',
  fields: [
  
        {
  label: 'Heading',
  name: 'heading',
  type: 'object',
  required: false,
  i18n: true,
  collapsed: true,
  summary: '{{title}}',
  fields: [
  
        {
  label: 'Surtitle',
  name: 'surtitle',
  type: 'string',
  required: false,
  i18n: true 
},
        {
  label: 'Title',
  name: 'title',
  type: 'string',
  required: false,
  i18n: true 
},
        {
  label: 'Text',
  name: 'text_markdown',
  nameOverride: 'text',
  type: 'rich-text',
  minimal: true,
  buttons: ['bold', 'italic', 'link', 'bulleted-list'],
  editor_components: [],
  modes: ['rich_text'],
  required: false,
  i18n: true 
},
]
}
,
        
{
  label: 'Grid',
  hint: '',
  name: 'grid',
  type: 'string', ui: { component: 'select' },
    options: [{ label: 'Small', value: 'small' },{ label: 'Medium', value: 'medium' },{ label: 'Large', value: 'large' },{ label: 'Container', value: 'container' },{ label: 'Full', value: 'full' },
    ],
    default: 'large',
  required: true,
  i18n: 'duplicate'
}

,
        
{
  label: 'Offset',
  hint: '',
  name: 'offset',
  type: 'string', ui: { component: 'select' },
    options: [{ label: 'Start', value: 'start' },{ label: 'Center', value: 'center' },{ label: 'End', value: 'end' },
    ],
  required: false,
  i18n: 'duplicate'
}

,
        {
  label: 'Name',
  name: 'name',
  type: 'string',
  required: false,
  i18n: true 
},
        {
  label: 'Send button text',
  name: 'submit',
  type: 'string',
  required: false,
  i18n: true 
},
        {
  label: 'Fields',
  label_singular: 'Field',
  name: 'items',
  type: 'object', list: true,
  required: false,
  i18n: true,
  collapsed: true,
  summary: '{{label}}',
  fields: [
  
        {
  label: 'Label',
  name: 'label',
  type: 'string',
  required: false,
  i18n: true 
},
        {
  label: 'Name',
  name: 'name',
  type: 'string',
  required: false,
  i18n: true 
},
        
{
  label: 'Type',
  hint: 'Choose type field',
  name: 'type',
  type: 'string', ui: { component: 'select' },
    options: [{ label: 'Email', value: 'email' },{ label: 'Checkbox', value: 'checkbox' },{ label: 'Radio', value: 'radio' },{ label: 'Select', value: 'select' },{ label: 'Tel', value: 'tel' },{ label: 'Text', value: 'text' },{ label: 'Textarea', value: 'textarea' },
    ],
    default: 'text',
  required: false,
  i18n: 'duplicate'
}

,
        {
  label: 'Options',
  label_singular: 'Option',
  hint: 'Only for select fields',
  name: 'options',
  type: 'object', list: true,
  required: false,
  i18n: true,
  fields: [
  
        {
  label: 'Title',
  name: 'title',
  type: 'string',
  required: false,
  i18n: true 
},
        {
  label: 'Value',
  name: 'value',
  type: 'string',
  required: false,
  i18n: true 
},
]
},
        {
  label: 'Value',
  hint: 'Only for checkbox and radio fields',
  name: 'value',
  type: 'string',
  required: false,
  i18n: true
},
        {
  label: 'Required',
  name: 'required',
  type: 'boolean',
  required: false,
  i18n: 'duplicate' 
},
        {
  label: 'Full width field?',
  name: 'full',
  type: 'boolean',
  required: false,
  i18n: 'duplicate' 
},
        {
  label: 'Placeholder',
  name: 'placeholder',
  type: 'string',
  required: false,
  i18n: true 
},
        
{
  label: 'Autocomplete',
  hint: '',
  name: 'autocomplete',
  type: 'string', ui: { component: 'select' },
    options: [{ label: 'Email', value: 'email' },{ label: 'Tel', value: 'tel' },{ label: 'Title', value: 'honorific-prefix' },{ label: 'Firstname', value: 'given-name' },{ label: 'Lastname', value: 'family-name' },{ label: 'Name', value: 'name' },{ label: 'Street', value: 'street-address' },{ label: 'Address level1', value: 'address-level1' },{ label: 'Address level2', value: 'address-level2' },{ label: 'Postal code', value: 'postal-code' },{ label: 'Country name', value: 'country-name' },{ label: 'Organization', value: 'organization' },
    ],
  required: false,
  i18n: 'duplicate'
}

,
]
},
        {
  label: 'With a background?',
  name: 'background',
  type: 'boolean',
  default: false,
  required: false,
  i18n: 'duplicate' 
},
]
}
,{
  label: 'Gallery',
  name: 'gallery',
  type: 'object',
  required: false,
  i18n: true,
  collapsed: false,
  summary: '{{heading.title}}',
  fields: [
  
        {
  label: 'Heading',
  name: 'heading',
  type: 'object',
  required: false,
  i18n: true,
  collapsed: true,
  summary: '{{title}}',
  fields: [
  
        {
  label: 'Surtitle',
  name: 'surtitle',
  type: 'string',
  required: false,
  i18n: true 
},
        {
  label: 'Title',
  name: 'title',
  type: 'string',
  required: false,
  i18n: true 
},
        {
  label: 'Text',
  name: 'text_markdown',
  nameOverride: 'text',
  type: 'rich-text',
  minimal: true,
  buttons: ['bold', 'italic', 'link', 'bulleted-list'],
  editor_components: [],
  modes: ['rich_text'],
  required: false,
  i18n: true 
},
]
}
,
        {
  label: 'Column',
  name: 'column',
  type: 'number',
  min: 1,
  max: 6,
  value_type: 'int',
  default: 3,
  i18n: 'duplicate'
}
,
        {
  label: 'Gallery',
  name: 'gallery',
  type: 'object', list: true,
  required: false,
  i18n: true,
  collapsed: true,
  fields: [
  
        {
  label: 'Image',
  hint: 'Resize and compress image before sending : https://bulkresizephotos.com/fr?quality=90&type=width&width=1600',
  name: 'src',
  type: 'image',
  required: false,
  i18n: true,
  choose_url: false,
  media_library: {
    config: {
      max_file_size: '700000'
    }
  },
  media_path: '/assets/images/uploads',
  public_path: '/images/uploads'
},
        {
  label: 'Text alternative',
  hint: 'For an image that conveys information (leave blank if decorative image)',
  name: 'alt',
  type: 'string',
  required: false,
  i18n: true
}
,
        {
  label: 'Credit',
  name: 'credit',
  type: 'rich-text',
  minimal: true,
  buttons: ['link'],
  editor_components: [],
  modes: ['rich_text'],
  required: false,
  i18n: true 
},
        {
  label: 'Legend',
  name: 'legend',
  type: 'string',
  required: false,
  i18n: true 
},
]
},
        {
  label: 'With a background?',
  name: 'background',
  type: 'boolean',
  default: false,
  required: false,
  i18n: 'duplicate' 
},
]
},{
  label: 'Images',
  name: 'images',
  type: 'object',
  required: false,
  i18n: true,
  collapsed: false,
  summary: '{{heading.title}}',
  fields: [
  
        {
  label: 'Heading',
  name: 'heading',
  type: 'object',
  required: false,
  i18n: true,
  collapsed: true,
  summary: '{{title}}',
  fields: [
  
        {
  label: 'Surtitle',
  name: 'surtitle',
  type: 'string',
  required: false,
  i18n: true 
},
        {
  label: 'Title',
  name: 'title',
  type: 'string',
  required: false,
  i18n: true 
},
        {
  label: 'Text',
  name: 'text_markdown',
  nameOverride: 'text',
  type: 'rich-text',
  minimal: true,
  buttons: ['bold', 'italic', 'link', 'bulleted-list'],
  editor_components: [],
  modes: ['rich_text'],
  required: false,
  i18n: true 
},
]
}
,
        {
  label: 'Images',
  name: 'images',
  type: 'object', list: true,
  required: false,
  i18n: true,
  collapsed: true,
  fields: [
  
        {
  label: 'Image',
  hint: 'Resize and compress image before sending : https://bulkresizephotos.com/fr?quality=90&type=width&width=1600',
  name: 'src',
  type: 'image',
  required: false,
  i18n: true,
  choose_url: false,
  media_library: {
    config: {
      max_file_size: '700000'
    }
  },
  media_path: '/assets/images/uploads',
  public_path: '/images/uploads'
},
        {
  label: 'Text alternative',
  hint: 'For an image that conveys information (leave blank if decorative image)',
  name: 'alt',
  type: 'string',
  required: false,
  i18n: true
}
,
        {
  label: 'Credit',
  name: 'credit',
  type: 'rich-text',
  minimal: true,
  buttons: ['link'],
  editor_components: [],
  modes: ['rich_text'],
  required: false,
  i18n: true 
},
        {
  label: 'Legend',
  name: 'legend',
  type: 'string',
  required: false,
  i18n: true 
},
        {
  label: 'Half size?',
  name: 'half',
  type: 'boolean',
  required: false,
  i18n: 'duplicate' 
},
]
},
        {
  label: 'With a background?',
  name: 'background',
  type: 'boolean',
  default: false,
  required: false,
  i18n: 'duplicate' 
},
]
},{
  label: 'Informations',
  name: 'informations',
  type: 'object',
  required: false,
  i18n: true,
  collapsed: false,
  summary: '{{heading.title}}',
  fields: [
  
        {
  label: 'Heading',
  name: 'heading',
  type: 'object',
  required: false,
  i18n: true,
  collapsed: true,
  summary: '{{title}}',
  fields: [
  
        {
  label: 'Surtitle',
  name: 'surtitle',
  type: 'string',
  required: false,
  i18n: true 
},
        {
  label: 'Title',
  name: 'title',
  type: 'string',
  required: false,
  i18n: true 
},
        {
  label: 'Text',
  name: 'text_markdown',
  nameOverride: 'text',
  type: 'rich-text',
  minimal: true,
  buttons: ['bold', 'italic', 'link', 'bulleted-list'],
  editor_components: [],
  modes: ['rich_text'],
  required: false,
  i18n: true 
},
]
}
,
        {
  label: 'Column',
  name: 'column',
  type: 'number',
  min: 1,
  max: 6,
  value_type: 'int',
  default: 3,
  i18n: 'duplicate'
}
,
        {
  label: 'Items',
  label_singular: 'Item',
  name: 'items',
  type: 'object', list: true,
  required: false,
  i18n: true,
  collapsed: true,
  summary: '{{title}}',
  fields: [
  
        {
  label: 'Icon',
  hint: 'Icon name from https://icons.getbootstrap.com/',
  name: 'icon',
  type: 'string',
  required: false,
  i18n: 'duplicate'
}
,
        {
  label: 'Images',
  name: 'image',
  type: 'object',
  required: false,
  i18n: true,
  collapsed: true,
  fields: [
  
        {
  label: 'Image',
  hint: 'Resize and compress image before sending : https://bulkresizephotos.com/fr?quality=90&type=width&width=1600',
  name: 'src',
  type: 'image',
  required: false,
  i18n: true,
  choose_url: false,
  media_library: {
    config: {
      max_file_size: '700000'
    }
  },
  media_path: '/assets/images/uploads',
  public_path: '/images/uploads'
},
        {
  label: 'Text alternative',
  hint: 'For an image that conveys information (leave blank if decorative image)',
  name: 'alt',
  type: 'string',
  required: false,
  i18n: true
}
,
        {
  label: 'Is logo?',
  hint: 'Positioned in the center and not cropped',
  name: 'isLogo',
  type: 'boolean',
  required: false,
  i18n: 'duplicate' 
},
]
},
        {
  label: 'Title',
  name: 'title',
  type: 'string',
  required: false,
  i18n: true 
},
        {
  label: 'Text',
  name: 'text',
  type: 'string',
  required: false,
  i18n: true 
},
        {
  label: 'CTA',
  name: 'cta',
  type: 'object',
  required: false,
  i18n: true,
  collapsed: true,
  summary: '{{text}}',
  fields: [
  
        {
  label: 'Text',
  name: 'text',
  type: 'string',
  required: false,
  i18n: true 
},
        {
  label: 'URL',
  name: 'url',
  type: 'string',
  required: false,
  i18n: true 
},
        {
  label: 'Language',
  hint: 'Enter code lang (e.g. fr) if different of the current page language',
  name: 'lang',
  type: 'string',
  required: false,
  i18n: true
},
        {
  label: 'Is blank?',
  name: 'blank',
  type: 'boolean',
  required: false,
  i18n: true
},
]
}
,
]
},
        {
  label: 'With a background?',
  name: 'background',
  type: 'boolean',
  default: false,
  required: false,
  i18n: 'duplicate' 
},
]
}
,{
  label: 'Instagram',
  name: 'instagram',
  type: 'object',
  required: false,
  i18n: true,
  collapsed: false,
  summary: '{{heading.title}}',
  fields: [
  
        {
  label: 'Heading',
  name: 'heading',
  type: 'object',
  required: false,
  i18n: true,
  collapsed: true,
  summary: '{{title}}',
  fields: [
  
        {
  label: 'Surtitle',
  name: 'surtitle',
  type: 'string',
  required: false,
  i18n: true 
},
        {
  label: 'Title',
  name: 'title',
  type: 'string',
  required: false,
  i18n: true 
},
        {
  label: 'Text',
  name: 'text_markdown',
  nameOverride: 'text',
  type: 'rich-text',
  minimal: true,
  buttons: ['bold', 'italic', 'link', 'bulleted-list'],
  editor_components: [],
  modes: ['rich_text'],
  required: false,
  i18n: true 
},
]
}
,
        {
  label: 'Count',
  hint: 'Items to display',
  name: 'count',
  type: 'number',
  required: true,
  default: 4,
  min: 1,
  max: 10,
  step: 1,
  i18n: 'duplicate'
}
,
        {
  label: 'Limit',
  hint: '',
  name: 'limit',
  type: 'number',
  required: true,
  default: 5,
  min: 1,
  max: 10,
  step: 1,
  i18n: 'duplicate'
}
,
        {
  label: 'CTAs',
  label_singular: 'CTA',
  name: 'ctas',
  type: 'object', list: true,
  collapsed: true,
  i18n: true,
  min: 0,
  max: 2,
  allow_add: true,
  required: false,
  summary: '{{fields.text}}',
  fields: [
  
        {
  label: 'Text',
  name: 'text',
  type: 'string',
  required: false,
  i18n: true 
},
        {
  label: 'URL',
  name: 'url',
  type: 'string',
  required: false,
  i18n: true 
},
        {
  label: 'Language',
  hint: 'Enter code lang (e.g. fr) if different of the current page language',
  name: 'lang',
  type: 'string',
  required: false,
  i18n: true
},
        {
  label: 'Is blank?',
  name: 'blank',
  type: 'boolean',
  required: false,
  i18n: true
},
]
}
,
        {
  label: 'With a background?',
  name: 'background',
  type: 'boolean',
  default: false,
  required: false,
  i18n: 'duplicate' 
},
]
}
,{
  label: 'Latest items',
  name: 'latest',
  type: 'object',
  required: false,
  i18n: true,
  collapsed: false,
  summary: '{{heading.title}}',
  fields: [
  
        {
  label: 'Heading',
  name: 'heading',
  type: 'object',
  required: false,
  i18n: true,
  collapsed: true,
  summary: '{{title}}',
  fields: [
  
        {
  label: 'Surtitle',
  name: 'surtitle',
  type: 'string',
  required: false,
  i18n: true 
},
        {
  label: 'Title',
  name: 'title',
  type: 'string',
  required: false,
  i18n: true 
},
        {
  label: 'Text',
  name: 'text_markdown',
  nameOverride: 'text',
  type: 'rich-text',
  minimal: true,
  buttons: ['bold', 'italic', 'link', 'bulleted-list'],
  editor_components: [],
  modes: ['rich_text'],
  required: false,
  i18n: true 
},
]
}
,
        
{
  label: 'Section',
  hint: 'Select the section to display',
  name: 'section',
  type: 'string', ui: { component: 'select' },
    options: [{ label: 'Pages', value: 'pages' },{ label: 'Products', value: 'products' },{ label: 'Products tags', value: 'products_tags' },
    ],
  required: false,
  i18n: 'duplicate'
}
,
        
{
  label: 'Layout',
  hint: '',
  name: 'layout',
  type: 'string', ui: { component: 'select' },
    options: [{ label: 'Grid', value: 'grid' },{ label: 'List', value: 'list' },
    ],
  required: false,
  i18n: 'duplicate'
}

,
        {
  label: 'Count',
  hint: 'Items to display',
  name: 'count',
  type: 'number',
  required: true,
  default: 4,
  min: 1,
  max: 10,
  step: 1,
  i18n: 'duplicate'
}
,
        {
  label: 'Show more?',
  name: 'show_more',
  type: 'boolean',
  default: true,
  required: false,
  i18n: 'duplicate'
}
,
        {
  label: 'With a background?',
  name: 'background',
  type: 'boolean',
  default: false,
  required: false,
  i18n: 'duplicate' 
},
]
},{
  label: 'Logos',
  name: 'logos',
  type: 'object',
  required: false,
  i18n: true,
  collapsed: false,
  summary: '{{heading.title}}',
  fields: [
  
        {
  label: 'Heading',
  name: 'heading',
  type: 'object',
  required: false,
  i18n: true,
  collapsed: true,
  summary: '{{title}}',
  fields: [
  
        {
  label: 'Surtitle',
  name: 'surtitle',
  type: 'string',
  required: false,
  i18n: true 
},
        {
  label: 'Title',
  name: 'title',
  type: 'string',
  required: false,
  i18n: true 
},
        {
  label: 'Text',
  name: 'text_markdown',
  nameOverride: 'text',
  type: 'rich-text',
  minimal: true,
  buttons: ['bold', 'italic', 'link', 'bulleted-list'],
  editor_components: [],
  modes: ['rich_text'],
  required: false,
  i18n: true 
},
]
}
,
        {
  label: 'Items',
  label_singular: 'Item',
  name: 'items',
  type: 'object', list: true,
  required: false,
  i18n: true,
  collapsed: true,
  summary: '{{title}}',
  fields: [
  
        {
  label: 'Title',
  name: 'title',
  type: 'string',
  required: false,
  i18n: true 
},
        {
  label: 'URL',
  name: 'url',
  type: 'string',
  required: false,
  i18n: true 
},
        {
  label: 'Image',
  hint: 'Resize and compress image before sending : https://bulkresizephotos.com/fr?quality=90&type=width&width=1600',
  name: 'src',
  type: 'image',
  required: false,
  i18n: true,
  choose_url: false,
  media_library: {
    config: {
      max_file_size: '700000'
    }
  },
  media_path: '/assets/images/uploads',
  public_path: '/images/uploads'
},
]
},
        
{
  label: 'Layout',
  hint: '',
  name: 'layout',
  type: 'string', ui: { component: 'select' },
    options: [{ label: 'Grid', value: 'grid' },{ label: 'Carousel', value: 'carousel' },
    ],
  required: false,
  i18n: 'duplicate'
}

,
        {
  label: 'Carousel configuration',
  hint: 'Only for carousel display',
  name: 'carousel',
  type: 'object',
  required: false,
  i18n: true,
  collapsed: true,
  fields: [
  
        
{
  label: 'Params',
  name: 'params',
  type: 'object',
  required: false,
  i18n: true,
  collapsed: false,
  fields: [
    {
      label: 'Focus',
      hint: 'Position active slide in center?',
      name: 'focus',
      type: 'boolean',
      required: false,
      i18n: 'duplicate'
    },
    {
      label: 'Autoplay',
      name: 'autoplay',
      type: 'boolean',
      default: true,
      required: false,
      i18n: 'duplicate'
    },
    {
      label: 'Arrows',
      name: 'arrows',
      type: 'boolean',
      default: true,
      required: false,
      i18n: 'duplicate'
    },
    {
      label: 'Pagination',
      name: 'pagination',
      type: 'boolean',
      default: false,
      required: false,
      i18n: 'duplicate'
    },
{
  label: 'Carousel type',
  hint: '',
  name: 'type',
  type: 'string', ui: { component: 'select' },
    options: [{ label: 'Slide', value: 'slide' },{ label: 'Loop', value: 'loop' },{ label: 'Fade', value: 'fade' },
    ],
  required: false,
  i18n: 'duplicate'
}
,
    {
      label: 'Per page',
      hint: 'Number of slides to display',
      name: 'perPage',
      type: 'number',
      min: 1,
      required: false,
      i18n: 'duplicate'
    },
    {
      label: 'Padding',
      hint: 'Padding left/right of the carousel. In rem value',
      name: 'padding',
      type: 'number',
      min: 0,
      required: false,
      i18n: 'duplicate'
    },
    {
      label: 'Gap',
      hint: 'The gap between slides. Expressed in rem.',
      name: 'gap',
      type: 'number',
      min: 0,
      required: false,
      i18n: 'duplicate'
    }
  ]
}
,
        {
  label: 'Responsive',
  name: 'responsive',
  type: 'object', list: true,
  required: false,
  i18n: true,
  collapsed: true,
  fields: [
  
        
{
  label: 'Breakpoints',
  hint: 'Screen size',
  name: 'breakpoints',
  type: 'string', ui: { component: 'select' },
    options: [{ label: '1440th', value: '1440' },{ label: '1280th', value: '1280' },{ label: '640th', value: '640' },{ label: '768th', value: '768' },{ label: '1024th', value: '1024' },
    ],
    default: '640',
  required: false,
  i18n: 'duplicate'
}


,
        
{
  label: 'Params',
  name: 'params',
  type: 'object',
  required: false,
  i18n: true,
  collapsed: false,
  fields: [
    {
      label: 'Focus',
      hint: 'Position active slide in center?',
      name: 'focus',
      type: 'boolean',
      required: false,
      i18n: 'duplicate'
    },
    {
      label: 'Autoplay',
      name: 'autoplay',
      type: 'boolean',
      default: true,
      required: false,
      i18n: 'duplicate'
    },
    {
      label: 'Arrows',
      name: 'arrows',
      type: 'boolean',
      default: true,
      required: false,
      i18n: 'duplicate'
    },
    {
      label: 'Pagination',
      name: 'pagination',
      type: 'boolean',
      default: false,
      required: false,
      i18n: 'duplicate'
    },
{
  label: 'Carousel type',
  hint: '',
  name: 'type',
  type: 'string', ui: { component: 'select' },
    options: [{ label: 'Slide', value: 'slide' },{ label: 'Loop', value: 'loop' },{ label: 'Fade', value: 'fade' },
    ],
  required: false,
  i18n: 'duplicate'
}
,
    {
      label: 'Per page',
      hint: 'Number of slides to display',
      name: 'perPage',
      type: 'number',
      min: 1,
      required: false,
      i18n: 'duplicate'
    },
    {
      label: 'Padding',
      hint: 'Padding left/right of the carousel. In rem value',
      name: 'padding',
      type: 'number',
      min: 0,
      required: false,
      i18n: 'duplicate'
    },
    {
      label: 'Gap',
      hint: 'The gap between slides. Expressed in rem.',
      name: 'gap',
      type: 'number',
      min: 0,
      required: false,
      i18n: 'duplicate'
    }
  ]
}
,
]
}
,
]
}
,
        {
  label: 'With a background?',
  name: 'background',
  type: 'boolean',
  default: false,
  required: false,
  i18n: 'duplicate' 
},
]
},{
  label: 'Map',
  name: 'map',
  type: 'object',
  required: false,
  i18n: true,
  collapsed: false,
  summary: '{{heading.title}}',
  fields: [
  
        {
  label: 'Heading',
  name: 'heading',
  type: 'object',
  required: false,
  i18n: true,
  collapsed: true,
  summary: '{{title}}',
  fields: [
  
        {
  label: 'Surtitle',
  name: 'surtitle',
  type: 'string',
  required: false,
  i18n: true 
},
        {
  label: 'Title',
  name: 'title',
  type: 'string',
  required: false,
  i18n: true 
},
        {
  label: 'Text',
  name: 'text_markdown',
  nameOverride: 'text',
  type: 'rich-text',
  minimal: true,
  buttons: ['bold', 'italic', 'link', 'bulleted-list'],
  editor_components: [],
  modes: ['rich_text'],
  required: false,
  i18n: true 
},
]
}
,
        {
  label: 'Show all registered places?',
  hint: 'Only if you have places already saved (this will disable the marker below)',
  name: 'show_places',
  type: 'boolean',
  default: false,
  required: false,
  i18n: 'duplicate'
}
,
        {
  label: 'Geographic coordinates',
  hint: 'Easily find contact details: https://www.latlong.net/convert-address-to-lat-long.html',
  name: 'coordinates',
  type: 'object',
  required: false,
  collapsed: true,
  fields: [
    {
      label: 'Latitude',
      name: 'lat',
      type: 'number',
      value_type: 'float',
      required: false
    },
    {
      label: 'Longitude',
      name: 'lng',
      type: 'number',
      value_type: 'float',
      required: false
    }
  ]
},
        {
  label: 'Zoom',
  name: 'zoom',
  type: 'number',
  min: 1,
  default: 13,
  max: 20,
  required: true,
  i18n: 'duplicate'
},
        
{
  label: 'Grid',
  hint: '',
  name: 'grid',
  type: 'string', ui: { component: 'select' },
    options: [{ label: 'Small', value: 'small' },{ label: 'Medium', value: 'medium' },{ label: 'Large', value: 'large' },{ label: 'Container', value: 'container' },{ label: 'Full', value: 'full' },
    ],
    default: 'large',
  required: true,
  i18n: 'duplicate'
}

,
        {
  label: 'With a background?',
  name: 'background',
  type: 'boolean',
  default: false,
  required: false,
  i18n: 'duplicate' 
},
]
}
,{
  label: 'Newsletter',
  name: 'newsletter',
  type: 'object',
  required: false,
  i18n: true,
  collapsed: false,
  summary: '{{heading.title}}',
  fields: [
  
        {
  label: 'Heading',
  name: 'heading',
  type: 'object',
  required: false,
  i18n: true,
  collapsed: true,
  summary: '{{title}}',
  fields: [
  
        {
  label: 'Surtitle',
  name: 'surtitle',
  type: 'string',
  required: false,
  i18n: true 
},
        {
  label: 'Title',
  name: 'title',
  type: 'string',
  required: false,
  i18n: true 
},
        {
  label: 'Text',
  name: 'text_markdown',
  nameOverride: 'text',
  type: 'rich-text',
  minimal: true,
  buttons: ['bold', 'italic', 'link', 'bulleted-list'],
  editor_components: [],
  modes: ['rich_text'],
  required: false,
  i18n: true 
},
]
}
,
        {
  label: 'Form',
  name: 'form',
  type: 'object',
  required: true,
  i18n: true,
  collapsed: false,
  fields: [
  
        {
  label: 'URL',
  name: 'url',
  type: 'string',
  required: false,
  i18n: true 
},
        {
  label: 'Hidden fields',
  label_singular: 'Hidden field',
  name: 'hiddens',
  type: 'object', list: true,
  i18n: true,
  collapsed: true,
  required: false,
  fields: [
  
        {
  label: 'Name',
  name: 'name',
  type: 'string',
  required: false,
  i18n: true 
},
        {
  label: 'Value',
  name: 'value',
  type: 'string',
  required: false,
  i18n: true 
},
]
},
]
},
        {
  label: 'With a background?',
  name: 'background',
  type: 'boolean',
  default: false,
  required: false,
  i18n: 'duplicate' 
},
]
}
,{
  label: 'Paragraph',
  name: 'paragraph',
  type: 'object',
  required: false,
  i18n: true,
  collapsed: false,
  summary: '{{title}}',
  fields: [
  
        {
  label: 'Surtitle',
  name: 'surtitle',
  type: 'string',
  required: false,
  i18n: true 
},
        {
  label: 'Title',
  name: 'title',
  type: 'string',
  required: false,
  i18n: true 
},
        {
  label: 'Text',
  name: 'text_markdown',
  nameOverride: 'text',
  type: 'rich-text',
  minimal: true,
  buttons: ['bold', 'italic', 'link', 'bulleted-list'],
  editor_components: [],
  modes: ['rich_text'],
  required: false,
  i18n: true 
},
        {
  label: 'Notes',
  label_singular: 'Note',
  hint: 'To link a word in the text to a note, suffix it with "[*]". Notes and "[\\*]" are linked by their order.',
  name: 'notes',
  type: 'object', list: true,
  required: false,
  i18n: true,
  collapsed: true,
  fields: [
  
        {
  label: 'Text',
  name: 'text',
  type: 'string',
  required: false,
  i18n: true 
},
]
},
        {
  label: 'CTAs',
  label_singular: 'CTA',
  name: 'ctas',
  type: 'object', list: true,
  collapsed: true,
  i18n: true,
  min: 0,
  max: 2,
  allow_add: true,
  required: false,
  summary: '{{fields.text}}',
  fields: [
  
        {
  label: 'Text',
  name: 'text',
  type: 'string',
  required: false,
  i18n: true 
},
        {
  label: 'URL',
  name: 'url',
  type: 'string',
  required: false,
  i18n: true 
},
        {
  label: 'Language',
  hint: 'Enter code lang (e.g. fr) if different of the current page language',
  name: 'lang',
  type: 'string',
  required: false,
  i18n: true
},
        {
  label: 'Is blank?',
  name: 'blank',
  type: 'boolean',
  required: false,
  i18n: true
},
]
}
,
        
{
  label: 'Grid',
  hint: '',
  name: 'grid',
  type: 'string', ui: { component: 'select' },
    options: [{ label: 'Small', value: 'small' },{ label: 'Medium', value: 'medium' },{ label: 'Large', value: 'large' },{ label: 'Container', value: 'container' },{ label: 'Full', value: 'full' },
    ],
    default: 'large',
  required: true,
  i18n: 'duplicate'
}

,
        
{
  label: 'Offset',
  hint: '',
  name: 'offset',
  type: 'string', ui: { component: 'select' },
    options: [{ label: 'Start', value: 'start' },{ label: 'Center', value: 'center' },{ label: 'End', value: 'end' },
    ],
  required: false,
  i18n: 'duplicate'
}

,
        
{
  label: 'Alignment',
  hint: '',
  name: 'align',
  type: 'string', ui: { component: 'select' },
    options: [{ label: 'Start', value: 'start' },{ label: 'Center', value: 'center' },{ label: 'End', value: 'end' },
    ],
  required: false,
  i18n: 'duplicate'
}

,
        {
  label: 'With a background?',
  name: 'background',
  type: 'boolean',
  default: false,
  required: false,
  i18n: 'duplicate' 
},
]
}
,{
  label: 'Pushes',
  name: 'pushes',
  type: 'object',
  required: false,
  i18n: true,
  collapsed: false,
  summary: '{{heading.title}}',
  fields: [
  
        {
  label: 'Heading',
  name: 'heading',
  type: 'object',
  required: false,
  i18n: true,
  collapsed: true,
  summary: '{{title}}',
  fields: [
  
        {
  label: 'Surtitle',
  name: 'surtitle',
  type: 'string',
  required: false,
  i18n: true 
},
        {
  label: 'Title',
  name: 'title',
  type: 'string',
  required: false,
  i18n: true 
},
        {
  label: 'Text',
  name: 'text_markdown',
  nameOverride: 'text',
  type: 'rich-text',
  minimal: true,
  buttons: ['bold', 'italic', 'link', 'bulleted-list'],
  editor_components: [],
  modes: ['rich_text'],
  required: false,
  i18n: true 
},
]
}
,
        {
  label: 'Column',
  name: 'column',
  type: 'number',
  min: 1,
  max: 2,
  value_type: 'int',
  default: 1,
  i18n: 'duplicate'
}
,
        {
  label: 'Items',
  label_singular: 'Item',
  name: 'items',
  type: 'object', list: true,
  required: false,
  i18n: true,
  collapsed: true,
  summary: '{{title}}',
  fields: [
  
        {
  label: 'Title',
  name: 'title',
  type: 'string',
  required: false,
  i18n: true 
},
        {
  label: 'Text',
  name: 'text',
  type: 'string',
  required: false,
  i18n: true 
},
        {
  label: 'CTA',
  name: 'cta',
  type: 'object',
  required: false,
  i18n: true,
  collapsed: true,
  summary: '{{text}}',
  fields: [
  
        {
  label: 'Text',
  name: 'text',
  type: 'string',
  required: false,
  i18n: true 
},
        {
  label: 'URL',
  name: 'url',
  type: 'string',
  required: false,
  i18n: true 
},
        {
  label: 'Language',
  hint: 'Enter code lang (e.g. fr) if different of the current page language',
  name: 'lang',
  type: 'string',
  required: false,
  i18n: true
},
        {
  label: 'Is blank?',
  name: 'blank',
  type: 'boolean',
  required: false,
  i18n: true
},
]
}
,
        
{
  label: 'Offset',
  hint: '',
  name: 'offset',
  type: 'string', ui: { component: 'select' },
    options: [{ label: 'Start', value: 'start' },{ label: 'Center', value: 'center' },{ label: 'End', value: 'end' },
    ],
  required: false,
  i18n: 'duplicate'
}

,
        {
  label: 'Darken?',
  name: 'darken',
  type: 'boolean',
  required: false,
  i18n: 'duplicate' 
},
        {
  label: 'Is card?',
  hint: 'Adds a background behind the text',
  name: 'card',
  type: 'boolean',
  required: false,
  i18n: 'duplicate' 
},
        {
  label: 'Color',
  name: 'color',
  type: 'string',
  allowInput: true,
  enableAlpha: true,
  required: false,
  i18n: 'duplicate'
}
,
        {
  label: 'Image',
  name: 'image',
  type: 'object',
  required: false,
  i18n: true,
  collapsed: true,
  fields: [
  
        {
  label: 'Image',
  hint: 'Resize and compress image before sending : https://bulkresizephotos.com/fr?quality=90&type=width&width=1600',
  name: 'src',
  type: 'image',
  required: false,
  i18n: true,
  choose_url: false,
  media_library: {
    config: {
      max_file_size: '700000'
    }
  },
  media_path: '/assets/images/uploads',
  public_path: '/images/uploads'
},
        {
  label: 'Text alternative',
  hint: 'For an image that conveys information (leave blank if decorative image)',
  name: 'alt',
  type: 'string',
  required: false,
  i18n: true
}
,
        {
  label: 'Credit',
  name: 'credit',
  type: 'rich-text',
  minimal: true,
  buttons: ['link'],
  editor_components: [],
  modes: ['rich_text'],
  required: false,
  i18n: true 
},
]
},
]
},
        
{
  label: 'Layout',
  hint: '',
  name: 'layout',
  type: 'string', ui: { component: 'select' },
    options: [{ label: 'Grid', value: 'grid' },{ label: 'Carousel', value: 'carousel' },
    ],
  required: false,
  i18n: 'duplicate'
}

,
        {
  label: 'Carousel configuration',
  hint: 'Only for carousel display',
  name: 'carousel',
  type: 'object',
  required: false,
  i18n: true,
  collapsed: true,
  fields: [
  
        
{
  label: 'Params',
  name: 'params',
  type: 'object',
  required: false,
  i18n: true,
  collapsed: false,
  fields: [
    {
      label: 'Focus',
      hint: 'Position active slide in center?',
      name: 'focus',
      type: 'boolean',
      required: false,
      i18n: 'duplicate'
    },
    {
      label: 'Autoplay',
      name: 'autoplay',
      type: 'boolean',
      default: true,
      required: false,
      i18n: 'duplicate'
    },
    {
      label: 'Arrows',
      name: 'arrows',
      type: 'boolean',
      default: true,
      required: false,
      i18n: 'duplicate'
    },
    {
      label: 'Pagination',
      name: 'pagination',
      type: 'boolean',
      default: false,
      required: false,
      i18n: 'duplicate'
    },
{
  label: 'Carousel type',
  hint: '',
  name: 'type',
  type: 'string', ui: { component: 'select' },
    options: [{ label: 'Slide', value: 'slide' },{ label: 'Loop', value: 'loop' },{ label: 'Fade', value: 'fade' },
    ],
  required: false,
  i18n: 'duplicate'
}
,
    {
      label: 'Per page',
      hint: 'Number of slides to display',
      name: 'perPage',
      type: 'number',
      min: 1,
      required: false,
      i18n: 'duplicate'
    },
    {
      label: 'Padding',
      hint: 'Padding left/right of the carousel. In rem value',
      name: 'padding',
      type: 'number',
      min: 0,
      required: false,
      i18n: 'duplicate'
    },
    {
      label: 'Gap',
      hint: 'The gap between slides. Expressed in rem.',
      name: 'gap',
      type: 'number',
      min: 0,
      required: false,
      i18n: 'duplicate'
    }
  ]
}
,
        {
  label: 'Responsive',
  name: 'responsive',
  type: 'object', list: true,
  required: false,
  i18n: true,
  collapsed: true,
  fields: [
  
        
{
  label: 'Breakpoints',
  hint: 'Screen size',
  name: 'breakpoints',
  type: 'string', ui: { component: 'select' },
    options: [{ label: '1440th', value: '1440' },{ label: '1280th', value: '1280' },{ label: '640th', value: '640' },{ label: '768th', value: '768' },{ label: '1024th', value: '1024' },
    ],
    default: '640',
  required: false,
  i18n: 'duplicate'
}


,
        
{
  label: 'Params',
  name: 'params',
  type: 'object',
  required: false,
  i18n: true,
  collapsed: false,
  fields: [
    {
      label: 'Focus',
      hint: 'Position active slide in center?',
      name: 'focus',
      type: 'boolean',
      required: false,
      i18n: 'duplicate'
    },
    {
      label: 'Autoplay',
      name: 'autoplay',
      type: 'boolean',
      default: true,
      required: false,
      i18n: 'duplicate'
    },
    {
      label: 'Arrows',
      name: 'arrows',
      type: 'boolean',
      default: true,
      required: false,
      i18n: 'duplicate'
    },
    {
      label: 'Pagination',
      name: 'pagination',
      type: 'boolean',
      default: false,
      required: false,
      i18n: 'duplicate'
    },
{
  label: 'Carousel type',
  hint: '',
  name: 'type',
  type: 'string', ui: { component: 'select' },
    options: [{ label: 'Slide', value: 'slide' },{ label: 'Loop', value: 'loop' },{ label: 'Fade', value: 'fade' },
    ],
  required: false,
  i18n: 'duplicate'
}
,
    {
      label: 'Per page',
      hint: 'Number of slides to display',
      name: 'perPage',
      type: 'number',
      min: 1,
      required: false,
      i18n: 'duplicate'
    },
    {
      label: 'Padding',
      hint: 'Padding left/right of the carousel. In rem value',
      name: 'padding',
      type: 'number',
      min: 0,
      required: false,
      i18n: 'duplicate'
    },
    {
      label: 'Gap',
      hint: 'The gap between slides. Expressed in rem.',
      name: 'gap',
      type: 'number',
      min: 0,
      required: false,
      i18n: 'duplicate'
    }
  ]
}
,
]
}
,
]
}
,
        {
  label: 'With a background?',
  name: 'background',
  type: 'boolean',
  default: false,
  required: false,
  i18n: 'duplicate' 
},
]
}
,{
  label: 'Quote',
  name: 'quote',
  type: 'object',
  required: false,
  i18n: true,
  collapsed: false,
  summary: '{{quote}}',
  fields: [
  
        {
  label: 'Quote',
  name: 'quote',
  type: 'rich-text',
  minimal: true,
  buttons: ['bold', 'italic', 'link'],
  editor_components: [],
  modes: ['rich_text'],
  required: false,
  i18n: true
}
,
        {
  label: 'Author',
  name: 'author',
  type: 'object',
  required: false,
  i18n: true,
  collapsed: true,
  fields: [
  
        {
  label: 'Title',
  name: 'title',
  type: 'string',
  required: false,
  i18n: true 
},
        {
  label: 'Text',
  name: 'text',
  type: 'string',
  required: false,
  i18n: true 
},
        {
  label: 'Images',
  name: 'image',
  type: 'object',
  required: false,
  i18n: true,
  collapsed: true,
  fields: [
  
        {
  label: 'Image',
  hint: 'Resize and compress image before sending : https://bulkresizephotos.com/fr?quality=90&type=width&width=1600',
  name: 'src',
  type: 'image',
  required: false,
  i18n: true,
  choose_url: false,
  media_library: {
    config: {
      max_file_size: '700000'
    }
  },
  media_path: '/assets/images/uploads',
  public_path: '/images/uploads'
},
        {
  label: 'Text alternative',
  hint: 'For an image that conveys information (leave blank if decorative image)',
  name: 'alt',
  type: 'string',
  required: false,
  i18n: true
}
,
        {
  label: 'Is logo?',
  hint: 'Positioned in the center and not cropped',
  name: 'isLogo',
  type: 'boolean',
  required: false,
  i18n: 'duplicate' 
},
]
},
]
}
,
        {
  label: 'With a background?',
  name: 'background',
  type: 'boolean',
  default: false,
  required: false,
  i18n: 'duplicate' 
},
]
}
,{
  label: 'Search',
  name: 'search',
  type: 'object',
  required: false,
  i18n: true,
  collapsed: false,
  summary: '{{heading.title}}',
  fields: [
  
        {
  label: 'Heading',
  name: 'heading',
  type: 'object',
  required: false,
  i18n: true,
  collapsed: true,
  summary: '{{title}}',
  fields: [
  
        {
  label: 'Surtitle',
  name: 'surtitle',
  type: 'string',
  required: false,
  i18n: true 
},
        {
  label: 'Title',
  name: 'title',
  type: 'string',
  required: false,
  i18n: true 
},
        {
  label: 'Text',
  name: 'text_markdown',
  nameOverride: 'text',
  type: 'rich-text',
  minimal: true,
  buttons: ['bold', 'italic', 'link', 'bulleted-list'],
  editor_components: [],
  modes: ['rich_text'],
  required: false,
  i18n: true 
},
]
}
,
        {
  label: 'With a background?',
  name: 'background',
  type: 'boolean',
  default: false,
  required: false,
  i18n: 'duplicate' 
},
]
},{
  label: 'Selection Pages',
  name: 'selected_pages',
  nameOverride: 'selected-pages',
  type: 'object',
  required: false,
  i18n: true,
  collapsed: false,
  summary: '{{heading.title}}',
  fields: [
  
        {
  label: 'Heading',
  name: 'heading',
  type: 'object',
  required: false,
  i18n: true,
  collapsed: true,
  summary: '{{title}}',
  fields: [
  
        {
  label: 'Surtitle',
  name: 'surtitle',
  type: 'string',
  required: false,
  i18n: true 
},
        {
  label: 'Title',
  name: 'title',
  type: 'string',
  required: false,
  i18n: true 
},
        {
  label: 'Text',
  name: 'text_markdown',
  nameOverride: 'text',
  type: 'rich-text',
  minimal: true,
  buttons: ['bold', 'italic', 'link', 'bulleted-list'],
  editor_components: [],
  modes: ['rich_text'],
  required: false,
  i18n: true 
},
]
}
,
        {
  name: 'section',
  type: 'string',
  ui: {
    component: 'hidden',
    defaultValue: 'pages'
  },
},
        {
  label: 'Pages',
  label_singular: 'Page',
  hint: '',
  name: 'items_pages',
  nameOverride: 'items',
  type: 'reference',
  collection: 'pages',
  display_fields: ["title"],
  search_fields: ["title"],
  value_field: '{{slug}}',
  multiple: true,
  required: true,
  i18n: 'duplicate'
},
        
{
  label: 'Layout',
  hint: '',
  name: 'layout',
  type: 'string', ui: { component: 'select' },
    options: [{ label: 'Grid', value: 'grid' },{ label: 'List', value: 'list' },
    ],
  required: false,
  i18n: 'duplicate'
}

,
        {
  label: 'Show more?',
  name: 'show_more',
  type: 'boolean',
  default: true,
  required: false,
  i18n: 'duplicate'
}
,
        {
  label: 'With a background?',
  name: 'background',
  type: 'boolean',
  default: false,
  required: false,
  i18n: 'duplicate' 
},
]
},{
  label: 'Selection Products',
  name: 'selected_products',
  nameOverride: 'selected-products',
  type: 'object',
  required: false,
  i18n: true,
  collapsed: false,
  summary: '{{heading.title}}',
  fields: [
  
        {
  label: 'Heading',
  name: 'heading',
  type: 'object',
  required: false,
  i18n: true,
  collapsed: true,
  summary: '{{title}}',
  fields: [
  
        {
  label: 'Surtitle',
  name: 'surtitle',
  type: 'string',
  required: false,
  i18n: true 
},
        {
  label: 'Title',
  name: 'title',
  type: 'string',
  required: false,
  i18n: true 
},
        {
  label: 'Text',
  name: 'text_markdown',
  nameOverride: 'text',
  type: 'rich-text',
  minimal: true,
  buttons: ['bold', 'italic', 'link', 'bulleted-list'],
  editor_components: [],
  modes: ['rich_text'],
  required: false,
  i18n: true 
},
]
}
,
        {
  name: 'section',
  type: 'string',
  ui: {
    component: 'hidden',
    defaultValue: 'products'
  },
},
        {
  label: 'Products',
  label_singular: 'Product',
  hint: '',
  name: 'items_products',
  nameOverride: 'items',
  type: 'reference',
  collection: 'products',
  display_fields: ["title"],
  search_fields: ["title"],
  value_field: '{{slug}}',
  multiple: true,
  required: true,
  i18n: 'duplicate'
},
        
{
  label: 'Layout',
  hint: '',
  name: 'layout',
  type: 'string', ui: { component: 'select' },
    options: [{ label: 'Grid', value: 'grid' },{ label: 'List', value: 'list' },
    ],
  required: false,
  i18n: 'duplicate'
}

,
        {
  label: 'Show more?',
  name: 'show_more',
  type: 'boolean',
  default: true,
  required: false,
  i18n: 'duplicate'
}
,
        {
  label: 'With a background?',
  name: 'background',
  type: 'boolean',
  default: false,
  required: false,
  i18n: 'duplicate' 
},
]
},{
  label: 'Selection Tags',
  name: 'selected_products_tags',
  nameOverride: 'selected-products_tags',
  type: 'object',
  required: false,
  i18n: true,
  collapsed: false,
  summary: '{{heading.title}}',
  fields: [
  
        {
  label: 'Heading',
  name: 'heading',
  type: 'object',
  required: false,
  i18n: true,
  collapsed: true,
  summary: '{{title}}',
  fields: [
  
        {
  label: 'Surtitle',
  name: 'surtitle',
  type: 'string',
  required: false,
  i18n: true 
},
        {
  label: 'Title',
  name: 'title',
  type: 'string',
  required: false,
  i18n: true 
},
        {
  label: 'Text',
  name: 'text_markdown',
  nameOverride: 'text',
  type: 'rich-text',
  minimal: true,
  buttons: ['bold', 'italic', 'link', 'bulleted-list'],
  editor_components: [],
  modes: ['rich_text'],
  required: false,
  i18n: true 
},
]
}
,
        {
  name: 'section',
  type: 'string',
  ui: {
    component: 'hidden',
    defaultValue: 'products_tags'
  },
},
        {
  label: 'Tags',
  label_singular: 'Tag',
  hint: '',
  name: 'items_products_tags',
  nameOverride: 'items',
  type: 'reference',
  collection: 'products_tags',
  display_fields: ["title"],
  search_fields: ["title"],
  value_field: '{{slug}}',
  multiple: true,
  required: true,
  i18n: 'duplicate'
},
        
{
  label: 'Layout',
  hint: '',
  name: 'layout',
  type: 'string', ui: { component: 'select' },
    options: [{ label: 'Grid', value: 'grid' },{ label: 'List', value: 'list' },
    ],
  required: false,
  i18n: 'duplicate'
}

,
        {
  label: 'Show more?',
  name: 'show_more',
  type: 'boolean',
  default: true,
  required: false,
  i18n: 'duplicate'
}
,
        {
  label: 'With a background?',
  name: 'background',
  type: 'boolean',
  default: false,
  required: false,
  i18n: 'duplicate' 
},
]
},{
  label: 'Testimonials',
  name: 'testimonials',
  type: 'object',
  required: false,
  i18n: true,
  collapsed: false,
  summary: '{{heading.title}}',
  fields: [
  
        {
  label: 'Heading',
  name: 'heading',
  type: 'object',
  required: false,
  i18n: true,
  collapsed: true,
  summary: '{{title}}',
  fields: [
  
        {
  label: 'Surtitle',
  name: 'surtitle',
  type: 'string',
  required: false,
  i18n: true 
},
        {
  label: 'Title',
  name: 'title',
  type: 'string',
  required: false,
  i18n: true 
},
        {
  label: 'Text',
  name: 'text_markdown',
  nameOverride: 'text',
  type: 'rich-text',
  minimal: true,
  buttons: ['bold', 'italic', 'link', 'bulleted-list'],
  editor_components: [],
  modes: ['rich_text'],
  required: false,
  i18n: true 
},
]
}
,
        {
  label: 'Items',
  label_singular: 'Item',
  name: 'items',
  type: 'object', list: true,
  required: false,
  i18n: true,
  collapsed: true,fields: [
  
        {
  label: 'Quote',
  name: 'quote',
  type: 'rich-text',
  minimal: true,
  buttons: ['bold', 'italic', 'link'],
  editor_components: [],
  modes: ['rich_text'],
  required: false,
  i18n: true
}
,
        {
  label: 'Author',
  name: 'author',
  type: 'object',
  required: false,
  i18n: true,
  collapsed: true,
  fields: [
  
        {
  label: 'Title',
  name: 'title',
  type: 'string',
  required: false,
  i18n: true 
},
        {
  label: 'Text',
  name: 'text',
  type: 'string',
  required: false,
  i18n: true 
},
        {
  label: 'Images',
  name: 'image',
  type: 'object',
  required: false,
  i18n: true,
  collapsed: true,
  fields: [
  
        {
  label: 'Image',
  hint: 'Resize and compress image before sending : https://bulkresizephotos.com/fr?quality=90&type=width&width=1600',
  name: 'src',
  type: 'image',
  required: false,
  i18n: true,
  choose_url: false,
  media_library: {
    config: {
      max_file_size: '700000'
    }
  },
  media_path: '/assets/images/uploads',
  public_path: '/images/uploads'
},
        {
  label: 'Text alternative',
  hint: 'For an image that conveys information (leave blank if decorative image)',
  name: 'alt',
  type: 'string',
  required: false,
  i18n: true
}
,
        {
  label: 'Is logo?',
  hint: 'Positioned in the center and not cropped',
  name: 'isLogo',
  type: 'boolean',
  required: false,
  i18n: 'duplicate' 
},
]
},
]
}
,
]
},
        
{
  label: 'Layout',
  hint: '',
  name: 'layout',
  type: 'string', ui: { component: 'select' },
    options: [{ label: 'Grid', value: 'grid' },{ label: 'Carousel', value: 'carousel' },
    ],
  required: false,
  i18n: 'duplicate'
}

,
        {
  label: 'Carousel configuration',
  hint: 'Only for carousel display',
  name: 'carousel',
  type: 'object',
  required: false,
  i18n: true,
  collapsed: true,
  fields: [
  
        
{
  label: 'Params',
  name: 'params',
  type: 'object',
  required: false,
  i18n: true,
  collapsed: false,
  fields: [
    {
      label: 'Focus',
      hint: 'Position active slide in center?',
      name: 'focus',
      type: 'boolean',
      required: false,
      i18n: 'duplicate'
    },
    {
      label: 'Autoplay',
      name: 'autoplay',
      type: 'boolean',
      default: true,
      required: false,
      i18n: 'duplicate'
    },
    {
      label: 'Arrows',
      name: 'arrows',
      type: 'boolean',
      default: true,
      required: false,
      i18n: 'duplicate'
    },
    {
      label: 'Pagination',
      name: 'pagination',
      type: 'boolean',
      default: false,
      required: false,
      i18n: 'duplicate'
    },
{
  label: 'Carousel type',
  hint: '',
  name: 'type',
  type: 'string', ui: { component: 'select' },
    options: [{ label: 'Slide', value: 'slide' },{ label: 'Loop', value: 'loop' },{ label: 'Fade', value: 'fade' },
    ],
  required: false,
  i18n: 'duplicate'
}
,
    {
      label: 'Per page',
      hint: 'Number of slides to display',
      name: 'perPage',
      type: 'number',
      min: 1,
      required: false,
      i18n: 'duplicate'
    },
    {
      label: 'Padding',
      hint: 'Padding left/right of the carousel. In rem value',
      name: 'padding',
      type: 'number',
      min: 0,
      required: false,
      i18n: 'duplicate'
    },
    {
      label: 'Gap',
      hint: 'The gap between slides. Expressed in rem.',
      name: 'gap',
      type: 'number',
      min: 0,
      required: false,
      i18n: 'duplicate'
    }
  ]
}
,
        {
  label: 'Responsive',
  name: 'responsive',
  type: 'object', list: true,
  required: false,
  i18n: true,
  collapsed: true,
  fields: [
  
        
{
  label: 'Breakpoints',
  hint: 'Screen size',
  name: 'breakpoints',
  type: 'string', ui: { component: 'select' },
    options: [{ label: '1440th', value: '1440' },{ label: '1280th', value: '1280' },{ label: '640th', value: '640' },{ label: '768th', value: '768' },{ label: '1024th', value: '1024' },
    ],
    default: '640',
  required: false,
  i18n: 'duplicate'
}


,
        
{
  label: 'Params',
  name: 'params',
  type: 'object',
  required: false,
  i18n: true,
  collapsed: false,
  fields: [
    {
      label: 'Focus',
      hint: 'Position active slide in center?',
      name: 'focus',
      type: 'boolean',
      required: false,
      i18n: 'duplicate'
    },
    {
      label: 'Autoplay',
      name: 'autoplay',
      type: 'boolean',
      default: true,
      required: false,
      i18n: 'duplicate'
    },
    {
      label: 'Arrows',
      name: 'arrows',
      type: 'boolean',
      default: true,
      required: false,
      i18n: 'duplicate'
    },
    {
      label: 'Pagination',
      name: 'pagination',
      type: 'boolean',
      default: false,
      required: false,
      i18n: 'duplicate'
    },
{
  label: 'Carousel type',
  hint: '',
  name: 'type',
  type: 'string', ui: { component: 'select' },
    options: [{ label: 'Slide', value: 'slide' },{ label: 'Loop', value: 'loop' },{ label: 'Fade', value: 'fade' },
    ],
  required: false,
  i18n: 'duplicate'
}
,
    {
      label: 'Per page',
      hint: 'Number of slides to display',
      name: 'perPage',
      type: 'number',
      min: 1,
      required: false,
      i18n: 'duplicate'
    },
    {
      label: 'Padding',
      hint: 'Padding left/right of the carousel. In rem value',
      name: 'padding',
      type: 'number',
      min: 0,
      required: false,
      i18n: 'duplicate'
    },
    {
      label: 'Gap',
      hint: 'The gap between slides. Expressed in rem.',
      name: 'gap',
      type: 'number',
      min: 0,
      required: false,
      i18n: 'duplicate'
    }
  ]
}
,
]
}
,
]
}
,
        {
  label: 'With a background?',
  name: 'background',
  type: 'boolean',
  default: false,
  required: false,
  i18n: 'duplicate' 
},
]
},{
  label: 'Timeline',
  name: 'timeline',
  type: 'object',
  required: false,
  i18n: true,
  collapsed: false,
  summary: '{{heading.title}}',
  fields: [
  
        {
  label: 'Heading',
  name: 'heading',
  type: 'object',
  required: false,
  i18n: true,
  collapsed: true,
  summary: '{{title}}',
  fields: [
  
        {
  label: 'Surtitle',
  name: 'surtitle',
  type: 'string',
  required: false,
  i18n: true 
},
        {
  label: 'Title',
  name: 'title',
  type: 'string',
  required: false,
  i18n: true 
},
        {
  label: 'Text',
  name: 'text_markdown',
  nameOverride: 'text',
  type: 'rich-text',
  minimal: true,
  buttons: ['bold', 'italic', 'link', 'bulleted-list'],
  editor_components: [],
  modes: ['rich_text'],
  required: false,
  i18n: true 
},
]
}
,
        {
  label: 'Items',
  label_singular: 'Item',
  name: 'items',
  type: 'object', list: true,
  required: false,
  i18n: true,
  collapsed: true,
  summary: '{{title}}',
  fields: [
  
        {
  label: 'Surtitle',
  name: 'surtitle',
  type: 'string',
  required: false,
  i18n: true 
},
        {
  label: 'Title',
  name: 'title',
  type: 'string',
  required: false,
  i18n: true 
},
        {
  label: 'Text',
  name: 'text_markdown',
  nameOverride: 'text',
  type: 'rich-text',
  minimal: true,
  buttons: ['bold', 'italic', 'link', 'bulleted-list'],
  editor_components: [],
  modes: ['rich_text'],
  required: false,
  i18n: true 
},
]
},
        {
  label: 'With a background?',
  name: 'background',
  type: 'boolean',
  default: false,
  required: false,
  i18n: 'duplicate' 
},
]
},{
  label: 'Title',
  name: 'title',
  type: 'object',
  required: false,
  i18n: true,
  collapsed: false,
  summary: '{{heading.title}}',
  fields: [
  
        {
  label: 'Heading',
  name: 'heading',
  type: 'object',
  required: false,
  i18n: true,
  collapsed: true,
  summary: '{{title}}',
  fields: [
  
        {
  label: 'Surtitle',
  name: 'surtitle',
  type: 'string',
  required: false,
  i18n: true 
},
        {
  label: 'Title',
  name: 'title',
  type: 'string',
  required: false,
  i18n: true 
},
        {
  label: 'Text',
  name: 'text_markdown',
  nameOverride: 'text',
  type: 'rich-text',
  minimal: true,
  buttons: ['bold', 'italic', 'link', 'bulleted-list'],
  editor_components: [],
  modes: ['rich_text'],
  required: false,
  i18n: true 
},
]
}
,
        {
  label: 'With a background?',
  name: 'background',
  type: 'boolean',
  default: false,
  required: false,
  i18n: 'duplicate' 
},
]
},{
  label: 'Video',
  name: 'video',
  type: 'object',
  required: false,
  i18n: true,
  collapsed: false,
  summary: '{{heading.title}}',
  fields: [
  
        {
  label: 'Heading',
  name: 'heading',
  type: 'object',
  required: false,
  i18n: true,
  collapsed: true,
  summary: '{{title}}',
  fields: [
  
        {
  label: 'Surtitle',
  name: 'surtitle',
  type: 'string',
  required: false,
  i18n: true 
},
        {
  label: 'Title',
  name: 'title',
  type: 'string',
  required: false,
  i18n: true 
},
        {
  label: 'Text',
  name: 'text_markdown',
  nameOverride: 'text',
  type: 'rich-text',
  minimal: true,
  buttons: ['bold', 'italic', 'link', 'bulleted-list'],
  editor_components: [],
  modes: ['rich_text'],
  required: false,
  i18n: true 
},
]
}
,
        {
  label: 'Video',
  name: 'video',
  type: 'object',
  required: false,
  i18n: true,
  collapsed: true,
  fields: [
  
        {
  label: 'MP4',
  hint: 'Video (MP4)',
  name: 'mp4', media: { accept: 'video/mp4' },
  type: 'image',
  required: false,
  i18n: 'duplicate',
  choose_url: true,
  media_library: {
    config: {
      max_file_size: 5000000
    }
  },
  media_path: '/static/assets/videos',
  public_path: '/assets/videos'
}
,
        {
  label: 'WEBM',
  hint: 'Video (WEBM)',
  name: 'webm', media: { accept: 'video/webm' },
  type: 'image',
  required: false,
  i18n: 'duplicate',
  choose_url: true,
  media_library: {
    config: {
      max_file_size: 5000000
    }
  },
  media_path: '/static/assets/videos',
  public_path: '/assets/videos'
}
,
        {
  label: 'Controls',
  name: 'controls',
  type: 'boolean',
  default: true,
  required: false,
  i18n: 'duplicate'
}
,
        {
  label: 'Autoplay',
  name: 'autoplay',
  type: 'boolean',
  default: false,
  required: false,
  i18n: 'duplicate'
}
,
        {
  label: 'Loop',
  name: 'loop',
  type: 'boolean',
  default: false,
  required: false,
  i18n: 'duplicate'
}
,
        {
  label: 'Legend',
  name: 'legend',
  type: 'string',
  required: false,
  i18n: true 
},
        {
  label: 'Transcription',
  name: 'transcription',
  type: 'string', ui: { component: 'textarea' },
  required: false,
  i18n: true
}
,
        {
  label: 'Poster',
  hint: 'Placehoster image for video',
  name: 'poster',
  type: 'image',
  required: false,
  i18n: true,
  choose_url: false,
  media_library: {
    config: {
      max_file_size: '700000'
    }
  },
  media_path: '/assets/images/uploads',
  public_path: '/images/uploads'
},
]
}
,
        
{
  label: 'Grid',
  hint: '',
  name: 'grid',
  type: 'string', ui: { component: 'select' },
    options: [{ label: 'Small', value: 'small' },{ label: 'Medium', value: 'medium' },{ label: 'Large', value: 'large' },{ label: 'Container', value: 'container' },{ label: 'Full', value: 'full' },
    ],
    default: 'large',
  required: true,
  i18n: 'duplicate'
}

,
        {
  label: 'With a background?',
  name: 'background',
  type: 'boolean',
  default: false,
  required: false,
  i18n: 'duplicate' 
},
]
}
,]}
,
        



{
  label: 'Slug',
  hint: 'Leave empty to automate with the title. **Be careful to SEO impact.**',
  name: 'slug',
  type: 'string',
  required: false,
  i18n: true,
  


  pattern: [
    "^(|[a-z0-9-]&#43;)$",
    "Contain only lowercase letters, numbers, and hyphens, with no spaces, accents, or special characters"
  ]

},
  ],

},
        {
  name: 'products',
  path: 'content/products',
  label: 'Products',
  label_singular: 'Product',
  description: 'All products',
  i18n: true,
  ui: {
  allowedActions: {
    create: true,
    createNestedFolder: false,
  },
},
  
  ui: {
  filename: {
    readonly: true,
    slugify: (values) => {
      const title = values.title || "untitled"
      const date = values.date ? new Date(values.date) : new Date()
      const year = date.getFullYear()
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');

      const slug = title
        .toLowerCase()
        .replace(/ /g, '-')

      const path = `${year}/${slug}`

      return path
    },
  },
},
  
  
  



match: {
    exclude: '_index',
},





fields: [
        {
  label: 'is not index',
  name: 'isIndex',
  type: 'boolean', ui: { component: 'hidden' },
  default: false,
  required: false,
  i18n: false 
},
        {
  label: 'Draft',
  name: 'draft',
  type: 'boolean',
  default: true,
  required: false,
  i18n: true
},
        {
  label: 'Date',
  name: 'date',
  type: 'datetime',
  default: '{{now}}',
  required: true,
  i18n: 'duplicate' 
},
        {
  label: 'Page title',
  hint: 'Displayed in tabs, search results, and in SMS/Messages/Social networks preview',
  name: 'title',
  type: 'string',
  required: true,
  i18n: true,
  isTitle: true
  
},
        {
  label: 'Description',
  hint: 'Displayed in tabs, search results, and in SMS/Messages/Social networks preview',
  name: 'description',
  type: 'string', ui: { component: 'textarea' },
  required: false,
  i18n: true 
},
        {
  label: 'Offer',
  name: 'offer',
  type: 'object',
  required: false,
  i18n: true,
  collapsed: false,
  fields: [
  
        {
  label: 'Price',
  hint: 'e.g: 300000 (for 300 000 €)',
  name: 'price',
  type: 'number',
  required: false,
  i18n: 'duplicate'
}
,
        


{
  label: 'Discount',
  hint: 'Amount of the reduction, e.g: 30%',
  name: 'discount',
  type: 'string',
  required: false,
  i18n: 'duplicate',
  


  pattern: [
    "^[0-9]*(%?)$",
    "Value only (without currency)"
  ]

}
,
        {
  label: 'Hide price',
  name: 'hide_price',
  type: 'boolean',
  required: false,
  i18n: 'duplicate'
}
,
        {
  label: 'Text',
  name: 'text',
  type: 'string',
  required: false,
  i18n: true 
},
]
}
,
        {
  label: 'Tags',
  label_singular: 'Tag',
  hint: '',
  name: 'items_products_tags',
  nameOverride: 'products_tags',
  type: 'reference',
  collection: 'products_tags',
  display_fields: ["title"],
  search_fields: ["title"],
  value_field: '{{slug}}',
  multiple: true,
  required: false,
  i18n: 'duplicate'
},
        {
  label: 'Image principale',
  hint: 'Displayed in search results, and in SMS/Messages/Social networks preview',
  name: 'image',
  type: 'object',
  required: false,
  i18n: true,
  collapsed: true,
  fields: [
  
        {
  label: 'Image',
  hint: 'Resize and compress image before sending : https://bulkresizephotos.com/fr?quality=90&type=width&width=1600',
  name: 'src',
  type: 'image',
  required: false,
  i18n: true,
  choose_url: false,
  media_library: {
    config: {
      max_file_size: '700000'
    }
  },
  media_path: '/assets/images/uploads',
  public_path: '/images/uploads'
},
        {
  label: 'Text alternative',
  hint: 'For an image that conveys information (leave blank if decorative image)',
  name: 'alt',
  type: 'string',
  required: false,
  i18n: true
}
,
]
},
        {
  label: 'Images',
  name: 'images',
  type: 'object', list: true,
  required: false,
  i18n: true,
  collapsed: true,
  fields: [
  
        {
  label: 'Image',
  hint: 'Resize and compress image before sending : https://bulkresizephotos.com/fr?quality=90&type=width&width=1600',
  name: 'src',
  type: 'image',
  required: false,
  i18n: true,
  choose_url: false,
  media_library: {
    config: {
      max_file_size: '700000'
    }
  },
  media_path: '/assets/images/uploads',
  public_path: '/images/uploads'
},
        {
  label: 'Text alternative',
  hint: 'For an image that conveys information (leave blank if decorative image)',
  name: 'alt',
  type: 'string',
  required: false,
  i18n: true
}
,
        {
  label: 'Credit',
  name: 'credit',
  type: 'rich-text',
  minimal: true,
  buttons: ['link'],
  editor_components: [],
  modes: ['rich_text'],
  required: false,
  i18n: true 
},
        {
  label: 'Legend',
  name: 'legend',
  type: 'string',
  required: false,
  i18n: true 
},
        {
  label: 'Half size?',
  name: 'half',
  type: 'boolean',
  required: false,
  i18n: 'duplicate' 
},
]
},
        {
  label: 'Body',
  name: 'body',
  type: 'rich-text',
  required: false,
  i18n: true,
  isBody: true
  
},
        



{
  label: 'Slug',
  hint: 'Leave empty to automate with the title. **Be careful to SEO impact.**',
  name: 'slug',
  type: 'string',
  required: false,
  i18n: true,
  


  pattern: [
    "^(|[a-z0-9-]&#43;)$",
    "Contain only lowercase letters, numbers, and hyphens, with no spaces, accents, or special characters"
  ]

},
  ],

},
        {
  name: 'products_tags',
  path: 'content/products_tags',
  label: 'Tags',
  label_singular: 'Tag',
  description: 'All products tags',
  i18n: true,
  ui: {
  allowedActions: {
    create: true,
    createNestedFolder: false,
  },
},
  
  ui: {
  filename: {
    readonly: true,
    slugify: (values) => {
      const title = values.title || "untitled"
      const date = values.date ? new Date(values.date) : new Date()
      const year = date.getFullYear()
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');

      const slug = title
        .toLowerCase()
        .replace(/ /g, '-')

      const path = `${slug}/_index`

      return path
    },
  },
},
  

  



match: {
    exclude: '_index',
},





fields: [
        {
  label: 'is not index',
  name: 'isIndex',
  type: 'boolean', ui: { component: 'hidden' },
  default: false,
  required: false,
  i18n: false 
},
        {
  label: 'Draft',
  name: 'draft',
  type: 'boolean',
  default: true,
  required: false,
  i18n: true
},
        {
  label: 'Page title',
  hint: 'Displayed in tabs, search results, and in SMS/Messages/Social networks preview',
  name: 'title',
  type: 'string',
  required: true,
  i18n: true,
  isTitle: true
  
},
        {
  label: 'Description',
  hint: 'Displayed in tabs, search results, and in SMS/Messages/Social networks preview',
  name: 'description',
  type: 'string', ui: { component: 'textarea' },
  required: false,
  i18n: true 
},
        



{
  label: 'Slug',
  hint: 'Leave empty to automate with the title. **Be careful to SEO impact.**',
  name: 'slug',
  type: 'string',
  required: false,
  i18n: true,
  


  pattern: [
    "^(|[a-z0-9-]&#43;)$",
    "Contain only lowercase letters, numbers, and hyphens, with no spaces, accents, or special characters"
  ]

},
  ],

},
]
  }
});

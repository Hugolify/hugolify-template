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
  nameOverride: 'isPage',name: 'is_page',
  type: 'boolean',
  default: true,
  
  ui: {
    component: 'hidden'
  },
  required: false
}



,
          
            




{
  label: 'Draft',
  name: 'draft',
  type: 'boolean',
  default: true,
  
  required: false
}




,
          
            






{
  label: 'Page title',
  description: 'Displayed in tabs, search results, and in SMS/Messages/Social networks preview',
  nameOverride: 'title',name: 'title_page',
  type: 'string',
  isTitle: true,
  required: true
}




,
          
            




{
  label: 'Description',
  description: 'Displayed in tabs, search results, and in SMS/Messages/Social networks preview',
  name: 'description',
  type: 'string',
  ui: {
    component: "textarea"
  },
  required: false
}




,
          
            










{
  label: 'Image principale',
  description: 'Displayed in search results, and in SMS/Messages/Social networks preview',
  nameOverride: 'image',name: 'featured_image',
  type: 'object',
  required: false,
  
fields: [
  
          
            







{
  label: 'Image',
  description: 'Resize and compress image before sending : https://bulkresizephotos.com/fr?quality=90&type=width&width=1600',
  nameOverride: 'src',name: 'image_src',
  type: 'image',
  required: false
}



,
          
            






{
  label: 'Text alternative',
  description: 'For an image that conveys information (leave blank if decorative image)',
  nameOverride: 'alt',name: 'image_alt',
  type: 'string',
  required: false
}




,
]

}




,
          
            






{
  label: 'Hero',
  name: 'hero',
  type: 'object',
  required: false,
  
fields: [
  
          
            




{
  label: 'Surtitle',
  name: 'surtitle',
  type: 'string',
  required: false
}




,
          
            




{
  label: 'Title',
  name: 'title',
  type: 'string',
  required: false
}




,
          
            






{
  label: 'Text',
  nameOverride: 'text',name: 'text_markdown',
  type: 'rich-text',
  options: {
    media: false
  },
  required: false
}




,
          
            






{
  label: 'CTAs',
  name: 'ctas',
  type: 'object',
  list: true,
  ui: {
    max: 2
  },
  required: false,
  
fields: [
  
          
            




{
  label: 'Text',
  name: 'text',
  type: 'string',
  required: false
}




,
          
            




{
  label: 'URL',
  description: 'Absolute URL (e.g https://www.example.com)',
  name: 'url',
  type: 'string',
  required: false
}




,
          
            




{
  label: 'Language',
  description: 'Enter code lang (e.g. fr) if different of the current page language',
  name: 'lang',
  type: 'string',
  required: false
}




,
          
            






{
  label: 'Is blank?',
  nameOverride: 'blank',name: 'is_blank',
  type: 'boolean',
  required: false
}




,
]

}



,
          
            






{
  label: 'Image',
  name: 'image',
  type: 'object',
  required: false,
  
fields: [
  
          
            







{
  label: 'Image',
  description: 'Resize and compress image before sending : https://bulkresizephotos.com/fr?quality=90&type=width&width=1600',
  nameOverride: 'src',name: 'image_src',
  type: 'image',
  required: false
}



,
          
            






{
  label: 'Text alternative',
  description: 'For an image that conveys information (leave blank if decorative image)',
  nameOverride: 'alt',name: 'image_alt',
  type: 'string',
  required: false
}




,
          
            




{
  label: 'Credit',
  name: 'credit',
  type: 'rich-text',
  options: {
    media: false
  },
  required: false
}




,
          
            






{
  label: 'Is background?',
  nameOverride: 'background',name: 'is_background',
  type: 'boolean',
  required: false
}




,
          
            




{
  label: 'Darken?',
  nameOverride: 'darken',name: 'is_darken',
  type: 'boolean',
  required: false
}




,
]

}




,
          
            






{
  label: 'Video',
  name: 'video',
  type: 'object',
  required: false,
  
fields: [
  
          
            



  
    
  








{
  label: 'MP4',
  description: 'MP4 video file',
  name: 'mp4',
  type: 'image',
  media: {
    accept: [
      'video/mp4'
    ]
  },
  required: false
}




,
          
            



  
    
  








{
  label: 'WEBM',
  description: 'WEBM video file',
  name: 'webm',
  type: 'image',
  media: {
    accept: [
      'video/webm'
    ]
  },
  required: false
}




,
          
            



  
    
  








{
  label: 'MP4 (Mobile)',
  description: 'MP4 video file for mobile',
  name: 'mp4_mobile',
  type: 'image',
  media: {
    accept: [
      'video/mp4'
    ]
  },
  required: false
}




,
          
            



  
    
  








{
  label: 'WEBM (Mobile)',
  description: 'WEBM video file for mobile',
  name: 'webm_mobile',
  type: 'image',
  media: {
    accept: [
      'video/webm'
    ]
  },
  required: false
}




,
          
            




{
  label: 'Controls',
  name: 'controls',
  type: 'boolean',
  default: true,
  
  required: false
}




,
          
            




{
  label: 'Autoplay',
  name: 'autoplay',
  type: 'boolean',
  default: false,
  
  required: false
}




,
          
            




{
  label: 'Loop',
  name: 'loop',
  type: 'boolean',
  default: false,
  
  required: false
}




,
          
            




{
  label: 'Legend',
  name: 'legend',
  type: 'string',
  required: false
}




,
          
            




{
  label: 'Transcription',
  name: 'transcription',
  type: 'string',
  ui: {
    component: "textarea"
  },
  required: false
}




,
          
            






{
  label: 'Is background?',
  nameOverride: 'background',name: 'is_background',
  type: 'boolean',
  required: false
}




,
          
            




{
  label: 'Darken?',
  nameOverride: 'darken',name: 'is_darken',
  type: 'boolean',
  required: false
}




,
          
            





{
  label: 'Poster',
  description: 'Placehoster image for video',
  name: 'poster',
  type: 'image',
  required: false
}



,
]

}




,
          
            




{
  label: 'Alignment',
  name: 'align',
  type: 'string',
  component: 'select',
  options: [
    { 
      label: 'Start', 
      value: 'start' 
    },
    { 
      label: 'Center', 
      value: 'center' 
    },
    { 
      label: 'End', 
      value: 'end' 
    },
  ],
  required: false
}




,
]

}




,
          
            




{
  label: 'Body',
  name: 'body',
  type: 'rich-text',
  isBody: true,
  options: {
    media: false
  },
  required: false
}




,
          
            




{
  label: 'Blocs',
  name: 'blocks',
  list: true,
  required: false,
  type: 'object',
  templateKey: 'type',
  templates: [
    
    
    
      






{
  label: 'Audio',
  name: 'audio',
  type: 'object',
  required: false,
  
fields: [
  
          
            






{
  label: 'Heading',
  name: 'heading',
  type: 'object',
  required: false,
  
fields: [
  
          
            




{
  label: 'Surtitle',
  name: 'surtitle',
  type: 'string',
  required: false
}




,
          
            




{
  label: 'Title',
  name: 'title',
  type: 'string',
  required: false
}




,
          
            






{
  label: 'Text',
  nameOverride: 'text',name: 'text_markdown',
  type: 'rich-text',
  options: {
    media: false
  },
  required: false
}




,
]

}




,
          
            






{
  label: 'Audios',
  name: 'audio',
  type: 'object',
  required: false,
  
fields: [
  
          
            



  
    
  








{
  label: 'MP3',
  description: 'MP3 audio file',
  name: 'mp3',
  type: 'image',
  media: {
    accept: [
      'audio/mpeg'
    ]
  },
  required: false
}




,
          
            



  
    
  








{
  label: 'OGG',
  description: 'OGG audio file',
  name: 'ogg',
  type: 'image',
  media: {
    accept: [
      'audio/ogg'
    ]
  },
  required: false
}




,
          
            




{
  label: 'Autoplay',
  name: 'autoplay',
  type: 'boolean',
  default: false,
  
  required: false
}




,
          
            




{
  label: 'Loop',
  name: 'loop',
  type: 'boolean',
  default: false,
  
  required: false
}




,
          
            




{
  label: 'Transcription',
  name: 'transcription',
  type: 'string',
  ui: {
    component: "textarea"
  },
  required: false
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
  
  required: false
}




,
]

}




,
    
  
    
    
      






{
  label: 'Alert',
  name: 'alert',
  type: 'object',
  required: false,
  
fields: [
  
          
            






{
  label: 'Text',
  nameOverride: 'text',name: 'text_markdown',
  type: 'rich-text',
  options: {
    media: false
  },
  required: false
}




,
          
            




{
  label: 'State',
  name: 'state',
  type: 'string',
  component: 'select',
  options: [
    { 
      label: 'Danger', 
      value: 'danger' 
    },
    { 
      label: 'Dark', 
      value: 'dark' 
    },
    { 
      label: 'Info', 
      value: 'info' 
    },
    { 
      label: 'Light', 
      value: 'light' 
    },
    { 
      label: 'Primary', 
      value: 'primary' 
    },
    { 
      label: 'Secondary', 
      value: 'secondary' 
    },
    { 
      label: 'Success', 
      value: 'success' 
    },
    { 
      label: 'Warning', 
      value: 'warning' 
    },
  ],
  required: true
}




,
          
            




{
  label: 'With a background?',
  name: 'background',
  type: 'boolean',
  default: false,
  
  required: false
}




,
]

}




,
    
  
    
    
      






{
  label: 'Chart',
  name: 'chart',
  type: 'object',
  required: false,
  
fields: [
  
          
            






{
  label: 'Heading',
  name: 'heading',
  type: 'object',
  required: false,
  
fields: [
  
          
            




{
  label: 'Surtitle',
  name: 'surtitle',
  type: 'string',
  required: false
}




,
          
            




{
  label: 'Title',
  name: 'title',
  type: 'string',
  required: false
}




,
          
            






{
  label: 'Text',
  nameOverride: 'text',name: 'text_markdown',
  type: 'rich-text',
  options: {
    media: false
  },
  required: false
}




,
]

}




,
          
            






{
  label: 'Chart',
  name: 'chart',
  type: 'object',
  required: false,
  
fields: [
  
          
            




{
  label: 'Title',
  name: 'title',
  type: 'string',
  required: false
}




,
          
            






{
  label: 'Chart type',
  nameOverride: 'type',name: 'chart_type',
  type: 'string',
  component: 'select',
  options: [
    { 
      label: 'Bar', 
      value: 'bar' 
    },
    { 
      label: 'Pie', 
      value: 'pie' 
    },
    { 
      label: 'Line', 
      value: 'line' 
    },
    { 
      label: 'Polar area', 
      value: 'polarArea' 
    },
    { 
      label: 'Radar', 
      value: 'radar' 
    },
  ],
  required: false
}




,
          
            








{
  label: 'Items',
  nameOverride: 'items',name: 'items_chart',
  type: 'object',
  list: true,
  required: false,
  
fields: [
  
          
            




{
  label: 'Label',
  name: 'label',
  type: 'string',
  required: false
}




,
          
            




{
  label: 'Value',
  name: 'value',
  type: 'string',
  required: false
}




,
          
            




{
  label: 'Color',
  
  name: 'color',
  type: 'string',
  required: false
}




,
]

}




,
          
            






{
  label: 'Data (code)',
  
  description: 'Documentation: https://www.chartjs.org/docs/',
  
  nameOverride: 'data',name: 'chart_data',
  type: 'string',
  ui: {
    component: 'textarea'
  },
  required: false
}




,
]

}




,
          
            




{
  label: 'Grid',
  name: 'grid',
  type: 'string',
  component: 'select',
  options: [
    { 
      label: 'Small', 
      value: 'small' 
    },
    { 
      label: 'Medium', 
      value: 'medium' 
    },
    { 
      label: 'Large', 
      value: 'large' 
    },
    { 
      label: 'Container', 
      value: 'container' 
    },
    { 
      label: 'Full', 
      value: 'full' 
    },
  ],
  required: true
}




,
          
            




{
  label: 'With a background?',
  name: 'background',
  type: 'boolean',
  default: false,
  
  required: false
}




,
]

}




,
    
  
    
    
      






{
  label: 'Comparison',
  name: 'comparison',
  type: 'object',
  required: false,
  
fields: [
  
          
            






{
  label: 'Heading',
  name: 'heading',
  type: 'object',
  required: false,
  
fields: [
  
          
            




{
  label: 'Surtitle',
  name: 'surtitle',
  type: 'string',
  required: false
}




,
          
            




{
  label: 'Title',
  name: 'title',
  type: 'string',
  required: false
}




,
          
            






{
  label: 'Text',
  nameOverride: 'text',name: 'text_markdown',
  type: 'rich-text',
  options: {
    media: false
  },
  required: false
}




,
]

}




,
          
            




{
  label: 'Column',
  
  name: 'column',
  type: 'number',
  ui: {
    
    min: 1,
    
    
    max: 6,
    
    
    step: 1
    
  },
  required: false
}




,
          
            








{
  label: 'Items',
  nameOverride: 'items',name: 'items_comparison',
  type: 'object',
  list: true,
  required: false,
  
fields: [
  
          
            




{
  label: 'Title',
  name: 'title',
  type: 'string',
  required: false
}




,
          
            




{
  label: 'Text',
  name: 'text',
  type: 'string',
  required: false
}




,
          
            




{
  label: 'Badge',
  description: 'Show a badge',
  name: 'badge',
  type: 'string',
  required: false
}




,
          
            






{
  label: 'Offer',
  name: 'offer',
  type: 'object',
  required: false,
  
fields: [
  
          
            




{
  label: 'Price',
  
  description: 'e.g: 300000 (for 300 000 €)',
  
  name: 'price',
  type: 'number',
  ui: {
    
    
    
  },
  required: false
}




,
          
            






{
  label: 'Discount',
  description: 'Amount of the reduction, e.g: 30%',
  name: 'discount',
  type: 'string',
  required: false
}




,
          
            




{
  label: 'Hide price',
  name: 'hide_price',
  type: 'boolean',
  required: false
}




,
          
            




{
  label: 'Text',
  name: 'text',
  type: 'string',
  required: false
}




,
]

}




,
          
            






{
  label: 'Arguments',
  name: 'arguments',
  type: 'object',
  list: true,
  required: false,
  
fields: [
  
          
            




{
  label: 'Icon',
  description: 'Icon name from https://icons.getbootstrap.com/',
  name: 'icon',
  type: 'string',
  required: false
}




,
          
            




{
  label: 'Text',
  name: 'text',
  type: 'string',
  required: false
}




,
]

}




,
          
            




{
  label: 'Is highlighted?',
  name: 'is_highlighted',
  type: 'boolean',
  required: false
}




,
          
            






{
  label: 'CTA',
  name: 'cta',
  type: 'object',
  required: false,
  
fields: [
  
          
            




{
  label: 'Text',
  name: 'text',
  type: 'string',
  required: false
}




,
          
            




{
  label: 'URL',
  description: 'Absolute URL (e.g https://www.example.com)',
  name: 'url',
  type: 'string',
  required: false
}




,
          
            




{
  label: 'Language',
  description: 'Enter code lang (e.g. fr) if different of the current page language',
  name: 'lang',
  type: 'string',
  required: false
}




,
          
            






{
  label: 'Is blank?',
  nameOverride: 'blank',name: 'is_blank',
  type: 'boolean',
  required: false
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
  
  required: false
}




,
]

}



,
    
  
    
    
      






{
  label: 'Call to action',
  name: 'cta',
  type: 'object',
  required: false,
  
fields: [
  
          
            






{
  label: 'Heading',
  name: 'heading',
  type: 'object',
  required: false,
  
fields: [
  
          
            




{
  label: 'Surtitle',
  name: 'surtitle',
  type: 'string',
  required: false
}




,
          
            




{
  label: 'Title',
  name: 'title',
  type: 'string',
  required: false
}




,
          
            






{
  label: 'Text',
  nameOverride: 'text',name: 'text_markdown',
  type: 'rich-text',
  options: {
    media: false
  },
  required: false
}




,
]

}




,
          
            






{
  label: 'CTAs',
  name: 'ctas',
  type: 'object',
  list: true,
  ui: {
    max: 2
  },
  required: false,
  
fields: [
  
          
            




{
  label: 'Text',
  name: 'text',
  type: 'string',
  required: false
}




,
          
            




{
  label: 'URL',
  description: 'Absolute URL (e.g https://www.example.com)',
  name: 'url',
  type: 'string',
  required: false
}




,
          
            




{
  label: 'Language',
  description: 'Enter code lang (e.g. fr) if different of the current page language',
  name: 'lang',
  type: 'string',
  required: false
}




,
          
            






{
  label: 'Is blank?',
  nameOverride: 'blank',name: 'is_blank',
  type: 'boolean',
  required: false
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
  
  required: false
}




,
]

}




,
    
  
    
    
      






{
  label: 'Datas',
  name: 'datas',
  type: 'object',
  required: false,
  
fields: [
  
          
            






{
  label: 'Heading',
  name: 'heading',
  type: 'object',
  required: false,
  
fields: [
  
          
            




{
  label: 'Surtitle',
  name: 'surtitle',
  type: 'string',
  required: false
}




,
          
            




{
  label: 'Title',
  name: 'title',
  type: 'string',
  required: false
}




,
          
            






{
  label: 'Text',
  nameOverride: 'text',name: 'text_markdown',
  type: 'rich-text',
  options: {
    media: false
  },
  required: false
}




,
]

}




,
          
            




{
  label: 'Column',
  
  name: 'column',
  type: 'number',
  ui: {
    
    min: 1,
    
    
    max: 6,
    
    
    step: 1
    
  },
  required: false
}




,
          
            








{
  label: 'Items',
  nameOverride: 'items',name: 'items_datas',
  type: 'object',
  list: true,
  required: false,
  
fields: [
  
          
            




{
  label: 'Prefix',
  name: 'prefix',
  type: 'string',
  required: false
}




,
          
            






{
  label: 'Value',
  
  nameOverride: 'value',name: 'value_number',
  type: 'number',
  ui: {
    
    
    
  },
  required: false
}




,
          
            




{
  label: 'Suffix',
  description: 'e.g: %',
  name: 'suffix',
  type: 'string',
  required: false
}




,
          
            




{
  label: 'Limit',
  
  name: 'limit',
  type: 'number',
  ui: {
    
    
    
  },
  required: false
}




,
          
            




{
  label: 'Title',
  name: 'title',
  type: 'string',
  required: false
}




,
          
            




{
  label: 'Text',
  name: 'text',
  type: 'string',
  required: false
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
  
  required: false
}




,
]

}




,
    
  
    
    
      






{
  label: 'Editorial',
  name: 'editorial',
  type: 'object',
  required: false,
  
fields: [
  
          
            




{
  label: 'Direction',
  name: 'direction',
  type: 'string',
  component: 'select',
  options: [
    { 
      label: 'Text on the left / image on the right', 
      value: 'ltr' 
    },
    { 
      label: 'Image on the left / text on the right', 
      value: 'rtl' 
    },
  ],
  required: false
}




,
          
            




{
  label: 'Surtitle',
  name: 'surtitle',
  type: 'string',
  required: false
}




,
          
            




{
  label: 'Title',
  name: 'title',
  type: 'string',
  required: false
}




,
          
            






{
  label: 'Text',
  nameOverride: 'text',name: 'text_markdown',
  type: 'rich-text',
  options: {
    media: false
  },
  required: false
}




,
          
            






{
  label: 'CTAs',
  name: 'ctas',
  type: 'object',
  list: true,
  ui: {
    max: 2
  },
  required: false,
  
fields: [
  
          
            




{
  label: 'Text',
  name: 'text',
  type: 'string',
  required: false
}




,
          
            




{
  label: 'URL',
  description: 'Absolute URL (e.g https://www.example.com)',
  name: 'url',
  type: 'string',
  required: false
}




,
          
            




{
  label: 'Language',
  description: 'Enter code lang (e.g. fr) if different of the current page language',
  name: 'lang',
  type: 'string',
  required: false
}




,
          
            






{
  label: 'Is blank?',
  nameOverride: 'blank',name: 'is_blank',
  type: 'boolean',
  required: false
}




,
]

}



,
          
            






{
  label: 'Image',
  name: 'image',
  type: 'object',
  required: false,
  
fields: [
  
          
            







{
  label: 'Image',
  description: 'Resize and compress image before sending : https://bulkresizephotos.com/fr?quality=90&type=width&width=1600',
  nameOverride: 'src',name: 'image_src',
  type: 'image',
  required: false
}



,
          
            






{
  label: 'Text alternative',
  description: 'For an image that conveys information (leave blank if decorative image)',
  nameOverride: 'alt',name: 'image_alt',
  type: 'string',
  required: false
}




,
          
            




{
  label: 'Credit',
  name: 'credit',
  type: 'rich-text',
  options: {
    media: false
  },
  required: false
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
  
  required: false
}




,
]

}




,
    
  
    
    
      






{
  label: 'Embed',
  name: 'embed',
  type: 'object',
  required: false,
  
fields: [
  
          
            






{
  label: 'Heading',
  name: 'heading',
  type: 'object',
  required: false,
  
fields: [
  
          
            




{
  label: 'Surtitle',
  name: 'surtitle',
  type: 'string',
  required: false
}




,
          
            




{
  label: 'Title',
  name: 'title',
  type: 'string',
  required: false
}




,
          
            






{
  label: 'Text',
  nameOverride: 'text',name: 'text_markdown',
  type: 'rich-text',
  options: {
    media: false
  },
  required: false
}




,
]

}




,
          
            




{
  label: 'Embed',
  name: 'embed',
  type: 'string',
  ui: {
    component: "textarea"
  },
  required: false
}




,
          
            




{
  label: 'With a background?',
  name: 'background',
  type: 'boolean',
  default: false,
  
  required: false
}




,
]

}




,
    
  
    
    
      






{
  label: 'FAQ',
  name: 'faq',
  type: 'object',
  required: false,
  
fields: [
  
          
            






{
  label: 'Heading',
  name: 'heading',
  type: 'object',
  required: false,
  
fields: [
  
          
            




{
  label: 'Surtitle',
  name: 'surtitle',
  type: 'string',
  required: false
}




,
          
            




{
  label: 'Title',
  name: 'title',
  type: 'string',
  required: false
}




,
          
            






{
  label: 'Text',
  nameOverride: 'text',name: 'text_markdown',
  type: 'rich-text',
  options: {
    media: false
  },
  required: false
}




,
]

}




,
          
            








{
  label: 'Items',
  nameOverride: 'items',name: 'items_faq',
  type: 'object',
  list: true,
  required: false,
  
fields: [
  
          
            




{
  label: 'Summary',
  name: 'summary',
  type: 'string',
  required: false
}




,
          
            






{
  label: 'Text',
  nameOverride: 'text',name: 'text_markdown',
  type: 'rich-text',
  options: {
    media: false
  },
  required: false
}




,
          
            




{
  label: 'Name',
  name: 'name',
  type: 'string',
  required: false
}




,
          
            




{
  label: 'Title',
  name: 'title',
  type: 'string',
  required: false
}




,
          
            




{
  label: 'Open?',
  nameOverride: 'open',name: 'is_open',
  type: 'boolean',
  required: false
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
  
  required: false
}




,
]

}




,
    
  
    
    
      






{
  label: 'Figure',
  name: 'figure',
  type: 'object',
  required: false,
  
fields: [
  
          
            






{
  label: 'Heading',
  name: 'heading',
  type: 'object',
  required: false,
  
fields: [
  
          
            




{
  label: 'Surtitle',
  name: 'surtitle',
  type: 'string',
  required: false
}




,
          
            




{
  label: 'Title',
  name: 'title',
  type: 'string',
  required: false
}




,
          
            






{
  label: 'Text',
  nameOverride: 'text',name: 'text_markdown',
  type: 'rich-text',
  options: {
    media: false
  },
  required: false
}




,
]

}




,
          
            






{
  label: 'Figure',
  name: 'figure',
  type: 'object',
  required: false,
  
fields: [
  
          
            







{
  label: 'Image',
  description: 'Resize and compress image before sending : https://bulkresizephotos.com/fr?quality=90&type=width&width=1600',
  nameOverride: 'src',name: 'image_src',
  type: 'image',
  required: false
}



,
          
            






{
  label: 'Text alternative',
  description: 'For an image that conveys information (leave blank if decorative image)',
  nameOverride: 'alt',name: 'image_alt',
  type: 'string',
  required: false
}




,
          
            




{
  label: 'Legend',
  name: 'legend',
  type: 'string',
  required: false
}




,
          
            




{
  label: 'Credit',
  name: 'credit',
  type: 'rich-text',
  options: {
    media: false
  },
  required: false
}




,
          
            




{
  label: 'Is screenshot?',
  description: 'Add fake browser',
  nameOverride: 'screenshot',name: 'is_screenshot',
  type: 'boolean',
  required: false
}




,
]

}



,
          
            




{
  label: 'Grid',
  name: 'grid',
  type: 'string',
  component: 'select',
  options: [
    { 
      label: 'Small', 
      value: 'small' 
    },
    { 
      label: 'Medium', 
      value: 'medium' 
    },
    { 
      label: 'Large', 
      value: 'large' 
    },
    { 
      label: 'Container', 
      value: 'container' 
    },
    { 
      label: 'Full', 
      value: 'full' 
    },
  ],
  required: true
}




,
          
            




{
  label: 'Offset',
  name: 'offset',
  type: 'string',
  component: 'select',
  options: [
    { 
      label: 'Start', 
      value: 'start' 
    },
    { 
      label: 'Center', 
      value: 'center' 
    },
    { 
      label: 'End', 
      value: 'end' 
    },
  ],
  required: false
}



,
          
            




{
  label: 'With a background?',
  name: 'background',
  type: 'boolean',
  default: false,
  
  required: false
}




,
]

}




,
    
  
    
    
      






{
  label: 'Form',
  name: 'form',
  type: 'object',
  required: false,
  
fields: [
  
          
            






{
  label: 'Heading',
  name: 'heading',
  type: 'object',
  required: false,
  
fields: [
  
          
            




{
  label: 'Surtitle',
  name: 'surtitle',
  type: 'string',
  required: false
}




,
          
            




{
  label: 'Title',
  name: 'title',
  type: 'string',
  required: false
}




,
          
            






{
  label: 'Text',
  nameOverride: 'text',name: 'text_markdown',
  type: 'rich-text',
  options: {
    media: false
  },
  required: false
}




,
]

}




,
          
            




{
  label: 'Grid',
  name: 'grid',
  type: 'string',
  component: 'select',
  options: [
    { 
      label: 'Small', 
      value: 'small' 
    },
    { 
      label: 'Medium', 
      value: 'medium' 
    },
    { 
      label: 'Large', 
      value: 'large' 
    },
    { 
      label: 'Container', 
      value: 'container' 
    },
    { 
      label: 'Full', 
      value: 'full' 
    },
  ],
  required: true
}




,
          
            




{
  label: 'Offset',
  name: 'offset',
  type: 'string',
  component: 'select',
  options: [
    { 
      label: 'Start', 
      value: 'start' 
    },
    { 
      label: 'Center', 
      value: 'center' 
    },
    { 
      label: 'End', 
      value: 'end' 
    },
  ],
  required: false
}



,
          
            




{
  label: 'Name',
  name: 'name',
  type: 'string',
  required: false
}




,
          
            




{
  label: 'Send button text',
  name: 'submit',
  type: 'string',
  required: false
}




,
          
             








{
  label: 'Fields',
  nameOverride: 'items',name: 'form_items',
  type: 'object',
  list: true,
  required: false,
  
fields: [
  
          
            




{
  label: 'Label',
  name: 'label',
  type: 'string',
  required: false
}




,
          
            




{
  label: 'Name',
  name: 'name',
  type: 'string',
  required: false
}




,
          
            




{
  label: 'Type',
  nameOverride: 'type',name: 'form_type',
  type: 'string',
  component: 'select',
  options: [
    { 
      label: 'Email', 
      value: 'email' 
    },
    { 
      label: 'Checkbox', 
      value: 'checkbox' 
    },
    { 
      label: 'Radio', 
      value: 'radio' 
    },
    { 
      label: 'Select', 
      value: 'select' 
    },
    { 
      label: 'Tel', 
      value: 'tel' 
    },
    { 
      label: 'Text', 
      value: 'text' 
    },
    { 
      label: 'Textarea', 
      value: 'textarea' 
    },
  ],
  required: true
}




,
          
             








{
  label: 'Options',
  description: 'Only for select fields',
  nameOverride: 'items',name: 'form_options',
  type: 'object',
  list: true,
  required: false,
  
fields: [
  
          
            




{
  label: 'Title',
  name: 'title',
  type: 'string',
  required: false
}




,
          
            




{
  label: 'Value',
  name: 'value',
  type: 'string',
  required: false
}




,
]

}




,
          
            




{
  label: 'Value',
  description: 'Only for checkbox and radio fields',
  nameOverride: 'value',name: 'form_value',
  type: 'string',
  required: false
}




,
          
            




{
  label: 'Required',
  nameOverride: 'required',name: 'is_required',
  type: 'boolean',
  required: false
}




,
          
            




{
  label: 'Full width field?',
  nameOverride: 'full',name: 'is_form_full',
  type: 'boolean',
  required: false
}




,
          
            




{
  label: 'Placeholder',
  name: 'placeholder',
  type: 'string',
  required: false
}




,
          
            




{
  label: 'Autocomplete',
  nameOverride: 'autocomplete',name: 'form_autocomplete',
  type: 'string',
  component: 'select',
  options: [
    { 
      label: 'Email', 
      value: 'email' 
    },
    { 
      label: 'Tel', 
      value: 'tel' 
    },
    { 
      label: 'Title', 
      value: 'honorific-prefix' 
    },
    { 
      label: 'Firstname', 
      value: 'given-name' 
    },
    { 
      label: 'Lastname', 
      value: 'family-name' 
    },
    { 
      label: 'Name', 
      value: 'name' 
    },
    { 
      label: 'Street', 
      value: 'street-address' 
    },
    { 
      label: 'Address level1', 
      value: 'address-level1' 
    },
    { 
      label: 'Address level2', 
      value: 'address-level2' 
    },
    { 
      label: 'Postal code', 
      value: 'postal-code' 
    },
    { 
      label: 'Country name', 
      value: 'country-name' 
    },
    { 
      label: 'Organization', 
      value: 'organization' 
    },
  ],
  required: false
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
  
  required: false
}




,
]

}




,
    
  
    
    
      






{
  label: 'Gallery',
  name: 'gallery',
  type: 'object',
  required: false,
  
fields: [
  
          
            






{
  label: 'Heading',
  name: 'heading',
  type: 'object',
  required: false,
  
fields: [
  
          
            




{
  label: 'Surtitle',
  name: 'surtitle',
  type: 'string',
  required: false
}




,
          
            




{
  label: 'Title',
  name: 'title',
  type: 'string',
  required: false
}




,
          
            






{
  label: 'Text',
  nameOverride: 'text',name: 'text_markdown',
  type: 'rich-text',
  options: {
    media: false
  },
  required: false
}




,
]

}




,
          
            




{
  label: 'Column',
  
  name: 'column',
  type: 'number',
  ui: {
    
    min: 1,
    
    
    max: 6,
    
    
    step: 1
    
  },
  required: false
}




,
          
            






{
  label: 'Gallery',
  name: 'gallery',
  type: 'object',
  list: true,
  required: false,
  
fields: [
  
          
            







{
  label: 'Image',
  description: 'Resize and compress image before sending : https://bulkresizephotos.com/fr?quality=90&type=width&width=1600',
  nameOverride: 'src',name: 'image_src',
  type: 'image',
  required: false
}



,
          
            






{
  label: 'Text alternative',
  description: 'For an image that conveys information (leave blank if decorative image)',
  nameOverride: 'alt',name: 'image_alt',
  type: 'string',
  required: false
}




,
          
            




{
  label: 'Credit',
  name: 'credit',
  type: 'rich-text',
  options: {
    media: false
  },
  required: false
}




,
          
            




{
  label: 'Legend',
  name: 'legend',
  type: 'string',
  required: false
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
  
  required: false
}




,
]

}




,
    
  
    
    
      






{
  label: 'Images',
  name: 'images',
  type: 'object',
  required: false,
  
fields: [
  
          
            






{
  label: 'Heading',
  name: 'heading',
  type: 'object',
  required: false,
  
fields: [
  
          
            




{
  label: 'Surtitle',
  name: 'surtitle',
  type: 'string',
  required: false
}




,
          
            




{
  label: 'Title',
  name: 'title',
  type: 'string',
  required: false
}




,
          
            






{
  label: 'Text',
  nameOverride: 'text',name: 'text_markdown',
  type: 'rich-text',
  options: {
    media: false
  },
  required: false
}




,
]

}




,
          
            






{
  label: 'Images',
  name: 'images',
  type: 'object',
  list: true,
  required: false,
  
fields: [
  
          
            







{
  label: 'Image',
  description: 'Resize and compress image before sending : https://bulkresizephotos.com/fr?quality=90&type=width&width=1600',
  nameOverride: 'src',name: 'image_src',
  type: 'image',
  required: false
}



,
          
            






{
  label: 'Text alternative',
  description: 'For an image that conveys information (leave blank if decorative image)',
  nameOverride: 'alt',name: 'image_alt',
  type: 'string',
  required: false
}




,
          
            




{
  label: 'Credit',
  name: 'credit',
  type: 'rich-text',
  options: {
    media: false
  },
  required: false
}




,
          
            




{
  label: 'Legend',
  name: 'legend',
  type: 'string',
  required: false
}




,
          
            




{
  label: 'Half size?',
  nameOverride: 'half',name: 'is_half',
  type: 'boolean',
  required: false
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
  
  required: false
}




,
]

}




,
    
  
    
    
      






{
  label: 'Informations',
  name: 'informations',
  type: 'object',
  required: false,
  
fields: [
  
          
            






{
  label: 'Heading',
  name: 'heading',
  type: 'object',
  required: false,
  
fields: [
  
          
            




{
  label: 'Surtitle',
  name: 'surtitle',
  type: 'string',
  required: false
}




,
          
            




{
  label: 'Title',
  name: 'title',
  type: 'string',
  required: false
}




,
          
            






{
  label: 'Text',
  nameOverride: 'text',name: 'text_markdown',
  type: 'rich-text',
  options: {
    media: false
  },
  required: false
}




,
]

}




,
          
            




{
  label: 'Column',
  
  name: 'column',
  type: 'number',
  ui: {
    
    min: 1,
    
    
    max: 6,
    
    
    step: 1
    
  },
  required: false
}




,
          
            








{
  label: 'Items',
  nameOverride: 'items',name: 'items_informations',
  type: 'object',
  list: true,
  required: false,
  
fields: [
  
          
            




{
  label: 'Icon',
  description: 'Icon name from https://icons.getbootstrap.com/',
  name: 'icon',
  type: 'string',
  required: false
}




,
          
            








{
  label: 'Image',
  nameOverride: 'image',name: 'image_simple',
  type: 'object',
  required: false,
  
fields: [
  
          
            







{
  label: 'Image',
  description: 'Resize and compress image before sending : https://bulkresizephotos.com/fr?quality=90&type=width&width=1600',
  nameOverride: 'src',name: 'image_src',
  type: 'image',
  required: false
}



,
          
            






{
  label: 'Text alternative',
  description: 'For an image that conveys information (leave blank if decorative image)',
  nameOverride: 'alt',name: 'image_alt',
  type: 'string',
  required: false
}




,
          
            




{
  label: 'Is logo?',
  description: 'Positioned in the center and not cropped',
  nameOverride: 'isLogo',name: 'is_logo',
  type: 'boolean',
  required: false
}




,
]

}



,
          
            




{
  label: 'Title',
  name: 'title',
  type: 'string',
  required: false
}




,
          
            




{
  label: 'Text',
  name: 'text',
  type: 'string',
  required: false
}




,
          
            






{
  label: 'CTA',
  name: 'cta',
  type: 'object',
  required: false,
  
fields: [
  
          
            




{
  label: 'Text',
  name: 'text',
  type: 'string',
  required: false
}




,
          
            




{
  label: 'URL',
  description: 'Absolute URL (e.g https://www.example.com)',
  name: 'url',
  type: 'string',
  required: false
}




,
          
            




{
  label: 'Language',
  description: 'Enter code lang (e.g. fr) if different of the current page language',
  name: 'lang',
  type: 'string',
  required: false
}




,
          
            






{
  label: 'Is blank?',
  nameOverride: 'blank',name: 'is_blank',
  type: 'boolean',
  required: false
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
  
  required: false
}




,
]

}




,
    
  
    
    
      






{
  label: 'Instagram',
  name: 'instagram',
  type: 'object',
  required: false,
  
fields: [
  
          
            






{
  label: 'Heading',
  name: 'heading',
  type: 'object',
  required: false,
  
fields: [
  
          
            




{
  label: 'Surtitle',
  name: 'surtitle',
  type: 'string',
  required: false
}




,
          
            




{
  label: 'Title',
  name: 'title',
  type: 'string',
  required: false
}




,
          
            






{
  label: 'Text',
  nameOverride: 'text',name: 'text_markdown',
  type: 'rich-text',
  options: {
    media: false
  },
  required: false
}




,
]

}




,
          
            




{
  label: 'Count',
  
  description: 'Items to display',
  
  name: 'count',
  type: 'number',
  ui: {
    
    min: 1,
    
    
    max: 10,
    
    
    step: 1
    
  },
  required: false
}




,
          
            






{
  label: 'Limit',
  
  nameOverride: 'limit',name: 'limit_simple',
  type: 'number',
  ui: {
    
    min: 1,
    
    
    max: 10,
    
    
    step: 1
    
  },
  required: false
}




,
          
            






{
  label: 'CTAs',
  name: 'ctas',
  type: 'object',
  list: true,
  ui: {
    max: 2
  },
  required: false,
  
fields: [
  
          
            




{
  label: 'Text',
  name: 'text',
  type: 'string',
  required: false
}




,
          
            




{
  label: 'URL',
  description: 'Absolute URL (e.g https://www.example.com)',
  name: 'url',
  type: 'string',
  required: false
}




,
          
            




{
  label: 'Language',
  description: 'Enter code lang (e.g. fr) if different of the current page language',
  name: 'lang',
  type: 'string',
  required: false
}




,
          
            






{
  label: 'Is blank?',
  nameOverride: 'blank',name: 'is_blank',
  type: 'boolean',
  required: false
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
  
  required: false
}




,
]

}




,
    
  
    
    
      






{
  label: 'Latest items',
  name: 'latest',
  type: 'object',
  required: false,
  
fields: [
  
          
            






{
  label: 'Heading',
  name: 'heading',
  type: 'object',
  required: false,
  
fields: [
  
          
            




{
  label: 'Surtitle',
  name: 'surtitle',
  type: 'string',
  required: false
}




,
          
            




{
  label: 'Title',
  name: 'title',
  type: 'string',
  required: false
}




,
          
            






{
  label: 'Text',
  nameOverride: 'text',name: 'text_markdown',
  type: 'rich-text',
  options: {
    media: false
  },
  required: false
}




,
]

}




,
          
            




{
  label: 'Section',
  name: 'section',
  type: 'string',
  component: 'select',
  options: [
    { 
      label: 'Pages', 
      value: 'pages' 
    },
    { 
      label: 'Products', 
      value: 'products' 
    },
    { 
      label: 'Products tags', 
      value: 'products_tags' 
    },
  ],
  required: false
}





,
          
            






{
  label: 'Layout',
  nameOverride: 'layout',name: 'layout_grid_list',
  type: 'string',
  component: 'select',
  options: [
    { 
      label: 'Grid', 
      value: 'grid' 
    },
    { 
      label: 'List', 
      value: 'list' 
    },
  ],
  required: false
}



,
          
            




{
  label: 'Count',
  
  description: 'Items to display',
  
  name: 'count',
  type: 'number',
  ui: {
    
    min: 1,
    
    
    max: 10,
    
    
    step: 1
    
  },
  required: false
}




,
          
            




{
  label: 'Show more?',
  description: 'Shows a button to see more items',
  name: 'show_more',
  type: 'boolean',
  default: true,
  
  required: false
}




,
          
            




{
  label: 'With a background?',
  name: 'background',
  type: 'boolean',
  default: false,
  
  required: false
}




,
]

}




,
    
  
    
    
      






{
  label: 'Logos',
  name: 'logos',
  type: 'object',
  required: false,
  
fields: [
  
          
            






{
  label: 'Heading',
  name: 'heading',
  type: 'object',
  required: false,
  
fields: [
  
          
            




{
  label: 'Surtitle',
  name: 'surtitle',
  type: 'string',
  required: false
}




,
          
            




{
  label: 'Title',
  name: 'title',
  type: 'string',
  required: false
}




,
          
            






{
  label: 'Text',
  nameOverride: 'text',name: 'text_markdown',
  type: 'rich-text',
  options: {
    media: false
  },
  required: false
}




,
]

}




,
          
            








{
  label: 'Items',
  nameOverride: 'items',name: 'items_logos',
  type: 'object',
  list: true,
  required: false,
  
fields: [
  
          
            




{
  label: 'Title',
  name: 'title',
  type: 'string',
  required: false
}




,
          
            




{
  label: 'URL',
  description: 'Absolute URL (e.g https://www.example.com)',
  name: 'url',
  type: 'string',
  required: false
}




,
          
            







{
  label: 'Image',
  description: 'Resize and compress image before sending : https://bulkresizephotos.com/fr?quality=90&type=width&width=1600',
  nameOverride: 'src',name: 'image_src',
  type: 'image',
  required: false
}



,
]

}




,
          
            






{
  label: 'Layout',
  nameOverride: 'layout',name: 'layout_grid_carousel',
  type: 'string',
  component: 'select',
  options: [
    { 
      label: 'Grid', 
      value: 'grid' 
    },
    { 
      label: 'Carousel', 
      value: 'carousel' 
    },
  ],
  required: false
}



,
          
            






{
  label: 'Carousel configuration',
  description: 'Only for carousel display',
  name: 'carousel',
  type: 'object',
  required: false,
  
fields: [
  
          
            








{
  label: 'Params',
  nameOverride: 'params',name: 'carousel_params',
  type: 'object',
  required: false,
  
fields: [
  
          
            






{
  label: 'Focus',
  nameOverride: 'focus',name: 'carousel_focus',
  type: 'boolean',
  default: true,
  
  required: false
}




,
          
            






{
  label: 'Autoplay',
  nameOverride: 'autoplay',name: 'carousel_autoplay',
  type: 'boolean',
  default: true,
  
  required: false
}




,
          
            






{
  label: 'Arrows',
  nameOverride: 'arrows',name: 'carousel_arrows',
  type: 'boolean',
  default: true,
  
  required: false
}




,
          
            






{
  label: 'Pagination',
  nameOverride: 'pagination',name: 'carousel_pagination',
  type: 'boolean',
  default: false,
  
  required: false
}




,
          
            






{
  label: 'Carousel type',
  nameOverride: 'type',name: 'carousel_type',
  type: 'string',
  component: 'select',
  options: [
    { 
      label: 'Slide', 
      value: 'slide' 
    },
    { 
      label: 'Loop', 
      value: 'loop' 
    },
    { 
      label: 'Fade', 
      value: 'fade' 
    },
  ],
  required: false
}




,
          
            






{
  label: 'Per page',
  
  description: 'Number of slides to display',
  
  nameOverride: 'perPage',name: 'carousel_perpage',
  type: 'number',
  ui: {
    
    min: 1,
    
    
    
  },
  required: false
}




,
          
            






{
  label: 'Padding',
  
  description: 'Padding left/right of the carousel. In rem value',
  
  nameOverride: 'padding',name: 'carousel_padding',
  type: 'number',
  ui: {
    
    
    
  },
  required: false
}




,
          
            






{
  label: 'Gap',
  
  description: 'The gap between slides. Expressed in rem.',
  
  nameOverride: 'gap',name: 'carousel_gap',
  type: 'number',
  ui: {
    
    
    
  },
  required: false
}




,
]

}




,
          
            








{
  label: 'Responsive',
  nameOverride: 'responsive',name: 'carousel_responsive',
  type: 'object',
  list: true,
  required: false,
  
fields: [
  
          
            




{
  label: 'Breakpoints',
  name: 'breakpoints',
  type: 'string',
  component: 'select',
  options: [
    { 
      label: 'Desktop', 
      value: '1440' 
    },
    { 
      label: 'Laptop', 
      value: '1280' 
    },
    { 
      label: 'Mobile', 
      value: '640' 
    },
    { 
      label: 'Tablet', 
      value: '768' 
    },
    { 
      label: 'Wide tablet', 
      value: '1024' 
    },
  ],
  required: false
}




,
          
            








{
  label: 'Params',
  nameOverride: 'params',name: 'carousel_params',
  type: 'object',
  required: false,
  
fields: [
  
          
            






{
  label: 'Focus',
  nameOverride: 'focus',name: 'carousel_focus',
  type: 'boolean',
  default: true,
  
  required: false
}




,
          
            






{
  label: 'Autoplay',
  nameOverride: 'autoplay',name: 'carousel_autoplay',
  type: 'boolean',
  default: true,
  
  required: false
}




,
          
            






{
  label: 'Arrows',
  nameOverride: 'arrows',name: 'carousel_arrows',
  type: 'boolean',
  default: true,
  
  required: false
}




,
          
            






{
  label: 'Pagination',
  nameOverride: 'pagination',name: 'carousel_pagination',
  type: 'boolean',
  default: false,
  
  required: false
}




,
          
            






{
  label: 'Carousel type',
  nameOverride: 'type',name: 'carousel_type',
  type: 'string',
  component: 'select',
  options: [
    { 
      label: 'Slide', 
      value: 'slide' 
    },
    { 
      label: 'Loop', 
      value: 'loop' 
    },
    { 
      label: 'Fade', 
      value: 'fade' 
    },
  ],
  required: false
}




,
          
            






{
  label: 'Per page',
  
  description: 'Number of slides to display',
  
  nameOverride: 'perPage',name: 'carousel_perpage',
  type: 'number',
  ui: {
    
    min: 1,
    
    
    
  },
  required: false
}




,
          
            






{
  label: 'Padding',
  
  description: 'Padding left/right of the carousel. In rem value',
  
  nameOverride: 'padding',name: 'carousel_padding',
  type: 'number',
  ui: {
    
    
    
  },
  required: false
}




,
          
            






{
  label: 'Gap',
  
  description: 'The gap between slides. Expressed in rem.',
  
  nameOverride: 'gap',name: 'carousel_gap',
  type: 'number',
  ui: {
    
    
    
  },
  required: false
}




,
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
  
  required: false
}




,
]

}




,
    
  
    
    
      






{
  label: 'Map',
  name: 'map',
  type: 'object',
  required: false,
  
fields: [
  
          
            






{
  label: 'Heading',
  name: 'heading',
  type: 'object',
  required: false,
  
fields: [
  
          
            




{
  label: 'Surtitle',
  name: 'surtitle',
  type: 'string',
  required: false
}




,
          
            




{
  label: 'Title',
  name: 'title',
  type: 'string',
  required: false
}




,
          
            






{
  label: 'Text',
  nameOverride: 'text',name: 'text_markdown',
  type: 'rich-text',
  options: {
    media: false
  },
  required: false
}




,
]

}




,
          
            




{
  label: 'Show all registered places?',
  description: 'Only if you have places already saved (this will disable the marker below)',
  name: 'show_places',
  type: 'boolean',
  default: false,
  
  required: false
}




,
          
            






{
  label: 'Geographic coordinates',
  description: 'Easily find contact details: https://www.latlong.net/convert-address-to-lat-long.html',
  name: 'coordinates',
  type: 'object',
  required: false,
  
fields: [
  
          
            






{
  label: 'Latitude',
  
  nameOverride: 'lat',name: 'coordinates_lat',
  type: 'number',
  ui: {
    
    
    
  },
  required: false
}




,
          
            






{
  label: 'Longitude',
  
  nameOverride: 'lng',name: 'coordinates_lng',
  type: 'number',
  ui: {
    
    
    
  },
  required: false
}




,
]

}




,
          
            




{
  label: 'Zoom',
  
  name: 'zoom',
  type: 'number',
  ui: {
    
    min: 1,
    
    
    max: 20,
    
    
    step: 1
    
  },
  required: false
}




,
          
            




{
  label: 'Grid',
  name: 'grid',
  type: 'string',
  component: 'select',
  options: [
    { 
      label: 'Small', 
      value: 'small' 
    },
    { 
      label: 'Medium', 
      value: 'medium' 
    },
    { 
      label: 'Large', 
      value: 'large' 
    },
    { 
      label: 'Container', 
      value: 'container' 
    },
    { 
      label: 'Full', 
      value: 'full' 
    },
  ],
  required: true
}




,
          
            




{
  label: 'With a background?',
  name: 'background',
  type: 'boolean',
  default: false,
  
  required: false
}




,
]

}




,
    
  
    
    
      






{
  label: 'Newsletter',
  name: 'newsletter',
  type: 'object',
  required: false,
  
fields: [
  
          
            






{
  label: 'Heading',
  name: 'heading',
  type: 'object',
  required: false,
  
fields: [
  
          
            




{
  label: 'Surtitle',
  name: 'surtitle',
  type: 'string',
  required: false
}




,
          
            




{
  label: 'Title',
  name: 'title',
  type: 'string',
  required: false
}




,
          
            






{
  label: 'Text',
  nameOverride: 'text',name: 'text_markdown',
  type: 'rich-text',
  options: {
    media: false
  },
  required: false
}




,
]

}




,
          
            








{
  label: 'Form',
  nameOverride: 'form',name: 'newsletter_form',
  type: 'object',
  required: false,
  
fields: [
  
          
            




{
  label: 'URL',
  description: 'Absolute URL (e.g https://www.example.com)',
  name: 'url',
  type: 'string',
  required: false
}




,
          
             








{
  label: 'nolabel',
  nameOverride: 'hiddens',name: 'form_hiddens',
  type: 'object',
  list: true,
  required: false,
  
fields: [
  
          
            




{
  label: 'Name',
  name: 'name',
  type: 'string',
  required: false
}




,
          
            




{
  label: 'Value',
  name: 'value',
  type: 'string',
  required: false
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
  
  required: false
}




,
]

}




,
    
  
    
    
      






{
  label: 'Paragraph',
  name: 'paragraph',
  type: 'object',
  required: false,
  
fields: [
  
          
            




{
  label: 'Surtitle',
  name: 'surtitle',
  type: 'string',
  required: false
}




,
          
            




{
  label: 'Title',
  name: 'title',
  type: 'string',
  required: false
}




,
          
            






{
  label: 'Text',
  nameOverride: 'text',name: 'text_markdown',
  type: 'rich-text',
  options: {
    media: false
  },
  required: false
}




,
          
            






{
  label: 'CTAs',
  name: 'ctas',
  type: 'object',
  list: true,
  ui: {
    max: 2
  },
  required: false,
  
fields: [
  
          
            




{
  label: 'Text',
  name: 'text',
  type: 'string',
  required: false
}




,
          
            




{
  label: 'URL',
  description: 'Absolute URL (e.g https://www.example.com)',
  name: 'url',
  type: 'string',
  required: false
}




,
          
            




{
  label: 'Language',
  description: 'Enter code lang (e.g. fr) if different of the current page language',
  name: 'lang',
  type: 'string',
  required: false
}




,
          
            






{
  label: 'Is blank?',
  nameOverride: 'blank',name: 'is_blank',
  type: 'boolean',
  required: false
}




,
]

}



,
          
            




{
  label: 'Grid',
  name: 'grid',
  type: 'string',
  component: 'select',
  options: [
    { 
      label: 'Small', 
      value: 'small' 
    },
    { 
      label: 'Medium', 
      value: 'medium' 
    },
    { 
      label: 'Large', 
      value: 'large' 
    },
    { 
      label: 'Container', 
      value: 'container' 
    },
    { 
      label: 'Full', 
      value: 'full' 
    },
  ],
  required: true
}




,
          
            




{
  label: 'Offset',
  name: 'offset',
  type: 'string',
  component: 'select',
  options: [
    { 
      label: 'Start', 
      value: 'start' 
    },
    { 
      label: 'Center', 
      value: 'center' 
    },
    { 
      label: 'End', 
      value: 'end' 
    },
  ],
  required: false
}



,
          
            




{
  label: 'Alignment',
  name: 'align',
  type: 'string',
  component: 'select',
  options: [
    { 
      label: 'Start', 
      value: 'start' 
    },
    { 
      label: 'Center', 
      value: 'center' 
    },
    { 
      label: 'End', 
      value: 'end' 
    },
  ],
  required: false
}




,
          
            




{
  label: 'With a background?',
  name: 'background',
  type: 'boolean',
  default: false,
  
  required: false
}




,
]

}




,
    
  
    
    
      






{
  label: 'Pushes',
  name: 'pushes',
  type: 'object',
  required: false,
  
fields: [
  
          
            






{
  label: 'Heading',
  name: 'heading',
  type: 'object',
  required: false,
  
fields: [
  
          
            




{
  label: 'Surtitle',
  name: 'surtitle',
  type: 'string',
  required: false
}




,
          
            




{
  label: 'Title',
  name: 'title',
  type: 'string',
  required: false
}




,
          
            






{
  label: 'Text',
  nameOverride: 'text',name: 'text_markdown',
  type: 'rich-text',
  options: {
    media: false
  },
  required: false
}




,
]

}




,
          
            






{
  label: 'Column',
  
  nameOverride: 'column',name: 'column_simple',
  type: 'number',
  ui: {
    
    min: 1,
    
    
    max: 2,
    
    
    step: 1
    
  },
  required: false
}




,
          
            








{
  label: 'Items',
  nameOverride: 'items',name: 'items_pushes',
  type: 'object',
  list: true,
  required: false,
  
fields: [
  
          
            




{
  label: 'Title',
  name: 'title',
  type: 'string',
  required: false
}




,
          
            




{
  label: 'Text',
  name: 'text',
  type: 'string',
  required: false
}




,
          
            






{
  label: 'CTA',
  name: 'cta',
  type: 'object',
  required: false,
  
fields: [
  
          
            




{
  label: 'Text',
  name: 'text',
  type: 'string',
  required: false
}




,
          
            




{
  label: 'URL',
  description: 'Absolute URL (e.g https://www.example.com)',
  name: 'url',
  type: 'string',
  required: false
}




,
          
            




{
  label: 'Language',
  description: 'Enter code lang (e.g. fr) if different of the current page language',
  name: 'lang',
  type: 'string',
  required: false
}




,
          
            






{
  label: 'Is blank?',
  nameOverride: 'blank',name: 'is_blank',
  type: 'boolean',
  required: false
}




,
]

}



,
          
            




{
  label: 'Offset',
  name: 'offset',
  type: 'string',
  component: 'select',
  options: [
    { 
      label: 'Start', 
      value: 'start' 
    },
    { 
      label: 'Center', 
      value: 'center' 
    },
    { 
      label: 'End', 
      value: 'end' 
    },
  ],
  required: false
}



,
          
            




{
  label: 'Darken?',
  nameOverride: 'darken',name: 'is_darken',
  type: 'boolean',
  required: false
}




,
          
            




{
  label: 'Is card?',
  description: 'Adds a background behind the text',
  nameOverride: 'card',name: 'is_card',
  type: 'boolean',
  required: false
}




,
          
            




{
  label: 'Color',
  
  name: 'color',
  type: 'string',
  required: false
}




,
          
            






{
  label: 'Image',
  name: 'image',
  type: 'object',
  required: false,
  
fields: [
  
          
            







{
  label: 'Image',
  description: 'Resize and compress image before sending : https://bulkresizephotos.com/fr?quality=90&type=width&width=1600',
  nameOverride: 'src',name: 'image_src',
  type: 'image',
  required: false
}



,
          
            






{
  label: 'Text alternative',
  description: 'For an image that conveys information (leave blank if decorative image)',
  nameOverride: 'alt',name: 'image_alt',
  type: 'string',
  required: false
}




,
          
            




{
  label: 'Credit',
  name: 'credit',
  type: 'rich-text',
  options: {
    media: false
  },
  required: false
}




,
]

}




,
]

}




,
          
            






{
  label: 'Layout',
  nameOverride: 'layout',name: 'layout_grid_carousel',
  type: 'string',
  component: 'select',
  options: [
    { 
      label: 'Grid', 
      value: 'grid' 
    },
    { 
      label: 'Carousel', 
      value: 'carousel' 
    },
  ],
  required: false
}



,
          
            






{
  label: 'Carousel configuration',
  description: 'Only for carousel display',
  name: 'carousel',
  type: 'object',
  required: false,
  
fields: [
  
          
            








{
  label: 'Params',
  nameOverride: 'params',name: 'carousel_params',
  type: 'object',
  required: false,
  
fields: [
  
          
            






{
  label: 'Focus',
  nameOverride: 'focus',name: 'carousel_focus',
  type: 'boolean',
  default: true,
  
  required: false
}




,
          
            






{
  label: 'Autoplay',
  nameOverride: 'autoplay',name: 'carousel_autoplay',
  type: 'boolean',
  default: true,
  
  required: false
}




,
          
            






{
  label: 'Arrows',
  nameOverride: 'arrows',name: 'carousel_arrows',
  type: 'boolean',
  default: true,
  
  required: false
}




,
          
            






{
  label: 'Pagination',
  nameOverride: 'pagination',name: 'carousel_pagination',
  type: 'boolean',
  default: false,
  
  required: false
}




,
          
            






{
  label: 'Carousel type',
  nameOverride: 'type',name: 'carousel_type',
  type: 'string',
  component: 'select',
  options: [
    { 
      label: 'Slide', 
      value: 'slide' 
    },
    { 
      label: 'Loop', 
      value: 'loop' 
    },
    { 
      label: 'Fade', 
      value: 'fade' 
    },
  ],
  required: false
}




,
          
            






{
  label: 'Per page',
  
  description: 'Number of slides to display',
  
  nameOverride: 'perPage',name: 'carousel_perpage',
  type: 'number',
  ui: {
    
    min: 1,
    
    
    
  },
  required: false
}




,
          
            






{
  label: 'Padding',
  
  description: 'Padding left/right of the carousel. In rem value',
  
  nameOverride: 'padding',name: 'carousel_padding',
  type: 'number',
  ui: {
    
    
    
  },
  required: false
}




,
          
            






{
  label: 'Gap',
  
  description: 'The gap between slides. Expressed in rem.',
  
  nameOverride: 'gap',name: 'carousel_gap',
  type: 'number',
  ui: {
    
    
    
  },
  required: false
}




,
]

}




,
          
            








{
  label: 'Responsive',
  nameOverride: 'responsive',name: 'carousel_responsive',
  type: 'object',
  list: true,
  required: false,
  
fields: [
  
          
            




{
  label: 'Breakpoints',
  name: 'breakpoints',
  type: 'string',
  component: 'select',
  options: [
    { 
      label: 'Desktop', 
      value: '1440' 
    },
    { 
      label: 'Laptop', 
      value: '1280' 
    },
    { 
      label: 'Mobile', 
      value: '640' 
    },
    { 
      label: 'Tablet', 
      value: '768' 
    },
    { 
      label: 'Wide tablet', 
      value: '1024' 
    },
  ],
  required: false
}




,
          
            








{
  label: 'Params',
  nameOverride: 'params',name: 'carousel_params',
  type: 'object',
  required: false,
  
fields: [
  
          
            






{
  label: 'Focus',
  nameOverride: 'focus',name: 'carousel_focus',
  type: 'boolean',
  default: true,
  
  required: false
}




,
          
            






{
  label: 'Autoplay',
  nameOverride: 'autoplay',name: 'carousel_autoplay',
  type: 'boolean',
  default: true,
  
  required: false
}




,
          
            






{
  label: 'Arrows',
  nameOverride: 'arrows',name: 'carousel_arrows',
  type: 'boolean',
  default: true,
  
  required: false
}




,
          
            






{
  label: 'Pagination',
  nameOverride: 'pagination',name: 'carousel_pagination',
  type: 'boolean',
  default: false,
  
  required: false
}




,
          
            






{
  label: 'Carousel type',
  nameOverride: 'type',name: 'carousel_type',
  type: 'string',
  component: 'select',
  options: [
    { 
      label: 'Slide', 
      value: 'slide' 
    },
    { 
      label: 'Loop', 
      value: 'loop' 
    },
    { 
      label: 'Fade', 
      value: 'fade' 
    },
  ],
  required: false
}




,
          
            






{
  label: 'Per page',
  
  description: 'Number of slides to display',
  
  nameOverride: 'perPage',name: 'carousel_perpage',
  type: 'number',
  ui: {
    
    min: 1,
    
    
    
  },
  required: false
}




,
          
            






{
  label: 'Padding',
  
  description: 'Padding left/right of the carousel. In rem value',
  
  nameOverride: 'padding',name: 'carousel_padding',
  type: 'number',
  ui: {
    
    
    
  },
  required: false
}




,
          
            






{
  label: 'Gap',
  
  description: 'The gap between slides. Expressed in rem.',
  
  nameOverride: 'gap',name: 'carousel_gap',
  type: 'number',
  ui: {
    
    
    
  },
  required: false
}




,
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
  
  required: false
}




,
]

}




,
    
  
    
    
      






{
  label: 'Quote',
  name: 'quote',
  type: 'object',
  required: false,
  
fields: [
  
          
            




{
  label: 'Quote',
  name: 'quote',
  type: 'rich-text',
  options: {
    media: false
  },
  required: false
}




,
          
            






{
  label: 'Author',
  name: 'author',
  type: 'object',
  required: false,
  
fields: [
  
          
            




{
  label: 'Title',
  name: 'title',
  type: 'string',
  required: false
}




,
          
            




{
  label: 'Text',
  name: 'text',
  type: 'string',
  required: false
}




,
          
            








{
  label: 'Image',
  nameOverride: 'image',name: 'image_simple',
  type: 'object',
  required: false,
  
fields: [
  
          
            







{
  label: 'Image',
  description: 'Resize and compress image before sending : https://bulkresizephotos.com/fr?quality=90&type=width&width=1600',
  nameOverride: 'src',name: 'image_src',
  type: 'image',
  required: false
}



,
          
            






{
  label: 'Text alternative',
  description: 'For an image that conveys information (leave blank if decorative image)',
  nameOverride: 'alt',name: 'image_alt',
  type: 'string',
  required: false
}




,
          
            




{
  label: 'Is logo?',
  description: 'Positioned in the center and not cropped',
  nameOverride: 'isLogo',name: 'is_logo',
  type: 'boolean',
  required: false
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
  
  required: false
}




,
]

}




,
    
  
    
    
      






{
  label: 'Search',
  name: 'search',
  type: 'object',
  required: false,
  
fields: [
  
          
            






{
  label: 'Heading',
  name: 'heading',
  type: 'object',
  required: false,
  
fields: [
  
          
            




{
  label: 'Surtitle',
  name: 'surtitle',
  type: 'string',
  required: false
}




,
          
            




{
  label: 'Title',
  name: 'title',
  type: 'string',
  required: false
}




,
          
            






{
  label: 'Text',
  nameOverride: 'text',name: 'text_markdown',
  type: 'rich-text',
  options: {
    media: false
  },
  required: false
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
  
  required: false
}




,
]

}




,
    
  
    
    
      






{
  label: 'Selection Pages',
  nameOverride: 'selected-pages',name: 'selected_pages',
  type: 'object',
  required: false,
  
fields: [
  
          
            






{
  label: 'Heading',
  name: 'heading',
  type: 'object',
  required: false,
  
fields: [
  
          
            




{
  label: 'Surtitle',
  name: 'surtitle',
  type: 'string',
  required: false
}




,
          
            




{
  label: 'Title',
  name: 'title',
  type: 'string',
  required: false
}




,
          
            






{
  label: 'Text',
  nameOverride: 'text',name: 'text_markdown',
  type: 'rich-text',
  options: {
    media: false
  },
  required: false
}




,
]

}




,
          
            






{
  label: 'section',
  nameOverride: 'section',name: 'section_hidden',
  type: 'string',
  default: 'pages',
  ui: {
    component: 'hidden'
  },
  required: false
}




,
          
            




{
  label: 'Pages',
  name: 'items_items',
  nameOverride: 'items',
  type: 'object',
  list: true,
  ui: {
    itemProps: (item) => {
      return { label: item?.item }
    }
  },
  fields: [
    {
      name: 'item',
      label: 'Page',
      type: 'reference',
      collections: ['pages'],
      required: true
    }
  ],
}



,
          
            






{
  label: 'Layout',
  nameOverride: 'layout',name: 'layout_grid_list',
  type: 'string',
  component: 'select',
  options: [
    { 
      label: 'Grid', 
      value: 'grid' 
    },
    { 
      label: 'List', 
      value: 'list' 
    },
  ],
  required: false
}



,
          
            




{
  label: 'Show more?',
  description: 'Shows a button to see more items',
  name: 'show_more',
  type: 'boolean',
  default: true,
  
  required: false
}




,
          
            




{
  label: 'With a background?',
  name: 'background',
  type: 'boolean',
  default: false,
  
  required: false
}




,
]

}



,






{
  label: 'Selection Products',
  nameOverride: 'selected-products',name: 'selected_products',
  type: 'object',
  required: false,
  
fields: [
  
          
            






{
  label: 'Heading',
  name: 'heading',
  type: 'object',
  required: false,
  
fields: [
  
          
            




{
  label: 'Surtitle',
  name: 'surtitle',
  type: 'string',
  required: false
}




,
          
            




{
  label: 'Title',
  name: 'title',
  type: 'string',
  required: false
}




,
          
            






{
  label: 'Text',
  nameOverride: 'text',name: 'text_markdown',
  type: 'rich-text',
  options: {
    media: false
  },
  required: false
}




,
]

}




,
          
            






{
  label: 'section',
  nameOverride: 'section',name: 'section_hidden',
  type: 'string',
  default: 'products',
  ui: {
    component: 'hidden'
  },
  required: false
}




,
          
            




{
  label: 'Products',
  name: 'items_items',
  nameOverride: 'items',
  type: 'object',
  list: true,
  ui: {
    itemProps: (item) => {
      return { label: item?.item }
    }
  },
  fields: [
    {
      name: 'item',
      label: 'Product',
      type: 'reference',
      collections: ['products'],
      required: true
    }
  ],
}



,
          
            






{
  label: 'Layout',
  nameOverride: 'layout',name: 'layout_grid_list',
  type: 'string',
  component: 'select',
  options: [
    { 
      label: 'Grid', 
      value: 'grid' 
    },
    { 
      label: 'List', 
      value: 'list' 
    },
  ],
  required: false
}



,
          
            




{
  label: 'Show more?',
  description: 'Shows a button to see more items',
  name: 'show_more',
  type: 'boolean',
  default: true,
  
  required: false
}




,
          
            




{
  label: 'With a background?',
  name: 'background',
  type: 'boolean',
  default: false,
  
  required: false
}




,
]

}



,






{
  label: 'Selection Tags',
  nameOverride: 'selected-products_tags',name: 'selected_products_tags',
  type: 'object',
  required: false,
  
fields: [
  
          
            






{
  label: 'Heading',
  name: 'heading',
  type: 'object',
  required: false,
  
fields: [
  
          
            




{
  label: 'Surtitle',
  name: 'surtitle',
  type: 'string',
  required: false
}




,
          
            




{
  label: 'Title',
  name: 'title',
  type: 'string',
  required: false
}




,
          
            






{
  label: 'Text',
  nameOverride: 'text',name: 'text_markdown',
  type: 'rich-text',
  options: {
    media: false
  },
  required: false
}




,
]

}




,
          
            






{
  label: 'section',
  nameOverride: 'section',name: 'section_hidden',
  type: 'string',
  default: 'products_tags',
  ui: {
    component: 'hidden'
  },
  required: false
}




,
          
            




{
  label: 'Tags',
  name: 'items_items',
  nameOverride: 'items',
  type: 'object',
  list: true,
  ui: {
    itemProps: (item) => {
      return { label: item?.item }
    }
  },
  fields: [
    {
      name: 'item',
      label: 'Tag',
      type: 'reference',
      collections: ['products_tags'],
      required: true
    }
  ],
}



,
          
            






{
  label: 'Layout',
  nameOverride: 'layout',name: 'layout_grid_list',
  type: 'string',
  component: 'select',
  options: [
    { 
      label: 'Grid', 
      value: 'grid' 
    },
    { 
      label: 'List', 
      value: 'list' 
    },
  ],
  required: false
}



,
          
            




{
  label: 'Show more?',
  description: 'Shows a button to see more items',
  name: 'show_more',
  type: 'boolean',
  default: true,
  
  required: false
}




,
          
            




{
  label: 'With a background?',
  name: 'background',
  type: 'boolean',
  default: false,
  
  required: false
}




,
]

}



,
    
  
    
    
      






{
  label: 'Testimonials',
  name: 'testimonials',
  type: 'object',
  required: false,
  
fields: [
  
          
            






{
  label: 'Heading',
  name: 'heading',
  type: 'object',
  required: false,
  
fields: [
  
          
            




{
  label: 'Surtitle',
  name: 'surtitle',
  type: 'string',
  required: false
}




,
          
            




{
  label: 'Title',
  name: 'title',
  type: 'string',
  required: false
}




,
          
            






{
  label: 'Text',
  nameOverride: 'text',name: 'text_markdown',
  type: 'rich-text',
  options: {
    media: false
  },
  required: false
}




,
]

}




,
          
            








{
  label: 'Items',
  nameOverride: 'items',name: 'items_testimonials',
  type: 'object',
  list: true,
  required: false,
  
fields: [
  
          
            




{
  label: 'Quote',
  name: 'quote',
  type: 'rich-text',
  options: {
    media: false
  },
  required: false
}




,
          
            






{
  label: 'Author',
  name: 'author',
  type: 'object',
  required: false,
  
fields: [
  
          
            




{
  label: 'Title',
  name: 'title',
  type: 'string',
  required: false
}




,
          
            




{
  label: 'Text',
  name: 'text',
  type: 'string',
  required: false
}




,
          
            








{
  label: 'Image',
  nameOverride: 'image',name: 'image_simple',
  type: 'object',
  required: false,
  
fields: [
  
          
            







{
  label: 'Image',
  description: 'Resize and compress image before sending : https://bulkresizephotos.com/fr?quality=90&type=width&width=1600',
  nameOverride: 'src',name: 'image_src',
  type: 'image',
  required: false
}



,
          
            






{
  label: 'Text alternative',
  description: 'For an image that conveys information (leave blank if decorative image)',
  nameOverride: 'alt',name: 'image_alt',
  type: 'string',
  required: false
}




,
          
            




{
  label: 'Is logo?',
  description: 'Positioned in the center and not cropped',
  nameOverride: 'isLogo',name: 'is_logo',
  type: 'boolean',
  required: false
}




,
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
  label: 'Layout',
  nameOverride: 'layout',name: 'layout_grid_carousel',
  type: 'string',
  component: 'select',
  options: [
    { 
      label: 'Grid', 
      value: 'grid' 
    },
    { 
      label: 'Carousel', 
      value: 'carousel' 
    },
  ],
  required: false
}



,
          
            






{
  label: 'Carousel configuration',
  description: 'Only for carousel display',
  name: 'carousel',
  type: 'object',
  required: false,
  
fields: [
  
          
            








{
  label: 'Params',
  nameOverride: 'params',name: 'carousel_params',
  type: 'object',
  required: false,
  
fields: [
  
          
            






{
  label: 'Focus',
  nameOverride: 'focus',name: 'carousel_focus',
  type: 'boolean',
  default: true,
  
  required: false
}




,
          
            






{
  label: 'Autoplay',
  nameOverride: 'autoplay',name: 'carousel_autoplay',
  type: 'boolean',
  default: true,
  
  required: false
}




,
          
            






{
  label: 'Arrows',
  nameOverride: 'arrows',name: 'carousel_arrows',
  type: 'boolean',
  default: true,
  
  required: false
}




,
          
            






{
  label: 'Pagination',
  nameOverride: 'pagination',name: 'carousel_pagination',
  type: 'boolean',
  default: false,
  
  required: false
}




,
          
            






{
  label: 'Carousel type',
  nameOverride: 'type',name: 'carousel_type',
  type: 'string',
  component: 'select',
  options: [
    { 
      label: 'Slide', 
      value: 'slide' 
    },
    { 
      label: 'Loop', 
      value: 'loop' 
    },
    { 
      label: 'Fade', 
      value: 'fade' 
    },
  ],
  required: false
}




,
          
            






{
  label: 'Per page',
  
  description: 'Number of slides to display',
  
  nameOverride: 'perPage',name: 'carousel_perpage',
  type: 'number',
  ui: {
    
    min: 1,
    
    
    
  },
  required: false
}




,
          
            






{
  label: 'Padding',
  
  description: 'Padding left/right of the carousel. In rem value',
  
  nameOverride: 'padding',name: 'carousel_padding',
  type: 'number',
  ui: {
    
    
    
  },
  required: false
}




,
          
            






{
  label: 'Gap',
  
  description: 'The gap between slides. Expressed in rem.',
  
  nameOverride: 'gap',name: 'carousel_gap',
  type: 'number',
  ui: {
    
    
    
  },
  required: false
}




,
]

}




,
          
            








{
  label: 'Responsive',
  nameOverride: 'responsive',name: 'carousel_responsive',
  type: 'object',
  list: true,
  required: false,
  
fields: [
  
          
            




{
  label: 'Breakpoints',
  name: 'breakpoints',
  type: 'string',
  component: 'select',
  options: [
    { 
      label: 'Desktop', 
      value: '1440' 
    },
    { 
      label: 'Laptop', 
      value: '1280' 
    },
    { 
      label: 'Mobile', 
      value: '640' 
    },
    { 
      label: 'Tablet', 
      value: '768' 
    },
    { 
      label: 'Wide tablet', 
      value: '1024' 
    },
  ],
  required: false
}




,
          
            








{
  label: 'Params',
  nameOverride: 'params',name: 'carousel_params',
  type: 'object',
  required: false,
  
fields: [
  
          
            






{
  label: 'Focus',
  nameOverride: 'focus',name: 'carousel_focus',
  type: 'boolean',
  default: true,
  
  required: false
}




,
          
            






{
  label: 'Autoplay',
  nameOverride: 'autoplay',name: 'carousel_autoplay',
  type: 'boolean',
  default: true,
  
  required: false
}




,
          
            






{
  label: 'Arrows',
  nameOverride: 'arrows',name: 'carousel_arrows',
  type: 'boolean',
  default: true,
  
  required: false
}




,
          
            






{
  label: 'Pagination',
  nameOverride: 'pagination',name: 'carousel_pagination',
  type: 'boolean',
  default: false,
  
  required: false
}




,
          
            






{
  label: 'Carousel type',
  nameOverride: 'type',name: 'carousel_type',
  type: 'string',
  component: 'select',
  options: [
    { 
      label: 'Slide', 
      value: 'slide' 
    },
    { 
      label: 'Loop', 
      value: 'loop' 
    },
    { 
      label: 'Fade', 
      value: 'fade' 
    },
  ],
  required: false
}




,
          
            






{
  label: 'Per page',
  
  description: 'Number of slides to display',
  
  nameOverride: 'perPage',name: 'carousel_perpage',
  type: 'number',
  ui: {
    
    min: 1,
    
    
    
  },
  required: false
}




,
          
            






{
  label: 'Padding',
  
  description: 'Padding left/right of the carousel. In rem value',
  
  nameOverride: 'padding',name: 'carousel_padding',
  type: 'number',
  ui: {
    
    
    
  },
  required: false
}




,
          
            






{
  label: 'Gap',
  
  description: 'The gap between slides. Expressed in rem.',
  
  nameOverride: 'gap',name: 'carousel_gap',
  type: 'number',
  ui: {
    
    
    
  },
  required: false
}




,
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
  
  required: false
}




,
]

}




,
    
  
    
    
      






{
  label: 'Timeline',
  name: 'timeline',
  type: 'object',
  required: false,
  
fields: [
  
          
            






{
  label: 'Heading',
  name: 'heading',
  type: 'object',
  required: false,
  
fields: [
  
          
            




{
  label: 'Surtitle',
  name: 'surtitle',
  type: 'string',
  required: false
}




,
          
            




{
  label: 'Title',
  name: 'title',
  type: 'string',
  required: false
}




,
          
            






{
  label: 'Text',
  nameOverride: 'text',name: 'text_markdown',
  type: 'rich-text',
  options: {
    media: false
  },
  required: false
}




,
]

}




,
          
            








{
  label: 'Items',
  nameOverride: 'items',name: 'items_timeline',
  type: 'object',
  list: true,
  required: false,
  
fields: [
  
          
            




{
  label: 'Surtitle',
  name: 'surtitle',
  type: 'string',
  required: false
}




,
          
            




{
  label: 'Title',
  name: 'title',
  type: 'string',
  required: false
}




,
          
            






{
  label: 'Text',
  nameOverride: 'text',name: 'text_markdown',
  type: 'rich-text',
  options: {
    media: false
  },
  required: false
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
  
  required: false
}




,
]

}




,
    
  
    
    
      






{
  label: 'Title',
  name: 'title',
  type: 'object',
  required: false,
  
fields: [
  
          
            






{
  label: 'Heading',
  name: 'heading',
  type: 'object',
  required: false,
  
fields: [
  
          
            




{
  label: 'Surtitle',
  name: 'surtitle',
  type: 'string',
  required: false
}




,
          
            




{
  label: 'Title',
  name: 'title',
  type: 'string',
  required: false
}




,
          
            






{
  label: 'Text',
  nameOverride: 'text',name: 'text_markdown',
  type: 'rich-text',
  options: {
    media: false
  },
  required: false
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
  
  required: false
}




,
]

}




,
    
  
    
    
      






{
  label: 'Video',
  name: 'video',
  type: 'object',
  required: false,
  
fields: [
  
          
            






{
  label: 'Heading',
  name: 'heading',
  type: 'object',
  required: false,
  
fields: [
  
          
            




{
  label: 'Surtitle',
  name: 'surtitle',
  type: 'string',
  required: false
}




,
          
            




{
  label: 'Title',
  name: 'title',
  type: 'string',
  required: false
}




,
          
            






{
  label: 'Text',
  nameOverride: 'text',name: 'text_markdown',
  type: 'rich-text',
  options: {
    media: false
  },
  required: false
}




,
]

}




,
          
            






{
  label: 'Video',
  name: 'video',
  type: 'object',
  required: false,
  
fields: [
  
          
            



  
    
  








{
  label: 'MP4',
  description: 'MP4 video file',
  name: 'mp4',
  type: 'image',
  media: {
    accept: [
      'video/mp4'
    ]
  },
  required: false
}




,
          
            



  
    
  








{
  label: 'WEBM',
  description: 'WEBM video file',
  name: 'webm',
  type: 'image',
  media: {
    accept: [
      'video/webm'
    ]
  },
  required: false
}




,
          
            




{
  label: 'Controls',
  name: 'controls',
  type: 'boolean',
  default: true,
  
  required: false
}




,
          
            




{
  label: 'Autoplay',
  name: 'autoplay',
  type: 'boolean',
  default: false,
  
  required: false
}




,
          
            




{
  label: 'Loop',
  name: 'loop',
  type: 'boolean',
  default: false,
  
  required: false
}




,
          
            




{
  label: 'Legend',
  name: 'legend',
  type: 'string',
  required: false
}




,
          
            




{
  label: 'Transcription',
  name: 'transcription',
  type: 'string',
  ui: {
    component: "textarea"
  },
  required: false
}




,
          
            





{
  label: 'Poster',
  description: 'Placehoster image for video',
  name: 'poster',
  type: 'image',
  required: false
}



,
]

}




,
          
            




{
  label: 'Grid',
  name: 'grid',
  type: 'string',
  component: 'select',
  options: [
    { 
      label: 'Small', 
      value: 'small' 
    },
    { 
      label: 'Medium', 
      value: 'medium' 
    },
    { 
      label: 'Large', 
      value: 'large' 
    },
    { 
      label: 'Container', 
      value: 'container' 
    },
    { 
      label: 'Full', 
      value: 'full' 
    },
  ],
  required: true
}




,
          
            




{
  label: 'With a background?',
  name: 'background',
  type: 'boolean',
  default: false,
  
  required: false
}




,
]

}




,
    
  
  ]
}




,
          
            







{
  label: 'Slug',
  description: 'Leave empty to automate with the title. **Be careful to SEO impact.**',
  name: 'slug',
  type: 'string',
  required: false
}




,],


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
  nameOverride: 'isIndex',name: 'is_not_index',
  type: 'boolean',
  default: false,
  
  ui: {
    component: 'hidden'
  },
  required: false
}



,
          
            




{
  label: 'Draft',
  name: 'draft',
  type: 'boolean',
  default: true,
  
  required: false
}




,
          
            




{
  label: 'Date',
  
  name: 'date',
  type: 'datetime',
  ui: {
    dateFormat: "YYYY-MM-DD'T'HH:mm:ssZ"
  },
  required: true
}




,
          
            






{
  label: 'Page title',
  description: 'Displayed in tabs, search results, and in SMS/Messages/Social networks preview',
  nameOverride: 'title',name: 'title_page',
  type: 'string',
  isTitle: true,
  required: true
}




,
          
            




{
  label: 'Description',
  description: 'Displayed in tabs, search results, and in SMS/Messages/Social networks preview',
  name: 'description',
  type: 'string',
  ui: {
    component: "textarea"
  },
  required: false
}




,
          
            






{
  label: 'Offer',
  name: 'offer',
  type: 'object',
  required: false,
  
fields: [
  
          
            




{
  label: 'Price',
  
  description: 'e.g: 300000 (for 300 000 €)',
  
  name: 'price',
  type: 'number',
  ui: {
    
    
    
  },
  required: false
}




,
          
            






{
  label: 'Discount',
  description: 'Amount of the reduction, e.g: 30%',
  name: 'discount',
  type: 'string',
  required: false
}




,
          
            




{
  label: 'Hide price',
  name: 'hide_price',
  type: 'boolean',
  required: false
}




,
          
            




{
  label: 'Text',
  name: 'text',
  type: 'string',
  required: false
}




,
]

}




,
          
            




{
  label: 'Tags',
  name: 'items_products_tags',
  nameOverride: 'products_tags',
  type: 'object',
  list: true,
  ui: {
    itemProps: (item) => {
      return { label: item?.item }
    }
  },
  fields: [
    {
      name: 'item',
      label: 'Tag',
      type: 'reference',
      collections: ['products_tags'],
      required: false
    }
  ],
}



,
          
            










{
  label: 'Image principale',
  description: 'Displayed in search results, and in SMS/Messages/Social networks preview',
  nameOverride: 'image',name: 'featured_image',
  type: 'object',
  required: false,
  
fields: [
  
          
            







{
  label: 'Image',
  description: 'Resize and compress image before sending : https://bulkresizephotos.com/fr?quality=90&type=width&width=1600',
  nameOverride: 'src',name: 'image_src',
  type: 'image',
  required: false
}



,
          
            






{
  label: 'Text alternative',
  description: 'For an image that conveys information (leave blank if decorative image)',
  nameOverride: 'alt',name: 'image_alt',
  type: 'string',
  required: false
}




,
]

}




,
          
            






{
  label: 'Images',
  name: 'images',
  type: 'object',
  list: true,
  required: false,
  
fields: [
  
          
            







{
  label: 'Image',
  description: 'Resize and compress image before sending : https://bulkresizephotos.com/fr?quality=90&type=width&width=1600',
  nameOverride: 'src',name: 'image_src',
  type: 'image',
  required: false
}



,
          
            






{
  label: 'Text alternative',
  description: 'For an image that conveys information (leave blank if decorative image)',
  nameOverride: 'alt',name: 'image_alt',
  type: 'string',
  required: false
}




,
          
            




{
  label: 'Credit',
  name: 'credit',
  type: 'rich-text',
  options: {
    media: false
  },
  required: false
}




,
          
            




{
  label: 'Legend',
  name: 'legend',
  type: 'string',
  required: false
}




,
          
            




{
  label: 'Half size?',
  nameOverride: 'half',name: 'is_half',
  type: 'boolean',
  required: false
}




,
]

}



,
          
            




{
  label: 'Body',
  name: 'body',
  type: 'rich-text',
  isBody: true,
  options: {
    media: false
  },
  required: false
}




,
          
            







{
  label: 'Slug',
  description: 'Leave empty to automate with the title. **Be careful to SEO impact.**',
  name: 'slug',
  type: 'string',
  required: false
}




,],


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
  nameOverride: 'isIndex',name: 'is_not_index',
  type: 'boolean',
  default: false,
  
  ui: {
    component: 'hidden'
  },
  required: false
}



,
          
            




{
  label: 'Draft',
  name: 'draft',
  type: 'boolean',
  default: true,
  
  required: false
}




,
          
            






{
  label: 'Page title',
  description: 'Displayed in tabs, search results, and in SMS/Messages/Social networks preview',
  nameOverride: 'title',name: 'title_page',
  type: 'string',
  isTitle: true,
  required: true
}




,
          
            




{
  label: 'Description',
  description: 'Displayed in tabs, search results, and in SMS/Messages/Social networks preview',
  name: 'description',
  type: 'string',
  ui: {
    component: "textarea"
  },
  required: false
}




,
          
            







{
  label: 'Slug',
  description: 'Leave empty to automate with the title. **Be careful to SEO impact.**',
  name: 'slug',
  type: 'string',
  required: false
}




,],


},
]
  }
});

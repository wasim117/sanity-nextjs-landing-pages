export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '613fba0ce0267b0ac3c5ed04',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-mdxpkeui',
                  apiId: '609568ab-a5db-4e95-a329-9e901527d618'
                },
                {
                  buildHookId: '613fba0c1a200a009b95fc7c',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-phbh9wwv',
                  apiId: '7677762a-9af0-48de-a11d-a82922fdc3ce'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/wasim117/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-phbh9wwv.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}

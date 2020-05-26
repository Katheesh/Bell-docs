module.exports = {
  title: 'GitLeaf Bell',
  description: 'Just playing around',
  themeConfig: {
      smoothScroll: true,
      nav: [
        { text: 'Home', link: '/' },
        { text: 'Documentation', link: '/docs/' },
        { text: 'GitLeaf', link: 'https://gitleaf.com' }     
      ],
      sidebar: {
           '/docs/': [
               '',
              'Introduction',
              'Getting Started',
              'Downloads',
              'Frequently Asked Questions',
              'Contact US'
           ],
           '/tamil/docs/': [
               '',
              'Introduction',
              'Getting Started',
              'Downloads',
              'Frequently Asked Questions',
              'Contact US'
          ]
           
      },
      locales: {
      '/': {
        label: 'English',
        nav: [{ text: 'Home', link: '/' },
        { text: 'Documentation', link: '/docs/' },
        { text: 'GitLeaf', link: 'https://gitleaf.com' }]
      },
      '/tamil/': {
        label: 'தமிழ்',
        nav: [{ text: 'முகப்பு', link: '/tamil/' },
        { text: 'ஆவணப்படுத்தல்', link: '/tamil/docs/' },
        { text: 'GitLeaf', link: 'https://gitleaf.com' }   ]
      },
    }
    },
    locales: {   
      '/': {
        lang: 'English', // this will be set as the lang attribute on <html>
        title: 'GitLeaf Bell',
        description: 'International Language',
        nav : [
        { text: 'Home', link: '/' },
         { text: 'Documentation', link: '/docs/' },
         { text: 'GitLeaf', link: 'https://gitleaf.com' }
        ]
      },
      '/tamil/': {
        lang: 'தமிழ்',
        title: 'GitLeaf Bell',
        description: 'தமிழே எங்கள் தாய் மொழி',
        nav: [
          { text: 'முகப்பு', link: '/tamil/' },
          { text: 'ஆவணப்படுத்தல்', link: '/docs/' },
          { text: 'GitLeaf', link: 'https://gitleaf.com' }
        ]
      }
    },
    plugins: ['@vuepress/back-to-top']
}
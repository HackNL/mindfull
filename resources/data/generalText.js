var generalText = {
  'global': {
    'back': 'terug',
  },
  'main': {
    'title': 'Welcome'
    // 'details': 'Bekijk details'
  },
  themes: [{
    number: '#1',
    title: 'A dive into time',
    sessions: [{
      title: 'The time',
      kind: 'video',
      content: [{
        // videoUrl: require(''),
        resources: [{
            url: 'https://youtube.com/',
            title: 'youtube'
          },
          {
            url: 'https://youtube.com/',
            title: 'youtube2'
          }
        ]
      }]
    }, {
      title: 'Into time',
      kind: 'audio',
      content: [{
        soundUrl: 'test.mp3',
        helpText: ['Take a deep breath','Sit down and releax', 'Text'],
        resources: [{
            url: 'https://youtube.com/',
            title: 'youtube'
          },
          {
            url: 'https://youtube.com/',
            title: 'youtube2'
          }
        ]
      }]
    }, {
      title: 'Stil',
      kind: 'stil',
      content: [{
        // soundUrl: require(''),
        resources: [{
            url: 'https://youtube.com/',
            title: 'youtube'
          },
          {
            url: 'https://youtube.com/',
            title: 'youtube2'
          }
        ]
      }]
    }, {
      title: '',
      kind: 'extra',
      content: [{
        // soundUrl: require(''),
        resources: [{
            url: 'https://youtube.com/',
            title: 'youtube'
          },
          {
            url: 'https://youtube.com/',
            title: 'youtube2'
          }
        ]
      }]
    }]
  }]
};
export default generalText;

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
        helpText: ['Take a deep breath', 'Sit down and releax', 'Text'],
        resources: {
          title: 'You did it!',
          body: '“What can you skip today to enjoy more time?”',
          data: [{
              url: 'https://bijbel.eo.nl/prediker',
              title: 'Read prediker online'
            },
            {
              url: 'https://youtube.com',
              title: 'Follow up music'
            },
            {
              url: 'https://youtube.com',
              title: 'Read full text'
            }
          ]
        }
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

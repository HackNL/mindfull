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
        id: '1',
        title: 'The time',
        kind: 'video',
        content: {
            id: '1',
          videoUrl: '',
          resources: {
            title: "You did it!",
            body: "No God No Happiness, Know God Know Happiness. ",
            task: [{
              title: 'Daily Advice',
              body: 'Turn off your social media for one day, use the extra time to send someone you love a postcard. ',
            }],
            data: [{
                url: 'https://www.biblegateway.com/passage/?search=Ecclesiastes+9&version=MSG',
                title: 'Source of Tale'
              },
              {
                url: 'https://www.azlyrics.com/lyrics/cyndilauper/timeaftertime.html',
                title: 'Cyndi Lauper  Time after time'
              }
            ]
          }
        }
      }, {
        id: '2',
        title: 'Into time',
        kind: 'audio',
        content: {
            id: '2',
          soundUrl: 'sound1.mp3',
          helpText: ['hoi', 'hiohio', 'hihio'],
          resources: {
            title: "You did it",
            body: "Don't use your energy to worry. Use your energy to create, to love, to hope and believe.",
            task: [{
              title: 'Daily Advice',
              body: 'Go trough your closet and give all clothes that you didn\'t wear for a year to a charity.',
            }],
            data: [{
                url: 'http://www.songteksten.nl/songteksten/7901/byrds/turn--turn--turn-.htm',
                title: 'Songtekst Turn, Turn, Turn'
              },
              {
                url: 'https://www.christart.com/poetry/poem4523.htm',
                title: 'In Times like these John miles'
              }
            ]
          }
        }
      }, {
        id: '3',
        title: 'Stil',
        kind: 'stil',
        content: {
            id: '3',
          text: '',
          soundUrl: 'text1.mp3',
          // soundUrl: require(''),
          resources: {
            title: "You did it!",
            body: "Be Bold. Be Brave. Be Courageous.",
            task: [{
              title: 'Daily Advice',
              body: 'Give a compliment to three different persons.',
            }],
            data: [{
              url: 'https://jesus.net/jesus-net-websites-and-courses/why-jesus/',
              title: 'Why Jesus Course'
            }]
          }
        }
      },
      {
          id: '4',
        title: '',
        kind: 'extra',
        content: {
            id: '4',
          text: '',
          soundUrl: 'text1.mp3',
          resources: {
            title: "You did it!",
            body: "Be Bold. Be Brave. Be Courageous.",
            task: [{
              title: 'Why Jesus Course',
              body: '',
            }],
            data: [{
              url: 'https://jesus.net/jesus-net-websites-and-courses/why-jesus/',
              title: 'Why Jesus Course'
            }, {
              url: 'https://www.azlyrics.com/lyrics/karijobe/iamnotalone.html',
              title: 'Kari Jobe: I\'m not alone '
            }]
          }
        }
      }
    ]
  }]
};
export default generalText;

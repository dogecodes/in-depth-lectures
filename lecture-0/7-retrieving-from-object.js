//
// Retrieving data from Objects
//

// Use destructing for accessing props

const article = {
  title: 'How to use destructuring',
  date: new Date('November 17, 2018 13:24:00'),
  author: {
    // name: 'Denys',
    job: 'R&D Engineer',
    company: {
      name: 'Wix',
      office: 'Kyiv, Ukraine',
      hq: 'Tel Aviv-Jafo, Israel'
    }
  },
  content: '... tons of useful content ...',
  tags: ['web', 'js', 'object'],
  images: [
    '//static.com/path/to/img.jpg',
    '//static.com/path/to/img.png',
    '//static.com/path/to/img.gif'
  ],
  rating: 5
};

const {
  author: {
    name: authorName = 'Foo',
    company: { name: authorCompanyName }
  },
  images: [mainImage, ...images],
  rating = 0
} = article;

console.log({
  authorName,
  authorCompanyName,
  mainImage,
  images,
  rating
});

import {Product} from '../models/product';

export const products: Product[] = [
  {
    id: 1,
    name: 'ImmutableJS',
    type: 'library',
    imgUrl: 'https://avatars0.githubusercontent.com/u/46405934?s=400&v=4',
    description: 'Immutable data cannot be changed once created, leading to much simpler application development, no defensive copying,' +
      ' and enabling advanced memoization and change detection techniques with simple logic. Persistent data presents a mutative API' +
      ' which does not update the data in-place, but instead always yields new updated data.',
    price: 184.88
  },
  {
    id: 2,
    name: 'ReactJS',
    type: 'library',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/640px-React-icon.svg.png',
    description: 'React makes it painless to create interactive UIs. Design simple views for each state in your application,' +
      ' and React will efficiently update and render just the right components when your data changes. ' +
      'Declarative views make your code more predictable and easier to debug.',
    price: 245.77
  },
  {
    id: 3,
    name: 'AngularJS',
    type: 'framework',
    imgUrl: 'https://angular.io/assets/images/logos/angular/angular.png',
    description: 'Learn one way to build applications with Angular and reuse your code and abilities to build apps' +
      ' for any deployment target. For web, mobile web, native mobile and native desktop.',
    price: 368.44
  },
  {
    id: 4,
    name: 'VueJS',
    type: 'framework',
    imgUrl: 'https://vuejs.org/images/logo.png',
    description: 'The Progressive JavaScript Framework. An incrementally adoptable ecosystem that scales between a library' +
      ' and a full-featured framework.',
    price: 174.88
  },
  {
    id: 5,
    name: 'Redux',
    type: 'library',
    imgUrl: 'https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png',
    description: 'A predictable state container for JavaScript apps. Redux helps you write applications that behave consistently,' +
      ' run in different environments (client, server, and native), and are easy to test.',
    price: 134.49
  },
  {
    id: 6,
    name: 'MobX',
    type: 'library',
    imgUrl: 'https://cdn-images-1.medium.com/max/1600/1*Hlj8qvb2M0oqjgk36Yz5LA.png',
    description: 'MobX is a simple, scalable and battle tested state management solution. This tutorial will teach you' +
      ' all the important concepts of MobX in ten minutes. MobX is a standalone library, but most people are using it with React' +
      ' and this tutorial focuses on that combination.',
    price: 214.12
  },
  {
    id: 7,
    name: 'KarmaJS',
    type: 'library',
    imgUrl: 'https://cdn.worldvectorlogo.com/logos/karma.svg',
    description: 'Karma is essentially a tool which spawns a web server that executes source code against test code' +
      ' for each of the browsers connected. The results of each test against each browser are examined and displayed via the command line' +
      ' to the developer such that they can see which browsers and tests passed or failed.',
    price: 88.99
  },
  {
    id: 8,
    name: 'Jest',
    type: 'library',
    imgUrl: 'https://camo.githubusercontent.com/f6414ee20933d5fb8b06dc32ed38c8aa175da559/687474703a2f2f64702e68616e6c6f6e2e696f2f3331337933753244307033382f6a6573742e706e67',
    description: 'Jest is a delightful JavaScript Testing Framework with a focus on simplicity.' +
      ' Jest aims to work out of the box, config free, on most JavaScript projects.',
    price: 111.99
  }
];

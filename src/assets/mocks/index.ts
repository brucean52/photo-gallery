import {postMock} from './photoMock';

const mock0 = {...postMock}
mock0.id = 'aa00'
mock0.photos[0].id = 'bb00'

const mock1 = {...postMock}
mock1.id = 'aa01'
mock1.photos[0].id = 'bb01'

const mock2 = {...postMock}
mock2.id = 'aa02'
mock2.photos[0].id = 'bb02'

const mock3 = {...postMock}
mock3.id = 'aa03'
mock3.photos[0].id = 'bb03'

const mock4 = {...postMock}
mock4.id = 'aa04'
mock4.photos[0].id = 'bb04'

const mock5 = {...postMock}
mock5.id = 'aa05'
mock5.photos[0].id = 'bb05'

export const Posts: any[] = [
  mock0,
  mock1,
  mock2,
  mock3,
  mock4,
  mock5,
]
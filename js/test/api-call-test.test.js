import { testFetch } from './fetch-test';

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        notifications: [
          {
            id: 1,
            message: 'This is a test mesesage 1',
            title: 'Title Test 1',
            type: 'alert',
          },
          {
            id: 2,
            message: 'This is a test mesesage 2',
            title: 'Title Test 2',
            type: 'alert',
          },
          {
            id: 3,
            message: 'This is a test mesesage 3',
            title: 'Title Test 3',
            type: 'alert',
          },
        ],
      }),
  })
);

it('Fetches data from the api', async () => {
  const data = await testFetch();

  expect(data).toEqual({
    notifications: [
      {
        id: 1,
        message: 'This is a test mesesage 1',
        title: 'Title Test 1',
        type: 'alert',
      },
      {
        id: 2,
        message: 'This is a test mesesage 2',
        title: 'Title Test 2',
        type: 'alert',
      },
      {
        id: 3,
        message: 'This is a test mesesage 3',
        title: 'Title Test 3',
        type: 'alert',
      },
    ],
  });
});

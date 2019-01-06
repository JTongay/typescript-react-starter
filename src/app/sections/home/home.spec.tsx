import * as React from 'react';
import { cleanup, render } from 'react-testing-library';
import { Home } from './home';

afterEach(cleanup);

describe('Home', () => {
  it('should exist', () => {
    expect(Home).toBeDefined();
  });

  it('should booyah', () => {
    const comp = render(<Home />);
    expect(comp.getByText('Booyah').textContent).toEqual('Booyah');
  });
});

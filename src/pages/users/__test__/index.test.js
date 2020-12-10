import React from 'react';
import { render } from '@testing-library/react';
import { create } from 'react-test-renderer';
import UsersList from '../index';

describe('UsersList tests', () => {
  test('render users list correctly', () => {
    render(<UsersList />);
  });

  test('users list snapshot', () => {
    const list = create(<UsersList />);
    expect(list.toJSON()).toMatchSnapshot();
  });
});

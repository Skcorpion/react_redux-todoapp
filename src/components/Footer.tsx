import React, { FC } from 'react';
import FilterLink from './FilterLink';
import { FilterTypes } from '../utils/actionTypes';

const Footer: FC = () => {
  return (
    <p>
      Show: <FilterLink filter={FilterTypes.SHOW_ALL}>All</FilterLink>
      {', '}
      <FilterLink filter={FilterTypes.SHOW_ACTIVE}>Active</FilterLink>
      {', '}
      <FilterLink filter={FilterTypes.SHOW_COMPLETED}>Completed</FilterLink>
    </p>
  );
};

export default Footer;

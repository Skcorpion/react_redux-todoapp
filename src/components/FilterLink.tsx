import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { FilterTypes } from '../utils/actionTypes';

type Props = {
  filter: string;
  children: React.ReactNode;
};

const FilterLink: FC<Props> = ({ filter, children }) => (
  <NavLink
    to={filter === FilterTypes.SHOW_ALL ? '' : filter}
    activeStyle={{ textDecoration: 'none', color: 'black' }}
  >
    {children}
  </NavLink>
);

export default FilterLink;

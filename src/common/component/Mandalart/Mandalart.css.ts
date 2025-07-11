import { style } from '@vanilla-extract/css';

const baseGrid = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '1.2rem',
  margin: '0 auto',
  width: 'fit-content',
};

export const grid = {
  TODO_SUB: style({
    ...baseGrid,
    gap: '1rem',
  }),
  TODO_MAIN: style({
    ...baseGrid,
    gap: '1.6rem',
  }),
  TODO_EDIT: style({
    ...baseGrid,
    gap: '2rem',
  }),
  MY_MANDAL: style({
    ...baseGrid,
    gap: '3rem',
  }),
};

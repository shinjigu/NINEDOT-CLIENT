import { style } from '@vanilla-extract/css';

import { colors } from '@/style/token/color.css';
import { fonts } from '@/style/token/typography.css';

export const container = style({
  display: 'inline-flex',
  padding: '4rem',
  flexDirection: 'column',
  alignItems: 'center',
  borderRadius: '16px',
  background: colors.grey3,
});

export const contentWrapper = style({
  width: '55.6rem',
  display: 'flex',
  flexDirection: 'column',
});

export const iconWrapper = style({
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
});

export const closeIcon = style({
  width: '3.2rem',
  height: '3.2rem',
  cursor: 'pointer',
});

export const title = style({
  color: colors.white01,
  textAlign: 'center',
  ...fonts.display02,
});

export const subtitle = style({
  color: colors.grey6,
  textAlign: 'center',
  ...fonts.subtitle06,
  marginTop: '0.9rem',
});

export const highlight = style({
  color: colors.white01,
});

export const listWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '2rem',
  marginTop: '3.9rem',
  marginBottom: '5rem',
});

export const listItem = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.6rem',
  color: colors.white01,
  ...fonts.body02,
  cursor: 'pointer',
  whiteSpace: 'nowrap',
});

export const checkboxIcon = style({
  width: '2.4rem',
  height: '2.4rem',
});

export const buttonWrapper = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

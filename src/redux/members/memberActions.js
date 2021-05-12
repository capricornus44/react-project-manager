import { createAction } from '@reduxjs/toolkit';

export const addMemberProjectRequest = createAction(
  '@sprint/addMemberProjectRequest',
);
export const addMemberProjectSuccess = createAction(
  '@sprint/addMemberProjectSuccess',
);
export const addMemberProjectError = createAction(
  '@sprint/addMemberProjectError',
);

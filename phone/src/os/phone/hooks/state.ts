import { atom } from 'recoil';

export const phoneState = {
  visibility: atom({
    key: 'phoneVisibility',
    default: false,
  }),
  phoneConfig: atom({
    key: 'phoneConfig',
    default: undefined,
  }),
  forceUpdateState: atom({
    key: 'fuckingupdate',
    default: 0,
  }),
};

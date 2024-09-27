import { atom, useRecoilState } from 'recoil';

export const presentationState = atom({
  key: 'presentationState',
  default: { id: '', slides: [], users: [], editors: [] },
});

export const drawingState = atom({
  key: 'drawingState',
  default: [],
});

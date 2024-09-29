import { atom, useRecoilState } from 'recoil';

export const presentationState = atom({
  key: 'presentationState',
  default: { id: '', slides: [], users: [], editors: [] },
});

export const drawingState = atom({
  key: 'drawingState',
  default: [],
});

export const layoutState = atom({
  key: 'layoutState',
  default: '16:9', // Default layout
});

export const layoutSizes = {
  '4:3': { width: 1024, height: 768 },
  '16:9': { width: 1920, height: 1080 },
  '16:10': { width: 1280, height: 800 },
};
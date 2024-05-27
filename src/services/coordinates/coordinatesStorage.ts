import {storage} from '../storage';
import {Coordinates} from './coordinatesTypes';

const COORDINATES_KEY = '@Coordinates';

async function set(coord: Coordinates): Promise<void> {
  await storage.setItem(COORDINATES_KEY, coord);
}

async function get(): Promise<Coordinates | null> {
  const coord = await storage.getItem<Coordinates>(COORDINATES_KEY);
  return coord;
}

async function remove(): Promise<void> {
  await storage.removeItem(COORDINATES_KEY);
}

export const coordinatesStorage = {
  get,
  set,
  remove,
};

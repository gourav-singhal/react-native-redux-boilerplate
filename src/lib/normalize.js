/**
 * @flow
 */

import { width } from './device';

const scale = width / 375;

function normalize(size: number): number {
  return Math.round(scale * size);
}

export default normalize;
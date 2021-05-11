import { Rover } from './marsRoverStatePattern';
// State
export interface Direction {
  rotateLeft(rover: Rover): Direction;

  rotateRight(rover: Rover): Direction;
}

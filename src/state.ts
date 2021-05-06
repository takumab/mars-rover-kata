import { Rover } from './marsRoverStatePattern';

export interface State {
  rotateLeft(rover: Rover, direction: string): void;

  rotateRight(rover: Rover, direction: string): void;
}

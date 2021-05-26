import { MarsRover } from './marsRover';

export interface IDirection {
  rotateLeft(marsRover: MarsRover): IDirection;

  rotateRight(marsRover: MarsRover): IDirection;

  toDirectionString(): string;
}
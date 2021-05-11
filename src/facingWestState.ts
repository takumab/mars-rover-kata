import { Direction } from './direction';
import { Rover } from './marsRoverStatePattern';

export class FacingWestState implements Direction {
  rotateLeft(rover: Rover): string {
    console.log('From West to South');
    rover.setState(rover.facingSouthState);
    rover.setDirection('S');
    return rover.getDirection;
  }

  rotateRight(rover: Rover): string {
    console.log('From West to North');
    rover.setState(rover.facingNorthState);
    rover.setDirection('N');
    return rover.getDirection;
  }
}

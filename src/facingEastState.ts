import { Direction } from './direction';
import { Rover } from './marsRoverStatePattern';

export class FacingEastState implements Direction {
  rotateLeft(rover: Rover): string {
    console.log('From East to North');
    rover.setState(rover.facingNorthState);
    rover.setDirection('N');
    return rover.getDirection;
  }

  rotateRight(rover: Rover): string {
    console.log('From East to South');
    rover.setState(rover.facingSouthState);
    rover.setDirection('S');
    return rover.getDirection;
  }
}

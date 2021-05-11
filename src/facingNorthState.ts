import { Direction } from './direction';
import { Rover } from './marsRoverStatePattern';

export class FacingNorthState implements Direction {
  public rotateLeft(rover: Rover): string {
    console.log('From North to West');
    rover.setState(rover.facingWestState);
    rover.setDirection('W');
    return rover.getDirection;
  }

  public rotateRight(rover: Rover): string {
    console.log('From North to East');
    rover.setState(rover.facingEastState);
    rover.setDirection('E');
    return rover.getDirection;
  }
}

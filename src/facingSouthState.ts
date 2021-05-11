import { Direction } from './direction';
import { Rover } from './marsRoverStatePattern';
import { FacingEastState } from './facingEastState';

export class FacingSouthState implements Direction {
  private rover: Rover;
  constructor(rover: Rover) {
    this.rover = rover;
  }
  rotateLeft(rover: Rover): Direction {
    console.log('From South to East');
    return new FacingEastState();
  }

  rotateRight(rover: Rover): Direction {
    console.log('From South to West');
    rover.setDirection(this.rover.facingWestState);
    return this.rover.getDirection;
  }
}

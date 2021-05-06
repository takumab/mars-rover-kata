import { State } from './state';
import { Rover } from './marsRoverStatePattern';

export class FacingWestState implements State {
  rotateLeft(rover: Rover): void {
    console.log('From West to South');
    rover.setState(rover.facingSouthState);
    rover.setDirection('S');
  }

  rotateRight(rover: Rover): void {
    console.log('From West to North');
    rover.setState(rover.facingNorthState);
    rover.setDirection('N');
  }
}

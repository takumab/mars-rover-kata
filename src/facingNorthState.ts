import { State } from './state';
import { Rover } from './marsRoverStatePattern';

export class FacingNorthState implements State {
  public rotateLeft(rover: Rover): void {
    console.log('From North to West');
    rover.setState(rover.facingWestState);
    rover.setDirection('W');
  }

  public rotateRight(rover: Rover): void {
    console.log('From North to East');
    rover.setState(rover.facingEastState);
    rover.setDirection('E');
  }
}

import { State } from './state';
import { Rover } from './marsRoverStatePattern';

export class FacingSouthState implements State {
  rotateLeft(rover: Rover): void {
    console.log('From South to East');
    rover.setState(rover.facingEastState);
    rover.setDirection('E');
  }

  rotateRight(rover: Rover): void {
    console.log('From South to West');
    rover.setState(rover.facingWestState);
    rover.setDirection('W');
  }
}

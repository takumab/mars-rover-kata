import { State } from './state';
import { Rover } from './marsRoverStatePattern';

export class FacingEastState implements State {
  rotateLeft(rover: Rover): void {
    console.log('From East to North');
    rover.setState(rover.facingNorthState);
    rover.setDirection('N');
  }

  rotateRight(rover: Rover): void {
    console.log('From East to South');
    rover.setState(rover.facingSouthState);
    rover.setDirection('S');
  }
}
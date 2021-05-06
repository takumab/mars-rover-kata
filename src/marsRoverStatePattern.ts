import { State } from './state';
import { FacingNorthState } from './facingNorthState';
import { FacingWestState } from './facingWestState';
import { FacingEastState } from './facingEastState';
import { FacingSouthState } from './facingSouthState';

export class Rover {
  private xCoordinate: number;
  private yCoordinate: number;
  private direction: string;
  private _facingNorthState: FacingNorthState;
  private _facingWestState: FacingWestState;
  private _facingEastState: FacingEastState;
  private _facingSouthState: FacingSouthState;
  private state: State;

  constructor(xCoordinate: number, yCoordinate: number, direction: string) {
    this.xCoordinate = xCoordinate;
    this.yCoordinate = yCoordinate;
    this.direction = direction;
    this.state = new FacingNorthState();
    this._facingNorthState = new FacingNorthState();
    this._facingWestState = new FacingWestState();
    this._facingSouthState = new FacingSouthState();
    this._facingEastState = new FacingEastState();
  }

  get facingNorthState(): FacingNorthState {
    return this._facingNorthState;
  }

  get facingWestState(): FacingWestState {
    return this._facingWestState;
  }

  get facingSouthState(): FacingSouthState {
    return this._facingSouthState;
  }

  get facingEastState(): FacingEastState {
    return this._facingEastState;
  }

  setState(state: State): void {
    console.log(`Current state: ${(<any>state).constructor.name}`);
    this.state = state;
  }

  setDirection(direction: string): void {
    this.direction = direction;
  }

  private rotateLeft(): void {
    this.state.rotateLeft(this, this.direction);
  }
  private rotateRight(): void {
    this.state.rotateRight(this, this.direction);
  }

  executing(commands: string): string {
    this.handlingRotation(commands);

    return `${this.xCoordinate}:${this.yCoordinate}:${this.direction}`;
  }

  private handlingRotation(commands: string): void {
    for (const command of commands) {
      if (command === 'L') {
        this.rotateLeft();
      }
      if (command === 'R') {
        this.rotateRight();
      }
    }
  }
}
function main() {
  const marsRover = new Rover(1, 2, 'S');
  console.log(marsRover.executing('L'));
}

main();

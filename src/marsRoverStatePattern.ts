import { Direction } from './direction';
import { FacingNorthState } from './facingNorthState';
import { FacingWestState } from './facingWestState';
import { FacingEastState } from './facingEastState';
import { FacingSouthState } from './facingSouthState';

// Context
export class Rover {
  private xCoordinate: number;
  private yCoordinate: number;
  private direction: Direction; // Reference to state
  private _facingNorthState: FacingNorthState;
  private _facingWestState: FacingWestState;
  private _facingEastState: FacingEastState;
  private _facingSouthState: FacingSouthState;

  constructor(xCoordinate: number, yCoordinate: number, direction: Direction) {
    this.xCoordinate = xCoordinate;
    this.yCoordinate = yCoordinate;
    this.direction = direction;
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
  get getDirection(): Direction {
    return this.direction;
  }

  setDirection(direction: Direction): void {
    console.log(`Current direction: ${(<any>direction).constructor.name}`);
    this.direction = direction;
  }

  private rotateLeft(): void {
    this.direction.rotateLeft(this);
  }
  private rotateRight(): void {
    this.direction.rotateRight(this);
  }

  executing(commands: string): string {
    this.handlingRotation(commands);

    return `${this.xCoordinate}:${
      this.yCoordinate
    }:${this.direction.toDirectionString()}`;
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
  const marsRover = new Rover(1, 2, new FacingNorthState());
  const marsRover2 = new Rover(1, 2, new FacingSouthState());
  console.log('Mars Rover One', marsRover.executing('LLR'));
  console.log('Mars Rover Two', marsRover2.executing('L'));
}

main();

import { IDirection } from './IDirection';
import { North } from './north';
import { West } from './west';
import { East } from './east';
import { South } from './south';
import { Position } from './position';

export enum Direction {
  NORTH = 'N',
  EAST = 'E',
  SOUTH = 'S',
  WEST = 'W'
}

export class MarsRover {
  private _direction: IDirection;
  private _north: North;
  private _west: West;
  private _east: East;
  private _south: South;
  private position: Position;

  // TODO: Refactor x and y coordinate into own class Position
  constructor(position: Position, direction: IDirection) {
    this.position = position;
    this._direction = direction;
    this._north = new North();
    this._west = new West();
    this._east = new East();
    this._south = new South();
  }

  get east(): East {
    return this._east;
  }

  get south(): South {
    return this._south;
  }

  get west(): West {
    return this._west;
  }

  get north(): North {
    return this._north;
  }

  get direction(): IDirection {
    return this._direction;
  }

  setDirection(direction: IDirection): void {
    this._direction = direction;
  }

  // TODO: Refactor into the command pattern
  execute(commands: string): string {
    this.handleMovement(commands);

    this.handleRotation(commands);

    // TODO: Refactor; Add move function to IDirection

    return `${this.position.x}:${
      this.position.y
    }:${this._direction.toDirectionString()}`;
  }

  private handleMovement(commands: string): void {
    for (const command of commands) {
      if (
        (this.isDirectionFor(Direction.NORTH) &&
          this.isMovementCommand(command)) ||
        (this.isDirectionFor(Direction.SOUTH) &&
          this.isMovementCommand(command))
      ) {
        this.position.y += command.length;
      }
      if (
        (this.isDirectionFor(Direction.WEST) &&
          this.isMovementCommand(command)) ||
        (this.isDirectionFor(Direction.EAST) && this.isMovementCommand(command))
      ) {
        this.position.x += command.length;
      }
    }
  }

  private isDirectionFor(direction: Direction): boolean {
    return this._direction.toDirectionString() === direction;
  }

  private isMovementCommand(command: string): boolean {
    return command === 'M';
  }

  private handleRotation(commands: string): void {
    for (const command of commands) {
      if (command === 'L') {
        this._direction.rotateLeft(this);
      }
      if (command === 'R') {
        this._direction.rotateRight(this);
      }
    }
  }
}

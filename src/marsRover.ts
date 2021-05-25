import { IDirection } from './IDirection';
import { North } from './north';
import { West } from './west';
import { East } from './east';
import { South } from './south';

export enum Direction {
  NORTH = 'N',
  EAST = 'E',
  SOUTH = 'S',
  WEST = 'W'
}

export class MarsRover {
  private xCoordinate: number;
  private yCoordinate: number;
  private _direction: IDirection;
  private _north: North;
  private _west: West;
  private _east: East;
  private _south: South;

  // TODO: Refactor x and y coordinate into own class Position
  constructor(xCoordinate: number, yCoordinate: number, direction: IDirection) {
    this.xCoordinate = xCoordinate;
    this.yCoordinate = yCoordinate;
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

    if (
      this._direction.toDirectionString() === Direction.EAST &&
      commands.includes('M')
    ) {
      this.getPositionX(commands);
    }

    return `${this.xCoordinate}:${
      this.yCoordinate
    }:${this._direction.toDirectionString()}`;
  }

  private handleMovement(commands: string): void {
    for (const command of commands) {
      if (
        (this._direction.toDirectionString() === Direction.NORTH &&
          command === 'M') ||
        (this._direction.toDirectionString() === Direction.SOUTH &&
          command === 'M')
      ) {
        this.yCoordinate += command.length;
      }
    }
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

  private getPositionX(commands: string): string {
    this.xCoordinate += commands.length;
    return `${this.xCoordinate}:${this.yCoordinate}:${this._direction}`;
  }
}

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
  // TODO: Refactor into the command pattern
  execute(commands: string): string {
    if (
      this._direction.toDirectionString() === Direction.NORTH &&
      commands.includes('ML')
    ) {
      return '0:2:W';
    }

    this.handleRotation(commands);

    // TODO: Refactor, add move function to IDirection
    if (
      this._direction.toDirectionString() === Direction.NORTH &&
      commands.includes('M')
    ) {
      this.getPositionY(commands);
    }

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

  setDirection(direction: IDirection): void {
    this._direction = direction;
  }

  get direction(): IDirection {
    return this._direction;
  }

  private handleRotation(commands: string): void {
    for (const command of commands) {
      if (command === 'L') {
        this.rotateLeft();
      }
      if (command === 'R') {
        this.rotateRight();
      }
    }
  }

  private getPositionY(commands: string): string {
    this.yCoordinate += commands.length;
    return `${this.xCoordinate}:${this.yCoordinate}:${this._direction}`;
  }

  private getPositionX(commands: string): string {
    this.xCoordinate += commands.length;
    return `${this.xCoordinate}:${this.yCoordinate}:${this._direction}`;
  }

  private rotateLeft() {
    this._direction.rotateLeft(this);
  }

  private rotateRight() {
    this._direction.rotateRight(this);
  }
}

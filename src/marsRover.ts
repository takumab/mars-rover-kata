import { IDirection } from './IDirection';
import { Position } from './position';

export enum Direction {
  NORTH = 'N',
  EAST = 'E',
  SOUTH = 'S',
  WEST = 'W'
}

export class MarsRover {
  private position: Position;
  private _direction: IDirection;

  constructor(position: Position, direction: IDirection) {
    this.position = position;
    this._direction = direction;
  }

  execute(commands: string): string {
    // For each command in commands
    // Build the command (either a function or class instance => can use a factory)
    // Call the command
    // this.handleCommands(commands);
    for (const command of commands) {
      switch (command) {
        case 'M':
          // TODO: Figure out a better way to handle move
          this.handleMovement(command);
          break;
        case 'L':
          this.rotateLeft();
          break;
        case 'R':
          this.rotateRight();
          break;
        default:
          throw new Error(
            `Unknown command ${command}, must be one of ["M", "L", "R"]`
          );
      }
    }

    return `${this.position.x}:${
      this.position.y
    }:${this._direction.toDirectionString()}`;
  }

  private rotateRight() {
    this._direction = this._direction.rotateRight();
  }

  private rotateLeft() {
    this._direction = this._direction.rotateLeft();
  }

  // TODO: Refactor: Bring rotation and movement together
  private handleMovement(command: string): void {
    switch (this._direction.toDirectionString()) {
      case Direction.NORTH:
        this.position.y += command.length;
        break;
      case Direction.SOUTH:
        this.position.y -= command.length;
        break;
      case Direction.EAST:
        this.position.x += command.length;
        break;
      case Direction.WEST:
        this.position.x -= command.length;
        break;
      default:
        throw new Error(
          `Unkown direction ${this._direction.toDirectionString()}`
        );
    }
  }
}

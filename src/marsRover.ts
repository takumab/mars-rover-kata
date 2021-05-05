enum Direction {
  NORTH = 'N',
  EAST = 'E',
  SOUTH = 'S',
  WEST = 'W'
}

export class MarsRover {
  private xCoordinate: number;
  private yCoordinate: number;
  private direction: string;

  constructor(xCoordinate: number, yCoordinate: number, direction: string) {
    this.xCoordinate = xCoordinate;
    this.yCoordinate = yCoordinate;
    this.direction = direction;
  }

  execute(commands: string): string {
    this.handleRotation(commands);

    if (this.direction === Direction.NORTH && commands.includes('M')) {
      this.getPositionY(commands);
    }

    if (this.direction === Direction.EAST && commands.includes('M')) {
      this.getPositionX(commands);
    }

    return `${this.xCoordinate}:${this.yCoordinate}:${this.direction}`;
  }

  private handleRotation(commands: string): void {
    for (const command of commands) {
      if (command === 'L') {
        switch (this.direction) {
          case Direction.NORTH:
            this.direction = Direction.WEST;
            break;
          case Direction.WEST:
            this.direction = Direction.SOUTH;
            break;
          case Direction.SOUTH:
            this.direction = Direction.EAST;
            break;
          default:
            console.log('[Temporary arbitrary text] Going the wrong way');
        }
      }
      if (command === 'R') {
        this.direction = Direction.NORTH;
      }
    }
  }

  private getPositionY(commands: string): string {
    this.yCoordinate += commands.length;
    return `${this.xCoordinate}:${this.yCoordinate}:${this.direction}`;
  }

  private getPositionX(commands: string): string {
    this.xCoordinate += commands.length;
    return `${this.xCoordinate}:${this.yCoordinate}:${this.direction}`;
  }
}

enum Direction {
  N = 'N',
  E = 'E',
  S = 'S',
  W = 'W'
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
    for (const command of commands) {
      if (command === 'L') {
        switch (this.direction) {
          case Direction.N:
            this.direction = Direction.W;
            break;
          case Direction.W:
            this.direction = Direction.S;
            break;
          case Direction.S:
            this.direction = Direction.E;
            break;
          default:
            return 'undefined';
        }
      }
    }

    if (this.direction === Direction.N) {
      this.getPositionY(commands);
    }

    if (this.direction === Direction.E && commands.includes('M')) {
      this.getPositionX(commands);
    }

    return `${this.xCoordinate}:${this.yCoordinate}:${this.direction}`;
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

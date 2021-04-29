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
    if (this.direction === Direction.N) {
      this.getPositionY(commands);
    }

    if (this.direction === Direction.E) {
      this.getPositionX(commands);
    }

    if (this.direction === Direction.S) {
      this.getPositionY(commands);
    }

    if (this.direction === Direction.W) {
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

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
    if (this.direction === 'N') {
      this.getPositionY(commands);
    }

    if (this.direction === 'E') {
      this.getPositionX(commands);
    }

    if (this.direction === 'S') {
      this.getPositionY(commands);
    }

    if (this.direction === 'W') {
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

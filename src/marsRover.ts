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
      if (commands === 'M') {
        return this.getYPosition(commands);
      }
      if (commands === 'MM') {
        return this.getYPosition(commands);
      }
      if (commands === 'MMM') {
        return this.getYPosition(commands);
      }
    }

    if (this.direction === 'E') {
      if (commands === '') {
        return `${this.xCoordinate}:${this.yCoordinate}:${this.direction}`;
      }
      if (commands === 'M') {
        this.xCoordinate += commands.length;
        return `${this.xCoordinate}:${this.yCoordinate}:${this.direction}`;
      }
      if (commands === 'MM') {
        this.xCoordinate += commands.length;
        return `${this.xCoordinate}:${this.yCoordinate}:${this.direction}`;
      }
    }

    return `${this.xCoordinate}:${this.yCoordinate}:${this.direction}`;
  }

  private getYPosition(commands: string) {
    this.yCoordinate += commands.length;
    return `${this.xCoordinate}:${this.yCoordinate}:${this.direction}`;
  }
}

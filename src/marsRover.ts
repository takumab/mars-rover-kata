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
      if (commands === 'M') {
        const x = this.setXPosition(commands);
        return `${x}:${this.yCoordinate}:${this.direction}`;
      }
      if (commands === 'MM') {
        const x = this.setXPosition(commands);
        return `${x}:${this.yCoordinate}:${this.direction}`;
      }
      if (commands === 'MMM') {
        const x = this.setXPosition(commands);
        return `${x}:${this.yCoordinate}:${this.direction}`;
      }
    }

    return `${this.xCoordinate}:${this.yCoordinate}:${this.direction}`;
  }

  private setXPosition(commands: string): number {
    return (this.xCoordinate += commands.length);
  }

  private getYPosition(commands: string) {
    this.yCoordinate += commands.length;
    return `${this.xCoordinate}:${this.yCoordinate}:${this.direction}`;
  }
}

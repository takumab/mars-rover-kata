enum Direction {
  NORTH = 'N',
  EAST = 'E',
  SOUTH = 'S',
  WEST = 'W'
}

interface IDirection {
  rotateLeft(marsRover: MarsRover): IDirection;
  rotateRight(marsRover: MarsRover): IDirection;
  toDirectionString(): string;
}

export class North implements IDirection {
  rotateLeft(marsRover: MarsRover): IDirection {
    marsRover.setDirection(marsRover.west);
    return marsRover.direction;
  }

  rotateRight(marsRover: MarsRover): IDirection {
    marsRover.setDirection(marsRover.east);
    return marsRover.direction;
  }

  toDirectionString(): string {
    return Direction.NORTH;
  }
}

export class West implements IDirection {
  rotateLeft(marsRover: MarsRover): IDirection {
    marsRover.setDirection(marsRover.south);
    return marsRover.direction;
  }

  rotateRight(marsRover: MarsRover): IDirection {
    marsRover.setDirection(marsRover.north);
    return marsRover.direction;
  }

  toDirectionString(): string {
    return Direction.WEST;
  }
}

export class East implements IDirection {
  rotateLeft(marsRover: MarsRover): IDirection {
    marsRover.setDirection(marsRover.north);
    return marsRover.direction;
  }

  rotateRight(marsRover: MarsRover): IDirection {
    marsRover.setDirection(marsRover.south);
    return marsRover.direction;
  }

  toDirectionString(): string {
    return Direction.EAST;
  }
}

export class South implements IDirection {
  rotateLeft(marsRover: MarsRover): IDirection {
    marsRover.setDirection(marsRover.east);
    return marsRover.direction;
  }

  rotateRight(marsRover: MarsRover): IDirection {
    marsRover.setDirection(marsRover.west);
    return marsRover.direction;
  }

  toDirectionString(): string {
    return Direction.SOUTH;
  }
}

export class MarsRover {
  private xCoordinate: number;
  private yCoordinate: number;
  private _direction: IDirection;
  private _north: North;
  private _west: West;
  private _east: East;
  private _south: South;

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

  execute(commands: string): string {
    this.handleRotation(commands);

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

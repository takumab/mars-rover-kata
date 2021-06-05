export interface IDirection {
  rotateLeft(): IDirection;

  rotateRight(): IDirection;

  toDirectionString(): string;
}

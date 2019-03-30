import { Vector } from './Vector';

export class Bounds extends Vector {
  get left() {
    return this.x;
  }
  get top() {
    return this.y;
  }
  get right() {
    return this.x + this.width;
  }
  get bottom() {
    return this.y + this.height;
  }
  constructor(
    x?: number,
    y?: number,
    public width: number = 0,
    public height: number = 0
  ) {
    super(x, y);
  }
}

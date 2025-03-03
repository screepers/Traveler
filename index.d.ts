interface PathfinderReturn {
    path: RoomPosition[];
    ops: number;
    cost: number;
    incomplete: boolean;
  }

  interface TravelToReturnData {
    nextPos?: RoomPosition;
    pathfinderReturn?: PathfinderReturn;
    state?: TravelState;
    path?: string;
  }

  interface TravelToOptions {
    ignoreRoads?: boolean;
    ignoreCreeps?: boolean;
    ignoreStructures?: boolean;
    preferHighway?: boolean;
    highwayBias?: number;
    allowHostile?: boolean;
    allowSK?: boolean;
    range?: number;
    obstacles?: { pos: RoomPosition }[];
    roomCallback?: (roomName: string, matrix: CostMatrix) => CostMatrix | boolean;
    routeCallback?: (roomName: string) => number;
    returnData?: TravelToReturnData;
    restrictDistance?: number;
    useFindRoute?: boolean;
    maxOps?: number;
    movingTarget?: boolean;
    freshMatrix?: boolean;
    offRoad?: boolean;
    stuckValue?: number;
    maxRooms?: number;
    repath?: number;
    route?: { [roomName: string]: boolean };
    ensurePath?: boolean;
  }

  interface TravelData {
    state?: [
      STATE_PREV_X: number,
      STATE_PREV_Y: number,
      STATE_STUCK: number,
      STATE_CPU: number,
      STATE_DEST_X: number,
      STATE_DEST_Y: number,
      STATE_DEST_ROOMNAME: string
    ];
    path?: string;
  }

  interface TravelState {
    stuckCount: number;
    lastCoord: Coord;
    destination: RoomPosition;
    cpu: number;
  }

  interface Creep {
    travelTo(destination: HasPos | RoomPosition, ops?: TravelToOptions): number;
  }

  interface Coord {
    x: number;
    y: number;
  }
  interface HasPos {
    pos: RoomPosition;
  }

  interface CreepMemory {
    _travel?: never;
    _trav: TravelData;
  }

  interface RoomMemory {
    avoid?: 1;
  }

  interface Memory {
    empire: EmpireMemory;
  }

  interface EmpireMemory {
    hostileRooms?: string[];
  }

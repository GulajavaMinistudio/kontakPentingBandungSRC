/* SystemJS module definition */
// declare var module: {
//   id: string;
// };
declare module "util" {
  export interface InspectOptions {
    showHidden?: boolean;
    depth?: number;
    colors?: boolean;
    customInspect?: boolean;
  }

  export function format(format: any, ...param: any[]): string;
  export function debug(string: string): void;
  export function error(...param: any[]): void;
  export function puts(...param: any[]): void;
  export function print(...param: any[]): void;
  export function log(string: string): void;
  export function inspect(object: any, showHidden?: boolean, depth?: number, color?: boolean): string;
  export function inspect(object: any, options: InspectOptions): string;
  export function isArray(object: any): boolean;
  export function isRegExp(object: any): boolean;
  export function isDate(object: any): boolean;
  export function isError(object: any): boolean;
  export function inherits(constructor: any, superConstructor: any): void;
  export function debuglog(key: string): (msg: string, ...param: any[]) => void;
  export function isBoolean(object: any): boolean;
  export function isBuffer(object: any): boolean;
  export function isFunction(object: any): boolean;
  export function isNull(object: any): boolean;
  export function isNullOrUndefined(object: any): boolean;
  export function isNumber(object: any): boolean;
  export function isObject(object: any): boolean;
  export function isPrimitive(object: any): boolean;
  export function isString(object: any): boolean;
  export function isSymbol(object: any): boolean;
  export function isUndefined(object: any): boolean;
  export function deprecate(fn: Function, message: string): Function;
}

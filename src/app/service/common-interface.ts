export interface CommonLogger {
  /**
   * set日志
   * @param log
   */
  set(log: string): void;

  /**
   * 获取日期
   */
  get(): string;

  /**
   * 打印日志
   */
  print(): void;
}

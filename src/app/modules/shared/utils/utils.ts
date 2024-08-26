export class PocUtils {
  public static generateRandomUuid(): string {
    let s4 = () => {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    };
    return `${s4()}${s4()}-${s4()}-${s4()}-${s4()}-${s4()}${s4()}${s4()}`;
  }

  public static async sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}

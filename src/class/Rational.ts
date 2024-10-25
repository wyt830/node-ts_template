/**
 * 請參考 human.ts 的語法完成 Rational 類
 */
export class Rational {
    private numerator: number;
    private denominator: number;          
        
    constructor(numerator: number, denominator: number) {
        this.numerator = numerator;
        this.denominator = denominator;
      }

      getNumerator(): number {
        return this.numerator;
      }
    
      getDenominator(): number {
        return this.denominator;
      }
    
      normalize(): Rational {
        const gcdValue = this.gcd(Math.abs(this.numerator), Math.abs(this.denominator));
        return new Rational(this.numerator / gcdValue, this.denominator / gcdValue);
      }
    
      private gcd(a: number, b: number): number {
        while (b !== 0) {
          const temp = b;
          b = a % b;
          a = temp;
        }
        return a;
      }
    
      isWhole(): boolean {
        return this.normalize().denominator === 1;
      }
    
      isDecimal(): boolean {
        return this.normalize().denominator !== 1;
      }
    
      equals(r: Rational): boolean {
        const normalizedThis = this.normalize();
        const normalizedOther = r.normalize();
        return (
          normalizedThis.numerator === normalizedOther.numerator &&
          normalizedThis.denominator === normalizedOther.denominator
        );
      }
    
      equalsFraction(numerator: number, denominator: number): boolean {
        const normalizedThis = this.normalize();
        const normalizedOther = new Rational(numerator, denominator).normalize();
        return (
          normalizedThis.numerator === normalizedOther.numerator &&
          normalizedThis.denominator === normalizedOther.denominator
        );
      }
    
      static _parseRational(numeratorArr: string[], denominatorArr: string[]): Rational {
        const numerator = parseInt(numeratorArr.join(""), 10);
        const denominator = parseInt(denominatorArr.join(""), 10);
        return new Rational(numerator, denominator);
      }
    
      static parseRational(rationalStr: string): Rational {
        const parts: string[] = rationalStr.split("/");   
        const numerator = parseInt(parts[0], 10);
        const denominator = parseInt(parts[1], 10);
        return new Rational(numerator, denominator);
      }
    
      toString(): string {
        return `${this.numerator}/${this.denominator}`;
      }
    }
interface CalculatorValue {
  currentValue: string;
  storedValue: string | undefined;
  operation: "+" | "-" | "x" | "÷" | undefined;
}

interface CalculatorAdd {
  type: "add";
}
interface CalculatorSubtract {
  type: "subtract";
}
interface CalculatorDivide {
  type: "divide";
}
interface CalculatorMultiply {
  type: "multiply";
}
interface CalculatorNewNumber {
  type: "new number";
  value: number;
}
interface CalculatorReset {
  type: "reset";
}
interface CalculatorSubmit {
  type: "submit";
}
interface CalculatorDecimal {
  type: "decimal";
}
interface CalculatorDelete {
  type: "delete";
}

type CaculatorAction =
  | CalculatorAdd
  | CalculatorSubtract
  | CalculatorMultiply
  | CalculatorDivide
  | CalculatorNewNumber
  | CalculatorReset
  | CalculatorSubmit
  | CalculatorDecimal
  | CalculatorDelete;

export const defaultCalculatorValue: CalculatorValue = {
  currentValue: "0",
  storedValue: undefined,
  operation: undefined,
};

export default function calculatorReducer(
  value: CalculatorValue,
  action: CaculatorAction,
): CalculatorValue {
  switch (action.type) {
    case "add":
      return {
        currentValue: "",
        storedValue: value.currentValue,
        operation: "+",
      };

    case "subtract":
      return {
        currentValue: "",
        storedValue: value.currentValue,
        operation: "-",
      };

    case "multiply":
      return {
        currentValue: "",
        storedValue: value.currentValue,
        operation: "x",
      };

    case "divide":
      return {
        currentValue: "",
        storedValue: value.currentValue,
        operation: "÷",
      };

    case "new number":
      return {
        ...value,
        currentValue:
          value.currentValue !== "0" && value.currentValue !== "Infinity"
            ? value.currentValue + action.value
            : action.value.toString(),
      };

    case "decimal":
      return {
        ...value,
        currentValue: value.currentValue.includes(".")
          ? value.currentValue
          : value.currentValue + ".",
      };

    case "delete":
      return {
        ...value,
        currentValue:
          value.currentValue.length > 1 ? value.currentValue.slice(0, -1) : "0",
      };

    case "reset":
      return defaultCalculatorValue;

    case "submit":
      if (!value.operation) {
        return value;
      }

      let result: number;

      switch (value.operation) {
        case "+":
          result = Number(value.storedValue) + Number(value.currentValue);
          break;
        case "-":
          result = Number(value.storedValue) - Number(value.currentValue);
          break;
        case "x":
          result = Number(value.storedValue) * Number(value.currentValue);
          break;
        case "÷":
          result = Number(value.storedValue) / Number(value.currentValue);
          break;

        default:
          throw "Unknown operation";
      }

      return {
        currentValue: result.toString(),
        storedValue: undefined,
        operation: undefined,
      };

    default:
      throw "Unknown action";
  }
}

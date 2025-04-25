interface CalculatorAdd {
  type: "add";
  value: number;
}
interface CalculatorSubtract {
  type: "subtract";
  value: number;
}
interface CalculatorDivide {
  type: "divide";
  value: number;
}
interface CalculatorMultiply {
  type: "multiply";
  value: number;
}

type CaculatorAction =
  | CalculatorAdd
  | CalculatorSubtract
  | CalculatorMultiply
  | CalculatorDivide;

export default function calculatorReducer(
  value: number,
  action: CaculatorAction
) {
  switch (action.type) {
    case "add":
      return (value += action.value);

    case "subtract":
      return (value -= action.value);

    case "multiply":
      return (value *= action.value);

    case "divide":
      return (value /= action.value);

    default:
      throw "Unknown actions";
  }
}

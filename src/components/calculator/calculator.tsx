"use client";

import { FormEvent, useReducer } from "react";
import calculatorReducer, {
  defaultCalculatorValue,
} from "./calculator-reducer";
import ThemeToggle from "../theme-toggle";
import CalculatorButton from "./calculator-button";
import formatNumber from "@/lib/format-number";

export default function Calculator() {
  const [calculatorData, dispatch] = useReducer(
    calculatorReducer,
    defaultCalculatorValue,
  );

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-lg space-y-6">
      <div className="flex justify-between">
        <h1 className="text-custom-text-offhand text-3xl font-bold">calc</h1>
        <div className="flex items-end gap-6">
          <p className="text-custom-text-offhand mb-1 text-xs font-bold">
            THEME
          </p>
          <ThemeToggle />
        </div>
      </div>

      <div className="bg-custom-bg-screen text-custom-text-offhand overflow-y-scroll rounded-xl p-6 text-right text-6xl font-bold">
        {calculatorData.storedValue && formatNumber(calculatorData.storedValue)}
        {calculatorData.operation}
        {calculatorData.currentValue &&
          formatNumber(calculatorData.currentValue)}
      </div>

      <div className="bg-custom-bg-keypad grid grid-cols-4 gap-[0.75em] rounded-xl p-6 sm:gap-6">
        <CalculatorButton
          onClick={() => dispatch({ type: "new number", value: 7 })}
        >
          7
        </CalculatorButton>
        <CalculatorButton
          onClick={() => dispatch({ type: "new number", value: 8 })}
        >
          8
        </CalculatorButton>
        <CalculatorButton
          onClick={() => dispatch({ type: "new number", value: 9 })}
        >
          9
        </CalculatorButton>
        <CalculatorButton
          variant={"secondary"}
          onClick={() => dispatch({ type: "delete" })}
        >
          DEL
        </CalculatorButton>
        <CalculatorButton
          onClick={() => dispatch({ type: "new number", value: 4 })}
        >
          4
        </CalculatorButton>
        <CalculatorButton
          onClick={() => dispatch({ type: "new number", value: 5 })}
        >
          5
        </CalculatorButton>
        <CalculatorButton
          onClick={() => dispatch({ type: "new number", value: 6 })}
        >
          6
        </CalculatorButton>
        <CalculatorButton
          onClick={() => {
            if (calculatorData.operation) {
              dispatch({ type: "submit" });
            }
            dispatch({ type: "add" });
          }}
        >
          +
        </CalculatorButton>
        <CalculatorButton
          onClick={() => dispatch({ type: "new number", value: 1 })}
        >
          1
        </CalculatorButton>
        <CalculatorButton
          onClick={() => dispatch({ type: "new number", value: 2 })}
        >
          2
        </CalculatorButton>
        <CalculatorButton
          onClick={() => dispatch({ type: "new number", value: 3 })}
        >
          3
        </CalculatorButton>
        <CalculatorButton
          onClick={() => {
            if (calculatorData.operation) {
              dispatch({ type: "submit" });
            }
            dispatch({ type: "subtract" });
          }}
        >
          -
        </CalculatorButton>
        <CalculatorButton onClick={() => dispatch({ type: "decimal" })}>
          .
        </CalculatorButton>
        <CalculatorButton
          onClick={() => dispatch({ type: "new number", value: 0 })}
        >
          0
        </CalculatorButton>
        <CalculatorButton
          onClick={() => {
            if (calculatorData.operation) {
              dispatch({ type: "submit" });
            }
            dispatch({ type: "divide" });
          }}
        >
          /
        </CalculatorButton>
        <CalculatorButton
          onClick={() => {
            if (calculatorData.operation) {
              dispatch({ type: "submit" });
            }
            dispatch({ type: "multiply" });
          }}
        >
          x
        </CalculatorButton>
        <CalculatorButton
          variant={"secondary"}
          className="col-span-2"
          onClick={() => dispatch({ type: "reset" })}
        >
          RESET
        </CalculatorButton>
        <CalculatorButton
          variant={"submit"}
          className="col-span-2"
          onClick={() => dispatch({ type: "submit" })}
        >
          =
        </CalculatorButton>
      </div>
    </form>
  );
}

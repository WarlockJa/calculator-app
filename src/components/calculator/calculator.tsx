"use client";

import { FormEvent, useReducer } from "react";
import calculatorReducer from "./calculator-reducer";
import ThemeToggle from "../theme-toggle";
import CalculatorButton from "./calculator-button";

export default function Calculator() {
  const [value, dispatch] = useReducer(calculatorReducer, 0);

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

      <div className="bg-custom-bg-screen text-custom-text-offhand rounded-xl p-6 text-right text-6xl font-bold">
        {value}
      </div>

      <div className="bg-custom-bg-keypad grid grid-cols-4 gap-[0.75em] rounded-xl p-6 sm:gap-6">
        <CalculatorButton>7</CalculatorButton>
        <CalculatorButton>8</CalculatorButton>
        <CalculatorButton>9</CalculatorButton>
        <CalculatorButton variant={"secondary"}>DEL</CalculatorButton>
        <CalculatorButton>4</CalculatorButton>
        <CalculatorButton>5</CalculatorButton>
        <CalculatorButton>6</CalculatorButton>
        <CalculatorButton>+</CalculatorButton>
        <CalculatorButton>1</CalculatorButton>
        <CalculatorButton>2</CalculatorButton>
        <CalculatorButton>3</CalculatorButton>
        <CalculatorButton>-</CalculatorButton>
        <CalculatorButton>.</CalculatorButton>
        <CalculatorButton>0</CalculatorButton>
        <CalculatorButton>/</CalculatorButton>
        <CalculatorButton>x</CalculatorButton>
        <CalculatorButton variant={"secondary"} className="col-span-2">
          RESET
        </CalculatorButton>
        <CalculatorButton variant={"submit"} className="col-span-2">
          =
        </CalculatorButton>
      </div>
    </form>
  );
}

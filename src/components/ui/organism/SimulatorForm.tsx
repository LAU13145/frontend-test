"use client";

import { useState, useMemo } from "react";
import { InputComponent } from "../atoms";
import { amountRegex, cleanNumber, formatCOP, monthsRegex } from "@/src/utils";
import {
  CalendarDaysIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/24/solid";

export const SimulatorForm = () => {
  const [initialAmount, setInitialAmount] = useState("");
  const [monthlyContribution, setMonthlyContribution] = useState("");
  const [months, setMonths] = useState("");

  const monthlyRate = 0.01;

  const futureValue = useMemo(() => {
    const P = Number(initialAmount);
    const A = Number(monthlyContribution);
    const n = Number(months);

    // 🔒 Validaciones de seguridad
    if (!P || !A || !n) return 0;

    // 🚫 Si los meses son mayores a 12, no ejecutar cálculo
    if (n > 12) return 0;

    /**
     * Fórmula usada:
     * VF = P(1+r)^n + A * ((1+r)^n - 1) / r
     */

    const result =
      P * Math.pow(1 + monthlyRate, n) +
      A * ((Math.pow(1 + monthlyRate, n) - 1) / monthlyRate);

    return result;
  }, [initialAmount, monthlyContribution, months]);

  return (
    <section className="mt-8 space-y-6">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <InputComponent
          endContent={<CurrencyDollarIcon className="h-6 w-6 text-gray-400" />}
          errorMessageRegex={"Monto inválido"}
          errorMessageMaxLength={"Superaste el límite de caracteres"}
          errorMessageRequired={"Este campo es obligatorio"}
          label={"Monto inicial"}
          labelPlacement={"outside"}
          minLength={4}
          maxLength={15}
          placeholder={"Ingresa el monto inicial"}
          regex={amountRegex}
          type={"text"}
          value={formatCOP(initialAmount)}
          startContent={initialAmount !== "" && <span>$</span>}
          onValueChange={(value) => {
            const cleaned = cleanNumber(value);
            setInitialAmount(cleaned);
          }}
          size="sm"
        />

        <InputComponent
          endContent={<CurrencyDollarIcon className="h-6 w-6 text-gray-400" />}
          errorMessageRegex={"Monto inválido"}
          errorMessageMaxLength={"Superaste el límite de caracteres"}
          errorMessageRequired={"Este campo es obligatorio"}
          label={"Aporte mensual"}
          labelPlacement={"outside"}
          minLength={4}
          maxLength={15}
          placeholder={"Ingresa el aporte mensual"}
          regex={amountRegex}
          type={"text"}
          value={formatCOP(monthlyContribution)}
          startContent={monthlyContribution !== "" && <span>$</span>}
          onValueChange={(value) => {
            const cleaned = cleanNumber(value);
            setMonthlyContribution(cleaned);
          }}
          size="sm"
        />
      </div>

      <InputComponent
        endContent={<CalendarDaysIcon className="h-6 w-6 text-gray-400" />}
        errorMessageRegex={"Mes inválido"}
        errorMessageMaxLength={"Superaste el límite de caracteres"}
        errorMessageRequired={"Este campo es obligatorio"}
        label={"Meses"}
        labelPlacement={"outside"}
        minLength={1}
        maxLength={2}
        placeholder={"Ingresa los meses"}
        regex={monthsRegex}
        onValueChange={(value) => setMonths(value)}
        type={"text"}
        value={months}
        size={"sm"}
      />

      <div className="rounded-lg bg-gray-100 p-4 text-center">
        <p className="text-sm text-gray-600">Valor futuro estimado</p>
        <p className="text-2xl font-bold">
          ${futureValue.toLocaleString("es-CO")}
        </p>
        <p className="mt-2 text-xs text-gray-500">
          *Cálculo basado en una tasa de interés mensual simulada del 1%
          (interés compuesto con aportes mensuales).
        </p>
      </div>
    </section>
  );
};

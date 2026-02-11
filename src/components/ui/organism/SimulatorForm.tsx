"use client";

import { InputComponent } from "../atoms";
import { useState } from "react";

export const SimulatorForm = () => {
  const [initialAmount, setInitialAmount] = useState("");

  return (
    <section className="mt-8">
      <InputComponent
        label={"Monto inicial"}
        labelPlacement={"outside"}
        onValueChange={(value) => setInitialAmount(value)}
        regex={/.*/}
        size={"sm"}
        type={"number"}
        value={initialAmount}
      />
    </section>
  );
};

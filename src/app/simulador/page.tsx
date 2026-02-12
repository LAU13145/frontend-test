import { imgAgent } from "@/src/assets";
import { SimulatorForm } from "@/src/components";
import Image from "next/image";

export default function SimulatorPage() {
  return (
    <section className="mt-6 md:mt-20">
      <Image
        src={imgAgent}
        alt="Agent"
        width={500}
        height={300}
        className="mx-auto"
      />

      <h1 className="mt-4 text-center text-2xl font-bold md:mt-8">
        Simulador de Rentabilidad de Inversión
      </h1>

      <p className="mt-2 text-center text-base">
        Ingresa los siguientes datos para calcular la rentabilidad de tu
        inversión en segundos. <br /> Simula el rendimiento de tu capital
        considerando tu inversión inicial, aportes periódicos y el tiempo
        proyectado
      </p>

      <SimulatorForm />
    </section>
  );
}

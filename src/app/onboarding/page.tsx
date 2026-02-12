import { imgFinanceSix } from "@/src/assets";
import { OnboardingForm } from "@/src/components";
import Image from "next/image";

export default function OnboardingPage() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-50 to-white px-4 py-10 md:py-12">
      <div className="mx-auto max-w-4xl text-center">
        <Image
          src={imgFinanceSix}
          alt={"Apertura de cuenta"}
          width={620}
          height={480}
          className="mx-auto"
        />

        <h1 className="mt-6 text-3xl font-bold text-gray-900 md:text-4xl">
          Comienza tu proceso de apertura hoy
        </h1>

        <p className="mt-4 text-base text-gray-600 md:text-lg">
          Completa el siguiente formulario para iniciar tu proceso de apertura.
          Nuestro equipo revisará tu solicitud y se pondrá en contacto contigo
          lo antes posible.
        </p>

        <div className="mt-10 rounded-2xl bg-white p-6 shadow-xl md:p-10">
          <OnboardingForm />
        </div>
      </div>
    </section>
  );
}

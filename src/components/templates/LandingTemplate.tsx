"use client";

import { imgFinanceSeven } from "@/src/assets";
import { Button, Card, CardBody } from "@heroui/react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export const LandingTemplate = () => {
  const router = useRouter();

  return (
    <main className="flex min-h-screen flex-col bg-gradient-to-br from-slate-50 to-slate-100">
      <header className="flex items-center justify-between px-8 py-6">
        <h1 className="text-xl font-bold text-blue-900">FinanzaPro</h1>
      </header>

      <Image
        src={imgFinanceSeven}
        alt={"Imagen de gerente financiero"}
        width={800}
        height={400}
        className={"mx-auto -mb-14 rounded-lg shadow-lg"}
      />

      <section className="my-auto flex flex-1 items-center justify-center px-6">
        <Card className="w-full max-w-4xl rounded-3xl border border-gray-200 shadow-xl">
          <CardBody className="space-y-8 p-12 text-center">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-gray-900">
                Tu futuro financiero comienza hoy
              </h2>

              <p className="mx-auto max-w-2xl text-lg text-gray-600">
                Explora nuestros productos, simula tu rentabilidad y abre tu
                cuenta 100% en línea de manera segura, rápida y confiable.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 pt-6 md:grid-cols-3">
              <Button
                size="lg"
                radius="lg"
                color="default"
                variant="bordered"
                className="font-semibold"
                onPress={() => router.push("/productos")}
              >
                📦 Ver productos
              </Button>

              <Button
                size="lg"
                radius="lg"
                color="primary"
                className="font-semibold"
                onPress={() => router.push("/simulador")}
              >
                📈 Simular rentabilidad
              </Button>

              <Button
                size="lg"
                radius="lg"
                className="bg-blue-900 font-semibold text-white hover:bg-blue-800"
                onPress={() => router.push("/onboarding")}
              >
                🏦 Abrir cuenta
              </Button>
            </div>
          </CardBody>
        </Card>
      </section>

      <footer className="py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} FinanzaPro. Todos los derechos reservados.
      </footer>
    </main>
  );
};

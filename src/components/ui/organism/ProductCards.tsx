"use client";

import { SavingsAccount } from "@/src/utils/types";
import {
  CurrencyDollarIcon,
  ShieldCheckIcon,
  WalletIcon,
} from "@heroicons/react/24/solid";
import { Card, CardBody, CardHeader } from "@heroui/react";
import Image from "next/image";

export const ProductCards = (account: SavingsAccount) => {
  return (
    <Card shadow="sm" className="bg-white" isPressable>
      <CardHeader className="flex items-center justify-between px-6 pt-6 pb-0">
        <h2 className="text-xl font-semibold text-gray-900">{account.name}</h2>
        <ShieldCheckIcon className="h-6 w-6 text-emerald-500" />
      </CardHeader>

      <CardBody className="overflow-visible px-6 py-4">
        <div className="mb-4">
          <Image
            alt={account.name}
            className="h-35 w-full rounded-xl object-cover"
            src={account.img}
            width={300}
            height={140}
          />
        </div>

        <div className="mb-4 space-y-2 text-sm text-gray-700">
          <p className="flex items-center gap-2">
            <CurrencyDollarIcon className="h-4 w-4" />
            Tasa de interés: <strong>{account.interest_rate}%</strong>
          </p>
          <p className="flex items-center gap-2">
            <WalletIcon className="h-4 w-4" />
            Moneda: <strong>{account.currency}</strong>
          </p>
          <p>
            Monto mínimo de apertura:{" "}
            <strong>{account.minimum_opening_amount}</strong>
          </p>
        </div>

        <div>
          <h3 className="mb-2 font-medium text-gray-900">Beneficios</h3>
          <ul className="list-inside list-disc space-y-1 text-sm text-gray-600">
            {account.benefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
        </div>
      </CardBody>
    </Card>
  );
};

"use client";

import { useState } from "react";
import { InputComponent } from "../atoms";
import { emailRegex, fullNameRegex, idNumberRegex } from "@/src/utils";
import {
  AtSymbolIcon,
  IdentificationIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import { Alert, Button } from "@heroui/react";

export const OnboardingForm = () => {
  const [fullName, setFullName] = useState("");
  const [idNumber, setIdNumber] = useState("");
  const [email, setEmail] = useState("");
  const [recaptchaToken, setRecaptchaToken] = useState("");
  const [error, setError] = useState("");
  const [successCode, setSuccessCode] = useState("");

  const generateFakeRecaptcha = () => {
    const simulatedResponse = Math.random() > 0.2 ? "OK" : "ERROR";
    setRecaptchaToken(simulatedResponse);
    return simulatedResponse;
  };

  const generateUUID = () => {
    return crypto.randomUUID();
  };

  const cleanReCaptcha = () => {
    setError("");
    setSuccessCode("");
    setRecaptchaToken("");
  };

  const handleSubmit = () => {
    setError("");
    setSuccessCode("");

    const token = generateFakeRecaptcha();

    if (token !== "OK") {
      setError(
        "Parece que algo falló en la verificación. No te preocupes, vuelve a intentarlo 😊"
      );
      return;
    }

    const requestId = generateUUID();
    setSuccessCode(requestId);
  };

  const isFormValid =
    fullNameRegex.test(fullName) &&
    idNumberRegex.test(idNumber) &&
    emailRegex.test(email) &&
    !error;

  return (
    <section className="space-y-8">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <InputComponent
          endContent={<UserIcon className="h-6 w-6 text-gray-400" />}
          errorMessageRegex="Ingresa tu nombre completo"
          errorMessageMaxLength="Superaste el límite de caracteres"
          errorMessageRequired="Este campo es obligatorio"
          label="Nombre completo"
          labelPlacement="outside"
          minLength={6}
          maxLength={150}
          placeholder="Ingresa tu nombre completo"
          regex={fullNameRegex}
          type="text"
          value={fullName}
          onValueChange={(value) => {
            setFullName(value);
            cleanReCaptcha();
          }}
          size="sm"
        />

        <InputComponent
          endContent={<IdentificationIcon className="h-6 w-6 text-gray-400" />}
          errorMessageRegex="Número de cédula inválido"
          errorMessageMaxLength="Superaste el límite de caracteres"
          errorMessageRequired="Este campo es obligatorio"
          label="Número de cédula"
          labelPlacement="outside"
          minLength={5}
          maxLength={10}
          placeholder="Ingresa tu número de cédula"
          regex={idNumberRegex}
          type="number"
          value={idNumber}
          onValueChange={(value) => {
            setIdNumber(value);
            cleanReCaptcha();
          }}
          size="sm"
        />

        <div className="md:col-span-2">
          <InputComponent
            endContent={<AtSymbolIcon className="h-6 w-6 text-gray-400" />}
            errorMessageRegex="Correo electrónico inválido"
            errorMessageMaxLength="Superaste el límite de caracteres"
            errorMessageRequired="Este campo es obligatorio"
            label="Correo electrónico"
            labelPlacement="outside"
            minLength={8}
            maxLength={150}
            placeholder="Ingresa tu correo electrónico"
            regex={emailRegex}
            onValueChange={(value) => {
              setEmail(value);
              cleanReCaptcha();
            }}
            type="email"
            value={email}
            size="sm"
          />
        </div>
      </div>

      <input type="hidden" value={recaptchaToken} />

      {error && (
        <Alert
          classNames={{
            title: "text-left",
          }}
          color={"danger"}
          title={error}
        />
      )}

      {successCode && (
        <Alert
          classNames={{
            title: "text-left",
          }}
          color={"success"}
          title={`¡Solicitud enviada con éxito! ✨Código de solicitud: ${successCode}`}
        />
      )}

      <Button
        onPress={handleSubmit}
        isDisabled={!isFormValid}
        color={isFormValid ? "primary" : "default"}
        className="rounded-xl px-8 py-3 text-sm font-semibold"
      >
        Enviar solicitud
      </Button>
    </section>
  );
};

export const fullNameRegex =
  /^(?=.{2,60}$)(?!.*(\p{L})\1{2})[\p{L}]+ [\p{L} ]+$/u;
export const idNumberRegex = /^[1-9]\d{4,9}$/;
export const emailRegex = /^(?=.{8,150}$)[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const amountRegex = /^(?=.{4,15}$)\d{1,3}(\.\d{3})*$/;
export const monthsRegex = /^(?:[1-9]|1[0-2])$/;

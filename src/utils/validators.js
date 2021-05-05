import React from "react";

export const required = (value) => {
  return value || typeof value === "number" ? undefined : "field is required";
};
export const maxLength = (max) => (value) => {
  return value && value.length > max
    ? `must be no less ${max} characters`
    : undefined;
};
export const maxLength10 = maxLength(10);

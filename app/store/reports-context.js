import React, { useContext, useState } from "react";
import { createContext } from "react";
import { AuthContext } from "./auth-context";

export const ReportContext = createContext({
  viewState: null,
});

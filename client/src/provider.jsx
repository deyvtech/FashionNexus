import { NextUIProvider } from "@nextui-org/system";
import { useNavigate } from "react-router-dom";

export function NextProvider({ children }) {
  const navigate = useNavigate();

  return <NextUIProvider navigate={navigate}>{children}</NextUIProvider>;
}

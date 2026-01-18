import { MantineProvider } from "@mantine/core";
import { theme } from "@/config/theme";

function ThemeProvider({ children }: { children: React.ReactNode }) {
  return <MantineProvider theme={theme}>{children}</MantineProvider>;
}

export default ThemeProvider;

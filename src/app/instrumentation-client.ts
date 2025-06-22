import { sendGTMEvent } from "@next/third-parties/google";

window.addEventListener("error", (event) => {
  sendGTMEvent({
    event: "error",
    error: event.error,
  });
});

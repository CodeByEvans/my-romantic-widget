// handlers/deepLink.handler.ts

import { connectionService } from "@/modules/connection/services/connection.service";

export const handleDeepLink = async (urlStr: string) => {
  const url = new URL(urlStr);
  const requestId = url.searchParams.get("request_id");

  if (url.host === "accept-connection" && requestId) {
    await connectionService.createConnection(requestId);
    return true;
  }

  return false;
};

import { ImageResponse } from "next/og";
import config from "@/lib/site-config";

export function GET(request: Request) {
  const url = new URL(request.url);
  const title = url.searchParams.get("title") || config.userData.name;

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%",
          padding: "80px",
          justifyContent: "space-between",
          backgroundColor: "#0a0a0a",
          color: "#ededed",
        }}
      >
        <div style={{ display: "flex" }}>
          <svg width="80" height="80" viewBox="0 0 49 49" fill="none">
            <path
              d="M45.9628 34.9492H38.5134L28.053 24.5474H35.5017L45.9628 34.9492Z"
              fill="#ededed"
            />
            <path
              d="M48.9683 21.8922C48.9694 23.5726 48.4309 25.2094 47.431 26.564C46.4312 27.9187 45.0224 28.9205 43.4099 29.4233L38.51 24.5474H41.0331C41.7413 24.5474 42.4204 24.2676 42.9212 23.7697C43.422 23.2717 43.7033 22.5963 43.7033 21.8922C43.7033 21.188 43.422 20.5126 42.9212 20.0146C42.4204 19.5167 41.7413 19.237 41.0331 19.237H33.1676L27.9011 14H41.031C42.0735 13.9993 43.1059 14.2029 44.0691 14.5993C45.0323 14.9956 45.9076 15.577 46.6447 16.31C47.3818 17.043 47.9664 17.9133 48.365 18.8711C48.7636 19.829 48.9684 20.8555 48.9676 21.8922H48.9683Z"
              fill="#ededed"
            />
            <path
              d="M26.2185 14V34.9492H10.4184L15.6848 29.7116H20.9513V21.5229L7.44938 34.9492H0L20.9513 14.1153L21.0672 14H26.2185Z"
              fill="#ededed"
            />
          </svg>
        </div>

        <div style={{ display: "flex", maxWidth: "900px" }}>
          <h1
            style={{
              fontSize: "76px",
              fontWeight: 600,
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              margin: 0,
            }}
          >
            {title}
          </h1>
        </div>

        <div
          style={{
            display: "flex",
            fontSize: "22px",
            color: "#9ca3af",
            fontFamily: "monospace",
          }}
        >
          abhinavrajesh.com
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}

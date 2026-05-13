<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet
  version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:atom="http://www.w3.org/2005/Atom"
>
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes" />
  <xsl:template match="/">
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="noindex" />
        <title>
          <xsl:value-of select="rss/channel/title" />
        </title>
        <style>
          :root {
            --background: #fafafa;
            --foreground: #0a0a0a;
            --muted: #6b7280;
            --subtle: #e5e5e5;
            --accent: #2563eb;
          }
          @media (prefers-color-scheme: dark) {
            :root {
              --background: #0a0a0a;
              --foreground: #ededed;
              --muted: #9ca3af;
              --subtle: #262626;
            }
          }
          * { box-sizing: border-box; }
          body {
            background: var(--background);
            color: var(--foreground);
            font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif;
            margin: 0;
            line-height: 1.6;
          }
          main {
            max-width: 42rem;
            margin: 0 auto;
            padding: 3rem 1.5rem;
          }
          .meta {
            font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace;
            font-size: 0.75rem;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            color: var(--muted);
          }
          h1 {
            font-size: 1.5rem;
            font-weight: 500;
            margin: 0.5rem 0 0.25rem;
          }
          .desc {
            color: var(--muted);
            font-size: 0.875rem;
            margin: 0 0 1.5rem;
          }
          .notice {
            border: 1px solid var(--subtle);
            border-radius: 4px;
            padding: 0.75rem 1rem;
            font-size: 0.8125rem;
            color: var(--muted);
            margin-bottom: 2rem;
          }
          .notice code {
            font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace;
            background: var(--subtle);
            padding: 0.0625rem 0.25rem;
            border-radius: 3px;
            color: var(--foreground);
          }
          a {
            color: var(--accent);
            text-decoration: underline;
            text-underline-offset: 4px;
          }
          a:hover { text-decoration: none; }
          h2.section {
            font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace;
            font-size: 0.75rem;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            color: var(--muted);
            font-weight: 400;
            margin: 2.5rem 0 1rem;
          }
          ul.items {
            list-style: none;
            padding: 0;
            margin: 0;
            border-top: 1px solid var(--subtle);
          }
          ul.items li {
            padding: 1rem 0;
            border-bottom: 1px solid var(--subtle);
          }
          .item-title {
            font-size: 1rem;
            font-weight: 500;
            margin: 0 0 0.25rem;
          }
          .item-title a {
            color: var(--foreground);
            text-decoration: none;
          }
          .item-title a:hover { text-decoration: underline; }
          .item-date {
            font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace;
            font-size: 0.75rem;
            color: var(--muted);
            margin-right: 0.5rem;
          }
          .item-desc {
            color: var(--muted);
            font-size: 0.875rem;
            margin: 0.5rem 0 0;
          }
        </style>
      </head>
      <body>
        <main>
          <p class="meta">RSS Feed</p>
          <h1>
            <xsl:value-of select="rss/channel/title" />
          </h1>
          <p class="desc">
            <xsl:value-of select="rss/channel/description" />
          </p>
          <div class="notice">
            This is an RSS feed. Subscribe by pasting
            <code>
              <xsl:value-of select="rss/channel/atom:link/@href" />
            </code>
            into your reader, or
            <a>
              <xsl:attribute name="href">
                <xsl:value-of select="rss/channel/link" />
              </xsl:attribute>
              visit the site
            </a>.
          </div>
          <h2 class="section">Recent</h2>
          <ul class="items">
            <xsl:for-each select="rss/channel/item">
              <li>
                <h3 class="item-title">
                  <a>
                    <xsl:attribute name="href">
                      <xsl:value-of select="link" />
                    </xsl:attribute>
                    <xsl:value-of select="title" />
                  </a>
                </h3>
                <span class="item-date">
                  <xsl:value-of select="substring(pubDate, 0, 17)" />
                </span>
                <p class="item-desc">
                  <xsl:value-of select="description" />
                </p>
              </li>
            </xsl:for-each>
          </ul>
        </main>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>

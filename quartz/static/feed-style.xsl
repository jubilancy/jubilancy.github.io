<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="3.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes" />
    <xsl:template match="/">
        <html>

        <head>
            <title>RSS Feed</title>
            <meta charset="utf-8" />
            <link rel="preconnect" href="https://fonts.googleapis.com">
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
            <link href="https://fonts.googleapis.com/css2?family=Allkin&family=Datatype:wght@100..900&family=Quicksand:wght@300..700&display=swap" rel="stylesheet">
            <style>
                body {
                    font-family: Quicksand;
                    max-width: 700px;
                    margin: 2rem auto;
                    line-height: 1.6;
                }

                .callout {
                    background: #f4f4f4;
                    padding: 1rem;
                    border-left: 4px solid #007bff;
                    margin: 1.5rem 0;
                    border-radius: 0 4px 4px 0;
                }

                .callout-title {
                    font-weight: bold;
                    margin-bottom: 0.5rem;
                    display: block;
                }

                hr {
                    border: none;
                    border-top: 1px solid #ccc;
                    margin: 2rem 0;
                }

                code {
                    background: #eee;
                    padding: 0.2rem 0.4rem;
                    border-radius: 3px;
                    font-family: monospace;
                }
            </style>
        </head>

        <body>

            <h2>What is RSS?</h2>
            <p><a href="https://aboutfeeds.com">RSS (Really Simple Syndication)</a> is a way to subscribe to websites without using social media algorithms or email newsletters. It allows you to follow my updates in a central "feed reader" app.</p>

            <h3>How to Follow</h3>
            <ol>
                <li><strong>Copy the link:</strong> <code>https://notes.glosse.me/index.xml</code></li>
                <li><strong>Paste it</strong> into your favorite reader (like <a href="https://netnewswire.com/">NetNewsWire</a>, <a href="https://feedly.com/">Feedly</a>, or <a href="https://freshrss.org/">FreshRSS</a>).</li>
            </ol>

            <div class="callout">
                <span class="callout-title">ℹ️ New to Feeds?</span>
                If you've never used RSS before, visit <a href="https://aboutfeeds.com">AboutFeeds.com</a> for a comprehensive guide on getting started and choosing a reader.
            </div>

            <hr />

            <h2>Feed Preview</h2>
            <div id="rss-preview-container">
                <ul style="list-style-type: none; padding-left: 0;">
                    <xsl:for-each select="rss/channel/item[position() &lt;= 10]">
                        <li style="margin-bottom: 1.5rem;">
                            <a href="{link}" style="font-weight: bold; font-size: 1.1em; text-decoration: none;">
                                <xsl:value-of select="title" />
                            </a>
                            <br />
                            <span style="font-size: 0.9em; opacity: 0.8;">
                                Published: <xsl:value-of select="pubDate" />
                            </span>
                        </li>
                    </xsl:for-each>
                </ul>
            </div>

        </body>

        </html>
    </xsl:template>
</xsl:stylesheet>
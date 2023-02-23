"use client"

import { CacheProvider } from "@emotion/react"
import { MantineProvider } from "@mantine/core"
import { useGluedEmotionCache } from "./emotionNextjsGlue"

export default function RootStyleRegistry({ children }: { children: React.ReactNode }) {
  const cache = useGluedEmotionCache()

  /*useServerInsertedHTML(() => (
    <style
      data-emotion={`${cache.key} ${Object.keys(cache.inserted).join(" ")}`}
      dangerouslySetInnerHTML={{
        __html: Object.values(cache.inserted).join(" "),
      }}
    />
  ))*/

  return (
    <CacheProvider value={cache}>
      <MantineProvider withGlobalStyles withNormalizeCSS emotionCache={cache}>
        {children}
      </MantineProvider>
    </CacheProvider>
  )
}

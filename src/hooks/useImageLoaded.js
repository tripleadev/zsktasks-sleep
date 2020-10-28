import { useRef, useEffect } from "react"

export const useImageLoaded = handler => {
  const ref = useRef()

  const onLoad = e => {
    handler(e)
  }

  useEffect(() => {
    if (ref.current && ref.current.complete) {
      onLoad()
    }
  }, [ref, onLoad])

  return [ref, onLoad]
}

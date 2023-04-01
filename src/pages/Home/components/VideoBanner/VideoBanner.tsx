import { useMachine } from "@xstate/react";
import { useRef } from "react";
import { createMachine } from "xstate";
import { ContainVideos, LayoutVideoBanner, Video } from "./styled-components";


const machine = createMachine({
  "id": "Machine Video",
  "initial": "miniVideo",
  "states": {
    "miniVideo": {
      "on": {
        "toggle": {
          "target": "fullVideo"
        }
      }
    },
    "fullVideo": {
      "entry": "playVideo",
      "exit": "pauseVideo",
      "invoke": [
        {
          "src": "videoEnded"
        },
        {
          "src": "keyEscape"
        }
      ],
      "initial": "playing",
      "states": {
        "playing": {
          "on": {
            "video.ended": {
              "target": "stoped"
            }
          }
        },
        "stoped": {
          "after": {
            "2000": {
              "target": "#Machine Video.miniVideo",
              "actions": [],
              "internal": false
            }
          }
        }
      },
      "on": {
        "toggle": {
          "target": "miniVideo"
        },
        "key.escape": {
          "target": "miniVideo"
        }
      }
    }
  },
  "schema": { events: {} as { type: 'toggle' } | { type: 'video.ended' } | { type: 'key.escape' } },
  "predictableActionArguments": true,
  "preserveActionOrder": true
})

function invokeVideoEnded(videoRef: React.MutableRefObject<HTMLVideoElement | null>) {
  return () => (sendBack: any) => {
    const handler = () => {
      sendBack("video.ended")
    }
    videoRef.current?.addEventListener("ended", handler)
    return () => videoRef.current?.removeEventListener("ended", handler)
  }
}

function invokeKeyEscape() {
  return () => (sendBack: any) => {
    const handler = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        sendBack("key.escape")
      }
    }
    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }
}

export default function VideoBanner() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [state, send] = useMachine(machine, {
    devTools: true,
    actions: {
      playVideo: () => {
        videoRef.current?.play()
      },
      pauseVideo: () => {
        videoRef.current?.pause()
      }
    },
    services: {
      videoEnded: invokeVideoEnded(videoRef),
      keyEscape: invokeKeyEscape()
    }
  })

  return (
    <LayoutVideoBanner>
      <ContainVideos
        onClick={() => {
          send({ type: "toggle" })
        }}
        data-state={state.toStrings().join(" ")}
      >
        <Video controls ref={videoRef} >
          <source src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm" type="video/webm" />
          <source src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" type="video/mp4" />
          Sorry, your browser doesn't support embedded videos.
        </Video>
      </ContainVideos>
    </LayoutVideoBanner>
  )
}

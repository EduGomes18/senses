import React, { useState, useRef } from "react";
import YoutubePlayer from "react-native-youtube-iframe";
import * as ScreenOrientation from "expo-screen-orientation";

import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "react-navigation-hooks";

import { Container, BackButton, Back, VideoArea } from "./styles";

const Taste = () => {
  const [full, setFull] = useState(false);

  async function orientation(e) {
    if (e === "playing") {
      setFull(true);
      await ScreenOrientation.lockAsync(
        ScreenOrientation.OrientationLock.LANDSCAPE_LEFT
      );
    } else if (e === "paused") {
      setFull(false);
      await ScreenOrientation.lockAsync(
        ScreenOrientation.OrientationLock.PORTRAIT
      );
    }
  }

  const playerRef = useRef(null);
  const [playing, setPlaying] = useState(true);

  const { navigate } = useNavigation();
  return (
    <Container full={full}>
      <BackButton
        full={full}
        onPress={() => {
          navigate("Receive");
        }}
      >
        <Ionicons name="md-arrow-round-back" size={24} color="black" />
        <Back>Back</Back>
      </BackButton>
      <VideoArea full={full}>
        <YoutubePlayer
          width="100%"
          height="90%"
          ref={playerRef}
          webViewProps="allowsFullscreenVideo"
          videoId={"KZ-aUTuobr4"}
          play={playing}
          onChangeState={(event) => orientation(event)}
          onError={(e) => console.log(e)}
          onPlaybackQualityChange={(q) => console.log(q)}
          volume={50}
          playbackRate={1}
          playerParams={{
            cc_lang_pref: "us",
            showClosedCaptions: true,
          }}
        />
      </VideoArea>
    </Container>
  );
};

export default Taste;

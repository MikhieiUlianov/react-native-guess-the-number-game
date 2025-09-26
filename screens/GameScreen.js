import {
  View,
  StyleSheet,
  Alert,
  FlatList,
  useWindowDimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Title from "../components/ui/Title";
import { useEffect, useState } from "react";
import NumberContainer from "../components/game/NumberCOntainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import GuessLogItem from "../components/game/GuessLogItem";

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minBoundary = 1;
let maxBoundary = 1;

const GameScreen = ({ userNumber, onGameOver }) => {
  const initialQuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentQuess] = useState(initialQuess);
  const [guessRounds, setGuessRounds] = useState([initialQuess]);
  const { width, height } = useWindowDimensions();

  useEffect(() => {
    if (currentGuess === userNumber) onGameOver(guessRounds.length);
  }, [currentGuess, userNumber, onGameOver]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  const nextGuessHandler = (direction) => {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "greater" && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie!", "You know that this is wrong...", [
        {
          text: "Sorry!",
          style: "cancel",
        },
      ]);
      return;
    }
    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    const newRndNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentQuess(newRndNumber);
    setGuessRounds((prev) => [newRndNumber, ...prev]);
  };

  const guessRoundsListLength = guessRounds.length;

  let content = (
    <>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionText style={styles.instructionText}>
          Higher or lower?
        </InstructionText>
        <View style={styles.screen}>
          <View style={styles.buttonsContainer}>
            <PrimaryButton
              style={styles.buttonContainer}
              onPress={nextGuessHandler.bind(this, "lower")}
            >
              <Ionicons name="md-remove" size={24} color={"white"} />
            </PrimaryButton>
            <PrimaryButton
              style={styles.buttonContainer}
              onPress={nextGuessHandler.bind(this, "greater")}
            >
              <Ionicons name="md-add" size={24} color={"white"} />
            </PrimaryButton>
          </View>
        </View>
      </Card>
    </>
  );
  if (width > 500) {
    content = (
      <>
        <View style={styles.buttonsContainerWide}>
          <PrimaryButton
            style={styles.buttonContainer}
            onPress={nextGuessHandler.bind(this, "lower")}
          >
            <Ionicons name="md-remove" size={24} color={"white"} />
          </PrimaryButton>
          <NumberContainer>{currentGuess}</NumberContainer>
          <PrimaryButton
            style={styles.buttonContainer}
            onPress={nextGuessHandler.bind(this, "greater")}
          >
            <Ionicons name="md-add" size={24} color={"white"} />
          </PrimaryButton>
        </View>
      </>
    );
  }

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      {content}
      <View style={styles.listContainer}>
        <FlatList
          data={guessRounds}
          renderItem={(itemData) => (
            <GuessLogItem
              roundsNumber={guessRoundsListLength - itemData.index}
              guess={itemData.item}
            />
          )}
          keyExtractor={(item) => item}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 12,
    alignItems: "center",
  },
  instructionText: {
    marginBottom: 12,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
  listContainer: {
    flex: 1,
    padding: 16,
  },
  buttonsContainerWide: {
    flexDirection: "row",
    alignItems: "center",
  },
});
export default GameScreen;

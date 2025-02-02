import { SafeAreaView, StyleSheet, Text } from "react-native"

function App() {
    return(
        <SafeAreaView style={style.App}>
            <Text>Calculadora</Text>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    App: {
        backgroundColor:"#fff",
        flex: 1,
        justifyContent: "center",
        alignItems:"center",
        padding:20
    }
})

export default App
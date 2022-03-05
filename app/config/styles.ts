import { StyleSheet} from 'react-native';

export const styleLanding = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:"#24a7ff",
      alignItems: 'center',
    },
    
    textMain: {
      fontWeight: "900",
      fontSize: 60,
      color: "white",
    },
    textSubTitle: {
      fontWeight: "500",
      fontSize: 20,
      color: "white",
      paddingRight: "40%",
    },
    buttonBottom:{
        position:"absolute",
        bottom: 40,
        width: "80%",
        height: 70,
        backgroundColor: "black",
        borderRadius: 12,
        alignItems: 'center',
      justifyContent: 'center',
    },
    textButton:{
      fontSize: 28,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'white',
    },
    containerText:{
        position: "absolute",
        top: "20%",
        paddingLeft:"4%"
    }
  });
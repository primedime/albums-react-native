// import libraries for makign a component
import React from 'react';
import { Text, SafeAreaView } from 'react-native';

// make a component
const Header = (props) => {
    const { textStyle, viewStyle } = styles;

     return (
         <SafeAreaView style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
         </SafeAreaView>
     );
};


const styles = {
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        fontSize: 20,
        paddingBottom: 10
    }
};

// make the component available to other parts of the app
export default Header;

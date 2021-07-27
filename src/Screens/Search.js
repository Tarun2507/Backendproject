import React ,{useState}from "react";
import {
    View, Text,StyleSheet,FlatList, Animated,Image,TouchableOpacity
} from "react-native";
import { SearchBar } from 'react-native-elements'
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS} from '../Constants/theme'
import EStyleSheet from 'react-native-extended-stylesheet';
import theme from '../Constants/theme'
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.lightGray4
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 1,
    }
})
const renderProducts = () => {
 var filteredProducts =  [
        
        {
            name: 'George Tshirt',
            images: [require('../../assets/images/tshirt.jpg')],
            price: '$9.99',
            type : "Clothing"
        },
        {
            price: '$9.99',
            type : "Clothing",
            name: 'George Tshirt',
            images : [require('../../assets/images/tshirt2.jpg')],
        }]
       const Product = ({item, index}) => {
            // STATE
            const [bookmarked, setBookmarked] = useState(null);
            const [quantity, setQuantity] = useState(0);
            const [addToCartContHeight, setAddToCartContHeight] = useState(new Animated.Value(EStyleSheet.value('30rem')));
            //console.log(theme)
            return (
                <View
                    style={{
                        flex: 1,
                        height: EStyleSheet.value('260rem'),
                        borderWidth: 0.5,
                        borderColor: 'lightgrey',
                        justifyContent: 'space-between',
                        padding: theme.appDims.boundary,
                    }}>
                    <Image source={item.images[0]} style={{height: EStyleSheet.value('150rem'), aspectRatio: 2, resizeMode: 'contain', alignSelf: 'center'}} />
                   
                    <View >
                        <Text style={{fontSize: EStyleSheet.value('16rem'), fontWeight: '600'}}>{item.price}</Text>
                        <Text style={{fontSize: EStyleSheet.value('14rem'), fontWeight: '400', color: 'grey'}}>{item.name}</Text>
                    </View>
                    <View style= {{display : 'flex' ,marginBottom : 20,justifyContent : 'center', alignItems : 'center'}}>
                        <TouchableOpacity  style={{
                        display : 'flex',
                        alignItems : 'center',
                        justifyContent : 'center',
                       height : EStyleSheet.value('40rem'),
                       width : '40%',
                       backgroundColor : '#f0c14b',
                       borderRadius : EStyleSheet.value('10rem')
    
                    }}  ><Text>Add to Cart</Text></TouchableOpacity>
                    </View>
                    
                </View>
            );
        };
    return (
        <SafeAreaView>
        <FlatList
        data={filteredProducts}
        renderItem={({item, index}) => <Product item={item} index={index} />}
        numColumns={1}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
    />
</SafeAreaView>
    )
}
const Search = () => {
    const [searchText, setSearchText] = React.useState("");
    const[showProds,setShowProds] = React.useState(false)
    function enableItems () {
        setShowProds(true)
    }
    return (
        <SafeAreaView style={styles.container}>
        <SearchBar onSubmitEditing = {()=>enableItems()}
            placeholder="Type Here..."
            onChangeText={(text) => setSearchText(text)}
            value={searchText}
            containerStyle={{
                backgroundColor: COLORS.lightGray4,
                borderBottomColor: 'transparent',
                borderTopColor: 'transparent'
            }}
            inputContainerStyle={{
                backgroundColor: COLORS.secondary,
                borderRadius: 25
            }}
            searchIcon={{
                color: COLORS.black,
                style: { marginLeft: 10 }
            }}
        // inputStyle={{ backgroundColor: COLORS.lightGray4 }}

        />

     {showProds? renderProducts() : null} 

    </SafeAreaView>
    )
}

export default Search;
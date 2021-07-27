/* Libraries */
import React, { Component, useState } from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    FlatList,
    SafeAreaView,
    Platform,
    ScrollView,
    Dimensions,
    TextInput,
    ImageBackground,
    StatusBar,
    Animated,
    Button,
} from 'react-native';
import { COLORS, SIZES, FONTS } from '../../Constants/theme'
import EStyleSheet from 'react-native-extended-stylesheet';
var cartItems = [{
    qty: 1,
    name: "George Tshirt",
    total: 7,

},{
    qty: 1,
    name: "Umbrella",
    total: 24,

}]
const renderItem = ({ item }) => (
    <View style={{
        flexDirection: 'row',
        paddingVertical: SIZES.padding,
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomColor: COLORS.secondary,
        borderBottomWidth: 1
    }}>
        <View style={{ flexDirection: 'row',display :'flex',justifyContent : 'space-between',alignItems :'center'}}>
            <View style={{ backgroundColor: COLORS.secondary, width: 30, height: 30, alignItems: 'center', justifyContent: 'center', borderRadius: SIZES.radius }}>
                <Text style={{ fontSize: SIZES.body3 }}>
                    {item.qty}
                </Text>
            </View>

        </View>
        <View style={{ display : 'flex',justifyContent : 'flex-end',paddingHorizontal: SIZES.padding * 1.5 }}>

<Text style={{ fontSize: SIZES.body2 }}>
    {item.name}
</Text>

{/* Calories */}

</View>


        <Text style={{ fontSize: SIZES.body2, fontWeight: 'bold' }}>
            ${item.total}
        </Text>
    </View >
)
const Cart = ({navigation}) => {
    function onPlaceOrder() {
        alert('Order successfully placed')
        //navigation.navigate('Home')
    }
    return (
        <View style = {{display :'flex',flex:1,justifyContent :'center',flexDirection :'column',paddingTop : 20}}>
            <View style = {{display :'flex',width :'100%',justifyContent :'center',alignItems :'center'}}>
        <Text style = {{fontSize : 30}} >Cart Items</Text>
        </View>
        <FlatList
            data={cartItems}
            renderItem={renderItem}
            contentContainerStyle={{
                
                flexGrow : 0
                // paddingHorizontal: SIZES.padding * 2,
                // paddingBottom: 80,
                
            }}
            showsVerticalScrollIndicator={false}
        />
        <View>
                        <View style={{ marginBottom: 5, display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ ...FONTS.body3, }}>
                                Sub Total:
                            </Text>
                            <Text style={{ ...FONTS.body3, fontWeight: 'bold' }}>
                                $31
                            </Text>
                        </View>

                        <View style={{ marginBottom: 5, display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ ...FONTS.body3, }}>
                                Service Fee:
                            </Text>
                            <Text style={{ ...FONTS.body3, fontWeight: 'bold' }}>
                                $2
                            </Text>
                        </View>

                        <View style={{ marginBottom: 5, display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ ...FONTS.body3, }}>
                                Delivary Fee:
                            </Text>
                            <Text style={{ ...FONTS.body3, fontWeight: 'bold' }}>
                                $4
                            </Text>
                        </View>

                        <View style={{ marginBottom: 5, display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ ...FONTS.body3, }}>
                                HST @13%:
                            </Text>
                            <Text style={{ ...FONTS.body3, fontWeight: 'bold' }}>
                                $4.81
                            </Text>
                        </View>

                        <View style={{ marginBottom: 5, display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ ...FONTS.body3, }}>
                                Order Total:
                            </Text>
                            <Text style={{ ...FONTS.body3, fontWeight: 'bold' }}>
                                $41.81
                            </Text>
                        </View>

                    </View>
          <View style= {{display : 'flex' ,marginBottom : 20,justifyContent : 'center', alignItems : 'center'}}>
                    <TouchableOpacity onPress = {()=> onPlaceOrder()}  style={{
                    display : 'flex',
                    alignItems : 'center',
                    justifyContent : 'center',
                   height : EStyleSheet.value('40rem'),
                   width : '40%',
                   backgroundColor : '#f0c14b',
                   borderRadius : EStyleSheet.value('10rem')

                }}  ><Text>Place order</Text></TouchableOpacity>
                </View>
        </View>
    )
}
export default Cart
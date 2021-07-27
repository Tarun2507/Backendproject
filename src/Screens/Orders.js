import React from 'react'
import {
    View,
    Text,
    FlatList,
} from 'react-native'
import { COLORS, SIZES, FONTS } from '../Constants/theme'
const Orders = ()  => {
    var orders = [{
        qty: 2,
        status: "Placed",
        total: 22.97,
    
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
            <View>

                <Text style={{ color: COLORS.darkgray }}>
                    {item.qty} items -- {item.total}
                </Text>
                <Text style={getStatusTagStyles('placed')}>
                    {item.status}
                </Text>
            </View>
        </View >
    )

    return (
        <View>
        <View style = {{display :'flex',justifyContent :'center',alignItems:'center'}}>
            <Text style={{ ...FONTS.body1, fontSize: 25, fontWeight: '900', paddingTop : 40,display : 'flex',justifyContent :'center',alignItems:'center' }}>Orders</Text>
            </View>
            <FlatList
                data={orders}
                renderItem={renderItem}
                contentContainerStyle={{
                    // paddingHorizontal: SIZES.padding * 2,
                    paddingBottom: 80,
                }}
                showsVerticalScrollIndicator={false}
            />
       
        </View>

    )
    function getStatusTagStyles(status) {
        var style = {
            color: COLORS.darkgray,
            fontWeight: 'bold'
        }
        switch (status) {
            case 'placed':
                style.color = 'blue'
                break;
            case 'preparing':
                style.color = 'orange'
                break;
            case 'onTheWay':
                style.color = 'brown'
                break;
            case 'delivered':
                style.color = 'darkgreen'
                break;
        }
        return style
    }
}
export default Orders
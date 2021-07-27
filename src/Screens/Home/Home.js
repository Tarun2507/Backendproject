/* Libraries */
import React, {Component, useState, useEffect} from 'react';
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
import axios from 'axios';
import EStyleSheet from 'react-native-extended-stylesheet';
import images from '../../../assets/images'
// ICONS IMPORT
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// THEME IMPORT

// HELPER IMPORT
import helper from '../../Constants/helper';
import theme from '../../Constants/theme'
// CONSTANTS
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: ['New arrivals', 'Clothes', 'Shoes', 'Handbags', 'Trends'],
            selectedCatogoryIndex: 0,
            products: [],
            filteredProducts : []
        };
    }

    static navigationOptions = {
        headerShown: false,
    };


    // LIFECYCLE METHODS
    componentDidMount = () => {
       this.getItems()
      
    };
    getItems = () => {
        var data;
        var filteredarray
        axios.get("http://10.0.2.2:4000/items")
            .then(response => {
                data = response.data
                console.log('getting data from axios', response.data);
                 filteredarray =  response.data.filter(product => 
   
                    product.type == "NewArrival"
                )
                this.setState({products : response.data})
              this.setState({filteredProducts : filteredarray})
            })
            .catch(error => {
                console.log(error);
            });
    
       /* React.useEffect(() => {
            axios.get(API_BASE_URL + `/api/restaurants`)
                .then(res => {
                    setRestaurants(res.data)
                    setRestaurantsDataCopy(res.data)
                })
        }, [])*/
    }
    // END LIFECYCLE METHODS

    // UTILITY FUNCTIONS
    // END UTILITY FUNCTIONS

    // FUNCTIONAL COMPONENTS
    Header = () => {
        const {navigation} = this.props;
        function addTocart() {
            navigation.navigate('Cart')
        }
        return (
            <View style={{...styles.header}}>
                  <Image
        style={{height : 25, width : 25}}
        source={require('../../../assets/images/myntra.png')}
      />
                <Text style={{fontSize: EStyleSheet.value('16rem'), fontWeight: '600'}}>Shopping</Text>
                <FontAwesome onPress = {()=>addTocart()} name={'shopping-cart'} size={EStyleSheet.value('25rem')} color={'black'} />
            </View>
        );
    };

    Separator = () => {
        return <View style={{...styles.separator}} />;
    };

    Product = ({item, index}) => {
        // STATE
        const [bookmarked, setBookmarked] = useState(null);
        const [quantity, setQuantity] = useState(0);
        const [addToCartContHeight, setAddToCartContHeight] = useState(new Animated.Value(EStyleSheet.value('30rem')));
        console.log(theme)

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
                <Image source={images[item.imagename]} style={{height: EStyleSheet.value('150rem'), aspectRatio: 2, resizeMode: 'contain', alignSelf: 'center'}} />
               
                <View >
                    <Text style={{fontSize: EStyleSheet.value('16rem'), fontWeight: '600'}}>${item.price}</Text>
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
    // END FUNCTIONAL COMPONENTS

    // RENDERING FUNCTIONS

    render() {
        const {Header, Separator, Product} = this;
        var that = this;
       /* var filteredarray =  that.state.products.filter(product => 
   
            product.type == "Clothing"
        )
       this.setState({filteredProducts : filteredarray})*/
        //console.log(states)
        function categoryPressed(index) {
            var newArray = []
            if(index == 0) {
               // console.log(this.state)
                 newArray =  that.state.products.filter(product => 
  
                    product.type == "NewArrival"
                )
            }
            if(index == 1) {
                // console.log(this.state)
                  newArray =  that.state.products.filter(product => 
   
                     product.type == "Clothing"
                 )
             }
             if(index == 1) {
                // console.log(this.state)
                  newArray =  that.state.products.filter(product => 
   
                     product.type == "Clothing"
                 )
             }
             if(index == 2) {
                // console.log(this.state)
                  newArray =  that.state.products.filter(product => 
   
                     product.type == "Shoes"
                 )
             }
             if(index == 3) {
                // console.log(this.state)
                  newArray =  that.state.products.filter(product => 
   
                     product.type == "Handbags"
                 )
             }

           that.setState({filteredProducts : newArray})
        }
        return (
            <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
                <Header />
                <Separator />

                {/* CATEGORIES */}
                <View>
                    <ScrollView
                        horizontal
                        contentContainerStyle={{paddingHorizontal: theme.appDims.boundary, paddingVertical: EStyleSheet.value('10rem')}}
                        showsHorizontalScrollIndicator={false}>
                        {this.state.categories.map((item, index) => {
                            return (
                                <TouchableOpacity
                                    key={index.toString()}
                                    style={{marginRight: EStyleSheet.value('16rem')}}
                                    onPress={() => categoryPressed(index)}>
                                    <Text
                                        style={{
                                            fontSize: EStyleSheet.value('14rem'),
                                            fontWeight: this.state.selectedCatogoryIndex == index ? '600' : '400',
                                            color: this.state.selectedCatogoryIndex == index ? 'black' : 'grey',
                                        }}>
                                        {item}
                                    </Text>
                                </TouchableOpacity>
                            );
                        })}
                    </ScrollView>
                    <Separator />
                </View>

                {/* PRODUCTS */}
                <FlatList
                    data={this.state.filteredProducts}
                    renderItem={({item, index}) => <Product item={item} index={index} />}
                    numColumns={1}
                    keyExtractor={(item, index) => index.toString()}
                    showsVerticalScrollIndicator={false}
                />
            </SafeAreaView>
        );
    }
    // END RENDERING FUNCTIONS
}

const styles = EStyleSheet.create({
    header: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: theme.appDims.boundary,
    },
    separator: {
        width: '100%',
        height: '0.5rem',
        backgroundColor: 'lightgrey',
    },
    addToCartLabels: {
        fontSize: '20rem',
        fontWeight: 'bold',
        color: 'white',
    },
});

export default Home;

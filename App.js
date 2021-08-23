import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
  ImageBackground,
  Slider,
} from 'react-native';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import SwitchSelector from 'react-native-switch-selector';
const trangthai = [
  { label: 'Cần Đi Khách', value: '0' },
  { label: 'Có Sân Nhà', value: '1' },
  { label: 'Tất Cả', value: '2' },
];
const trinhdo = [
  { label: 'Yếu', value: '0' },
  { label: 'Trung Bình Yếu', value: '1' },
  { label: 'Trung Bình', value: '2' },
  { label: 'Khá', value: '3' },
  { label: 'Giỏi', value: '3' },
];
const options = [
  { label: '5 người', value: '0' },
  { label: '7 người', value: '1' },
  { label: '11 người', value: '2' },
  { label: 'Tất cả', value: '3' },
];
const options2 = [
  { label: 'Cỏ nhân tạo', value: '0' },
  { label: 'Cỏ thật', value: '1' },
  { label: 'Sân đất', value: '2' },
  { label: 'Tất cả', value: '3' },
];
const options3 = [
  { label: '300', value: '0' },
  { label: '500', value: '1' },
  { label: '700', value: '2' },
];
function TeamScreen() {
  return (
    <ScrollView style={styles.scroll}>
      <View style={styles.doicontainer}>
         <View style={styles.buttonthemmoi}>
         <Text style={{fontSize:20 ,backgroundColor:'#00BB00',textAlign:'center'}}>FC D13CNPM6</Text>
           <Text style={{fontSize:20 , opacity:0.5,backgroundColor:'#DDDDDD'}}>Thành Viên Đội : </Text>
           <Button title="Thêm Thành Viên" color='#00BB00'
           />
         </View>
         <View style={styles.danhsach}>
           <Text style={{fontSize:20 , opacity:0.5,backgroundColor:'#DDDDDD'}}>Danh Sách Thành Viên : </Text>
           <View style={styles.list}>
             <Image source={require('./anhdaidien.png')}
             style={{width:70,height:70,margin:5}} />
             <View style={styles.thongtin}>
               <Text style={{fontSize:15}}>Nguyễn Việt Hoàng</Text>
               <Text style={{fontSize:15}}>NguyenVietHoang2400@2gmail.com</Text>
             </View>
           </View>
           <View style={styles.list}>
             <Image source={require('./anhdaidien.png')}
             style={{width:70,height:70,margin:5}} />
             <View style={styles.thongtin}>
               <Text style={{fontSize:15}}>Tạ Văn Hùng</Text>
               <Text style={{fontSize:15}}>1111223@gmail.com</Text>
             </View>
           </View>
           <View style={styles.list}>
             <Image source={require('./anhdaidien.png')}
             style={{width:70,height:70,margin:5}} />
             <View style={styles.thongtin}>
               <Text style={{fontSize:15}}>Mai Trung Thu</Text>
               <Text style={{fontSize:15}}>1111223@gmail.com</Text>
             </View>
           </View>
         </View>
      </View>
      <View style={styles.lichthidau}>
       <View>
         <View style={styles.daucong}>
           <Text style={{fontSize:20 , opacity:0.5,backgroundColor:'#DDDDDD'}}>Thông Tin Lịch Thi Đấu:</Text>
         </View>
         <View style={styles.thongtinthidau}>
           <Text style={{marginLeft:50,fontSize:20}}>Thời Gian :</Text>
           <Text style={{marginHorizontal:100,fontSize:20}}>Sân : </Text>
         </View>
         <View style={styles.thongtinthidau}>
           <Text style={{marginLeft:50,fontSize:20}}>1/11/2020</Text>
           <Text style={{marginHorizontal:70,fontSize:20}}>  Phạm Văn Đồng</Text>
         </View>
         <View style={styles.thongtinthidau}>
           <Text style={{marginLeft:50,fontSize:20}}>12/11/2020</Text>
           <Text style={{marginHorizontal:70,fontSize:20}}>Cổ Nhuế</Text>
         </View>
         <View style={styles.thongtinthidau}>
           <Text style={{marginLeft:50,fontSize:20}}>14/11/2020</Text>
           <Text style={{marginHorizontal:70,fontSize:20}}>Học Viện Cảnh Sát</Text>
         </View>
         <View style={styles.thongtinthidau}>
           <Text style={{marginLeft:50,fontSize:20}}>16/11/2020</Text>
           <Text style={{marginHorizontal:70,fontSize:20}}>Hoàng Quốc Việt</Text>
         </View>
         
       </View>
      
      </View>
    </ScrollView>
   );
}

function LoginScreen() {
  return(
    <View style={styles.container}>
                <View style={styles.logocontainer}>
                    <View style={styles.logocontainer}>
                        <Image style={styles.imagelogo}
                            source={require('./Images/quabong.png')}>
                        </Image>
                    </View>
                    <View style={styles.infocontainer}>
                        <TextInput style={styles.input}
                            placeholder="Email/Username"
                            placeholderTextColor='black'
                            keyboardType='email-address'
                            returnKeyType='next'
                            autoCorrect={false}
                        />
                        <TextInput style={styles.input}
                            placeholder="Pass"
                            placeholderTextColor='black'
                            returnKeyType='go'
                            secureTextEntry
                            autoCorrect={false}
                        />
                        <Text>Quên Mật Khẩu?</Text>
                        <TouchableOpacity style={styles.butonlogin}>
                            <Text style={styles.buttontext}>Đăng Nhập</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                    <View style={styles.footder}>
                        <Text style={styles.fdtittle}>Hoặc</Text>
                        <View style={styles.logof}>
                        <Image style={styles.fdlogo} source={require('./Images/fb.png')}>
                        </Image>
                        <Image style={styles.fdlogo1} source={require('./Images/google.png')}>
                        </Image>
                        </View>
                    </View>
    </View>
);
}


function DetailsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Details!</Text>
    </View>
  );
}

function HomeScreen({ navigation }) {
  return (
    <ScrollView style={styles.containertimdoi}>
      <View style={{margin:20}}>
      <View style={styles.timkiem}>
        <FontAwesome name='search-plus' size={30} />
        <Text style={{marginTop:5,opacity:0.8,color:'gray',marginLeft:10}}>Nhập Tên Hoặc Địa Chỉ....</Text>
      </View>
      <View style={{backgroundColor:'white',marginTop:10}}>
        <Text style={{fontSize:20,fontWeight:'bold',marginLeft:5,paddingBottom:10}}>Trạng Thái</Text>
        <SwitchSelector
          options={trangthai}
          hasPadding="true"
          initial={0}
          fontSize={12}
          textColor={'black'}
          selectedColor={'#fff'}
          buttonColor={'green'}
          backgroundColor={'#fff'}
          borderColor={'green'}
          onPress={value => console.log(`Call onPress with value: ${value}`)}
        />
      </View>
      <View style={{flexDirection:'row',backgroundColor:'white',marginTop:10}}>
        <Text style={{fontSize:20,fontWeight:'bold'}}>Thời Gian </Text>
        <Text style={{textAlign:'left',marginLeft:200,marginTop:5}}>10/11/2020</Text>
      </View>   
      <View style={{backgroundColor:'white',marginTop:10}}>
        <Text style={{textAlign:'center',fontSize:20,fontWeight:'bold',paddingBottom:10}}>Trình Độ</Text>
        <SwitchSelector
          options={trinhdo}
          hasPadding="true"
          initial={0}
          fontSize={12}
          textColor={'black'}
          selectedColor={'#fff'}
          buttonColor={'green'}
          backgroundColor={'#fff'}
          borderColor={'green'}
          onPress={value => console.log(`Call onPress with value: ${value}`)}
        />
      </View>   
      <View style={{marginTop:20}}>
        <Button color='#00BB00'
        title='Tìm Kiếm'
        />
      </View> 
      <View style={{marginTop:20,backgroundColor:'white'}}>
        <View style={{margin:10}}>
        <View>
          <View style={{flexDirection:'row'}}>
          <Text style={{fontWeight:'bold'}}>FC POLOBI Trẻ</Text>
          <TouchableOpacity onPress={() => { Alert.alert('Bắt Đối Thành Công!!', 'Vui lòng chờ đội bạn xác nhận!');}}>  
           <Text style={{borderWidth:2,marginLeft:170,width:70,height:20,textAlign:'center',borderRadius:5,fontSize:15,fontWeight:'bold',backgroundColor:'#00FF66'}}>Bắt Đối</Text>
          </TouchableOpacity>
          </View>
          <Text style={{fontWeight:'bold',color:'#FF3333'}}>Cần Đi Khách</Text>
        </View>
        <View style={{flexDirection:'row'}}>
          <FontAwesome name='history' size={15}/>
          <Text style={{marginLeft:10}}>Thời Gian</Text>
        </View>
        <View style={{flexDirection:'row'}}>
          <FontAwesome name='map' size={15}/>
          <Text style={{marginLeft:10}}>Khu Vực</Text>
          <Text style={{marginLeft:200}}>Ngã Tư Sở</Text>
        
        </View>
        <View style={{flexDirection:'row'}}>
          <FontAwesome name='balance-scale' size={15}/>
          <Text style={{marginLeft:10}}>Trình Độ</Text>
          <Text style={{marginLeft:200}}>Trung Bình</Text>
        </View>
      </View>
      </View>
      <View style={{marginTop:20,backgroundColor:'white'}}>
        <View style={{margin:10}}>
        <View>
          <Text style={{fontWeight:'bold'}}>Nguyễn Việt Hoàng</Text>
          <Text style={{fontWeight:'bold',color:'blue'}}>Có Sân Nhà</Text>
        </View>
        <View style={{flexDirection:'row'}}>
          <FontAwesome name='history' size={18}/>
          <Text style={{marginLeft:10,}}>Thời Gian</Text>
        </View>
        <View style={{flexDirection:'row'}}>
          <FontAwesome name='map' size={18}/>
          <Text style={{marginLeft:10}}>Khu Vực</Text>
          <Text style={{marginLeft:200}}>Đông Anh</Text>
        
        </View>
        <View style={{flexDirection:'row'}}>
          <FontAwesome name='balance-scale' size={18}/>
          <Text style={{marginLeft:10}}>Trình Độ</Text>
          <Text style={{marginLeft:200}}>Giỏi</Text>
        </View>
      </View>
      </View>
      <View style={{marginTop:20,backgroundColor:'white'}}>
        <View style={{margin:10}}>
        <View>
          <Text style={{fontWeight:'bold'}}>FC D13CNPM6</Text>
          <Text style={{fontWeight:'bold',color:'#00BB00'}}>Tất Cả</Text>
        </View>
        <View style={{flexDirection:'row'}}>
          <FontAwesome name='history' size={15}/>
          <Text style={{marginLeft:10}}>Thời Gian</Text>
        </View>
        <View style={{flexDirection:'row'}}>
          <FontAwesome name='map' size={15}/>
          <Text style={{marginLeft:10}}>Khu Vực</Text>
          <Text style={{marginLeft:170}}>Hoàng Quốc Việt</Text>
        
        </View>
        <View style={{flexDirection:'row'}}>
          <FontAwesome name='balance-scale' size={15}/>
          <Text style={{marginLeft:10}}>Trình Độ</Text>
          <Text style={{marginLeft:200}}>Trung Bình</Text>
        </View>
      </View>
      </View>
      <View style={{marginTop:20,backgroundColor:'white'}}>
        <View style={{margin:10}}>
        <View>
          <Text style={{fontWeight:'bold'}}>FC POLOBI Trẻ</Text>
          <Text style={{fontWeight:'bold',color:'#FF3333'}}>Cần Đi Khách</Text>
        </View>
        <View style={{flexDirection:'row'}}>
          <FontAwesome name='history' size={20}/>
          <Text style={{marginTop:5,marginLeft:10}}>Thời Gian</Text>
        </View>
        <View style={{flexDirection:'row'}}>
          <FontAwesome name='map' size={20}/>
          <Text style={{marginTop:5,marginLeft:10}}>Khu Vực</Text>
          <Text style={{marginTop:5,marginLeft:200}}>Ngã Tư Sở</Text>
        
        </View>
        <View style={{flexDirection:'row'}}>
          <FontAwesome name='balance-scale' size={20}/>
          <Text style={{marginTop:5,marginLeft:10}}>Trình Độ</Text>
          <Text style={{marginTop:5,marginLeft:200}}>Trung Bình</Text>
        </View>
      </View>
      </View>
      <View style={{marginTop:20,backgroundColor:'white'}}>
        <View style={{margin:10}}>
        <View>
          <Text style={{fontWeight:'bold'}}>FC POLOBI Trẻ</Text>
          <Text style={{fontWeight:'bold',color:'#FF3333'}}>Cần Đi Khách</Text>
        </View>
        <View style={{flexDirection:'row'}}>
          <FontAwesome name='history' size={20}/>
          <Text style={{marginTop:5,marginLeft:10}}>Thời Gian</Text>
        </View>
        <View style={{flexDirection:'row'}}>
          <FontAwesome name='map' size={20}/>
          <Text style={{marginTop:5,marginLeft:10}}>Khu Vực</Text>
          <Text style={{marginTop:5,marginLeft:200}}>Ngã Tư Sở</Text>
        
        </View>
        <View style={{flexDirection:'row'}}>
          <FontAwesome name='balance-scale' size={20}/>
          <Text style={{marginTop:5,marginLeft:10}}>Trình Độ</Text>
          <Text style={{marginTop:5,marginLeft:200}}>Trung Bình</Text>
        </View>
      </View>
      </View>
    </View>
    </ScrollView>
  );
}
function thongtinScreen({ navigation }) {
  return (
    <ScrollView style={{flex:1,backgroundColor:'#DDDDDD'}}>
      <View style={{margin:20}}>
        <View style={{backgroundColor:'white'}}>
          <View style={{alignItems:'center',borderBottomWidth:1}}>
          <ImageBackground
           source={require('./anhdaidien.png')}
           style={{width:150,height:150}} >
           <Text style={{marginLeft:38,marginTop:120,backgroundColor:'black',color:'white',width:80,height:20,textAlign:'center',opacity:0.7}}>Thay Đổi</Text>
           </ImageBackground>
          <Text style={{fontSize:20,marginTop:5,marginBottom:5,fontWeight:'bold'}}>Hoàng</Text>
          </View>
          <View style={{margin:10,flexDirection:'row'}}>
            <FontAwesome name='envelope' size={30}/>
            <Text style={{marginLeft:10,marginTop:5,fontWeight:'bold'}}>Email</Text>
            <Text style={{marginLeft:70,marginTop:5}}>nguyenviethoang2400@gmail.com</Text>
          </View>
          <View style={{margin:10,flexDirection:'row'}}>
            <FontAwesome name='phone' size={30}/>
            <Text style={{marginLeft:10,marginTop:5,fontWeight:'bold'}}>Điện Thoại</Text>
            <Text style={{marginLeft:40,marginTop:5}}>0968999999</Text>
          </View>
          <View style={{margin:10,flexDirection:'row'}}>
            <FontAwesome name='map' size={30}/>
            <Text style={{marginLeft:10,marginTop:5,fontWeight:'bold'}}>Địa Chỉ</Text>
            <Text style={{marginLeft:60,marginTop:5}}>Thành Phố HN-VN</Text>
          </View>
        </View>
        <View style={{marginTop:10}}>
          <Text style={{backgroundColor:'#33CC66',marginTop:10,fontSize:15}} >Các FC Đang Tham Gia</Text>
        <View style={{margin:10,flexDirection:'row',backgroundColor:'white'}}>
          <View>
          <FontAwesome name='fort-awesome' size={40}/>
          </View>
          <View style={{flexDirection:'column',marginTop:5,marginLeft:10,}}>
          <Text>FC Hà Nội</Text>
          <Text>Đội Trưởng</Text>
          </View>
          <View style={{marginTop:70,marginLeft:10}}>
          <Button title="Tìm Kiếm Đội" color='#00BB00' />
          </View>
          </View>
        </View>
        <View style={{marginTop:10}}>
          <Text style={{backgroundColor:'#33CC66',marginTop:10,fontSize:15}} >Tạo Đội Bóng</Text>
        <View style={{margin:10,flexDirection:'column',backgroundColor:'white'}}>
          <View style={{alignItems:'center'}}>
          <FontAwesome name='home' size={50}/>
          </View>
          <View style={{flexDirection:'column',margin:10}}>
          <Text>Tạo đội bóng của riêng bạn để bắt đầu tìm kiếm đối tác</Text>
          </View>
          <View>
          <Button title="Tạo Đội Bóng" color='#00BB00' />
          </View>
          </View>
        </View>
        <View style={{marginTop:10}}>
          <Text style={{backgroundColor:'#33CC66',marginTop:10,fontSize:15}} >Ảnh Của Bạn</Text>
        <View style={{margin:10,backgroundColor:'white'}}>
        <View style={{flexDirection:'row',marginBottom:10}}>
          <Image source={require('./anh1.png')} style={{width:100,height:100,marginHorizontal:5}}/>
          <Image source={require('./anh2.png')} style={{width:100,height:100}}/>
          <Image source={require('./anh3.png')} style={{width:100,height:100,marginHorizontal:5}}/>
        </View>
        <View>
          <Button title="Thêm Ảnh" color='#00BB00' />
          </View>
        </View>
        </View>
     
    </View>
    </ScrollView>
  );
}
function TimSanScreen({ navigation }) { 
    return (
      <View style={styles.container113}>
        <Text style={styles.instructions}>
          Mức giá
        </Text>
        <SwitchSelector
          style={{width:300}}
          options={options3}
          hasPadding="true"
          initial={0}
          fontSize={12}
          textColor={'black'}
          selectedColor={'#fff'}
          buttonColor={'green'}
          backgroundColor={'#fff'}
          borderColor={'green'}
          onPress={value => console.log(`Call onPress with value: ${value}`)}
        />
        <View style={styles.container113}>
        <Text style={styles.instructions}>
          Số người
        </Text>
        <SwitchSelector
          style={{width:300}}
          options={options}
          hasPadding="true"
          initial={0}
          fontSize={12}
          textColor={'black'}
          selectedColor={'#fff'}
          buttonColor={'green'}
          backgroundColor={'#fff'}
          borderColor={'green'}
          onPress={value => console.log(`Call onPress with value: ${value}`)}
        />
      </View>
      <View style={styles.container113}>
      <Text style={styles.instructions}>
          Mặt sân
        </Text> 
        <SwitchSelector
          style={{width:300}}
          options={options2}
          hasPadding="true"
          initial={0}
          fontSize={12}
          textColor={'black'}
          selectedColor={'#fff'}
          buttonColor={'green'}
          backgroundColor={'#fff'}
          borderColor={'green'}
          onPress={value => console.log(`Call onPress with value: ${value}`)}
        />
      </View>
      <View >
        <Button color='#00BB00'
        title='Tìm Kiếm'
        />
      </View> 
      </View>    
    );
}
const TimSanStack = createStackNavigator();

function TimSanStackScreen() {
  return (
    <TimSanStack.Navigator>
      <TimSanStack.Screen name="Tìm Sân" component={TimSanScreen} />
    </TimSanStack.Navigator>
  );
}
const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Tìm Đối" component={HomeScreen} />
    </HomeStack.Navigator>
  );
}
const LoginStack = createStackNavigator();

function LoginStackScreen() {
  return (
    <LoginStack.Navigator>
      <LoginStack.Screen name="Đăng Nhập" component={LoginScreen} />
    </LoginStack.Navigator>
  );
}
const TeamStack = createStackNavigator();

function TeamStackScreen() {
  return (
    <TeamStack.Navigator>
      <TeamStack.Screen name="Đội" component={TeamScreen} />
    </TeamStack.Navigator>
  );
}
const thongtinStack = createStackNavigator();

function thongtinStackScreen() {
  return (
    <thongtinStack.Navigator>
      <thongtinStack.Screen name="Thông Tin" component={thongtinScreen} />
    </thongtinStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
      tabBarOptions={{
        labelStyle:{
          fontSize:10,
        },
        activeTintColor:'black',
        activeBackgroundColor:'#00BB00',
      }}
      >
        <Tab.Screen name="Home"component={HomeStackScreen} 
        options={{
          tabBarLabel:'Tìm Đối',
          tabBarIcon : ()=> <FontAwesome name='child' size={30}/>,
        }
        }
        />
         <Tab.Screen name="Tìm Sân" component={TimSanStackScreen}
        options={{
          tabBarLabel:'Tìm Sân',
          tabBarIcon : ()=> <FontAwesome name='map' size={30}/>,
        }
        } 
        />
         <Tab.Screen name="Team"component={TeamStackScreen} 
        options={{
          tabBarLabel:'Đội',
          tabBarIcon : ()=> <FontAwesome name='users' size={30}/>,
        }
        }
        />
        <Tab.Screen name="Thông Tin" component={thongtinStackScreen}
        options={{
          tabBarLabel:'Thông Tin',
          tabBarIcon : ()=> <FontAwesome name='info-circle' size={30}/>,
        }
        } 
        />
         <Tab.Screen name="Login" component={LoginStackScreen}
        options={{
          tabBarLabel:'Đăng Nhập',
          tabBarIcon : ()=> <FontAwesome name='sign-in' size={30}/>,
        }
        } 
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  scroll:{
      flex:1,
    },
  doicontainer:{
    flex:1,

  },
  lichthidau:{
    flex:1,
  },
  danhsach:{
    flexDirection:'column',
  },
  list:{
    flexDirection:'row',
  },
  thongtinthidau:{
    flexDirection:'row'
  },
  container:{
    flex:1,
    backgroundColor:'white',
    flexDirection:'column',
},
footder:{
    flex:2,
    marginTop:20,
},
logocontainer:{
    alignItems:'center',
    justifyContent:'center',
    flex:8,
},
imagelogo:{
    width:100,
    height:100,
    marginBottom:200,
},
infocontainer:{
    position:'absolute',
    left:0,
    right:0,
    bottom:0,
    height:200,
    padding:20,
},
input:{
    borderBottomWidth:2,
    height:40,
    color:'black',
    marginTop:20,
    paddingHorizontal:10,
    opacity:0.5,
},
butonlogin:{
    backgroundColor:'#06F74E',
    marginTop:10,
    height:40,
},
buttontext:{
    textAlign:'center',
    color:'white',
    fontWeight:'bold',
    fontSize:20,
    marginTop:5,
},
fdtittle:{
    textAlign:'center',
    fontSize:15,
    opacity:0.3,

},
fdlogo:{
 marginRight:15,
},
logof:{
    flexDirection:'row',
    alignItems:'center',
    marginHorizontal:155,
    marginTop:10,
    marginVertical:10,
    
},
containertimdoi: {
  flex: 1,
  backgroundColor:'#DDDDDD',

},
timkiem:{
  backgroundColor:'white',
  flexDirection:'row',
},
container113: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#F5FCFF',
},
instructions: {
  textAlign: 'center',
  color: '#333333',
  marginBottom: 5,
},
thongtin:{
  marginTop:10,
}
  });
  
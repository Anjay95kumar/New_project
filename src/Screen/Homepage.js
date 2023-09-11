


import React,{useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Dimensions,
  Image,
  StyleSheet,
  FlatList
} from 'react-native';
import UploadImage from '../Component/UploadImage';
import { useDispatch } from 'react-redux';
import { ImageData } from '../Redux/Slices';



const DeviceHeight = Dimensions.get('window').height;
const DeviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor:"#D9D9D9"
  },
  pageTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    alignSelf: 'center',
  },
  section: {
    gap: 15,
  },
  inputContainer: {},
  inputLabel: {
    fontSize: 16,
    fontWeight: '500',
    color: 'black',
  },
  inputField: {
    borderWidth: 1,
    height: 40,
    padding: 10,
  },
  imageContainer: {
    height: DeviceHeight / 2.7,
    // backgroundColor: 'red',
  },
  image: {
    height: 100,
    width: 100,
  },
  uploadButton: {
    height: DeviceHeight / 16,
    width: DeviceWidth / 1.4,
    alignSelf: 'center',
    backgroundColor: '#0D0F35',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
  },
  galleryButton: {
    height: DeviceHeight / 18,
    width: DeviceWidth / 1.7,
    alignSelf: 'center',
    backgroundColor: '#BE2829',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const Homepage = (props) => {
const dispatch = useDispatch();
  const [imageSource, setSelectedImage] = useState([]);
  
  const currentDate = new Date().toLocaleDateString();
  const sendImage =()=>{
dispatch(ImageData(imageSource))
props.navigation.navigate("Gallary")
  }


const HandleDelete =(i)=>{
const filterItem = imageSource.filter((val)=>{
  return val!==i
})
setSelectedImage(filterItem)
}
  
  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Event Detail</Text>
      <View style={styles.section}>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Date</Text>
          <TextInput
            placeholder="useless placeholder"
            style={styles.inputField}
            value={currentDate}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Title</Text>
          <TextInput
            placeholder="useless placeholder"
            style={styles.inputField}
          />
        </View>
        <UploadImage imageSource={imageSource} setSelectedImage={setSelectedImage} /> 
        <View style={styles.imageContainer}>
       
        <FlatList data={imageSource} renderItem={({item,index})=>(
      <View style={{position:"relative"}}>
      <TouchableOpacity   style={{margin:5}}>
        <Image source={{uri:item}} style={{height: DeviceHeight/8,width: DeviceWidth/3.6,}}/>
      </TouchableOpacity>
      <TouchableOpacity style={{position:"absolute",right:10}}>
      <Text style={{fontSize:25, fontWeight:"bold", color:"red",}} onPress={()=>HandleDelete(item)}>X</Text>
      </TouchableOpacity>
      </View>


     )} numColumns={3} keyExtractor={(item) => item.id}
     showsVerticalScrollIndicator={false}
     />
   
        </View>
        <TouchableOpacity
          style={styles.uploadButton}
         onPress={sendImage}
        >
          <Text style={styles.buttonText}>Upload Event Detail</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.galleryButton}
          onPress={() => props.navigation.navigate('Gallary')}
        >
          <Text style={styles.buttonText}>Navigate</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Homepage;

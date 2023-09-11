import { View, Text,TouchableOpacity, FlatList } from 'react-native'
import React,{useState  } from 'react'
import {launchImageLibrary} from 'react-native-image-picker';



const UploadImage = ({imageSource,setSelectedImage}) => {
  // const [imageSource, setSelectedImage] = useState([]);
  


  const HandleGallary= async()=>{
    
      const options = {
        mediaType: 'photo',
        selectionLimit: 50,
      };
  
      launchImageLibrary(options, (response) => {
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.error) {
          console.log('Image picker error: ', response.error);
        } else {
          
          let selectedUris = response.assets.map((asset) => asset.uri);
          setSelectedImage(selectedUris);
        }
      });
    
  }
  return (
    <View>
      <TouchableOpacity style={{height:40, backgroundColor:"#4A47B0",justifyContent:"center",alignItems:"center"}} onPress={HandleGallary}><Text style={{color:"white"}}>Select Image From Gallary</Text></TouchableOpacity>
    </View>
  )
}

export default UploadImage
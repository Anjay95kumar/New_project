import React, { useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, Modal, StyleSheet,Dimensions } from 'react-native';
import { useSelector } from 'react-redux';



const DeviceHeight = Dimensions.get('window').height;
const DeviceWidth = Dimensions.get('window').width;

const ShowGallary = ({ navigation }) => {
  const ImageData = useSelector((state) => state.imageData.data);
  const [selectedImage, setSelectedImage] = useState(null);

  const openImageModal = (item) => {
    setSelectedImage(item);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  return (
    <View style={{ padding: 10, alignSelf: 'center' }}>
      <Text style={{ fontSize: 30, alignSelf: 'center', padding: 5, color: 'black' }}>Gallery Page</Text>

      <FlatList
        data={ImageData}
        renderItem={({ item }) => (
          <TouchableOpacity style={{ margin: 8 }} onPress={() => openImageModal(item)}>
            <Image source={{ uri: item }} style={{ height: DeviceHeight/8,width: DeviceWidth/3.6,}} />
          </TouchableOpacity>
        )}
        numColumns={3}
        keyExtractor={(item) => item.id}
      />

      {selectedImage && (
        <Modal transparent={true} animationType="slide" visible={selectedImage !== null}>
          <View style={styles.modalContainer}>
            <Image source={{ uri: selectedImage }} style={styles.modalImage} />
            <TouchableOpacity onPress={closeImageModal} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
  },
  modalImage: {
    width: '80%',
    height: '80%',
    resizeMode: 'contain',
  },
  closeButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  closeButtonText: {
    fontSize: 16,
    color: 'black',
  },
});

export default ShowGallary;

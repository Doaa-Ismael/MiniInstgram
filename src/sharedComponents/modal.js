import React, {useState, useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {
  Button,
  Layout,
  Modal as UIKittenModal,
  Text,
} from '@ui-kitten/components';

const styles = StyleSheet.create({
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.65)',
  },
  container: {
    backgroundColor: 'white',
    width: 250,
    height: 150,
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderRadius: 8,
  },
  message: {
    fontSize: 14,
  },
});

const Modal = ({showModal, message, onModalClose}) => {
  const [modalVisible, setModalVisible] = useState(showModal);

  useEffect(() => {
    if (modalVisible !== showModal) setModalVisible(showModal);
  }, [showModal]);

  const renderModalElement = () => (
    <Layout style={styles.container}>
      <Text style={styles.message}>{message}</Text>
      <Button size={'small'} onPress={() => toggleModal()}>
        Ok
      </Button>
    </Layout>
  );
  const toggleModal = () => {
    setModalVisible(!modalVisible);
    onModalClose();
  };

  return (
    <UIKittenModal
      backdropStyle={styles.backdrop}
      onBackdropPress={toggleModal}
      visible={modalVisible}>
      {renderModalElement()}
    </UIKittenModal>
  );
};

export default Modal;

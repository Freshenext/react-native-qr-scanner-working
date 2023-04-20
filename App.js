/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-reanimated';

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
} from 'react-native';

import { useCameraDevices, Camera } from "react-native-vision-camera";
import { useScanBarcodes, BarcodeFormat } from "vision-camera-code-scanner";

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */

const App: () => Node = () => {

  const devices = useCameraDevices();

  const [frameProcessor, barcodes] = useScanBarcodes([BarcodeFormat.QR_CODE], {
    checkInverted: true,
  });

  console.log(barcodes);


  return (
    <SafeAreaView>
      {devices?.back && (
        <Camera
          device={devices.back}
          isActive
          style={{ width: '100%', height: '100%' }}
          frameProcessor={frameProcessor}
          frameProcessorFps={5}
        />
      )}
    </SafeAreaView>
  );
};

export default App;

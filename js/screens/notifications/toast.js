import Toast from 'react-native-toast-message';

const toastConfig = {
  success: ({ text1, props }) => (
    <View style={{ height: 60, width: '100%', backgroundColor: 'pink' }}>
      <Text>{text1}</Text>
      <Text>{props.guid}</Text>
    </View>
  ),
  error: () => {},
  info: () => {},
  any_custom_type: () => {}
};

function App(props) {
  return (
    <>
      {/* ... */}
      <Toast config={toastConfig} ref={(ref) => Toast.setRef(ref)} />
    </>
  );
}

export default App;
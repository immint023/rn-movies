import { ViewProps, View, SafeAreaView } from 'react-native';
import React, { FC } from 'react';

type Props = ViewProps & { isSafe?: boolean };
const CenterView: FC<Props> = ({ style, children, isSafe, ...props }) => {
  return isSafe ? (
    <SafeAreaView style={[{ flex: 1, justifyContent: 'center', alignItems: 'center' }, style]} {...props}>
      {children}
    </SafeAreaView>
  ) : (
    <View style={[{ flex: 1, justifyContent: 'center', alignItems: 'center' }, style]} {...props}>
      {children}
    </View>
  );
};

CenterView.defaultProps = {
  isSafe: false
};

export default CenterView;

import { useNavigation } from '@react-navigation/native';

export const useHandleFn = () => {
  const navigation = useNavigation();

  const handlePurchase = () => {
    navigation.navigate('Login');
  };

  return handlePurchase;
};

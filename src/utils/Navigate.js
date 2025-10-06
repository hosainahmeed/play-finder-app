import { useNavigation } from '@react-navigation/native';

const Navigate = () => {
  const navigate = useNavigation();
  return navigate.navigate;
};
export const Navigation = () => {
  const navigate = useNavigation();
  return navigate;
};
export default Navigate;

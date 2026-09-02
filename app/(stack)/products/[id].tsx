import { products } from '@store/products.store';
import { Redirect, useLocalSearchParams } from 'expo-router';
import { Text, View } from 'react-native';
const ProductScreen = () => {
    const { id } = UseLocalSearchParams();

    const product = products.find((p) => p.id == id);
    console.log({id});
    if (!product) {
        return <Redirect href="/" />;
    }

    return (
        <View className="px-5 mr-2">
            <Text className="font-work-black text-2x1">{product.title}</text>
            <Text className="">{product.description}</Text>
            <Text className="font-work-black">{product.price}</Text>
        </View>

    );
};
export default ProductScreen;
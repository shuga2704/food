import {
  Text,
  View,
  SafeAreaView,
  Image,
  StatusBar,
  FlatList,
} from 'react-native'

import { EthPrice } from './SubInfo'

import { COLORS, SIZES, SHADOWS, FONTS, assets } from '../constants'

const DetailsBid = ({ bid }) => {
  return (
    <View
      style={{
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: SIZES.base,
        paddingHorizontal: SIZES.base * 2,
      }}
    >
      <Image
        source={bid.image}
        resizeMode="contain"
        style={{
          width: 48,
          height: 48,
        }}
      />

      <View>
        <Text
          style={{
            fontFamily: FONTS.semiBold,
            fontSize: SIZES.small,
            color: COLORS.primary,
          }}
        >
          Bid placed by {bid.name}
        </Text>

        <Text
          style={{
            fontFamily: FONTS.regular,
            fontSize: SIZES.small - 2,
            color: COLORS.secondary,
            marginTop: 3,
          }}
        >
          {bid.date}
        </Text>
      </View>

      <EthPrice price={bid.price} />
    </View>
  )
}

export default DetailsBid
